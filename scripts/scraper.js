/**
 * scraper.js — Daily news scraper for ClaudeCode.guide
 *
 * Sources:
 *   1. GitHub Releases (anthropics/claude-code)
 *   2. Hacker News Algolia search API
 *   3. Reddit r/ClaudeAI + r/AIAssistants
 *   4. Anthropic blog (cheerio HTML scrape)
 *   5. Bilibili search API (no auth required for metadata)
 *
 * Output: data/raw-YYYY-MM-DD.json
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

const TODAY = new Date().toISOString().slice(0, 10);
const OUTPUT_FILE = path.join(__dirname, "..", "data", `raw-${TODAY}.json`);

// ─── Helpers ─────────────────────────────────────────────────────────────────

function fetchJSON(url, headers = {}) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        "User-Agent": "ClaudeCodeGuide-Scraper/1.0",
        ...headers,
      },
    };
    https
      .get(url, options, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject(new Error(`JSON parse error for ${url}: ${e.message}`));
          }
        });
      })
      .on("error", reject);
  });
}

function fetchHTML(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { "User-Agent": "ClaudeCodeGuide-Scraper/1.0" } }, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      })
      .on("error", reject);
  });
}

function sleep(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

// ─── Source 1: GitHub Releases ───────────────────────────────────────────────

async function scrapeGitHub() {
  console.log("[GitHub] Fetching releases...");
  const headers = {};
  if (process.env.GITHUB_TOKEN) {
    headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
  }

  const releases = await fetchJSON(
    "https://api.github.com/repos/anthropics/claude-code/releases?per_page=5",
    headers
  );

  return releases.slice(0, 5).map((r) => ({
    source: "github",
    title: `Claude Code ${r.tag_name} Released`,
    content: (r.body || "").slice(0, 800),
    url: r.html_url,
    date: r.published_at,
  }));
}

// ─── Source 2: Hacker News ───────────────────────────────────────────────────

async function scrapeHackerNews() {
  console.log("[HN] Fetching discussions...");
  const queries = ["claude code", "claude anthropic vscode", "AI coding assistant"];
  const results = [];

  for (const q of queries) {
    const url = `https://hn.algolia.com/api/v1/search?query=${encodeURIComponent(q)}&tags=story&numericFilters=created_at_i>${Math.floor(Date.now() / 1000) - 7 * 86400}&hitsPerPage=5`;
    const data = await fetchJSON(url);
    for (const hit of (data.hits || []).slice(0, 3)) {
      results.push({
        source: "hackernews",
        title: hit.title,
        content: hit.story_text || hit.comment_text || "",
        url: hit.url || `https://news.ycombinator.com/item?id=${hit.objectID}`,
        date: hit.created_at,
        points: hit.points,
      });
    }
    await sleep(300);
  }

  // deduplicate by URL
  const seen = new Set();
  return results.filter((r) => {
    if (seen.has(r.url)) return false;
    seen.add(r.url);
    return true;
  });
}

// ─── Source 3: Reddit ────────────────────────────────────────────────────────

async function scrapeReddit() {
  console.log("[Reddit] Fetching posts...");
  const subreddits = ["ClaudeAI", "AIAssistants", "LocalLLaMA"];
  const results = [];

  for (const sub of subreddits) {
    const url = `https://www.reddit.com/r/${sub}/hot.json?limit=10`;
    const data = await fetchJSON(url);
    const posts = data?.data?.children || [];

    for (const post of posts) {
      const p = post.data;
      // only include posts mentioning claude code or AI coding
      const text = `${p.title} ${p.selftext}`.toLowerCase();
      if (
        text.includes("claude") ||
        text.includes("ai cod") ||
        text.includes("vscode") ||
        text.includes("copilot")
      ) {
        results.push({
          source: "reddit",
          title: p.title,
          content: (p.selftext || "").slice(0, 500),
          url: `https://reddit.com${p.permalink}`,
          date: new Date(p.created_utc * 1000).toISOString(),
          upvotes: p.ups,
        });
      }
    }
    await sleep(500); // be polite to Reddit
  }

  return results.slice(0, 10);
}

// ─── Source 4: Anthropic Blog ────────────────────────────────────────────────

async function scrapeAnthropicBlog() {
  console.log("[Anthropic] Scraping blog...");
  const html = await fetchHTML("https://www.anthropic.com/news");

  // Extract article titles and links using simple regex (no cheerio needed for this structure)
  const results = [];
  const articlePattern = /href="(\/news\/[^"]+)"[^>]*>[\s\S]*?<[^>]*>([^<]{10,120})</g;
  let match;

  while ((match = articlePattern.exec(html)) !== null) {
    const [, href, title] = match;
    const cleanTitle = title.trim().replace(/\s+/g, " ");
    if (cleanTitle.length > 15 && !results.some((r) => r.url.includes(href))) {
      results.push({
        source: "anthropic",
        title: cleanTitle,
        content: "",
        url: `https://www.anthropic.com${href}`,
        date: TODAY,
      });
    }
    if (results.length >= 5) break;
  }

  return results;
}

// ─── Source 5: Bilibili ──────────────────────────────────────────────────────

async function scrapeBilibili() {
  console.log("[Bilibili] Searching videos...");
  const queries = ["Claude Code", "AI编程助手", "Anthropic"];
  const results = [];

  for (const keyword of queries) {
    const url = `https://api.bilibili.com/x/web-interface/search/type?search_type=video&keyword=${encodeURIComponent(keyword)}&page=1&page_size=5`;
    try {
      const data = await fetchJSON(url);
      const videos = data?.data?.result || [];

      for (const v of videos.slice(0, 3)) {
        results.push({
          source: "bilibili",
          title: v.title.replace(/<[^>]+>/g, ""), // strip HTML tags Bilibili sometimes includes
          content: v.description || "",
          url: `https://www.bilibili.com/video/${v.bvid}`,
          date: new Date(v.pubdate * 1000).toISOString(),
          views: v.play,
        });
      }
    } catch (e) {
      console.warn(`[Bilibili] Failed for "${keyword}": ${e.message}`);
    }
    await sleep(500);
  }

  // deduplicate
  const seen = new Set();
  return results.filter((r) => {
    if (seen.has(r.url)) return false;
    seen.add(r.url);
    return true;
  });
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log(`\n=== ClaudeCode.guide Scraper — ${TODAY} ===\n`);

  const [github, hn, reddit, anthropic, bilibili] = await Promise.allSettled([
    scrapeGitHub(),
    scrapeHackerNews(),
    scrapeReddit(),
    scrapeAnthropicBlog(),
    scrapeBilibili(),
  ]);

  const allItems = [
    ...(github.status === "fulfilled" ? github.value : []),
    ...(hn.status === "fulfilled" ? hn.value : []),
    ...(reddit.status === "fulfilled" ? reddit.value : []),
    ...(anthropic.status === "fulfilled" ? anthropic.value : []),
    ...(bilibili.status === "fulfilled" ? bilibili.value : []),
  ];

  // Log any failures
  [github, hn, reddit, anthropic, bilibili].forEach((r, i) => {
    if (r.status === "rejected") {
      console.warn(`Source ${i} failed: ${r.reason?.message}`);
    }
  });

  console.log(`\nTotal items scraped: ${allItems.length}`);

  // Ensure data directory exists
  const dataDir = path.join(__dirname, "..", "data");
  if (!fs.existsSync(dataDir)) fs.mkdirSync(dataDir, { recursive: true });

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify({ date: TODAY, items: allItems }, null, 2));
  console.log(`Saved to: ${OUTPUT_FILE}`);
}

main().catch((err) => {
  console.error("Scraper failed:", err);
  process.exit(1);
});
