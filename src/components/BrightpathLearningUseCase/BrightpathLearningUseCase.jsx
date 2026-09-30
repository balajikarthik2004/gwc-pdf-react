/**
 * Brightpath Learning - Client Use Case (Tableau to Power BI migration accelerator)
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

const RESULTS = [
  {
    value: '2 weeks',
    label: 'Total migration time',
    note: 'Manual estimate: 3.5 to 4 months',
  },
  {
    value: '21 dashboards',
    label: 'Migrated to Power BI',
    note: '40+ report pages across sub-pages',
  },
  {
    value: '~8x faster',
    label: 'Than the manual migration estimate',
    note: 'Using the client’s existing Claude licence',
  },
]

const CHALLENGES = [
  '21 Tableau dashboards with many sub-pages, covering 40+ report pages, all had to be rebuilt in Power BI.',
  'A manual rebuild of every calculation, visual and layout was estimated at 3.5 to 4 months.',
  'Rebuilding by hand risks numbers that no longer match the original reports, which erodes user trust.',
]

const SOLUTIONS = [
  'A Claude-powered migration accelerator that automates the Tableau-to-Power BI conversion.',
  'Built on the client’s existing Claude licence, so no new AI tooling or spend was needed.',
  'Migrated reports are checked against the Tableau originals before handover.',
]

const FLOW = [
  {
    num: '01',
    title: 'Analyse Tableau',
    body: 'Read each workbook: data sources, calculations, visuals and page structure.',
  },
  {
    num: '02',
    title: 'Translate Logic',
    body: 'Claude converts Tableau calculations and logic into Power BI equivalents.',
  },
  {
    num: '03',
    title: 'Rebuild Reports',
    body: 'Visuals, layouts and sub-pages are recreated as Power BI reports.',
  },
  {
    num: '04',
    title: 'Validate',
    body: 'Outputs are compared with the Tableau originals so the numbers match.',
  },
  {
    num: '05',
    title: 'Review & Hand Over',
    body: 'The team reviews, finishes and delivers the migrated dashboards.',
  },
]

const COMPONENTS = [
  {
    title: 'Workbook Analyser',
    body: 'Breaks each Tableau workbook down into data, logic, visuals and page layout.',
  },
  {
    title: 'Logic Translator',
    body: 'Claude-driven conversion of Tableau calculations into Power BI measures.',
  },
  {
    title: 'Report Builder',
    body: 'Recreates visuals, pages and navigation in Power BI.',
  },
  {
    title: 'Validation Checks',
    body: 'Compares migrated outputs with the source reports before sign-off.',
  },
]

const IMPACT = [
  {
    title: 'Months Back',
    body: 'A 3.5 to 4 month programme delivered in about two weeks.',
  },
  {
    title: 'Consistent Output',
    body: 'Every dashboard is translated the same way, so there is less rework.',
  },
  {
    title: 'No New AI Spend',
    body: 'Built on the Claude licence Brightpath Learning already owned.',
  },
  {
    title: 'Repeatable',
    body: 'The accelerator can be reused for further BI migrations.',
  },
]

const BUILT_ON = [
  'Tableau · source dashboards',
  'Power BI · target platform',
  'Claude · client licence',
  'GWC · migration accelerator',
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

export default function BrightpathLearningUseCase() {
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
            Accelerated BI Migration &middot; Tableau &rarr; Power BI &middot; Built with Claude
          </span>
          <h1 className="mb-4.5 max-w-[20ch] text-[clamp(30px,5vw,46px)] font-bold leading-[1.15] tracking-[-0.02em]">
            Tableau to Power BI in 2 Weeks, Not 4 Months
          </h1>
          <p className="max-w-[68ch] text-[clamp(15px,1.6vw,17px)] font-light text-white/85">
            Brightpath Learning needed to move its Tableau reporting estate to Power BI. Using
            the Claude licence the client already had, GWC Data.AI built a migration accelerator
            that automated the heavy lifting and moved 21 multi-page dashboards, over 40 report
            pages in total, in about two weeks.
          </p>
        </div>
      </section>

      <div className={ui.shell}>
        <section className={ui.section}>
          <div className={ui.kicker}>Results</div>
          <div className="grid gap-4.5 md:grid-cols-3">
            {RESULTS.map((result) => (
              <div
                key={result.value}
                className="rounded-2xl bg-[linear-gradient(135deg,#2b0f4d,#6f2b8b_70%,#7030b1_100%)] px-6 py-7 text-white"
              >
                <div className="text-[clamp(24px,3vw,32px)] font-bold leading-tight tracking-[-0.02em] text-[#fbbf24]">
                  {result.value}
                </div>
                <div className="mt-2 text-[14px] font-medium text-white/90">{result.label}</div>
                <div className="mt-1 text-[12.5px] text-white/65">{result.note}</div>
              </div>
            ))}
          </div>
        </section>

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
          <h2 className={ui.heading}>Five stages from workbook to handover</h2>
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
          <div className={ui.kicker}>Accelerator Components</div>
          <h2 className={ui.heading}>Four parts doing the heavy lifting</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COMPONENTS.map((component) => (
              <div
                key={component.title}
                className={`${ui.card} border-t-[3px] border-t-[#8c49bf] px-5 py-5.5`}
              >
                <h3 className="mb-2 text-[15.5px] font-semibold leading-snug text-[#1a1a1a]">
                  {component.title}
                </h3>
                <p className="text-[13.5px] text-[#6b7280]">{component.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>Business Impact</div>
          <h2 className={ui.heading}>Months of programme time handed back</h2>
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
            GWC Data.AI &middot; Brightpath Learning &middot; Tableau to Power BI Migration
            Accelerator
          </span>
          <b className="font-bold uppercase tracking-[0.12em] text-[#7030b1]">Solution Matters</b>
        </div>
      </div>
    </article>
  )
}
