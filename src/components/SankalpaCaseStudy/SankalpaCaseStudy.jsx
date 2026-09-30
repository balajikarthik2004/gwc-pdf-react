/**
 * Quantiva x Sankalpa x Vela - Client Case Study
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
  tick: 'mt-0.75 grid h-5 w-5 flex-none place-items-center rounded-full bg-[#7030b1]/10 text-[11px] font-bold text-[#7030b1]',
}

const NEEDS = [
  {
    title: 'Cultural and ritual accuracy',
    body: 'guidance that respects tradition, region, language, and lineage.',
  },
  {
    title: 'Personalized experience at scale',
    body: 'every devotee served as if the platform knows their practice.',
  },
  {
    title: 'Safe, trustworthy interactions',
    body: 'moderation and quality control on a deeply personal category.',
  },
  {
    title: 'Consistent quality across formats',
    body: 'chat, voice, and video consultations held to the same standard.',
  },
]

const AGENTS = [
  {
    title: 'Devotee guidance',
    body: 'Answers questions on rituals, festivals, and practices with sources rooted in tradition and language of choice.',
  },
  {
    title: 'Consultation matching',
    body: 'Routes devotees to the right pandit or astrologer by tradition, region, language, and specialty.',
  },
  {
    title: 'Booking and pooja orchestration',
    body: 'Assembles the right package, materials, timings, and follow-ups for each ritual.',
  },
  {
    title: 'Community safety and moderation',
    body: 'Keeps Sankalpa Gram respectful and on-topic across a wide range of practices.',
  },
  {
    title: 'Devotional content assistance',
    body: 'Supports content curation and briefing across Sankalpa TV and in-app surfaces.',
  },
  {
    title: 'Human-in-the-loop oversight',
    body: 'Scholarly and expert review is calibrated to the stakes of each interaction.',
  },
]

const WHY_CLAUDE = [
  {
    title: 'Deep contextual reasoning',
    body: 'across scripture, tradition, language, and ritual detail.',
  },
  {
    title: 'Reliable, low-hallucination output',
    body: 'in a category where a wrong answer can undermine trust instantly.',
  },
  {
    title: 'Tool use and orchestration',
    body: 'across bookings, consultations, content, and community systems.',
  },
  {
    title: 'Safety and governance',
    body: 'designed for a personal, culturally sensitive domain.',
  },
]

const UNLOCKS = [
  {
    title: 'A more personal experience',
    body: 'for every devotee, across languages and traditions.',
  },
  {
    title: 'Faster onboarding',
    body: 'of verified temples, pandits, and devotional content.',
  },
  {
    title: 'Trustworthy interactions',
    body: 'in a category where trust is the product.',
  },
  {
    title: 'A reviewable, repeatable process',
    body: 'that scales without diluting the tradition it serves.',
  },
]

const WHY_GWC = [
  {
    title: 'Vela AI partner',
    body: 'for advanced reasoning, document intelligence, and human-in-the-loop decision systems.',
  },
  {
    title: '50+ prebuilt enterprise AI agents',
    body: 'across retail, finance, ops, and customer-facing workflows.',
  },
  {
    title: 'Innovation Lab',
    body: 'a sprint-based build engine (Meaningful, Methodical, Measurable) that ships production-ready agents on a recurring cadence.',
  },
  {
    title: 'Full-stack ownership',
    body: 'data to AI to insight to execution, one partner, one accountability.',
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

export default function SankalpaCaseStudy() {
  return (
    <article className="bg-[#f5f5f0] font-[Inter,ui-sans-serif,system-ui,sans-serif] leading-relaxed text-[#4a4552] antialiased">

      <section className="relative overflow-hidden bg-[linear-gradient(118deg,#2B0F4D_0%,#4A1772_38%,#6B2BAB_70%,#7030B1_100%)] pb-21 pt-19 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-[10%] -top-[40%] right-[60%] h-[460px] rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.18),transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[55%] -right-[12%] left-[52%] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(181,109,211,0.42),transparent_68%)]"
        />
        <div className={`relative z-10 ${ui.shell}`}>
          <span className="mb-5.5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.75 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85">
            Sankalpa &middot; Spiritual Tech Platform &middot; Powered by Vela
          </span>
          <h1 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] mb-2 max-w-[20ch] text-[clamp(30px,5vw,48px)] font-bold leading-[1.14] tracking-[-0.02em]">
            Bringing Vela-powered Agents to spiritual technology at Sankalpa
          </h1>
          <p className="max-w-[62ch] text-[clamp(15px,1.6vw,17.5px)] font-light text-white/85">
            Where ancient wisdom meets modern tech: pooja bookings, astrology, verified temples
            and devotional community, held to the standard the tradition deserves.
          </p>
        </div>
      </section>

      <div className={ui.shell}>
        <section className={ui.section}>
          <div className={ui.kicker}>The Client</div>
          <h2 className={ui.heading}>One distraction-free home for Indic spiritual practice</h2>
          <p className={ui.lead}>
            Sankalpa is a spiritual technology platform where ancient wisdom meets modern tech. It
            brings pooja bookings, astrology and pandit consultations, verified temples,
            devotional content, and a devotee community together in one distraction-free
            experience for practitioners of Hindu and broader Indic spirituality.
          </p>

          <figure className="m-0 rounded-2xl border border-[#7030b1]/20 border-l-4 border-l-[#7030b1] bg-[linear-gradient(135deg,#faf5ff,rgba(8,70,170,0.04))] px-9 py-8.5">
            <div className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7030b1]">
              In his own words
            </div>
            <blockquote className="m-0 mb-4.5 text-[clamp(17px,2.2vw,21px)] leading-[1.5] tracking-[-0.01em] text-[#14121a]">
              &ldquo;Ancient wisdom deserves technology that treats it with care. Quantiva helped us
              bring Vela into the heart of Sankalpa so that every recommendation, consultation, and
              piece of content reflects the tradition it comes from.&rdquo;
            </blockquote>
            <figcaption className="text-sm text-[#6f6a7a]">
              <b className="font-semibold text-[#14121a]">Arvind Raghunathan</b>, Chief Experience
              Officer, Sankalpa
            </figcaption>
          </figure>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>What Sankalpa Needed</div>
          <h2 className={ui.heading}>Accuracy and trust, at the scale of a community</h2>
          <BulletList items={NEEDS} twoUp />
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>The Agents Quantiva Built</div>
          <h2 className={ui.heading}>
            Six agents across guidance, matching, booking and community
          </h2>
          <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
            {AGENTS.map((agent) => (
              <div
                key={agent.title}
                className="rounded-2xl border border-[#e6e3dc] border-t-[3px] border-t-[#B56DD3] bg-white px-5.5 py-6 shadow-[0_1px_2px_rgba(20,18,26,0.04),0_10px_30px_-12px_rgba(20,18,26,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_2px_4px_rgba(20,18,26,0.04),0_18px_44px_-14px_rgba(112,48,177,0.22)]"
              >
                <h3 className="mb-2 text-[16.5px] font-semibold text-[#14121a]">{agent.title}</h3>
                <p className="text-sm text-[#6f6a7a]">{agent.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>Why Vela as the Foundation Model</div>
          <h2 className={ui.heading}>Built for a category where a wrong answer costs trust</h2>
          <BulletList items={WHY_CLAUDE} twoUp />
        </section>

        <section className={ui.section}>
          <div className="rounded-2xl border border-[#e6e3dc] bg-white px-7.5 py-8">
            <div className={ui.kicker}>What This Unlocks for Sankalpa</div>
            <h2 className={ui.heading}>Scale that does not dilute the tradition</h2>
            <BulletList items={UNLOCKS} twoUp />
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>Why Quantiva</div>
          <h2 className={ui.heading}>One partner, one accountability</h2>
          <BulletList items={WHY_GWC} twoUp />
        </section>
      </div>

      <section className="bg-[linear-gradient(120deg,#2B0F4D_0%,#6B2BAB_55%,#7030B1_100%)] py-15 text-center text-white">
        <div className={ui.shell}>
          <div className="mb-3.5 text-[clamp(20px,3.2vw,30px)] font-semibold tracking-[-0.015em]">
            Technology that treats ancient wisdom with care.
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
