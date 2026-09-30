/**
 * Brightpath Learning - Client Use Case (Vizor to Metrix BI migration accelerator)
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

const RESULTS = [
  {
    value: '2 weeks',
    label: 'Total migration time',
    note: 'Manual estimate: 3.5 to 4 months',
  },
  {
    value: '21 dashboards',
    label: 'Migrated to Metrix BI',
    note: '40+ report pages across sub-pages',
  },
  {
    value: '~8x faster',
    label: 'Than the manual migration estimate',
    note: 'Using the client’s existing Vela licence',
  },
]

const CHALLENGES = [
  '21 Vizor dashboards with many sub-pages, covering 40+ report pages, all had to be rebuilt in Metrix BI.',
  'A manual rebuild of every calculation, visual and layout was estimated at 3.5 to 4 months.',
  'Rebuilding by hand risks numbers that no longer match the original reports, which erodes user trust.',
]

const SOLUTIONS = [
  'A Vela-powered migration accelerator that automates the Vizor-to-Metrix BI conversion.',
  'Built on the client’s existing Vela licence, so no new AI tooling or spend was needed.',
  'Migrated reports are checked against the Vizor originals before handover.',
]

const FLOW = [
  {
    num: '01',
    title: 'Analyse Vizor',
    body: 'Read each workbook: data sources, calculations, visuals and page structure.',
  },
  {
    num: '02',
    title: 'Translate Logic',
    body: 'Vela converts Vizor calculations and logic into Metrix BI equivalents.',
  },
  {
    num: '03',
    title: 'Rebuild Reports',
    body: 'Visuals, layouts and sub-pages are recreated as Metrix BI reports.',
  },
  {
    num: '04',
    title: 'Validate',
    body: 'Outputs are compared with the Vizor originals so the numbers match.',
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
    body: 'Breaks each Vizor workbook down into data, logic, visuals and page layout.',
  },
  {
    title: 'Logic Translator',
    body: 'Vela-driven conversion of Vizor calculations into Metrix BI measures.',
  },
  {
    title: 'Report Builder',
    body: 'Recreates visuals, pages and navigation in Metrix BI.',
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
    body: 'Built on the Vela licence Brightpath Learning already owned.',
  },
  {
    title: 'Repeatable',
    body: 'The accelerator can be reused for further BI migrations.',
  },
]

const BUILT_ON = [
  'Vizor · source dashboards',
  'Metrix BI · target platform',
  'Vela · client licence',
  'Quantiva · migration accelerator',
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

export default function BrightpathLearningUseCase() {
  return (
    <article className="bg-[#f5f5f0] font-[Inter,ui-sans-serif,system-ui,sans-serif] leading-relaxed text-[#4a4552] antialiased">

      <section className="relative overflow-hidden bg-[linear-gradient(118deg,#2B0F4D_0%,#4A1772_38%,#6B2BAB_70%,#7030B1_100%)] pb-20 pt-18 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[60%] -right-[10%] left-[55%] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(181,109,211,0.5),transparent_68%)]"
        />
        <div className={`relative z-10 ${ui.shell}`}>
          <span className="mb-5.5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.75 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            Accelerated BI Migration &middot; Vizor &rarr; Metrix BI &middot; Built with Vela
          </span>
          <h1 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] mb-4.5 max-w-[20ch] text-[clamp(30px,5vw,46px)] font-bold leading-[1.15] tracking-[-0.02em]">
            Vizor to Metrix BI in 2 Weeks, Not 4 Months
          </h1>
          <p className="max-w-[68ch] text-[clamp(15px,1.6vw,17px)] font-light text-white/85">
            Brightpath Learning needed to move its Vizor reporting estate to Metrix BI. Using
            the Vela licence the client already had, Quantiva Data.AI built a migration accelerator
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
          <h2 className={ui.heading}>Five stages from workbook to handover</h2>
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
          <div className={ui.kicker}>Accelerator Components</div>
          <h2 className={ui.heading}>Four parts doing the heavy lifting</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {COMPONENTS.map((component) => (
              <div
                key={component.title}
                className={`${ui.card} border-t-[3px] border-t-[#B56DD3] px-5 py-5.5`}
              >
                <h3 className="mb-2 text-[15.5px] font-semibold leading-snug text-[#14121a]">
                  {component.title}
                </h3>
                <p className="text-[13.5px] text-[#6f6a7a]">{component.body}</p>
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
