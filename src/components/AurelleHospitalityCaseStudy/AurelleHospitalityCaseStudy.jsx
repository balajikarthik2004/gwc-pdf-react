/**
 * Aurelle Hospitality Group x Quantiva x Vela - Client Case Study
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
  { value: 'Any format', label: 'menu PDFs parsed regardless of language, layout or design' },
  { value: 'Food + bar', label: 'both menu types checked against each hotel’s license' },
  { value: '3 paths', label: 'auto-approve, human review or auto-reject, set by guardrails' },
]

const NEEDS = [
  {
    title: 'Faster menu compliance',
    body: 'every hotel’s food and bar menus had to be checked against the mandatory items in its license, a slow manual review.',
  },
  {
    title: 'Handling unstructured menus',
    body: 'menus arrived as PDFs and images in different languages, layouts and designs, often naming the same item in different ways.',
  },
  {
    title: 'Consistent decisions',
    body: 'approvals and rejections depended on individual reviewers working through Excel sheets and documents.',
  },
  {
    title: 'Control where it matters',
    body: 'clear-cut menus should be decided automatically, while borderline cases still get a human check.',
  },
  {
    title: 'Visibility and tracking',
    body: 'a single place to track submissions, decisions and compliance across hotels.',
  },
]

const STEPS = [
  {
    num: '01',
    title: 'Upload',
    body: 'Hotels upload one or more food and bar menu PDFs into the Lumina application.',
  },
  {
    num: '02',
    title: 'Parse',
    body: 'Vela reads each menu in any language or layout and recognizes items named with synonyms.',
  },
  {
    num: '03',
    title: 'Compare',
    body: 'Items are matched against the hotel’s license to confirm mandatory and optional elements.',
  },
  {
    num: '04',
    title: 'Decide',
    body: 'Guardrails approve, reject or route the menu to a reviewer, and results feed the dashboards.',
  },
]

const GUARDRAILS = [
  {
    band: '90% and above',
    verdict: 'Auto-approved',
    body: 'Menu meets the license, with every mandatory item present.',
    tone: 'approve',
  },
  {
    band: '80% to 90%',
    verdict: 'Human in the loop',
    body: 'A reviewer checks and approves or rejects. Any manual edit after parsing also routes here.',
    tone: 'review',
  },
  {
    band: 'Below 80%',
    verdict: 'Auto-rejected',
    body: 'Also applies whenever a mandatory item is missing.',
    tone: 'reject',
  },
]

const GUARDRAIL_TONES = {
  approve: {
    wrap: 'border-[#21c45d]/25 bg-[#21c45d]/[0.06]',
    band: 'text-[#0a761e]',
    verdict: 'text-[#0a761e]',
  },
  review: {
    wrap: 'border-[#fbbf24]/35 bg-[#fbbf24]/[0.08]',
    band: 'text-[#92700c]',
    verdict: 'text-[#92700c]',
  },
  reject: {
    wrap: 'border-[#ef4444]/25 bg-[#ef4444]/[0.06]',
    band: 'text-[#b71607]',
    verdict: 'text-[#b71607]',
  },
}

const IMPACT = [
  {
    title: 'Significant hours saved',
    body: 'manual menu reviews are replaced by AI-driven checks, saving many hours across hotels and admin teams.',
  },
  {
    title: 'A digitized, streamlined process',
    body: 'submission, review and approval run in one application instead of emails, PDFs and spreadsheets.',
  },
  {
    title: 'Consistent, trackable decisions',
    body: 'every menu is scored against the same license rules, with dashboards to track status and compliance.',
  },
  {
    title: 'Human judgment where it counts',
    body: 'guardrails send only borderline or edited menus to reviewers.',
  },
]

const WHY_CLAUDE = [
  {
    title: 'Reading unstructured documents',
    body: 'parses menus in any language, layout or design, straight from PDFs.',
  },
  {
    title: 'Understanding meaning, not keywords',
    body: 'recognizes items described with synonyms or local names and maps them to license requirements.',
  },
  {
    title: 'Reliable, explainable scoring',
    body: 'produces a match score and shows which mandatory items are present or missing.',
  },
  {
    title: 'Enterprise-grade',
    body: 'supports controlled, repeatable workflows with human-in-the-loop review built in.',
  },
]

const WHY_GWC = [
  {
    title: 'AI partner for document intelligence',
    body: 'parsing, compliance checks and human-in-the-loop decision systems.',
  },
  {
    title: 'Lumina and pro-code expertise',
    body: 'custom Lumina applications and dashboards that put AI into everyday workflows.',
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

export default function AurelleHospitalityCaseStudy() {
  return (
    <article className="bg-[#f5f5f0] font-[Inter,ui-sans-serif,system-ui,sans-serif] leading-relaxed text-[#4a4552] antialiased">

      <section className="relative overflow-hidden bg-[linear-gradient(118deg,#2B0F4D_0%,#4A1772_38%,#6B2BAB_70%,#7030B1_100%)] pb-20 pt-18 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[60%] -right-[10%] left-[55%] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(181,109,211,0.5),transparent_68%)]"
        />
        <div className={`relative z-10 ${ui.shell}`}>
          <span className="mb-5.5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.75 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/80">
            Aurelle Hospitality Group &middot; Powered by Vela &middot; Built on Lumina
          </span>
          <h1 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] mb-4.5 max-w-[19ch] text-[clamp(30px,5vw,48px)] font-bold leading-[1.14] tracking-[-0.02em]">
            Aurelle Hospitality Group | AI-Powered Menu Compliance for Restaurants &amp; Bars
          </h1>
          <p className="max-w-[62ch] text-[clamp(15px,1.6vw,17.5px)] font-light text-white/85">
            A Vela-powered Lumina application that reads food and bar menus, checks them against
            each hotel&rsquo;s license, and approves, rejects or routes them for review.
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
                A global hospitality group with licensed menus in France
              </h2>
            </div>
            <p className="text-[15.5px] leading-[1.75] text-[#6f6a7a]">
              Aurelle Hospitality Group is headquartered in France, operating hotels,
            restaurants and bars across a broad portfolio of brands. In France, each hotel&rsquo;s
            restaurant and bar operates under a license that sets the mandatory and optional items
            its food and bar menus must include, and every menu has to be reviewed against those
            terms. Quantiva Data.AI built a Vela-powered, pro-code application on Lumina to digitize
            that process.
            </p>
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>What Aurelle Hospitality Group Needed</div>
          <h2 className={ui.heading}>Consistent checks on menus that arrive in any format</h2>
          <BulletList items={NEEDS} twoUp />
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>The Application Quantiva Built</div>
          <h2 className={ui.heading}>A menu compliance agent on Lumina</h2>
          <p className={ui.lead}>
            A pro-code Lumina application, powered by Vela, that turns unstructured menu PDFs into
            license-checked, tracked decisions.
          </p>
          <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
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
          <div className={ui.kicker}>Guardrails</div>
          <h2 className={ui.heading}>Match score against the license</h2>
          <div className="grid gap-4.5 md:grid-cols-3">
            {GUARDRAILS.map((rail) => {
              const tone = GUARDRAIL_TONES[rail.tone]
              return (
                <div key={rail.band} className={`rounded-2xl border px-5.5 py-6 ${tone.wrap}`}>
                  <div
                    className={`text-[11px] font-bold uppercase tracking-[0.18em] ${tone.band}`}
                  >
                    {rail.band}
                  </div>
                  <div className={`mt-2 text-[19px] font-semibold ${tone.verdict}`}>
                    {rail.verdict}
                  </div>
                  <p className="mt-2 text-sm text-[#4a4552]">{rail.body}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>Before &amp; After</div>
          <h2 className={ui.heading}>From hand-checked PDFs to tracked decisions</h2>
          <div className="grid gap-4.5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#e6e3dc] bg-[#efeee7] px-5.5 py-6">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#6f6a7a]">
                Before
              </div>
              <p className="text-[14.5px] text-[#4a4552]">
                Hotels sent menus as PDFs and images, and admins reviewed each one by hand, often
                in Excel, to approve or reject it.
              </p>
            </div>
            <div className="rounded-2xl border border-[#7030b1]/20 bg-[linear-gradient(160deg,rgba(112,48,177,0.06),rgba(8,70,170,0.05))] px-5.5 py-6">
              <div className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7030b1]">
                After
              </div>
              <p className="text-[14.5px] text-[#4a4552]">
                Menus are uploaded, checked and decided in one application, with reviewers focused
                only on borderline cases and dashboards tracking every submission.
              </p>
            </div>
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>The Impact</div>
          <h2 className={ui.heading}>Every menu checked against the same rules</h2>
          <BulletList items={IMPACT} twoUp />
        </section>

        <section className={ui.section}>
          <div className="grid gap-8 md:grid-cols-2 md:gap-10">
            <div>
              <div className={ui.kicker}>Why Vela as the Foundation Model</div>
              <h2 className={ui.heading}>Meaning, not keyword matching</h2>
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
            Every menu checked, every decision tracked.
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
