/**
 * Anchorwell Health x GWC x Claude - Client Case Study
 * Styled entirely with Tailwind utility classes (Tailwind v4, no config needed).
 * Drop the whole folder into any Tailwind-enabled React project and import it.
 *
 * Brand colours are arbitrary values so the host project needs no theme keys.
 * To rebrand, edit the shared class strings in `ui` below.
 */

const ui = {
  shell: 'mx-auto w-full max-w-[1120px] px-6',
  section: 'border-b border-[#e5e7eb] py-14 last:border-b-0',
  kicker: 'mb-2.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7030b1]',
  heading:
    'mb-2.5 text-[clamp(22px,3vw,28px)] font-semibold leading-tight tracking-[-0.015em] text-[#1a1a1a]',
  lead: 'mb-6 max-w-[74ch] text-[15.5px] text-[#6b7280]',
  card: 'rounded-2xl border border-[#e5e7eb] bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_rgba(16,24,40,0.06)]',
  tick: 'mt-0.75 grid h-5 w-5 flex-none place-items-center rounded-full bg-[#7030b1]/10 text-[11px] font-bold text-[#7030b1]',
}

const STATS = [
  { value: 'Every run', label: 'failed pipeline and cloud run explained, with a recommended fix' },
  { value: 'Claude-first', label: 'engineering and data operations, with no manual log analysis' },
  { value: 'Opus + Sonnet', label: 'multi-model orchestration now in development' },
]

const NEEDS = [
  {
    title: 'Faster failure resolution',
    body: 'pipeline and cloud failures took engineering time to trace through logs before anyone could fix them.',
  },
  {
    title: 'Less manual operations work',
    body: 'routine investigation and troubleshooting pulled engineers away from building.',
  },
  {
    title: 'Insights for end users',
    body: 'users of the organization’s applications needed quick, plain-language answers to their questions.',
  },
  {
    title: 'Resilient AI at scale',
    body: 'AI workloads needed to keep running even when a single model was busy or unavailable.',
  },
  {
    title: 'Controlled AI costs',
    body: 'growing usage called for active token and cost optimization.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Ask',
    body: 'An engineer describes the problem in plain language, such as asking why a pipeline run failed.',
  },
  {
    num: '02',
    title: 'Analyze',
    body: 'The agent calls the relevant APIs, pulls the run and error details, and works out why the failure happened.',
  },
  {
    num: '03',
    title: 'Resolve',
    body: 'It explains the issue and recommends a fix for each failed run, ready for the team to apply.',
  },
]

const ACROSS_ORG = [
  {
    title: 'Claude-first engineering assistant',
    body: 'Claude is part of day-to-day engineering and data work, from building to troubleshooting.',
    status: 'Live',
  },
  {
    title: 'User-facing insights',
    body: 'A conversational assistant in the organization’s application answers user questions with insights.',
    status: 'Live',
  },
  {
    title: 'Multi-model orchestration',
    body: 'Routes work across Claude Opus and Sonnet, switching models when one is busy, with token-cost optimization built in.',
    status: 'Next',
  },
]

const IMPACT = [
  {
    title: 'Faster root-cause analysis',
    body: 'failed pipeline and cloud runs come with a clear explanation and a recommended fix.',
  },
  {
    title: 'No manual log analysis',
    body: 'engineers no longer sift through logs by hand to find why a run failed.',
  },
  {
    title: 'More time for building',
    body: 'routine troubleshooting moves to the agent, freeing engineering capacity.',
  },
  {
    title: 'A foundation for scale',
    body: 'multi-model routing and token-cost optimization prepare AI workloads to grow reliably.',
  },
]

const WHY_CLAUDE = [
  {
    title: 'Reasoning over logs and errors',
    body: 'reads complex error output and explains root causes in plain language.',
  },
  {
    title: 'Tool use through APIs',
    body: 'the agent gathers run and failure details itself instead of relying on copy-pasted logs.',
  },
  {
    title: 'A range of models',
    body: 'Opus for deep reasoning and Sonnet for speed and cost, enabling smart routing and cost control.',
  },
  {
    title: 'Enterprise-grade',
    body: 'supports controlled, explainable workflows suited to a healthcare environment.',
  },
]

const WHY_GWC = [
  {
    title: 'Embedded engineering partner',
    body: 'GWC engineers work inside the client’s data and cloud operations, building agents alongside their team.',
  },
  {
    title: 'Enterprise AI and data expertise',
    body: 'data engineering, cloud operations, Agentic AI and multi-model architectures.',
  },
  {
    title: 'Innovation Lab',
    body: 'a sprint-based build engine (Meaningful, Methodical, Measurable) focused on production-ready AI solutions.',
  },
  {
    title: 'Full-stack ownership',
    body: 'data to AI to insight to action, one partner, one accountability.',
  },
]

function BulletList({ items, twoUp = false }) {
  return (
    <ul className={`grid gap-3.5 ${twoUp ? 'md:grid-cols-2 md:gap-x-7 md:gap-y-4' : ''}`}>
      {items.map((item) => (
        <li key={item.title} className="flex items-start gap-3 text-[15px] text-[#404040]">
          <span className={ui.tick} aria-hidden="true">
            &#10003;
          </span>
          <span>
            <b className="font-semibold text-[#1a1a1a]">{item.title}:</b> {item.body}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function AnchorwellHealthCaseStudy() {
  return (
    <article className="bg-white font-[Poppins,ui-sans-serif,system-ui,sans-serif] leading-relaxed text-[#404040] antialiased">
      <header className={ui.shell}>
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5e7eb] py-4.5">
          <div className="flex items-baseline gap-2.5">
            <span className="text-[15px] font-extrabold uppercase tracking-[0.12em] text-[#7030b1]">
              GWC Data.AI
            </span>
            <span className="text-xs tracking-[0.04em] text-[#6b7280]">Data. BI. Agentic AI.</span>
          </div>
          <span className="rounded-full border border-[#7030b1]/20 bg-[#7030b1]/[0.08] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#6f2b8b]">
            Client Case Study
          </span>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#091b31_0%,#0846aa_45%,#7030b1_100%)] pb-20 pt-18 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[60%] -right-[10%] left-[55%] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(181,109,211,0.38),transparent_68%)]"
        />
        <div className={`relative z-10 ${ui.shell}`}>
          <span className="mb-5.5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.75 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            Anchorwell Health &middot; Powered by Claude
          </span>
          <h1 className="mb-4.5 max-w-[20ch] text-[clamp(30px,5vw,48px)] font-bold leading-[1.14] tracking-[-0.02em]">
            Anchorwell Health | Claude-Powered Engineering &amp; Operations Intelligence
          </h1>
          <p className="max-w-[64ch] text-[clamp(15px,1.6vw,17.5px)] font-light text-white/85">
            Using Claude to diagnose and fix data pipeline and cloud failures, power user-facing
            insights, and build a resilient multi-model AI foundation.
          </p>
        </div>
      </section>

      <div className={ui.shell}>
        <div className="relative z-20 -mt-8 grid gap-4.5 md:-mt-11 md:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl border border-[#e5e7eb] border-t-[3px] border-t-[#7030b1] bg-white px-5.5 py-6 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_rgba(16,24,40,0.06)]"
            >
              <div className="text-[clamp(20px,2.4vw,28px)] font-bold leading-tight tracking-[-0.02em] text-[#6f2b8b]">
                {stat.value}
              </div>
              <div className="mt-2 text-[13.5px] text-[#6b7280]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={ui.shell}>
        <section className={ui.section}>
          <div className={ui.kicker}>The Client</div>
          <h2 className={ui.heading}>Value-based care that depends on reliable data</h2>
          <p className={ui.lead}>
            Anchorwell Health is a healthcare organization focused on value-based care, where
            outcomes depend on reliable data flowing across clinical, operational and financial
            systems. Its engineering and data teams run the pipelines and cloud infrastructure
            behind that work, and Claude has become central to how they build, operate and support
            their applications. GWC Data.AI works alongside these teams as an embedded engineering
            partner.
          </p>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>What Anchorwell Health Needed</div>
          <h2 className={ui.heading}>Less time in logs, more time building</h2>
          <BulletList items={NEEDS} />
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>The Agent GWC Built</div>
          <h2 className={ui.heading}>Pipeline &amp; cloud failure analysis agent</h2>
          <p className={ui.lead}>
            When a data pipeline or cloud job fails, engineers ask the agent what went wrong.
            Claude investigates, explains the root cause and proposes the fix.
          </p>
          <div className="grid gap-4.5 md:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.num} className={ui.card}>
                <div className="mb-3.5 grid h-8.5 w-8.5 place-items-center rounded-[10px] bg-[#7030b1] text-xs font-bold tracking-[0.1em] text-white">
                  {step.num}
                </div>
                <h3 className="mb-2 text-[17px] font-semibold text-[#1a1a1a]">{step.title}</h3>
                <p className="text-sm text-[#6b7280]">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>Before &amp; After</div>
          <h2 className={ui.heading}>From hand-read logs to a cause and a fix</h2>
          <div className="grid gap-4.5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#e5e7eb] bg-[#f3f4f6] px-5.5 py-6">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#6b7280]">
                Before
              </div>
              <p className="text-[14.5px] text-[#404040]">
                Engineers traced failures by reading through logs and error output by hand before
                they could start on a fix.
              </p>
            </div>
            <div className="rounded-2xl border border-[#7030b1]/20 bg-[linear-gradient(160deg,rgba(112,48,177,0.06),rgba(8,70,170,0.05))] px-5.5 py-6">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7030b1]">
                After
              </div>
              <p className="text-[14.5px] text-[#404040]">
                One prompt returns the cause and a recommended fix for every failed run, with no
                manual log analysis.
              </p>
            </div>
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>Claude Across the Organization</div>
          <h2 className={ui.heading}>From engineering bench to end-user answers</h2>
          <div className="grid gap-4.5 md:grid-cols-3">
            {ACROSS_ORG.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#e5e7eb] border-t-[3px] border-t-[#8c49bf] bg-white px-5.5 py-6 shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_rgba(16,24,40,0.06)]"
              >
                <span
                  className={`mb-3 inline-block rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] ${
                    item.status === 'Live'
                      ? 'bg-[#21c45d]/10 text-[#0a761e]'
                      : 'bg-[#107ac6]/10 text-[#0846aa]'
                  }`}
                >
                  {item.status}
                </span>
                <h3 className="mb-2 text-[16.5px] font-semibold leading-snug text-[#1a1a1a]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6b7280]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>The Impact</div>
          <h2 className={ui.heading}>Engineering capacity back on building</h2>
          <BulletList items={IMPACT} twoUp />
        </section>

        <section className={ui.section}>
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <div className={ui.kicker}>Why Claude as the Foundation Model</div>
              <h2 className={ui.heading}>Reasoning that reads the error output</h2>
              <BulletList items={WHY_CLAUDE} />
            </div>
            <div>
              <div className={ui.kicker}>Why GWC</div>
              <h2 className={ui.heading}>One partner, one accountability</h2>
              <BulletList items={WHY_GWC} />
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[linear-gradient(135deg,#6f2b8b,#0846aa_85%)] py-15 text-center text-white">
        <div className={ui.shell}>
          <div className="mb-3.5 text-[clamp(20px,3.2vw,30px)] font-semibold tracking-[-0.015em]">
            Less time troubleshooting, more time delivering value-based care.
          </div>
          <a
            href="https://www.gwcdata.ai"
            target="_blank"
            rel="noreferrer"
            className="border-b border-white/50 text-sm text-white no-underline"
          >
            www.gwcdata.ai
          </a>
        </div>
      </section>

      <div className={ui.shell}>
        <div className="flex flex-wrap justify-between gap-3 py-5.5 text-[12.5px] text-[#6b7280]">
          <span>GWC Data.AI &middot; Solution Matters</span>
          <span>Data. BI. Agentic AI.</span>
        </div>
      </div>
    </article>
  )
}
