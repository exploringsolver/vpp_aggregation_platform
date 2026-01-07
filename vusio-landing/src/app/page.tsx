import {
  AnimatedGrid,
} from "@/components/magicui/animated-grid";
import { SmoothCursor } from "@/components/magicui/smooth-cursor";
import { Dock } from "@/components/magicui/dock";
import { WordRotate } from "@/components/magicui/word-rotate";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Globe } from "@/components/magicui/globe";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import {
  BentoGrid,
  BentoCard,
  Terminal,
  NumberTicker,
  IconCloud,
  PulsatingStatus,
} from "@/components/magicui/technology-bento";
import {
  AvatarCircles,
  DottedMap,
  HyperText,
  MagicCard,
  Marquee,
  Meteors,
  ParticlesBackground,
  RainbowButton,
  SafariMockup,
  SparklesText,
  TextReveal,
  WarpBackground,
  InteractiveHoverButton,
} from "@/components/magicui/sections-extras";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col bg-slate-950 text-slate-100">
      {/* Global overlays */}
      <AnimatedGrid />
      <SmoothCursor />

      {/* Hero */}
      <section
        id="mission"
        className="relative z-10 flex min-h-[80vh] flex-col items-center justify-center px-6 pb-20 pt-28 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-24"
      >
        <div className="max-w-xl text-center lg:text-left">
          <p className="text-xs uppercase tracking-[0.3em] text-sky-400/80">
            Vusio · The Future of Sovereign Grid Resilience
          </p>
          <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-[3.1rem]">
            Turning Data Centers into
            <span className="mt-1 block text-sky-400">
              <WordRotate
                words={[
                  "Virtual Power Plants",
                  "Grid Assets",
                  "Revenue Engines",
                  "Climate Guardians",
                ]}
                className="inline-block"
              />
            </span>
          </h1>
          <BlurFade className="mt-6">
            <p className="max-w-xl text-sm text-slate-300 sm:text-base">
              Vusio aggregates idle battery storage and flexible compute to solve India&apos;s
              spinning reserve crisis. 5% Grid Reserve → 15% Synthetic Resilience.
            </p>
          </BlurFade>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <ShimmerButton label="Deploy Resilience" />
            <button className="inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/40 px-6 py-2.5 text-xs font-medium text-slate-100 backdrop-blur hover:border-slate-500/80">
              Explore Technology Stack
            </button>
          </div>
          <p className="mt-4 max-w-lg text-xs text-slate-400">
            Designed as a cyber-physical glass cockpit: dark mode by default, neon telemetry,
            and always-on views of grid stress, resilience and monetization.
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center gap-4 lg:mt-0">
          <Globe />
          <p className="max-w-xs text-center text-[11px] text-slate-400">
            Each glowing node represents a Vusio-partnered data center contributing synthetic
            inertia and reserve capacity back into the Indian grid.
          </p>
        </div>
      </section>

      {/* Problem & Solution Beam */}
      <section
        id="technology"
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 pb-20 sm:px-10 lg:px-0"
      >
        <h2 className="text-center text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
          From Grid Stress to Synthetic Stability
        </h2>
        <p className="mx-auto max-w-2xl text-center text-sm text-slate-300">
          Vusio listens to real-time grid signals, orchestrates battery dispatch, and
          intelligently shifts non-critical AI workloads — turning your existing UPS and
          compute into a grid-scale flexibility asset.
        </p>
        <AnimatedBeam />
      </section>

      {/* Technology Stack Bento */}
      <section
        className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 sm:px-10"
        aria-labelledby="technology-heading"
      >
        <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2
              id="technology-heading"
              className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl"
            >
              Under the Hood
            </h2>
            <p className="mt-1 max-w-xl text-xs text-slate-400">
              A software-defined virtual power plant that speaks the language of both hyperscale
              data centers and Indian grid operators.
            </p>
          </div>
        </div>
        <BentoGrid>
          <BentoCard>
            <p className="mb-2 text-xs font-semibold tracking-wide text-sky-300">
              AI Logic · Workload Shaping
            </p>
            <Terminal
              code={
                'def shift_workload(priority="bronze", window_minutes: int = 15):\n    """Pause non-critical AI jobs when the grid calls for reserves."""\n    if priority == "gold":\n        return  # Never touch mission-critical inference\n\n    if grid.frequency < 49.9 or grid.reserve_margin < 5:\n        scheduler.pause(batch_jobs(tags=["training", "batch-analytics"]))\n        battery.discharge(target_kw=site.flex_capacity_kw)\n        log.event("vusio_shift", status="activated")\n'
              }
            />
          </BentoCard>
          <BentoCard>
            <NumberTicker
              label="Revenue Unlocked for Operators"
              value="₹ 45,00,000+"
            />
          </BentoCard>
          <BentoCard>
            <p className="mb-2 text-xs font-semibold tracking-wide text-sky-300">
              Hardware & Cloud Mesh
            </p>
            <IconCloud />
          </BentoCard>
          <BentoCard>
            <p className="mb-3 text-xs font-semibold tracking-wide text-sky-300">
              Live Grid Telemetry
            </p>
            <div className="flex flex-col gap-3">
              <PulsatingStatus label="Live Grid Frequency: 49.98 Hz (Stable)" />
              <p className="text-[11px] text-slate-400">
                Ingesting dispatch signals, SCADA feeds and market prices to continuously
                optimize how your batteries and workloads respond.
              </p>
            </div>
          </BentoCard>
        </BentoGrid>
      </section>

      {/* How It Works Demo */}
      <section
        id="demo"
        className="relative z-10 flex flex-col items-center gap-6 px-6 pb-20 text-center sm:px-10"
      >
        <TextReveal>Seamless Integration. Zero Downtime.</TextReveal>
        <p className="max-w-2xl text-sm text-slate-300">
          Drop Vusio into your existing infrastructure: we integrate with DCIM, EMS, BMS and
          cloud schedulers so every kilowatt and every GPU cycle is orchestrated, not wasted.
        </p>
        <SafariMockup>
          <div className="flex h-full flex-col gap-4 text-left text-[11px] text-slate-200">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-sky-300">
                  Campus Virtual Power Plant
                </p>
                <p className="text-xs text-slate-300">
                  Battery Discharge vs. Grid Price · last 24 hours
                </p>
              </div>
              <span className="rounded-full bg-slate-900/80 px-2 py-1 text-[10px] text-slate-300">
                Synthetic Reserve Active · 15.2 MW
              </span>
            </div>
            <div className="mt-1 h-32 rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/90 p-2">
              <div className="flex h-full items-end justify-between gap-1">
                {[...Array(32)].map((_, i) => {
                  const load = 20 + (Math.sin(i / 3) + 1) * 20;
                  const price = 12 + (Math.cos(i / 4) + 1) * 16;
                  return (
                    <div key={i} className="flex w-1 flex-col justify-end gap-0.5">
                      <div
                        className="w-full rounded-full bg-emerald-400/80"
                        style={{ height: `${load}%` }}
                      />
                      <div
                        className="w-full rounded-full bg-red-400/70"
                        style={{ height: `${price / 2}%` }}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="mt-1 flex justify-between text-[9px] text-slate-500">
                <span>Off-peak</span>
                <span>Evening ramp</span>
                <span>Peak price window</span>
              </div>
            </div>
            <div className="mt-1 grid grid-cols-3 gap-3 text-[10px]">
              <div>
                <p className="text-slate-400">Sites connected</p>
                <p className="text-sm font-semibold text-slate-50">24 data centers</p>
              </div>
              <div>
                <p className="text-slate-400">Dispatch success</p>
                <p className="text-sm font-semibold text-emerald-400">99.4%</p>
              </div>
              <div>
                <p className="text-slate-400">Avoided outages</p>
                <p className="text-sm font-semibold text-amber-300">18 events</p>
              </div>
            </div>
          </div>
        </SafariMockup>
      </section>

      {/* Impact & Carbon Credits */}
      <section
        id="impact"
        className="relative z-10 mx-auto mt-8 w-full max-w-5xl overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/90 px-6 pb-10 pt-10 sm:px-10"
      >
        <ParticlesBackground />
        <Meteors />
        <div className="relative z-10 space-y-4 text-center">
          <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
            Why Vusio Matters
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-slate-300">
            Every megawatt of flexible capacity we unlock inside data centers is a megawatt that
            doesn&apos;t have to come from coal. Vusio turns resilience mandates into climate
            outcomes and new revenue.
          </p>
        </div>
        <div className="relative z-10 mt-8 grid gap-4 md:grid-cols-3">
          <MagicCard title="Carbon Offset">
            Deferring thermal power usage saves an estimated 500 tons of CO₂ per year for every
            megawatt of capacity enrolled with Vusio.
          </MagicCard>
          <MagicCard title="Grid Stability">
            Distributed synthetic inertia from data centers in Tier-2 and Tier-3 cities prevents
            cascading blackouts when frequency drifts.
          </MagicCard>
          <MagicCard title="Sovereignty">
            Indian workloads, Indian power, Indian grid codes. Vusio is built for 100% data
            residency and sovereign energy policy.
          </MagicCard>
        </div>
      </section>

      {/* Social Proof */}
      <section className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-16 pt-16 text-center sm:px-10">
        <SparklesText>Trusted by Energy Pioneers.</SparklesText>
        <Marquee logos={["IndraGrid", "ServerSpace", "EcoCompute", "Nexus Data", "GridForge"]} />
        <AvatarCircles
          reviews={[
            {
              name: "Ananya Rao",
              role: "CTO, Nexus Data",
              quote:
                "Vusio turned our idle UPS batteries into a revenue line item. It&apos;s the most intuitive grid product we&apos;ve deployed.",
            },
            {
              name: "Rahul Iyer",
              role: "Head of Sustainability, ServerSpace",
              quote:
                "Instead of buying separate grid batteries, we monetized what we already owned — our backup systems.",
            },
            {
              name: "Meera Singh",
              role: "COO, EcoCompute",
              quote:
                "The Vusio cockpit gives my operations team a live view of grid stress, dispatch and carbon impact in one place.",
            },
          ]}
        />
      </section>

      {/* Call to Action */}
      <section
        id="contact"
        className="relative z-10 mx-auto mb-20 mt-4 flex w-full max-w-3xl flex-col items-center overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/95 px-6 py-12 text-center sm:px-10"
      >
        <WarpBackground />
        <HyperText>Ready to Monetize Your Idle Assets?</HyperText>
        <p className="relative z-10 mt-4 max-w-xl text-sm text-slate-300">
          Vusio runs feasibility studies for hyperscale, colocation and edge data centers
          across India. In 4–6 weeks we quantify your synthetic reserve potential, grid
          services revenue, and carbon impact.
        </p>
        <div className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4">
          <RainbowButton label="Book a Feasibility Audit" />
          <InteractiveHoverButton
            primary="Download Whitepaper"
            hover="Read Case Study"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 mt-auto border-t border-slate-800/80 bg-slate-950/95 px-6 py-6 text-xs text-slate-400 sm:px-10">
        <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 sm:flex-row">
          <span>Engineered in India for the World.</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-200">
              LinkedIn
            </a>
            <a href="#" className="hover:text-slate-200">
              Twitter
            </a>
            <a href="#" className="hover:text-slate-200">
              GitHub
            </a>
          </div>
          <DottedMap />
        </div>
      </footer>

      <Dock />
    </main>
  );
}
