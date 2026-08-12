import { createFileRoute } from "@tanstack/react-router";
import caseStudyOne from "@/assets/case-study-01.jpg";
import caseStudyTwo from "@/assets/case-study-02.jpg";
import caseStudyThree from "@/assets/case-study-03.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Perham Studio Design Operations | Website Designer" },
      {
        name: "description",
        content:
          "High-fidelity website design and complex digital systems from Perham, Minnesota. Call 218-298-4503.",
      },
      {
        property: "og:title",
        content: "Perham Studio Design Operations | Website Designer",
      },
      {
        property: "og:description",
        content:
          "High-fidelity website design and complex digital systems from Perham, Minnesota. Call 218-298-4503.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const CAPABILITIES = [
  {
    id: "001",
    name: "Architectural Mapping",
    scope: "Information Systems",
    depth: "L4",
    stack: ["Graph", "Topology", "Zod"],
  },
  {
    id: "002",
    name: "Render Pipeline Engineering",
    scope: "Performance",
    depth: "L5",
    stack: ["WASM", "Rust", "SIMD"],
  },
  {
    id: "003",
    name: "Typographic Systems",
    scope: "Brand Surface",
    depth: "L3",
    stack: ["Variable", "Optical", "Metrics"],
  },
  {
    id: "004",
    name: "State Machine Modeling",
    scope: "Logic Layer",
    depth: "L5",
    stack: ["XState", "Actors", "Guards"],
  },
  {
    id: "005",
    name: "Data Visualization",
    scope: "Interpretation",
    depth: "L4",
    stack: ["D3", "Canvas", "GPU"],
  },
  {
    id: "006",
    name: "Edge Deployment Topology",
    scope: "Infrastructure",
    depth: "L4",
    stack: ["Workers", "KV", "Cache"],
  },
  {
    id: "007",
    name: "Accessibility Auditing",
    scope: "Compliance",
    depth: "L3",
    stack: ["ARIA", "AA/AAA", "SR"],
  },
  {
    id: "008",
    name: "Motion Choreography",
    scope: "Interaction",
    depth: "L4",
    stack: ["Spring", "FLIP", "Scroll"],
  },
  {
    id: "009",
    name: "Search Infrastructure",
    scope: "Discovery",
    depth: "L3",
    stack: ["Schema", "Crawl", "Index"],
  },
];

const PHASES = [
  {
    id: "PH-01",
    label: "Survey",
    detail:
      "Stakeholder extraction, competitive teardown, and constraint mapping. Output is a signed technical brief.",
    span: "02 WK",
  },
  {
    id: "PH-02",
    label: "Schematic",
    detail:
      "Wireframe topology, route graph, and content model. Every screen is derived, never invented.",
    span: "03 WK",
  },
  {
    id: "PH-03",
    label: "Fabrication",
    detail:
      "Component construction against a locked token system. Continuous performance budgeting.",
    span: "05 WK",
  },
  {
    id: "PH-04",
    label: "Commission",
    detail:
      "Load testing, accessibility certification, edge deployment, and operator handoff documentation.",
    span: "02 WK",
  },
];

const METRICS = [
  { value: "142", unit: "SYS", label: "Systems Shipped" },
  { value: "99.98", unit: "%", label: "Edge Uptime" },
  { value: "41", unit: "MS", label: "Median TTFB" },
  { value: "11", unit: "YR", label: "Operating Since 2015" },
];

const TICKER = [
  "DESIGN SYSTEMS",
  "PERFORMANCE BUDGETS",
  "STATE MACHINES",
  "EDGE RENDERING",
  "TYPOGRAPHIC LOGIC",
  "DATA VISUALIZATION",
  "ACCESSIBILITY AA",
  "PERHAM MINNESOTA",
];

function Crosshair({ className }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute size-3 ${className ?? ""}`}>
      <div className="absolute top-1/2 left-0 h-[1px] w-full bg-electric" />
      <div className="absolute left-1/2 top-0 h-full w-[1px] bg-electric" />
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-canvas font-space text-ink selection:bg-electric selection:text-ink">
      {/* STATUS BAR */}
      <div className="fixed top-0 left-0 z-[60] flex h-7 w-full items-center justify-between border-b border-ink/10 bg-ink px-4 font-mono-tech text-[10px] tracking-widest text-canvas lg:px-8">
        <div className="flex items-center gap-3">
          <span className="size-1.5 animate-pulse-dot rounded-full bg-electric" />
          <span className="text-electric">STUDIO ONLINE</span>
          <span className="hidden text-canvas/40 sm:inline">
            / ACCEPTING Q3 ENGAGEMENTS
          </span>
        </div>
        <div className="flex items-center gap-4 text-canvas/50">
          <span className="hidden md:inline">46.5941°N 95.5714°W</span>
          <span className="hidden lg:inline">CDT / UTC-5</span>
          <a href="tel:2182984503" className="text-canvas hover:text-electric">
            +1 218 298 4503
          </a>
        </div>
      </div>

      {/* NAV */}
      <nav className="fixed top-7 left-0 z-50 flex h-16 w-full items-center justify-between border-b border-ink/10 bg-canvas/85 px-4 backdrop-blur-md lg:px-8">
        <div className="flex items-baseline gap-3">
          <div className="font-syncopate text-lg font-bold tracking-tighter">
            PERHAM.STD
          </div>
          <span className="hidden font-mono-tech text-[10px] text-ink/40 sm:inline">
            [DESIGN·OPERATIONS]
          </span>
        </div>
        <div className="hidden items-center gap-8 font-mono-tech text-[11px] font-medium uppercase tracking-widest md:flex">
          {[
            ["01", "Index", "#projects"],
            ["02", "Matrix", "#matrix"],
            ["03", "Protocol", "#protocol"],
            ["04", "Contact", "#contact"],
          ].map(([n, label, href]) => (
            <a
              key={n}
              href={href}
              className="group flex items-baseline gap-1.5 transition-colors hover:text-electric"
            >
              <span className="text-ink/30 group-hover:text-electric">{n}</span>
              <span>{label}</span>
            </a>
          ))}
          <a
            href="tel:2182984503"
            className="border border-ink px-4 py-2 text-[10px] font-bold transition-colors hover:bg-ink hover:text-canvas"
          >
            START A BUILD
          </a>
        </div>
      </nav>

      {/* SIDE RAILS */}
      <div className="pointer-events-none fixed top-0 left-0 z-40 hidden h-full w-8 border-r border-ink/10 xl:block">
        <div className="absolute bottom-8 left-1/2 origin-center -translate-x-1/2 -rotate-90 whitespace-nowrap font-mono-tech text-[10px] tracking-[0.4em] text-ink/30">
          PERHAM · MINNESOTA · 56573
        </div>
      </div>
      <div className="pointer-events-none fixed top-0 right-0 z-40 hidden h-full w-8 border-l border-ink/10 xl:block">
        <div className="absolute bottom-8 left-1/2 origin-center -translate-x-1/2 rotate-90 whitespace-nowrap font-mono-tech text-[10px] tracking-[0.4em] text-ink/30">
          REV 04 · BUILD 2026.08
        </div>
      </div>

      <main className="xl:px-8">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-ink/10 blueprint px-4 pt-32 pb-12 lg:px-8">
          <Crosshair className="top-24 left-6" />
          <Crosshair className="bottom-6 right-6" />
          <div className="mx-auto max-w-[1500px]">
            <div className="grid grid-cols-12 gap-x-4 gap-y-8">
              <div className="col-span-12 flex items-center justify-between border-y border-ink/15 py-2 font-mono-tech text-[10px] uppercase tracking-widest text-ink/50">
                <span>DOC / 2026-PERHAM-STD-001</span>
                <span className="hidden sm:inline">
                  CLASSIFICATION / OPEN PORTFOLIO
                </span>
                <span>SHEET 01 OF 04</span>
              </div>

              <div className="col-span-12 lg:col-span-8">
                <div className="mb-6 flex items-center gap-3 font-mono-tech text-[10px] uppercase tracking-[0.3em] text-electric">
                  <span className="h-[1px] w-8 bg-electric" />
                  Website Designer / Systems Engineer
                </div>
                <h1 className="mb-8 font-syncopate text-[clamp(2.4rem,6.4vw,5.6rem)] font-bold leading-[0.92] tracking-tighter">
                  ENGINEERING <br />
                  <span className="relative inline-block text-electric">
                    DIGITAL
                    <span className="absolute inset-0 scanlines mix-blend-multiply" />
                  </span>{" "}
                  <br />
                  COMPLEXITY.
                </h1>
                <div className="grid max-w-3xl grid-cols-1 gap-6 border-t border-ink/15 pt-6 sm:grid-cols-2">
                  <p className="text-base leading-relaxed text-ink/70">
                    Based in Perham, Minnesota. I build high-fidelity logic
                    systems disguised as websites — every layout derived from a
                    documented constraint set, never a template.
                  </p>
                  <dl className="space-y-2 font-mono-tech text-[11px] uppercase">
                    {[
                      ["Discipline", "Design + Frontend Arch"],
                      ["Engagement", "Retainer / Fixed Scope"],
                      ["Availability", "2 slots — Q3 2026"],
                      ["Response", "Under 12 hours"],
                    ].map(([k, v]) => (
                      <div
                        key={k}
                        className="flex justify-between gap-4 border-b border-dashed border-ink/15 pb-1"
                      >
                        <dt className="text-ink/40">{k}</dt>
                        <dd className="text-right font-medium">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </div>

              {/* SPEC PANEL */}
              <aside className="col-span-12 lg:col-span-4">
                <div className="border border-ink/15 bg-surface">
                  <div className="flex items-center justify-between border-b border-ink/15 px-4 py-2 font-mono-tech text-[10px] uppercase tracking-widest">
                    <span className="text-electric">LIVE READOUT</span>
                    <span className="text-ink/40">SYS.STATUS</span>
                  </div>
                  <div className="divide-y divide-ink/10">
                    {[
                      ["LIGHTHOUSE", "100 / 100 / 100 / 100", "98%"],
                      ["BUNDLE", "42.1 KB GZIP", "71%"],
                      ["CLS", "0.001", "99%"],
                      ["A11Y", "WCAG 2.2 AA", "94%"],
                    ].map(([k, v, w]) => (
                      <div key={k} className="px-4 py-3">
                        <div className="flex items-baseline justify-between font-mono-tech text-[11px]">
                          <span className="text-ink/40">{k}</span>
                          <span className="font-bold">{v}</span>
                        </div>
                        <div className="mt-2 h-[3px] w-full bg-ink/10">
                          <div
                            className="h-full bg-electric"
                            style={{ width: w }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="hatch border-t border-ink/15 px-4 py-3 font-mono-tech text-[10px] uppercase tracking-widest text-ink/50">
                    MEASURED ON LAST 12 BUILDS
                  </div>
                </div>
              </aside>

              {/* METRICS ROW */}
              <div className="col-span-12 grid grid-cols-2 divide-ink/15 border-y border-ink/15 lg:grid-cols-4 lg:divide-x">
                {METRICS.map((m, i) => (
                  <div key={m.label} className="px-4 py-6 first:pl-0">
                    <div className="mb-2 font-mono-tech text-[10px] text-ink/30">
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-syncopate text-3xl font-bold tracking-tighter lg:text-4xl">
                        {m.value}
                      </span>
                      <span className="font-mono-tech text-xs text-electric">
                        {m.unit}
                      </span>
                    </div>
                    <div className="mt-2 font-mono-tech text-[10px] uppercase tracking-widest text-ink/50">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TICKER */}
        <section className="overflow-hidden border-b border-ink/10 bg-ink py-3">
          <div className="flex w-max animate-marquee">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center">
                {TICKER.map((t) => (
                  <span
                    key={`${dup}-${t}`}
                    className="flex items-center font-mono-tech text-[11px] uppercase tracking-[0.3em] text-canvas/70"
                  >
                    <span className="px-6">{t}</span>
                    <span className="text-electric">✳</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="border-b border-ink/10 px-4 py-20 lg:px-8"
        >
          <div className="mx-auto max-w-[1500px]">
            <header className="mb-12 grid grid-cols-12 items-end gap-4 border-b border-ink/15 pb-4">
              <div className="col-span-12 lg:col-span-8">
                <div className="mb-3 font-mono-tech text-[10px] uppercase tracking-[0.3em] text-electric">
                  02 / SELECTED INDEX
                </div>
                <h2 className="font-syncopate text-3xl font-bold tracking-tighter lg:text-5xl">
                  COMPLEX PROJECTS
                </h2>
              </div>
              <div className="col-span-12 font-mono-tech text-[11px] text-ink/50 lg:col-span-4 lg:text-right">
                03 OF 142 RECORDS DISPLAYED
              </div>
            </header>

            <div className="grid grid-cols-12 gap-4">
              {/* PRIMARY */}
              <article className="group col-span-12 cursor-pointer lg:col-span-7">
                <div className="relative aspect-16/10 overflow-hidden border border-ink/15 bg-ink/5">
                  <img
                    src={caseStudyOne}
                    alt="System Genesis — complex dark UI dashboard with cyan data visualizations"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 blueprint-invert opacity-40 mix-blend-overlay" />
                  <div className="absolute top-0 left-0 flex items-center gap-2 bg-ink px-3 py-1.5 font-mono-tech text-[10px] tracking-widest text-electric">
                    CASE / 001
                  </div>
                  <div className="absolute bottom-0 right-0 bg-electric px-3 py-1.5 font-mono-tech text-[10px] font-bold tracking-widest text-ink opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    OPEN DOSSIER →
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-12 gap-4 border-t border-ink/15 pt-4">
                  <div className="col-span-12 sm:col-span-7">
                    <h3 className="text-2xl font-bold uppercase tracking-tight">
                      System Genesis
                    </h3>
                    <p className="text-sm text-ink/50">
                      Custom ERP &amp; Logic Engine — 340 screens, 1 token set
                    </p>
                  </div>
                  <dl className="col-span-12 grid grid-cols-3 gap-2 font-mono-tech text-[10px] uppercase sm:col-span-5">
                    {[
                      ["YEAR", "2024"],
                      ["SCOPE", "L5"],
                      ["STACK", "TS/RS"],
                    ].map(([k, v]) => (
                      <div key={k} className="border border-ink/15 p-2">
                        <dt className="text-ink/40">{k}</dt>
                        <dd className="mt-1 font-bold">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </article>

              {/* RIGHT STACK */}
              <div className="col-span-12 flex flex-col gap-4 lg:col-span-5">
                <div className="relative flex-1 border border-ink/15 bg-surface p-6">
                  <Crosshair className="top-2 right-2" />
                  <div className="mb-8 flex justify-between font-mono-tech text-[10px] uppercase tracking-widest">
                    <span className="font-bold text-electric">
                      Methodology Note
                    </span>
                    <span className="text-ink/30">002 / 009</span>
                  </div>
                  <h4 className="mb-3 text-2xl font-bold leading-tight">
                    We solve for n+1 scalability
                  </h4>
                  <p className="mb-6 text-sm leading-relaxed text-ink/60">
                    Every pixel is backed by a mathematical framework —
                    modular scale, optical alignment, and a render budget
                    enforced in CI. Complexity is documented, not decorative.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["POST-CSS", "RUST", "WASM", "XSTATE", "EDGE SSR"].map(
                      (t) => (
                        <span
                          key={t}
                          className="border border-ink/15 bg-canvas px-2 py-1 font-mono-tech text-[9px] font-bold tracking-tight"
                        >
                          {t}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <article className="group cursor-pointer">
                    <div className="relative aspect-square overflow-hidden border border-ink/15 bg-ink/5">
                      <img
                        src={caseStudyTwo}
                        alt="Case Study 002 — minimalist architectural render with sharp shadows"
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        loading="lazy"
                      />
                      <div className="absolute top-0 left-0 bg-ink px-2 py-1 font-mono-tech text-[9px] tracking-widest text-electric">
                        CASE / 002
                      </div>
                    </div>
                    <h3 className="mt-3 text-sm font-bold uppercase tracking-tight">
                      Void Atelier
                    </h3>
                    <p className="font-mono-tech text-[10px] text-ink/40">
                      2025 · BRAND SURFACE
                    </p>
                  </article>
                  <article className="group cursor-pointer">
                    <div className="relative aspect-square overflow-hidden border border-ink/15 bg-ink/5">
                      <img
                        src={caseStudyThree}
                        alt="Case Study 003 — macro photograph of a cyan technical blueprint schematic"
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                        loading="lazy"
                        width={1200}
                        height={1200}
                      />
                      <div className="absolute top-0 left-0 bg-ink px-2 py-1 font-mono-tech text-[9px] tracking-widest text-electric">
                        CASE / 003
                      </div>
                    </div>
                    <h3 className="mt-3 text-sm font-bold uppercase tracking-tight">
                      Draft Protocol
                    </h3>
                    <p className="font-mono-tech text-[10px] text-ink/40">
                      2025 · DOC SYSTEM
                    </p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITY MATRIX */}
        <section
          id="matrix"
          className="border-b border-ink/10 bg-surface px-4 py-20 lg:px-8"
        >
          <div className="mx-auto max-w-[1500px]">
            <header className="mb-10 flex flex-col justify-between gap-4 border-b border-ink/15 pb-4 lg:flex-row lg:items-end">
              <div>
                <div className="mb-3 font-mono-tech text-[10px] uppercase tracking-[0.3em] text-electric">
                  03 / CAPABILITY MATRIX
                </div>
                <h2 className="font-syncopate text-3xl font-bold tracking-tighter lg:text-5xl">
                  NINE DISCIPLINES
                </h2>
              </div>
              <p className="max-w-sm font-mono-tech text-[11px] leading-relaxed text-ink/50">
                Each discipline is scored by depth (L1–L5) and mapped to a
                delivery artifact. Nothing ships without a matrix entry.
              </p>
            </header>

            <div className="hidden grid-cols-12 gap-4 border-b border-ink/15 pb-2 font-mono-tech text-[10px] uppercase tracking-widest text-ink/40 lg:grid">
              <span className="col-span-1">ID</span>
              <span className="col-span-4">DISCIPLINE</span>
              <span className="col-span-3">SCOPE</span>
              <span className="col-span-3">TOOLING</span>
              <span className="col-span-1 text-right">DEPTH</span>
            </div>
            <ul className="divide-y divide-ink/10">
              {CAPABILITIES.map((c) => (
                <li
                  key={c.id}
                  className="group grid grid-cols-12 items-center gap-x-4 gap-y-2 py-4 transition-colors hover:bg-canvas"
                >
                  <span className="col-span-2 font-mono-tech text-[11px] text-ink/30 group-hover:text-electric lg:col-span-1">
                    {c.id}
                  </span>
                  <h3 className="col-span-10 text-lg font-bold tracking-tight lg:col-span-4">
                    {c.name}
                  </h3>
                  <span className="col-span-6 font-mono-tech text-[11px] uppercase text-ink/50 lg:col-span-3">
                    {c.scope}
                  </span>
                  <div className="col-span-6 flex flex-wrap gap-1 lg:col-span-3">
                    {c.stack.map((s) => (
                      <span
                        key={s}
                        className="border border-ink/15 px-1.5 py-0.5 font-mono-tech text-[9px] uppercase tracking-tight text-ink/60"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="col-span-12 font-mono-tech text-[11px] font-bold lg:col-span-1 lg:text-right">
                    {c.depth}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROTOCOL */}
        <section
          id="protocol"
          className="relative overflow-hidden border-b border-ink/10 bg-ink px-4 py-20 text-canvas blueprint-invert lg:px-8"
        >
          <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 bg-electric/10 blur-[140px]" />
          <div className="relative mx-auto max-w-[1500px]">
            <header className="mb-12 flex flex-col justify-between gap-4 border-b border-canvas/20 pb-4 lg:flex-row lg:items-end">
              <div>
                <div className="mb-3 font-mono-tech text-[10px] uppercase tracking-[0.3em] text-electric">
                  04 / ENGAGEMENT PROTOCOL
                </div>
                <h2 className="font-syncopate text-3xl font-bold tracking-tighter lg:text-5xl">
                  FOUR PHASES
                </h2>
              </div>
              <span className="font-mono-tech text-[11px] text-canvas/50">
                TYPICAL DURATION / 12 WEEKS
              </span>
            </header>

            <ol className="grid grid-cols-1 gap-px bg-canvas/15 md:grid-cols-2 lg:grid-cols-4">
              {PHASES.map((p) => (
                <li
                  key={p.id}
                  className="group relative bg-ink p-6 transition-colors hover:bg-canvas/5"
                >
                  <div className="mb-6 flex items-center justify-between font-mono-tech text-[10px] tracking-widest">
                    <span className="text-electric">{p.id}</span>
                    <span className="text-canvas/40">{p.span}</span>
                  </div>
                  <h3 className="mb-3 font-syncopate text-xl font-bold tracking-tighter">
                    {p.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-canvas/55">
                    {p.detail}
                  </p>
                  <div className="mt-6 h-[2px] w-full bg-canvas/15">
                    <div className="h-full w-0 bg-electric transition-all duration-700 group-hover:w-full" />
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* FAST TICKER */}
        <section className="overflow-hidden border-b border-ink/10 bg-electric py-2">
          <div className="flex w-max animate-marquee-fast">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span
                    key={`${dup}-${i}`}
                    className="px-6 font-mono-tech text-[11px] font-bold uppercase tracking-[0.3em] text-ink"
                  >
                    CALL 218.298.4503 — PERHAM, MN /
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="relative overflow-hidden blueprint px-4 py-24 lg:px-8"
        >
          <Crosshair className="top-8 left-6" />
          <Crosshair className="bottom-8 right-6" />
          <div className="mx-auto max-w-[1500px]">
            <div className="grid grid-cols-12 items-start gap-8">
              <div className="col-span-12 lg:col-span-7">
                <div className="mb-4 font-mono-tech text-[10px] uppercase tracking-[0.3em] text-electric">
                  05 / TRANSMISSION
                </div>
                <h2 className="mb-8 font-syncopate text-4xl font-bold leading-tight tracking-tighter lg:text-6xl">
                  READY FOR THE <br />
                  <span className="text-electric">DEEP WORK?</span>
                </h2>
                <p className="max-w-md text-base leading-relaxed text-ink/60">
                  Send the constraint set. I'll return a schematic, a fixed
                  scope, and a performance budget within 48 hours — no
                  discovery-call theater.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="tel:2182984503"
                    className="border border-ink bg-ink px-6 py-3 font-mono-tech text-[11px] font-bold uppercase tracking-widest text-canvas transition-colors hover:bg-electric hover:text-ink"
                  >
                    Call 218.298.4503
                  </a>
                  <a
                    href="#projects"
                    className="border border-ink px-6 py-3 font-mono-tech text-[11px] font-bold uppercase tracking-widest transition-colors hover:bg-ink hover:text-canvas"
                  >
                    Review the Index
                  </a>
                </div>
              </div>

              <div className="col-span-12 border border-ink/15 bg-surface lg:col-span-5">
                <div className="hatch flex items-center justify-between border-b border-ink/15 px-4 py-2 font-mono-tech text-[10px] uppercase tracking-widest">
                  <span className="font-bold">CONTACT RECORD</span>
                  <span className="text-ink/40">01 / 01</span>
                </div>
                <dl className="divide-y divide-ink/10">
                  {[
                    ["Direct Line", "218.298.4503", "tel:2182984503"],
                    ["Base of Operations", "Perham, Minnesota", null],
                    ["Coordinates", "46.5941° N, 95.5714° W", null],
                    ["Service Radius", "Fargo · Detroit Lakes · Remote", null],
                    ["Hours", "Mon–Fri / 08:00–18:00 CDT", null],
                  ].map(([k, v, href]) => (
                    <div key={k as string} className="px-4 py-4">
                      <dt className="mb-1 font-mono-tech text-[10px] uppercase tracking-widest text-electric">
                        {k}
                      </dt>
                      <dd className="text-lg font-medium tracking-tight">
                        {href ? (
                          <a
                            href={href as string}
                            className="text-3xl font-bold transition-colors hover:text-electric"
                          >
                            {v}
                          </a>
                        ) : (
                          v
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="border-t border-ink/10 bg-ink px-4 py-14 text-canvas lg:px-8">
          <div className="mx-auto max-w-[1500px]">
            <div className="grid grid-cols-12 gap-8 border-b border-canvas/15 pb-10">
              <div className="col-span-12 lg:col-span-4">
                <div className="font-syncopate text-xl font-bold tracking-tighter">
                  PERHAM.STD
                </div>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-canvas/50">
                  Design operations and frontend architecture for organizations
                  with genuinely complex problems.
                </p>
              </div>
              {[
                ["Index", ["Projects", "Matrix", "Protocol", "Contact"]],
                ["Services", ["Design Systems", "Web Apps", "Performance", "SEO"]],
                ["Region", ["Perham", "Detroit Lakes", "Fergus Falls", "Fargo"]],
              ].map(([title, items]) => (
                <div key={title as string} className="col-span-6 lg:col-span-2">
                  <div className="mb-4 font-mono-tech text-[10px] uppercase tracking-[0.3em] text-electric">
                    {title}
                  </div>
                  <ul className="space-y-2 text-sm text-canvas/60">
                    {(items as string[]).map((i) => (
                      <li key={i}>
                        <a href="#projects" className="hover:text-electric">
                          {i}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="col-span-12 lg:col-span-2">
                <div className="mb-4 font-mono-tech text-[10px] uppercase tracking-[0.3em] text-electric">
                  Direct
                </div>
                <a
                  href="tel:2182984503"
                  className="font-mono-tech text-lg font-bold hover:text-electric"
                >
                  218.298.4503
                </a>
                <p className="mt-2 font-mono-tech text-[10px] text-canvas/40">
                  PERHAM, MN 56573
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-between gap-4 pt-6 font-mono-tech text-[10px] uppercase tracking-[0.25em] text-canvas/40 md:flex-row">
              <span>
                © {new Date().getFullYear()} Perham Studio Design Operations
              </span>
              <span className="hidden lg:inline">
                BUILD 2026.08 · REV 04 · SHEET 04/04
              </span>
              <span className="flex items-center gap-2">
                <span className="size-1.5 animate-pulse-dot rounded-full bg-electric" />
                ALL SYSTEMS NOMINAL
              </span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
