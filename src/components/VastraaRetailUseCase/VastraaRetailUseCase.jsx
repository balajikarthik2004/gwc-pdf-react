/**
 * Vastraa Retail - Client Use Case (Agentic AI on Domo)
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
  card: 'rounded-2xl border border-[#e5e7eb] bg-white shadow-[0_1px_2px_rgba(16,24,40,0.04),0_8px_24px_rgba(16,24,40,0.06)]',
}

const CHIPS = [
  'Buying',
  'Merchandising',
  'Planning',
  'Merch playbooks',
  'Action follow-through',
]

const CHALLENGES = [
  'Buying, merchandising and planning decisions depend on fast reads of sales, stock and trading data spread across many Domo dashboards.',
  'Teams spent review time gathering numbers rather than acting on them.',
  'Decisions and follow-ups agreed between buying, merchandising and planning were hard to track across teams.',
  'Ad-hoc questions during trading reviews meant waiting on analysts for extra cuts of data.',
]

const SOLUTIONS = [
  'Agents connected to Vastraa Retail’s Domo datasets and dashboards, so numbers stay consistent with what teams already see.',
  'Merchandising-specific playbooks designed by the teams, for example trading performance, sell-through, stock health and category reviews.',
  'Scheduled runs deliver insights to each team ahead of trading and planning reviews.',
  'Actions are assigned, tracked and nudged, with chat access to extra data points when a decision needs them.',
]

const FLOW = [
  {
    num: '01',
    title: 'Domo Retail Data',
    body: 'Sales, stock and category datasets plus the dashboards the teams already use.',
  },
  {
    num: '02',
    title: 'Team Playbooks',
    body: 'Buyers, merchandisers and planners set their own analyses, thresholds and cadence.',
  },
  {
    num: '03',
    title: 'Scheduled Merch Reviews',
    body: 'Agents run the playbooks, query Domo and reconcile results with dashboards.',
  },
  {
    num: '04',
    title: 'Actions',
    body: 'Insights become owned actions, such as reorder, re-allocate, review range or flag markdown.',
  },
  {
    num: '05',
    title: 'Follow Through',
    body: 'Tracking agents remind owners; chat supplies supporting data to close decisions.',
  },
]

const AGENTS = [
  {
    title: 'Merch Playbook Agent',
    body: 'Runs team-designed buying, merchandising and planning playbooks on schedule.',
  },
  {
    title: 'Retail Data & Query Agent',
    body: 'Queries Domo sales, stock and category data and matches results to the dashboards.',
  },
  {
    title: 'Action Tracking Agent',
    body: 'Tracks decisions across buying, merchandising and planning, and flags pending items.',
  },
  {
    title: 'Merch Assist (Chat) Agent',
    body: 'Answers trading questions on demand with extra cuts, data points and context.',
  },
]

const IMPACT = [
  {
    title: 'Faster Trading Reads',
    body: 'Teams start reviews with insights ready, instead of pulling data together first.',
  },
  {
    title: 'One Version of Truth',
    body: 'Agent outputs align with Vastraa Retail’s existing Domo dashboards.',
  },
  {
    title: 'Cross-Team Follow-Through',
    body: 'Shared action tracking connects buying, merchandising and planning decisions.',
  },
  {
    title: 'Team-Owned Playbooks',
    body: 'Teams change and extend their own playbooks as trading priorities shift.',
  },
]

const BUILT_ON = [
  'Domo · governed data & dashboards',
  'Claude LLMs · via Anthropic API',
  'Multi-agent · orchestration',
  'Chat · assist',
]

function PanelList({ items, accent = false }) {
  return (
    <ul className="grid gap-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[14.5px] text-[#404040]">
          <span
            aria-hidden="true"
            className={`mt-2.25 h-1.75 w-1.75 flex-none rounded-full ${
              accent ? 'bg-[#7030b1]' : 'bg-[#6b7280]'
            }`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function VastraaRetailUseCase() {
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
            Client Use Case
          </span>
        </div>
      </header>

      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#0c1f56_0%,#0846aa_42%,#7030b1_100%)] pb-20 pt-18 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[60%] -right-[10%] left-[55%] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(181,109,211,0.38),transparent_68%)]"
        />
        <div className={`relative z-10 ${ui.shell}`}>
          <span className="mb-5.5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.75 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            Vastraa Retail &middot; Agentic AI on Domo
          </span>
          <h1 className="mb-4.5 max-w-[20ch] text-[clamp(30px,5vw,46px)] font-bold leading-[1.15] tracking-[-0.02em]">
            AI Agents for Buying, Merchandising &amp; Planning
          </h1>
          <p className="mb-6.5 max-w-[68ch] text-[clamp(15px,1.6vw,17px)] font-light text-white/85">
            For Vastraa Retail, GWC Data.AI built a purpose-made network of Claude-powered agents on
            top of the retailer&rsquo;s Domo data, designed around the daily decisions of the
            buying, merchandising and planning teams. Team-built playbooks watch trading on
            schedule, raise category insights, and follow every action through to closure.
          </p>
          <div className="flex flex-wrap gap-2.5">
            {CHIPS.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/25 bg-white/10 px-3.5 py-1.75 text-[12.5px] font-medium text-white"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <div className={ui.shell}>
        <section className={ui.section}>
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#e5e7eb] bg-[#f3f4f6] px-6.5 py-7">
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#6b7280]">
                The Challenge
              </div>
              <PanelList items={CHALLENGES} />
            </div>
            <div className="rounded-2xl border border-[#7030b1]/20 bg-[linear-gradient(160deg,rgba(112,48,177,0.06),rgba(8,70,170,0.05))] px-6.5 py-7">
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7030b1]">
                Our Solution
              </div>
              <PanelList items={SOLUTIONS} accent />
            </div>
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>How It Works</div>
          <h2 className={ui.heading}>From governed Domo data to closed decisions</h2>
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {FLOW.map((stage) => (
              <div key={stage.num} className={`${ui.card} px-4.5 py-5.5`}>
                <div className="mb-3 grid h-7.5 w-7.5 place-items-center rounded-[9px] bg-[linear-gradient(135deg,#7030b1,#0846aa)] text-[11.5px] font-bold tracking-[0.1em] text-white">
                  {stage.num}
                </div>
                <h3 className="mb-2 text-[15px] font-semibold leading-snug text-[#1a1a1a]">
                  {stage.title}
                </h3>
                <p className="text-[13px] text-[#6b7280]">{stage.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>Agents for the Merchandising Function</div>
          <h2 className={ui.heading}>Four agents, one merchandising network</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {AGENTS.map((agent) => (
              <div
                key={agent.title}
                className={`${ui.card} border-t-[3px] border-t-[#8c49bf] px-5 py-5.5`}
              >
                <h3 className="mb-2 text-[15.5px] font-semibold leading-snug text-[#1a1a1a]">
                  {agent.title}
                </h3>
                <p className="text-[13.5px] text-[#6b7280]">{agent.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>Business Impact</div>
          <h2 className={ui.heading}>Reviews that start with the answer</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {IMPACT.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[#e5e7eb] bg-[#fafafa] px-5 py-6"
              >
                <h3 className="mb-2 text-[15.5px] font-semibold leading-snug text-[#6f2b8b]">
                  {item.title}
                </h3>
                <p className="text-[13.5px] text-[#6b7280]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={ui.section}>
          <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-[linear-gradient(120deg,#6f2b8b,#0846aa)] px-6.5 py-6 text-white">
            <span className="mr-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
              Built on
            </span>
            {BUILT_ON.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/25 bg-white/15 px-3.5 py-1.75 text-[13px]"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap justify-between gap-3 py-6.5 text-[12.5px] text-[#6b7280]">
          <span>
            GWC Data.AI &middot; Vastraa Retail &middot; Merchandising &amp; Planning Agent Network
          </span>
          <b className="font-bold uppercase tracking-[0.12em] text-[#7030b1]">Solution Matters</b>
        </div>
      </div>
    </article>
  )
}
