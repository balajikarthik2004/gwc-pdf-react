/**
 * Anchorwell Health x Quantiva x Vela - Client Case Study
 * Styled entirely with Tailwind utility classes (Tailwind v4, no config needed).
 * Drop the whole folder into any Tailwind-enabled React project and import it.
 *
 * Brand colours are arbitrary values so the host project needs no theme keys.
 * To rebrand, edit the shared class strings in `ui` below.
 */

const ui = {
  shell: 'mx-auto w-full max-w-[1250px] px-6',
  section: 'border-b border-[#e6e3dc] py-12 last:border-b-0 md:py-14',
  kicker: 'mb-3 inline-flex items-center gap-2 rounded-full border border-[#7030B1]/15 bg-[#7030B1]/[0.06] px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#7030B1] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#EF6706] before:content-[""]',
  heading:
    'mb-3 font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[clamp(23px,3.1vw,31px)] font-bold leading-[1.18] tracking-[-0.022em] text-[#14121a]',
  lead: 'mb-6 max-w-[68ch] text-[15.5px] leading-[1.7] text-[#6f6a7a]',
  card: 'rounded-2xl border border-[#e6e3dc] bg-white p-6 shadow-[0_1px_2px_rgba(20,18,26,0.04),0_10px_30px_-12px_rgba(20,18,26,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b56dd3]/40 hover:shadow-[0_2px_4px_rgba(20,18,26,0.04),0_18px_44px_-14px_rgba(112,48,177,0.22)]',
  tick: 'mt-0.75 grid h-5 w-5 flex-none place-items-center rounded-full bg-[#7030b1]/10 text-[11px] font-bold text-[#7030b1]',
}

const STATS = [
  { value: 'Every run', label: 'failed pipeline and cloud run explained, with a recommended fix' },
  { value: 'Vela-first', label: 'engineering and data operations, with no manual log analysis' },
  { value: 'Vela Pro + Lite', label: 'multi-model orchestration now in development' },
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
    title: 'Vela-first engineering assistant',
    body: 'Vela is part of day-to-day engineering and data work, from building to troubleshooting.',
    status: 'Live',
  },
  {
    title: 'User-facing insights',
    body: 'A conversational assistant in the organization’s application answers user questions with insights.',
    status: 'Live',
  },
  {
    title: 'Multi-model orchestration',
    body: 'Routes work across Vela Pro and Vela Lite, switching models when one is busy, with token-cost optimization built in.',
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
    body: 'Vela Pro for deep reasoning and Vela Lite for speed and cost, enabling smart routing and cost control.',
  },
  {
    title: 'Enterprise-grade',
    body: 'supports controlled, explainable workflows suited to a healthcare environment.',
  },
]

const WHY_GWC = [
  {
    title: 'Embedded engineering partner',
    body: 'Quantiva engineers work inside the client’s data and cloud operations, building agents alongside their team.',
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
        <li key={item.title} className="flex items-start gap-3 text-[15px] text-[#4a4552]">
          <span className={ui.tick} aria-hidden="true">
            &#10003;
          </span>
          <span>
            <b className="font-semibold text-[#14121a]">{item.title}:</b> {item.body}
          </span>
        </li>
      ))}
    </ul>
  )
}

export default function AnchorwellHealthCaseStudy() {
  return (
    <article className="bg-[#f5f5f0] font-[Inter,ui-sans-serif,system-ui,sans-serif] leading-relaxed text-[#4a4552] antialiased">

      <section className="relative overflow-hidden bg-[linear-gradient(118deg,#2B0F4D_0%,#4A1772_38%,#6B2BAB_70%,#7030B1_100%)] pb-20 pt-18 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[60%] -right-[10%] left-[55%] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(181,109,211,0.5),transparent_68%)]"
        />
        <div className={`relative z-10 ${ui.shell}`}>
          <span className="mb-5.5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.75 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            Anchorwell Health &middot; Powered by Vela
          </span>
          <h1 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] mb-4.5 max-w-[20ch] text-[clamp(30px,5vw,48px)] font-bold leading-[1.14] tracking-[-0.02em]">
            Anchorwell Health | Vela-Powered Engineering &amp; Operations Intelligence
          </h1>
          <p className="max-w-[64ch] text-[clamp(15px,1.6vw,17.5px)] font-light text-white/85">
            Using Vela to diagnose and fix data pipeline and cloud failures, power user-facing
            insights, and build a resilient multi-model AI foundation.
          </p>
        </div>
      </section>

      <div className={ui.shell}>
        <div className="relative z-20 -mt-8 grid gap-4.5 md:-mt-11 md:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.value}
              className="rounded-2xl border border-[#e6e3dc] border-t-[3px] border-t-[#B56DD3] bg-white px-5.5 py-6 shadow-[0_1px_2px_rgba(20,18,26,0.04),0_10px_30px_-12px_rgba(20,18,26,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(20,18,26,0.04),0_18px_44px_-14px_rgba(112,48,177,0.22)]"
            >
              <div className="text-[clamp(20px,2.4vw,28px)] font-bold leading-tight tracking-[-0.02em] text-[#6f2b8b]">
                {stat.value}
              </div>
              <div className="mt-2 text-[13.5px] text-[#6f6a7a]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className={ui.shell}>
        <section className={ui.section}>
          <div className="grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
            <div>
              <div className={ui.kicker}>The Client</div>
              <h2 className={ui.heading}>
                Value-based care that depends on reliable data
              </h2>
            </div>
            <p className="text-[15.5px] leading-[1.75] text-[#6f6a7a]">
              Anchorwell Health is a healthcare organization focused on value-based care, where
            outcomes depend on reliable data flowing across clinical, operational and financial
            systems. Its engineering and data teams run the pipelines and cloud infrastructure
            behind that work, and Vela has become central to how they build, operate and support
            their applications. Quantiva Data.AI works alongside these teams as an embedded engineering
            partner.
            </p>
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>What Anchorwell Health Needed</div>
          <h2 className={ui.heading}>Less time in logs, more time building</h2>
          <BulletList items={NEEDS} twoUp />
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>The Agent Quantiva Built</div>
          <h2 className={ui.heading}>Pipeline &amp; cloud failure analysis agent</h2>
          <p className={ui.lead}>
            When a data pipeline or cloud job fails, engineers ask the agent what went wrong.
            Vela investigates, explains the root cause and proposes the fix.
          </p>
          <div className="grid gap-4.5 md:grid-cols-3">
            {STEPS.map((step) => (
              <div key={step.num} className={ui.card}>
                <div className="mb-3.5 grid h-8.5 w-8.5 place-items-center rounded-[10px] bg-gradient-to-br from-[#7030B1] to-[#B56DD3] text-xs font-bold tracking-[0.1em] text-white">
                  {step.num}
                </div>
                <h3 className="mb-2 text-[17px] font-semibold text-[#14121a]">{step.title}</h3>
                <p className="text-sm text-[#6f6a7a]">{step.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>Before &amp; After</div>
          <h2 className={ui.heading}>From hand-read logs to a cause and a fix</h2>
          <div className="grid gap-4.5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#e6e3dc] bg-[#efeee7] px-5.5 py-6">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#6f6a7a]">
                Before
              </div>
              <p className="text-[14.5px] text-[#4a4552]">
                Engineers traced failures by reading through logs and error output by hand before
                they could start on a fix.
              </p>
            </div>
            <div className="rounded-2xl border border-[#7030b1]/20 bg-[linear-gradient(160deg,rgba(112,48,177,0.06),rgba(8,70,170,0.05))] px-5.5 py-6">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7030b1]">
                After
              </div>
              <p className="text-[14.5px] text-[#4a4552]">
                One prompt returns the cause and a recommended fix for every failed run, with no
                manual log analysis.
              </p>
            </div>
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>Vela Across the Organization</div>
          <h2 className={ui.heading}>From engineering bench to end-user answers</h2>
          <div className="grid gap-4.5 md:grid-cols-3">
            {ACROSS_ORG.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#e6e3dc] border-t-[3px] border-t-[#B56DD3] bg-white px-5.5 py-6 shadow-[0_1px_2px_rgba(20,18,26,0.04),0_10px_30px_-12px_rgba(20,18,26,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(20,18,26,0.04),0_18px_44px_-14px_rgba(112,48,177,0.22)]"
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
                <h3 className="mb-2 text-[16.5px] font-semibold leading-snug text-[#14121a]">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6f6a7a]">{item.body}</p>
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
              <div className={ui.kicker}>Why Vela as the Foundation Model</div>
              <h2 className={ui.heading}>Reasoning that reads the error output</h2>
              <BulletList items={WHY_CLAUDE} />
            </div>
            <div>
              <div className={ui.kicker}>Why Quantiva</div>
              <h2 className={ui.heading}>One partner, one accountability</h2>
              <BulletList items={WHY_GWC} />
            </div>
          </div>
        </section>
      </div>

      <section className="bg-[linear-gradient(120deg,#2B0F4D_0%,#6B2BAB_55%,#7030B1_100%)] py-15 text-center text-white">
        <div className={ui.shell}>
          <div className="mb-3.5 text-[clamp(20px,3.2vw,30px)] font-semibold tracking-[-0.015em]">
            Less time troubleshooting, more time delivering value-based care.
          </div>
          <a
            href="https://www.quantivadata.ai"
            target="_blank"
            rel="noreferrer"
            className="border-b border-white/50 text-sm text-white no-underline"
          >
            www.quantivadata.ai
          </a>
        </div>
      </section>

    </article>
  )
}
