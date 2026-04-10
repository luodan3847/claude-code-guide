import NewsCard from "./NewsCard";
import fs from "fs";
import path from "path";

type NewsItem = {
  title: string;
  summary: string;
  source: "github" | "hackernews" | "reddit" | "anthropic" | "bilibili";
  url: string;
  relevance: "beginner" | "intermediate" | "advanced";
};

type DailyData = {
  date: string;
  highlights: NewsItem[];
  tips_of_the_day: string[];
};

function loadLatestData(): DailyData | null {
  try {
    const filePath = path.join(process.cwd(), "data", "latest.json");
    const raw = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(raw) as DailyData;
  } catch {
    return null;
  }
}

export default function DailyFeed() {
  const data = loadLatestData();

  if (!data) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>No data yet. Run the scraper to populate the feed.</p>
        <code className="block mt-2 text-sm bg-gray-100 rounded px-3 py-1 inline-block">
          node scripts/scraper.js && node scripts/summarizer.js
        </code>
      </div>
    );
  }

  return (
    <section>
      {/* Tips of the Day */}
      {data.tips_of_the_day?.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-8">
          <h2 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
            <span>💡</span> Tips of the Day
          </h2>
          <ul className="space-y-2">
            {data.tips_of_the_day.map((tip, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-blue-900">
                <span className="mt-0.5 text-blue-400 font-bold">{i + 1}.</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* News Grid */}
      <div className="grid gap-4 sm:grid-cols-2">
        {data.highlights.map((item, i) => (
          <NewsCard key={i} item={item} />
        ))}
      </div>

      <p className="mt-6 text-xs text-gray-400 text-center">
        Last updated: {data.date} · Auto-updated daily at 6AM UTC
      </p>
    </section>
  );
}
