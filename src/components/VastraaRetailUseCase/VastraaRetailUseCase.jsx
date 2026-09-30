/**
 * Vastraa Retail - Client Use Case (Agentic AI on Lumina)
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
  card: 'rounded-2xl border border-[#e6e3dc] bg-white shadow-[0_1px_2px_rgba(20,18,26,0.04),0_10px_30px_-12px_rgba(20,18,26,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#b56dd3]/40 hover:shadow-[0_2px_4px_rgba(20,18,26,0.04),0_18px_44px_-14px_rgba(112,48,177,0.22)]',
}

const CHIPS = [
  'Buying',
  'Merchandising',
  'Planning',
  'Merch playbooks',
  'Action follow-through',
]

const CHALLENGES = [
  'Buying, merchandising and planning decisions depend on fast reads of sales, stock and trading data spread across many Lumina dashboards.',
  'Teams spent review time gathering numbers rather than acting on them.',
  'Decisions and follow-ups agreed between buying, merchandising and planning were hard to track across teams.',
  'Ad-hoc questions during trading reviews meant waiting on analysts for extra cuts of data.',
]

const SOLUTIONS = [
  'Agents connected to Vastraa Retail’s Lumina datasets and dashboards, so numbers stay consistent with what teams already see.',
  'Merchandising-specific playbooks designed by the teams, for example trading performance, sell-through, stock health and category reviews.',
  'Scheduled runs deliver insights to each team ahead of trading and planning reviews.',
  'Actions are assigned, tracked and nudged, with chat access to extra data points when a decision needs them.',
]

const FLOW = [
  {
    num: '01',
    title: 'Lumina Retail Data',
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
    body: 'Agents run the playbooks, query Lumina and reconcile results with dashboards.',
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
    body: 'Queries Lumina sales, stock and category data and matches results to the dashboards.',
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
    body: 'Agent outputs align with Vastraa Retail’s existing Lumina dashboards.',
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
  'Lumina · governed data & dashboards',
  'Vela LLMs · via Vela Labs API',
  'Multi-agent · orchestration',
  'Chat · assist',
]

function PanelList({ items, accent = false }) {
  return (
    <ul className="grid gap-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[14.5px] text-[#4a4552]">
          <span
            aria-hidden="true"
            className={`mt-2.25 h-1.75 w-1.75 flex-none rounded-full ${
              accent ? 'bg-[#7030b1]' : 'bg-[#6f6a7a]'
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
    <article className="bg-[#f5f5f0] font-[Inter,ui-sans-serif,system-ui,sans-serif] leading-relaxed text-[#4a4552] antialiased">

      <section className="relative overflow-hidden bg-[linear-gradient(118deg,#2B0F4D_0%,#4A1772_38%,#6B2BAB_70%,#7030B1_100%)] pb-20 pt-18 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[60%] -right-[10%] left-[55%] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(181,109,211,0.5),transparent_68%)]"
        />
        <div className={`relative z-10 ${ui.shell}`}>
          <span className="mb-5.5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.75 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            Vastraa Retail &middot; Agentic AI on Lumina
          </span>
          <h1 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] mb-4.5 max-w-[20ch] text-[clamp(30px,5vw,46px)] font-bold leading-[1.15] tracking-[-0.02em]">
            AI Agents for Buying, Merchandising &amp; Planning
          </h1>
          <p className="mb-6.5 max-w-[68ch] text-[clamp(15px,1.6vw,17px)] font-light text-white/85">
            For Vastraa Retail, Quantiva Data.AI built a purpose-made network of Vela-powered agents on
            top of the retailer&rsquo;s Lumina data, designed around the daily decisions of the
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
            <div className="rounded-2xl border border-[#e6e3dc] bg-[#efeee7] px-6.5 py-7">
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#6f6a7a]">
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
          <h2 className={ui.heading}>From governed Lumina data to closed decisions</h2>
          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {FLOW.map((stage) => (
              <div key={stage.num} className={`${ui.card} px-4.5 py-5.5`}>
                <div className="mb-3 grid h-7.5 w-7.5 place-items-center rounded-[9px] bg-gradient-to-br from-[#7030B1] to-[#B56DD3] text-[11.5px] font-bold tracking-[0.1em] text-white">
                  {stage.num}
                </div>
                <h3 className="mb-2 text-[15px] font-semibold leading-snug text-[#14121a]">
                  {stage.title}
                </h3>
                <p className="text-[13px] text-[#6f6a7a]">{stage.body}</p>
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
                className={`${ui.card} border-t-[3px] border-t-[#B56DD3] px-5 py-5.5`}
              >
                <h3 className="mb-2 text-[15.5px] font-semibold leading-snug text-[#14121a]">
                  {agent.title}
                </h3>
                <p className="text-[13.5px] text-[#6f6a7a]">{agent.body}</p>
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
                className="rounded-2xl border border-[#e6e3dc] bg-white px-5 py-6"
              >
                <h3 className="mb-2 text-[15.5px] font-semibold leading-snug text-[#6f2b8b]">
                  {item.title}
                </h3>
                <p className="text-[13.5px] text-[#6f6a7a]">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={ui.section}>
          <div className="flex flex-wrap items-center gap-3 rounded-2xl bg-gradient-to-r from-[#7030B1] to-[#B56DD3] px-6.5 py-6 text-white">
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

      </div>
    </article>
  )
}
