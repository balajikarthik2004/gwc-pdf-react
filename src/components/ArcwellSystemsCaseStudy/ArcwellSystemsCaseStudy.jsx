/**
 * Arcwell Systems x GWC x Claude - Client Case Study
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
  { value: 'Zero', label: 'orders missed across the lead-to-cash process' },
  { value: 'L1 + L2', label: 'issue handling taken on by the agent' },
  { value: '3 systems', label: 'Salesforce, Boomi and NetSuite, watched by one agent' },
]

const NEEDS = [
  {
    title: 'A reliable lead-to-cash flow',
    body: 'orders, accounts and billing data had to move cleanly from Salesforce to NetSuite through Boomi middleware.',
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
  { name: 'Salesforce', role: 'CRM', body: 'Leads, opportunities and orders.' },
  { name: 'Boomi', role: 'Integration middleware', body: 'Moves records between CRM and ERP.' },
  { name: 'NetSuite', role: 'ERP', body: 'Sales orders and billing.' },
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
    body: 'every order in the Salesforce to Boomi to NetSuite flow is accounted for.',
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
    body: 'follows records as they move between Salesforce, Boomi and NetSuite and pinpoints where the flow breaks.',
  },
  {
    title: 'Tool use through MCP',
    body: 'works with Boomi through MCP to inspect integrations and act on issues, not just report them.',
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
    body: 'Salesforce, Boomi, NetSuite and end-to-end lead-to-cash processes.',
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

export default function ArcwellSystemsCaseStudy() {
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

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0b1d56_0%,#0846aa_45%,#7030b1_100%)] px-0 pb-20 pt-18 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[60%] -right-[10%] left-[55%] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(181,109,211,0.38),transparent_68%)]"
        />
        <div className={`relative z-10 ${ui.shell}`}>
          <span className="mb-5.5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.75 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            Arcwell Systems &middot; Powered by Claude
          </span>
          <h1 className="mb-4.5 max-w-[19ch] text-[clamp(30px,5vw,48px)] font-bold leading-[1.14] tracking-[-0.02em]">
            Arcwell Systems | AI-Powered Lead-to-Cash Back-Office Agent
          </h1>
          <p className="max-w-[62ch] text-[clamp(15px,1.6vw,17.5px)] font-light text-white/85">
            Monitoring, auto-fixing and escalating Salesforce, Boomi and NetSuite integration
            issues with Claude and Boomi MCP.
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
              <div className="text-[clamp(22px,2.6vw,30px)] font-bold leading-tight tracking-[-0.02em] text-[#6f2b8b]">
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
          <h2 className={ui.heading}>
            A global software company serving MSPs and IT solution providers
          </h2>
          <p className={ui.lead}>
            Arcwell Systems&rsquo; platform spans professional services automation (PSA), remote
            monitoring and management (RMM), cybersecurity management, data protection and
            automation, helping technology businesses run, secure and grow their operations. GWC
            Data.AI partners with Arcwell Systems to apply Claude to its back-office operations.
          </p>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>What Arcwell Systems Needed</div>
          <h2 className={ui.heading}>Clean hand-offs, caught early, without manual triage</h2>
          <BulletList items={NEEDS} />
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>The Agent GWC Built</div>
          <h2 className={ui.heading}>One back-office agent for lead-to-cash</h2>
          <p className={ui.lead}>
            Built with Claude and Boomi MCP, the agent connects to Salesforce, Boomi and NetSuite
            and watches every hand-off in the lead-to-cash process.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            {SYSTEMS.map((system) => (
              <div
                key={system.name}
                className="rounded-2xl border border-[#e5e7eb] bg-[#fafafa] px-5 py-5.5"
              >
                <div className="text-base font-semibold text-[#1a1a1a]">{system.name}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#107ac6]">
                  {system.role}
                </div>
                <p className="mt-2.5 text-sm text-[#6b7280]">{system.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-4.5 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[linear-gradient(120deg,#6f2b8b,#0846aa)] px-6 py-5.5 text-white">
            <strong className="text-[16.5px] font-semibold">Claude back-office agent</strong>
            <span className="text-[13.5px] text-white/85">
              Connected through Boomi MCP &middot; monitors all three systems
            </span>
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>How the Agent Works</div>
          <h2 className={ui.heading}>Detect, auto-fix, escalate</h2>
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
          <h2 className={ui.heading}>From manual triage to exception-only attention</h2>
          <div className="grid gap-4.5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#e5e7eb] bg-[#f3f4f6] px-5.5 py-6">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#6b7280]">
                Before
              </div>
              <p className="text-[14.5px] text-[#404040]">
                Integration issues, orphan records and fallouts between Salesforce and NetSuite
                were found and fixed manually by operations and support teams, with the risk of
                orders slipping through.
              </p>
            </div>
            <div className="rounded-2xl border border-[#7030b1]/20 bg-[linear-gradient(160deg,rgba(112,48,177,0.06),rgba(8,70,170,0.05))] px-5.5 py-6">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7030b1]">
                After
              </div>
              <p className="text-[14.5px] text-[#404040]">
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
              <div className={ui.kicker}>Why Claude as the Foundation Model</div>
              <h2 className={ui.heading}>Reasoning that follows the record</h2>
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
            Every order accounted for, from lead to cash.
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
