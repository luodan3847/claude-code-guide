type NewsItem = {
  title: string;
  summary: string;
  source: "github" | "hackernews" | "reddit" | "anthropic" | "bilibili";
  url: string;
  relevance: "beginner" | "intermediate" | "advanced";
};

const sourceConfig: Record<
  NewsItem["source"],
  { label: string; color: string }
> = {
  github: { label: "GitHub", color: "bg-gray-800 text-white" },
  hackernews: { label: "Hacker News", color: "bg-orange-500 text-white" },
  reddit: { label: "Reddit", color: "bg-red-500 text-white" },
  anthropic: { label: "Anthropic", color: "bg-blue-600 text-white" },
  bilibili: { label: "Bilibili", color: "bg-pink-500 text-white" },
};

const relevanceConfig: Record<
  NewsItem["relevance"],
  { label: string; color: string }
> = {
  beginner: { label: "Beginner", color: "bg-green-100 text-green-700" },
  intermediate: { label: "Intermediate", color: "bg-yellow-100 text-yellow-700" },
  advanced: { label: "Advanced", color: "bg-red-100 text-red-700" },
};

export default function NewsCard({ item }: { item: NewsItem }) {
  const src = sourceConfig[item.source] ?? { label: item.source, color: "bg-gray-500 text-white" };
  const rel = relevanceConfig[item.relevance] ?? { label: item.relevance, color: "bg-gray-100 text-gray-600" };

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white rounded-xl border border-gray-200 p-5 hover:shadow-md hover:border-blue-300 transition-all group"
    >
      <div className="flex items-center gap-2 mb-3">
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${src.color}`}>
          {src.label}
        </span>
        <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${rel.color}`}>
          {rel.label}
        </span>
      </div>
      <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
        {item.title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{item.summary}</p>
      <div className="mt-3 text-xs text-blue-500 font-medium group-hover:underline">
        Read more →
      </div>
    </a>
  );
}
