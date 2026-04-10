type Step = {
  number: number;
  title: string;
  description: string;
  code?: string;
  tip?: string;
};

const steps: Step[] = [
  {
    number: 1,
    title: "Install VS Code",
    description:
      "Download and install Visual Studio Code from the official website. It's free and works on Windows, Mac, and Linux.",
    tip: "Download the Stable build — not Insiders — for the most reliable experience.",
  },
  {
    number: 2,
    title: "Install Claude Code extension",
    description:
      "Open VS Code, go to the Extensions panel (Ctrl+Shift+X), search for 'Claude Code' by Anthropic, and click Install.",
    tip: "Make sure you install the official extension by Anthropic, not third-party ones.",
  },
  {
    number: 3,
    title: "Authenticate with Anthropic",
    description:
      "After installing, click the Claude icon in the sidebar. Sign in with your Anthropic account or create one at claude.ai. You'll need an API key for Claude Code.",
    code: "# Or authenticate via the CLI:\nnpx @anthropic-ai/claude-code auth",
  },
  {
    number: 4,
    title: "Open a project folder",
    description:
      "Use File → Open Folder to open any project. Claude Code works best when it can see your full codebase context.",
    tip: "Start with a small project — 10-50 files — while learning.",
  },
  {
    number: 5,
    title: "Start your first conversation",
    description:
      "Press Ctrl+Shift+P and type 'Claude Code' to open the chat, or use the keyboard shortcut. Ask Claude to explain, edit, or create code.",
    code: '# Example prompts to try:\n"Explain what this file does"\n"Fix the bug on line 23"\n"Write a function that sorts this list by date"',
  },
  {
    number: 6,
    title: "Use slash commands",
    description:
      "Type / in the chat to see all available commands. These are shortcuts for common tasks like running tests, committing code, or reviewing changes.",
    code: "/help         - See all commands\n/commit       - Commit staged changes with AI message\n/review       - Review recent changes\n/test         - Run and debug tests",
  },
  {
    number: 7,
    title: "Learn keyboard shortcuts",
    description: "Speed up your workflow with these essential shortcuts.",
    code: "Ctrl+Shift+P  → Open command palette\nCtrl+L        → Open Claude chat\nCtrl+K        → Inline edit (select code first)\nEsc           → Cancel current action",
    tip: "Inline edit (Ctrl+K) is the fastest way to refactor small pieces of code.",
  },
];

export default function StepGuide() {
  return (
    <div className="space-y-6">
      {steps.map((step) => (
        <div
          key={step.number}
          className="bg-white rounded-xl border border-gray-200 p-6 flex gap-4"
        >
          <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
            {step.number}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
            <p className="text-sm text-gray-600 mb-3 leading-relaxed">
              {step.description}
            </p>
            {step.code && (
              <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 text-xs overflow-x-auto font-mono leading-relaxed whitespace-pre">
                {step.code}
              </pre>
            )}
            {step.tip && (
              <div className="mt-3 flex items-start gap-2 text-sm text-amber-800 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                <span className="flex-shrink-0">💡</span>
                <span>{step.tip}</span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
