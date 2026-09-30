/**
 * Arcwell Systems x Quantiva x Vela - Client Case Study
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
  { value: 'Zero', label: 'orders missed across the lead-to-cash process' },
  { value: 'L1 + L2', label: 'issue handling taken on by the agent' },
  { value: '3 systems', label: 'Orbit, Fuselink and Axis, watched by one agent' },
]

const NEEDS = [
  {
    title: 'A reliable lead-to-cash flow',
    body: 'orders, accounts and billing data had to move cleanly from Orbit to Axis through Fuselink middleware.',
  },
  {
    title: 'Faster issue resolution',
    body: 'integration errors, orphan records and fallouts needed to be caught and corrected before they affected orders or invoicing.',
  },
  {
    title: 'Less manual L1/L2 effort',
    body: 'operations and support teams were triaging and fixing routine integration issues by hand.',
  },
  {
    title: 'Protected revenue',
    body: 'every missed or stuck order is a source of revenue leakage.',
  },
  {
    title: 'Trusted data',
    body: 'consistent, accurate records across CRM, integration and ERP systems.',
  },
]

const SYSTEMS = [
  { name: 'Orbit', role: 'CRM', body: 'Leads, opportunities and orders.' },
  { name: 'Fuselink', role: 'Integration middleware', body: 'Moves records between CRM and ERP.' },
  { name: 'Axis', role: 'ERP', body: 'Sales orders and billing.' },
]

const STEPS = [
  {
    num: '01',
    title: 'Detect',
    body: 'Continuously checks the lead-to-cash flow for integration errors, orphan records and fallouts.',
  },
  {
    num: '02',
    title: 'Auto-fix',
    body: 'Resolves the issues it can safely correct on its own, restoring clean records without manual effort.',
  },
  {
    num: '03',
    title: 'Alert & escalate',
    body: 'Sends alerts with context to the operations or support team for issues that need a human decision.',
  },
]

const IMPACT = [
  {
    title: 'Zero missed orders',
    body: 'every order in the Orbit to Fuselink to Axis flow is accounted for.',
  },
  {
    title: 'Revenue leakage stopped',
    body: 'fallouts are caught and resolved before they turn into lost or delayed revenue.',
  },
  {
    title: 'Higher data accuracy',
    body: 'orphan records and mismatches are corrected, keeping CRM and ERP data in sync.',
  },
  {
    title: 'L1 and L2 handled by the agent',
    body: 'operations and support teams are freed from routine triage and fixes.',
  },
]

const WHY_CLAUDE = [
  {
    title: 'Reasoning across systems',
    body: 'follows records as they move between Orbit, Fuselink and Axis and pinpoints where the flow breaks.',
  },
  {
    title: 'Tool use through ACP',
    body: 'works with Fuselink through ACP to inspect integrations and act on issues, not just report them.',
  },
  {
    title: 'Judgment on when to act',
    body: 'separates issues it can safely auto-fix from those that need a person, and explains why.',
  },
  {
    title: 'Enterprise-grade',
    body: 'supports controlled, explainable and repeatable back-office workflows.',
  },
]

const WHY_GWC = [
  {
    title: 'AI partner for back-office operations',
    body: 'agentic automation, integration monitoring and human-in-the-loop decision systems.',
  },
  {
    title: 'Integration and ERP expertise',
    body: 'Orbit, Fuselink, Axis and end-to-end lead-to-cash processes.',
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

export default function ArcwellSystemsCaseStudy() {
  return (
    <article className="bg-[#f5f5f0] font-[Inter,ui-sans-serif,system-ui,sans-serif] leading-relaxed text-[#4a4552] antialiased">

      <section className="relative overflow-hidden bg-[linear-gradient(118deg,#2B0F4D_0%,#4A1772_38%,#6B2BAB_70%,#7030B1_100%)] px-0 pb-20 pt-18 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[60%] -right-[10%] left-[55%] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(181,109,211,0.5),transparent_68%)]"
        />
        <div className={`relative z-10 ${ui.shell}`}>
          <span className="mb-5.5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.75 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            Arcwell Systems &middot; Powered by Vela
          </span>
          <h1 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] mb-4.5 max-w-[19ch] text-[clamp(30px,5vw,48px)] font-bold leading-[1.14] tracking-[-0.02em]">
            Arcwell Systems | AI-Powered Lead-to-Cash Back-Office Agent
          </h1>
          <p className="max-w-[62ch] text-[clamp(15px,1.6vw,17.5px)] font-light text-white/85">
            Monitoring, auto-fixing and escalating Orbit, Fuselink and Axis integration
            issues with Vela and Fuselink ACP.
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
              <div className="text-[clamp(22px,2.6vw,30px)] font-bold leading-tight tracking-[-0.02em] text-[#6f2b8b]">
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
                A global software company serving MSPs and IT solution providers
              </h2>
            </div>
            <p className="text-[15.5px] leading-[1.75] text-[#6f6a7a]">
              Arcwell Systems&rsquo; platform spans professional services automation (PSA), remote
            monitoring and management (RMM), cybersecurity management, data protection and
            automation, helping technology businesses run, secure and grow their operations. Quantiva
            Data.AI partners with Arcwell Systems to apply Vela to its back-office operations.
            </p>
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>What Arcwell Systems Needed</div>
          <h2 className={ui.heading}>Clean hand-offs, caught early, without manual triage</h2>
          <BulletList items={NEEDS} twoUp />
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>The Agent Quantiva Built</div>
          <h2 className={ui.heading}>One back-office agent for lead-to-cash</h2>
          <p className={ui.lead}>
            Built with Vela and Fuselink ACP, the agent connects to Orbit, Fuselink and Axis
            and watches every hand-off in the lead-to-cash process.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {SYSTEMS.map((system) => (
              <div
                key={system.name}
                className="rounded-2xl border border-[#e6e3dc] bg-white px-5 py-5.5"
              >
                <div className="text-base font-semibold text-[#14121a]">{system.name}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#107ac6]">
                  {system.role}
                </div>
                <p className="mt-2.5 text-sm text-[#6f6a7a]">{system.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-4.5 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#7030B1] to-[#B56DD3] px-6 py-5.5 text-white">
            <strong className="text-[16.5px] font-semibold">Vela back-office agent</strong>
            <span className="text-[13.5px] text-white/85">
              Connected through Fuselink ACP &middot; monitors all three systems
            </span>
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>How the Agent Works</div>
          <h2 className={ui.heading}>Detect, auto-fix, escalate</h2>
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
          <h2 className={ui.heading}>From manual triage to exception-only attention</h2>
          <div className="grid gap-4.5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#e6e3dc] bg-[#efeee7] px-5.5 py-6">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#6f6a7a]">
                Before
              </div>
              <p className="text-[14.5px] text-[#4a4552]">
                Integration issues, orphan records and fallouts between Orbit and Axis
                were found and fixed manually by operations and support teams, with the risk of
                orders slipping through.
              </p>
            </div>
            <div className="rounded-2xl border border-[#7030b1]/20 bg-[linear-gradient(160deg,rgba(112,48,177,0.06),rgba(8,70,170,0.05))] px-5.5 py-6">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7030b1]">
                After
              </div>
              <p className="text-[14.5px] text-[#4a4552]">
                The agent handles L1 and L2 issues itself, auto-fixing what it can and escalating
                the rest, so teams focus only on the exceptions that need judgment.
              </p>
            </div>
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>The Impact</div>
          <h2 className={ui.heading}>Every hand-off accounted for</h2>
          <BulletList items={IMPACT} twoUp />
        </section>

        <section className={ui.section}>
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <div className={ui.kicker}>Why Vela as the Foundation Model</div>
              <h2 className={ui.heading}>Reasoning that follows the record</h2>
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
            Every order accounted for, from lead to cash.
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
