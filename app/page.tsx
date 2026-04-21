import Link from "next/link";

const metrics = [
  { value: "Next.js 16", label: "Modern app foundation" },
  { value: "3 Docs", label: "Architecture, product, roadmap" },
  { value: "AI + UX", label: "Workflow and presentation aligned" },
];

const pillars = [
  {
    title: "Workflow design",
    description:
      "The project treats Claude Code as part of a repeatable research and learning system instead of a one-off tool.",
  },
  {
    title: "Professional presentation",
    description:
      "Copy, structure, and interface are shaped so visitors can understand the project quickly and trust its intent.",
  },
  {
    title: "Reusable architecture",
    description:
      "Content, automation, and UI are separated clearly enough to support iteration without turning into a pile of experiments.",
  },
];

const repoSections = [
  {
    name: "app/",
    summary: "Homepage, layout, metadata, and public-facing UI.",
  },
  {
    name: "data/",
    summary: "Structured inputs and source material for the guide.",
  },
  {
    name: "scripts/",
    summary: "Automation and processing logic for repeatable updates.",
  },
  {
    name: "docs/",
    summary: "Short strategic notes that explain how the project is meant to evolve.",
  },
];

const docs = [
  {
    title: "Architecture overview",
    href: "https://github.com/luodan3847/claude-code-guide/blob/main/docs/architecture.md",
    summary: "Defines the interface, content, and automation layers.",
  },
  {
    title: "Product thinking",
    href: "https://github.com/luodan3847/claude-code-guide/blob/main/docs/product-thinking.md",
    summary: "Explains the user problem and why structure matters.",
  },
  {
    title: "Roadmap",
    href: "https://github.com/luodan3847/claude-code-guide/blob/main/docs/roadmap.md",
    summary: "Shows how the repo can mature into a stronger public portfolio project.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,#f4efe4_0%,#f8f5ee_32%,#f3f0e8_55%,#ebe7de_100%)] text-stone-900">
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-10 md:px-10 md:pb-28 md:pt-14">
        <div className="flex flex-col gap-8 rounded-[2rem] border border-stone-300/70 bg-white/82 p-8 shadow-[0_30px_80px_rgba(68,54,39,0.12)] backdrop-blur md:p-12">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
              Claude Code Guide
            </p>
            <Link
              href="https://github.com/luodan3847/claude-code-guide"
              className="rounded-full border border-stone-300 px-4 py-2 text-sm font-medium text-stone-700 transition hover:border-stone-900 hover:text-stone-950"
            >
              View repository
            </Link>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-800/80">
                Applied AI research workflow
              </p>
              <h1 className="mt-5 font-serif text-4xl leading-tight tracking-tight text-stone-950 md:text-6xl">
                A more professional public presentation for AI-assisted research,
                learning, and execution.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">
                This project turns Claude Code into a clearer system for resource
                discovery, structured learning, and practical experimentation. The
                aim is not just to show code, but to show judgment: how AI work can
                be organized, explained, and presented with intent.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="#documentation"
                  className="rounded-full bg-stone-950 px-5 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-800"
                >
                  Explore documentation
                </Link>
                <Link
                  href="#structure"
                  className="rounded-full border border-stone-300 px-5 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-950 hover:text-stone-950"
                >
                  Review project structure
                </Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-stone-950 p-6 text-stone-50 shadow-[0_18px_50px_rgba(28,25,23,0.25)]">
              <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-300">
                Public signal
              </p>
              <p className="mt-4 text-2xl font-semibold tracking-tight">
                Built to communicate clarity, not just capability.
              </p>
              <p className="mt-4 text-sm leading-7 text-stone-300">
                The strongest improvement here is making the repository legible to
                someone seeing it for the first time. That means sharper copy,
                cleaner structure, stronger metadata, and a homepage that reads like
                a finished product.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {metrics.map((item) => (
            <div
              key={item.label}
              className="rounded-[1.5rem] border border-stone-300/70 bg-white/75 p-6 shadow-[0_15px_35px_rgba(68,54,39,0.08)]"
            >
              <p className="text-2xl font-semibold tracking-tight text-stone-950">
                {item.value}
              </p>
              <p className="mt-2 text-sm text-stone-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-stone-300/70 bg-stone-950 text-stone-100">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-18 md:grid-cols-3 md:px-10">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
            >
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-amber-200/80">
                {pillar.title}
              </p>
              <p className="mt-4 text-base leading-7 text-stone-300">
                {pillar.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="structure" className="mx-auto max-w-6xl px-6 py-18 md:px-10 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
              Repository structure
            </p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-stone-950 md:text-4xl">
              Organized like a system, not a sandbox.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-stone-700">
              The repo is split so visitors can quickly see what belongs to the
              interface, what belongs to content, and what belongs to automation.
              That separation makes the project easier to extend and much easier to
              understand from the outside.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {repoSections.map((section) => (
              <article
                key={section.name}
                className="rounded-[1.5rem] border border-stone-300/70 bg-white/80 p-6 shadow-[0_16px_40px_rgba(68,54,39,0.08)]"
              >
                <p className="font-mono text-sm font-semibold text-stone-900">
                  {section.name}
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {section.summary}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="documentation" className="bg-white/60">
        <div className="mx-auto max-w-6xl px-6 py-18 md:px-10 md:py-24">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-stone-500">
              Documentation
            </p>
            <h2 className="mt-4 font-serif text-3xl tracking-tight text-stone-950 md:text-4xl">
              Strategy and implementation notes live alongside the code.
            </h2>
            <p className="mt-5 text-base leading-8 text-stone-700">
              The documentation is short on purpose. Each note explains a key part of
              the project so a new visitor can understand the architecture, product
              logic, and future direction without digging through every file.
            </p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {docs.map((doc) => (
              <article
                key={doc.title}
                className="rounded-[1.5rem] border border-stone-300/70 bg-[#fffdf8] p-6 shadow-[0_16px_40px_rgba(68,54,39,0.06)]"
              >
                <p className="text-lg font-semibold tracking-tight text-stone-950">
                  {doc.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-stone-600">
                  {doc.summary}
                </p>
                <a
                  href={doc.href}
                  className="mt-6 inline-flex text-sm font-medium text-amber-800 transition hover:text-stone-950"
                >
                  Open document
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-18 md:px-10">
        <div className="rounded-[2rem] border border-stone-300/70 bg-[linear-gradient(135deg,#1c1917_0%,#292524_55%,#44403c_100%)] p-8 text-stone-50 shadow-[0_28px_70px_rgba(28,25,23,0.22)] md:p-12">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-stone-300">
            Next step
          </p>
          <h2 className="mt-4 max-w-2xl font-serif text-3xl tracking-tight md:text-4xl">
            A stronger public repo now has a stronger foundation for future features.
          </h2>
          <p className="mt-5 max-w-3xl text-base leading-8 text-stone-300">
            The next layer of improvement is less about adding more tooling and more
            about deepening the workflow: better source ingestion, clearer discovery,
            stronger visual storytelling, and more evidence of how the system works in
            practice.
          </p>
        </div>
      </section>
    </main>
  );
}
