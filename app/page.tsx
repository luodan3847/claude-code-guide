import Link from "next/link";
import DailyFeed from "./components/DailyFeed";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
          Updated daily at 6AM UTC · Powered by Claude API
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
          Master Claude Code + VS Code
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          The daily-updated guide for developers using Claude Code inside VS Code.
          Step-by-step setup, latest news from GitHub, Hacker News, Reddit, and Bilibili —
          all summarized by AI so you never miss what matters.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-7">
          <Link
            href="/guide"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Start Setup Guide →
          </Link>
          <a
            href="#daily-feed"
            className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-xl border border-gray-200 transition-colors"
          >
            Today&apos;s News Feed
          </a>
        </div>
      </div>

      {/* Quick Start Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
        {[
          {
            icon: "🚀",
            title: "Quick Install",
            desc: "Install Claude Code in VS Code in under 2 minutes",
            href: "/guide",
          },
          {
            icon: "⌨️",
            title: "Key Shortcuts",
            desc: "Ctrl+L for chat, Ctrl+K for inline edits, / for commands",
            href: "/guide#shortcuts",
          },
          {
            icon: "🤖",
            title: "Slash Commands",
            desc: "/commit, /review, /test — automate your workflow",
            href: "/guide#commands",
          },
        ].map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md hover:border-blue-300 transition-all group"
          >
            <div className="text-2xl mb-2">{card.icon}</div>
            <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
              {card.title}
            </h3>
            <p className="text-sm text-gray-500">{card.desc}</p>
          </Link>
        ))}
      </div>

      {/* Daily Feed */}
      <div id="daily-feed">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Today&apos;s Feed</h2>
          <span className="text-sm text-gray-400">GitHub · HN · Reddit · Bilibili · Anthropic</span>
        </div>
        <DailyFeed />
      </div>
    </div>
  );
}
