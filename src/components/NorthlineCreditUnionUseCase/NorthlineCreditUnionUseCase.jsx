/**
 * Northline Credit Union - Client Use Case (AI document processing for loan approvals)
 * Styled entirely with Tailwind utility classes (Tailwind v4, no config needed).
 * Drop the whole folder into any Tailwind-enabled React project and import it.
 *
 * Note: the source engagement is a DEMO implementation, not a production
 * deployment. The hero and the results band both say so on purpose.
 *
 * Brand colours are arbitrary values so the host project needs no theme keys.
 * To rebrand, edit the shared class strings in `ui` below.
 */

const ui = {
  shell: 'mx-auto w-full max-w-[1250px] px-6',
  section: 'border-b border-[#e6e3dc] py-12 last:border-b-0 md:py-14',
  kicker:
    'mb-3 inline-flex items-center gap-2 rounded-full border border-[#7030B1]/15 bg-[#7030B1]/[0.06] px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-[#7030B1] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#EF6706] before:content-[""]',
  heading:
    'mb-3 font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[clamp(23px,3.1vw,31px)] font-bold leading-[1.18] tracking-[-0.022em] text-[#14121a]',
  card: 'rounded-2xl border border-[#e6e3dc] bg-white shadow-[0_1px_2px_rgba(20,18,26,0.04),0_10px_30px_-12px_rgba(20,18,26,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#B56DD3]/40 hover:shadow-[0_2px_4px_rgba(20,18,26,0.04),0_18px_44px_-14px_rgba(112,48,177,0.22)]',
}

const GLANCE = [
  {
    value: 'Up to 8%',
    label: 'Loan requests lost to processing delays',
    note: 'The revenue leak this solution targets',
  },
  {
    value: 'Inside Lumina',
    label: 'No new platform to adopt',
    note: 'Runs next to existing credit union data',
  },
  {
    value: 'Secure',
    label: 'Aligned to EU, national & company policies',
    note: 'Governed data handling',
  },
]

const CHALLENGES = [
  'Loan applications stalled while staff manually read, checked and keyed in supporting documents.',
  'Slow turnaround pushed applicants away, costing up to 8% of loan requests.',
  'Handling sensitive personal and financial documents demands strict security and regulatory compliance.',
]

const SOLUTIONS = [
  'A document processing utility built inside Lumina for the loan approval workflow.',
  'Vela’s image processing reads scanned and photographed documents and extracts the required fields.',
  'Designed to follow EU, national and company compliance policies for secure data handling.',
]

const FLOW = [
  {
    num: '01',
    title: 'Document Intake',
    body: 'Applicants’ loan documents are securely uploaded into the Lumina utility.',
  },
  {
    num: '02',
    title: 'AI Extraction',
    body: 'Vela reads each document image and pulls out the key information.',
  },
  {
    num: '03',
    title: 'Validate & Check',
    body: 'Extracted data is checked for completeness and against the application.',
  },
  {
    num: '04',
    title: 'Review & Decide',
    body: 'Loan officers review structured results and move applications forward.',
  },
  {
    num: '05',
    title: 'Secure Record',
    body: 'Outputs are stored within Lumina under the defined compliance controls.',
  },
]

const COMPONENTS = [
  {
    title: 'Secure Document Intake',
    body: 'Controlled upload and handling of sensitive applicant documents.',
  },
  {
    title: 'Vela Vision Extraction',
    body: 'Image-based extraction of fields from scans, photos and PDFs.',
  },
  {
    title: 'Validation Checks',
    body: 'Flags missing or inconsistent information before review.',
  },
  {
    title: 'Compliance Guardrails',
    body: 'Processing aligned to EU, national and company policies.',
  },
]

const IMPACT = [
  {
    title: 'Recover Lost Loans',
    body: 'Faster processing targets the up-to-8% of requests lost to delays.',
  },
  {
    title: 'Faster Turnaround',
    body: 'Documents move straight to review instead of waiting in a manual queue.',
  },
  {
    title: 'Less Manual Keying',
    body: 'Staff review extracted data instead of re-typing it.',
  },
  {
    title: 'Secure by Design',
    body: 'Sensitive data is handled within governed, policy-aligned controls.',
  },
]

const BUILT_ON = [
  'Lumina · app & data',
  'Vela vision · document extraction',
  'Vela Labs API · model access',
  'Compliance · built in',
]

function PanelList({ items, accent = false }) {
  return (
    <ul className="grid gap-3.5">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[14.5px] text-[#4a4552]">
          <span
            aria-hidden="true"
            className={`mt-2.25 h-1.75 w-1.75 flex-none rounded-full ${
              accent ? 'bg-[#7030B1]' : 'bg-[#6f6a7a]'
            }`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function NorthlineCreditUnionUseCase() {
  return (
    <article className="bg-[#f5f5f0] font-[Inter,ui-sans-serif,system-ui,sans-serif] leading-relaxed text-[#4a4552] antialiased">
      <section className="relative overflow-hidden bg-[linear-gradient(118deg,#2B0F4D_0%,#4A1772_38%,#6B2BAB_70%,#7030B1_100%)] pb-20 pt-18 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[60%] -right-[10%] left-[55%] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(181,109,211,0.5),transparent_68%)]"
        />
        <div className={`relative z-10 ${ui.shell}`}>
          <span className="mb-5.5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.75 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            Intelligent Document Processing &middot; Loan Approvals &middot; Demo Implementation
          </span>
          <h1 className="mb-4.5 max-w-[20ch] font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[clamp(30px,5vw,46px)] font-bold leading-[1.15] tracking-[-0.02em]">
            Faster Loan Decisions with AI Document Processing
          </h1>
          <p className="max-w-[68ch] text-[clamp(15px,1.6vw,17px)] font-light text-white/85">
            Northline Credit Union was losing up to 8% of loan requests because document
            processing took too long. In a demo implementation, Quantiva Data.AI built a utility
            inside Lumina that uses Vela&rsquo;s image understanding to read loan documents,
            extract the key information and speed up approvals, with security and compliance built
            in from the start.
          </p>
        </div>
      </section>

      <div className={ui.shell}>
        <section className={ui.section}>
          <div className={ui.kicker}>At a Glance</div>
          <div className="grid gap-4.5 md:grid-cols-3">
            {GLANCE.map((item) => (
              <div
                key={item.value}
                className="rounded-2xl bg-[linear-gradient(135deg,#2B0F4D_0%,#4A1772_60%,#6B2BAB_100%)] px-6 py-7 text-white"
              >
                <div className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[clamp(22px,2.8vw,30px)] font-bold leading-tight tracking-[-0.025em] text-[#fbbf24]">
                  {item.value}
                </div>
                <div className="mt-2 text-[14px] font-medium text-white/90">{item.label}</div>
                <div className="mt-1 text-[12.5px] text-white/60">{item.note}</div>
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
            <div className="rounded-2xl border border-[#7030B1]/20 bg-[linear-gradient(160deg,rgba(112,48,177,0.06),rgba(181,109,211,0.05))] px-6.5 py-7">
              <div className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7030B1]">
                Our Solution
              </div>
              <PanelList items={SOLUTIONS} accent />
            </div>
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>How It Works</div>
          <h2 className={ui.heading}>Five stages from upload to governed record</h2>
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
          <div className={ui.kicker}>Solution Components</div>
          <h2 className={ui.heading}>Four parts, security built in</h2>
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
          <h2 className={ui.heading}>Documents move, decisions follow</h2>
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
