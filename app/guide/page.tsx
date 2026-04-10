import StepGuide from "../components/StepGuide";
import Link from "next/link";

export const metadata = {
  title: "Setup Guide — Claude Code + VS Code",
  description:
    "Complete step-by-step guide to setting up and using Claude Code with VS Code. From installation to advanced workflows.",
};

export default function GuidePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
      {/* Breadcrumb */}
      <Link href="/" className="text-sm text-blue-600 hover:underline mb-6 inline-block">
        ← Back to Daily Feed
      </Link>

      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
          Getting Started with Claude Code + VS Code
        </h1>
        <p className="text-gray-600 leading-relaxed">
          A complete beginner-friendly guide. Follow these steps in order — from
          zero to writing and refactoring code with AI assistance in VS Code.
          Each step includes the exact commands and tips you need.
        </p>

        {/* Prerequisites badge */}
        <div className="mt-5 inline-flex items-center gap-2 bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-lg">
          <span>Prerequisites:</span>
          <span className="font-medium">Internet connection · Anthropic account (free) · ~10 minutes</span>
        </div>
      </div>

      {/* Step Guide */}
      <StepGuide />

      {/* What's Next */}
      <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-7">
        <h2 className="text-xl font-bold text-gray-900 mb-2">What&apos;s next?</h2>
        <p className="text-gray-600 text-sm mb-5">
          You&apos;re set up! Here are the best ways to go deeper:
        </p>
        <ul className="space-y-3 text-sm text-gray-700">
          {[
            {
              text: "Read the official Claude Code docs",
              href: "https://docs.anthropic.com/claude-code",
            },
            {
              text: "Check the GitHub changelog for new features",
              href: "https://github.com/anthropics/claude-code/releases",
            },
            {
              text: "Join the Claude AI subreddit for tips",
              href: "https://reddit.com/r/ClaudeAI",
            },
            {
              text: "Come back tomorrow — today's feed is updated daily",
              href: "/",
            },
          ].map((link) => (
            <li key={link.text}>
              <a
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-2 hover:text-blue-600 transition-colors font-medium"
              >
                <span className="text-blue-500">→</span>
                {link.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
