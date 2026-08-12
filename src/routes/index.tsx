import { createFileRoute } from "@tanstack/react-router";
import caseStudyOne from "@/assets/case-study-01.jpg";
import caseStudyTwo from "@/assets/case-study-02.jpg";

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

function Index() {
  return (
    <div className="min-h-screen bg-canvas font-space text-ink selection:bg-electric selection:text-ink">
      <nav className="fixed top-0 left-0 w-full h-20 border-b border-ink/5 bg-canvas/80 backdrop-blur-md z-50 flex items-center justify-between px-8 lg:px-16">
        <div className="font-syncopate font-bold text-xl tracking-tighter">
          PERHAM.STD
        </div>
        <div className="hidden md:flex items-center gap-12 text-sm font-medium uppercase tracking-widest">
          <a href="#systems" className="hover:text-electric transition-colors">
            Systems
          </a>
          <a href="#logic" className="hover:text-electric transition-colors">
            Logic
          </a>
          <a
            href="#projects"
            className="hover:text-electric transition-colors underline underline-offset-8 decoration-electric"
          >
            Complex Projects
          </a>
          <div className="h-8 w-[1px] bg-ink/10"></div>
          <a href="tel:2182984503" className="font-bold">
            218 298 4503
          </a>
        </div>
      </nav>

      <main>
        <section id="projects" className="pt-40 pb-20 px-8 lg:px-16">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-12 gap-6 items-end mb-24">
              <div className="col-span-12 lg:col-span-8 overflow-hidden">
                <h1 className="text-[clamp(3rem,7vw,6rem)] font-syncopate font-bold leading-[0.9] tracking-tighter mb-8">
                  ENGINEERING <br />
                  <span className="text-electric">DIGITAL</span> <br />
                  COMPLEXITY.
                </h1>
              </div>
              <div className="col-span-12 lg:col-span-4 pb-4">
                <p className="text-xl text-ink/60 max-w-sm leading-relaxed border-l-2 border-electric pl-6">
                  Based in Perham, Minnesota. We build high-fidelity logic
                  systems disguised as websites.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-6">
              <div className="col-span-12 lg:col-span-7 group cursor-pointer">
                <div className="w-full aspect-[16/10] bg-ink/5 outline-1 -outline-offset-1 outline-ink/5 overflow-hidden transition-transform duration-700 group-hover:scale-[0.98]">
                  <img
                    src={caseStudyOne}
                    alt="System Genesis — complex dark UI dashboard with cyan data visualizations"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="mt-6 flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold uppercase tracking-tight">
                      System Genesis
                    </h3>
                    <p className="text-ink/40">Custom ERP & Logic Engine</p>
                  </div>
                  <div className="text-xs font-bold px-3 py-1 border border-ink/10 rounded-full">
                    2024
                  </div>
                </div>
              </div>

              <div className="col-span-12 lg:col-span-5 flex flex-col gap-6">
                <div id="systems" className="bg-surface p-8 border border-ink/5 flex-1">
                  <div className="flex justify-between mb-12">
                    <span className="text-[10px] font-bold tracking-widest text-electric uppercase">
                      Capability
                    </span>
                    <span className="text-[10px] text-ink/30">002 / 009</span>
                  </div>
                  <h4 className="text-3xl font-bold mb-4">Architectural Mapping</h4>
                  <p className="text-ink/60 text-sm leading-relaxed mb-8">
                    We solve for n+1 scalability. Every pixel is backed by a
                    robust mathematical framework that ensures performance
                    across diverse environments.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-canvas text-[9px] font-bold uppercase tracking-tighter">
                      Post-CSS
                    </span>
                    <span className="px-2 py-1 bg-canvas text-[9px] font-bold uppercase tracking-tighter">
                      Rust
                    </span>
                    <span className="px-2 py-1 bg-canvas text-[9px] font-bold uppercase tracking-tighter">
                      WASM
                    </span>
                  </div>
                </div>

                <div id="logic" className="group cursor-pointer">
                  <div className="w-full aspect-[4/3] bg-ink/5 outline-1 -outline-offset-1 outline-ink/5 overflow-hidden transition-transform duration-700 group-hover:scale-[0.98]">
                    <img
                      src={caseStudyTwo}
                      alt="Case Study 02 — minimalist architectural render with sharp shadows"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ink text-canvas py-32 px-8 lg:px-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-electric/10 blur-[120px] pointer-events-none"></div>
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-12 lg:col-span-7">
                <h2 className="text-5xl lg:text-7xl font-syncopate font-bold leading-tight mb-8">
                  READY FOR THE <br />
                  <span className="text-electric">DEEP WORK?</span>
                </h2>
              </div>
              <div className="col-span-12 lg:col-span-5">
                <div className="space-y-6">
                  <div className="border-b border-canvas/20 pb-6 group cursor-pointer">
                    <p className="text-[10px] uppercase tracking-widest text-electric mb-2">
                      Direct Line
                    </p>
                    <a
                      href="tel:2182984503"
                      className="text-4xl font-bold hover:text-electric transition-colors"
                    >
                      218.298.4503
                    </a>
                  </div>
                  <div className="border-b border-canvas/20 pb-6">
                    <p className="text-[10px] uppercase tracking-widest text-electric mb-2">
                      Base of Operations
                    </p>
                    <p className="text-2xl font-medium">
                      Perham, Minnesota — 46.59° N, 95.57° W
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-12 px-8 lg:px-16 border-t border-ink/5">
          <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40">
              © {new Date().getFullYear()} Perham Studio Design Operations
            </div>
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em]">
              <a href="#" className="hover:text-electric transition-colors">
                Index
              </a>
              <a href="#" className="hover:text-electric transition-colors">
                Archive
              </a>
              <a href="#" className="hover:text-electric transition-colors">
                Source
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
