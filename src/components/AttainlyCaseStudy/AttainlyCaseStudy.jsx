/**
 * Quantiva x Attainly x Vela - Client Case Study
 * Styled entirely with Tailwind utility classes (Tailwind v4, no config needed).
 * Drop the whole folder into any Tailwind-enabled React project and import it.
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
  lead: 'mb-6 max-w-[68ch] text-[15.5px] leading-[1.7] text-[#6f6a7a]',
  tick: 'mt-0.75 grid h-5 w-5 flex-none place-items-center rounded-full bg-[#7030b1]/10 text-[11px] font-bold text-[#7030b1]',
}

const STATS = [
  { value: '3 tracks', label: 'Generative AI, Data Science and Machine Learning' },
  { value: 'Small team', label: 'operations leverage without linear headcount growth' },
  { value: '6 agents', label: 'from eligibility screening through to certification' },
]

const NEEDS = [
  {
    title: 'A consistent learner experience',
    body: 'every cohort supported to the same standard, whatever the track.',
  },
  {
    title: 'Operational leverage',
    body: 'a small operations team serving many learners across programs.',
  },
  {
    title: 'Faster, fairer eligibility screening',
    body: 'the right learner routed to the right track quickly.',
  },
  {
    title: 'Content that stays current',
    body: 'a curriculum that keeps up with a fast-moving AI and data landscape.',
  },
]

const AGENTS = [
  {
    title: 'Eligibility and track matching',
    body: 'Guides applicants through screening and routes them to the right program based on background and goals.',
  },
  {
    title: 'Learner assistance',
    body: 'Answers questions on concepts, assignments, and career paths in a supportive, on-brand voice.',
  },
  {
    title: 'Cohort operations',
    body: 'Handles routine scheduling, reminders, and follow-ups so the ops team focuses on higher-value work.',
  },
  {
    title: 'Assessment and feedback',
    body: 'Supports evaluators with structured, consistent feedback on open-ended learner submissions.',
  },
  {
    title: 'Curriculum refresh',
    body: 'Scans the AI and data landscape and flags content that needs updating across tracks.',
  },
  {
    title: 'Human-in-the-loop oversight',
    body: 'Instructor and operations review is calibrated to the stakes of each interaction.',
  },
]

const WHY_VELA = [
  {
    title: 'Deep contextual reasoning',
    body: 'across curriculum, learner history, and career context.',
  },
  {
    title: 'Reliable, low-hallucination output',
    body: 'essential when the answer shapes a learner’s next step.',
  },
  {
    title: 'Tool use and orchestration',
    body: 'across the LMS, scheduling, assessment, and communication systems.',
  },
  {
    title: 'Safety and governance',
    body: 'suited to a learner-facing platform with real career impact.',
  },
]

const UNLOCKS = [
  {
    title: 'Ops leverage across cohorts',
    body: 'without a linear increase in headcount.',
  },
  {
    title: 'A consistent learner experience',
    body: 'from eligibility check through certification.',
  },
  {
    title: 'Faster response times',
    body: 'on the questions learners ask most often.',
  },
  {
    title: 'A reviewable, repeatable process',
    body: 'that scales as new tracks are added.',
  },
]

const WHY_QUANTIVA = [
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

export default function AttainlyCaseStudy() {
  return (
    <article className="bg-[#f5f5f0] font-[Inter,ui-sans-serif,system-ui,sans-serif] leading-relaxed text-[#4a4552] antialiased">
      <section className="relative overflow-hidden bg-[linear-gradient(118deg,#2B0F4D_0%,#4A1772_38%,#6B2BAB_70%,#7030B1_100%)] pb-21 pt-19 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[55%] -right-[12%] left-[52%] h-[420px] rounded-full bg-[radial-gradient(circle,rgba(181,109,211,0.5),transparent_68%)]"
        />
        <div className={`relative z-10 ${ui.shell}`}>
          <span className="mb-5.5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.75 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/85">
            Attainly &middot; AI Certification Platform &middot; Powered by Vela
          </span>
          <h1 className="mb-2 max-w-[20ch] font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[clamp(30px,5vw,48px)] font-bold leading-[1.14] tracking-[-0.02em]">
            Bringing Vela-powered Agents to AI certification operations at Attainly
          </h1>
          <p className="max-w-[62ch] text-[clamp(15px,1.6vw,17.5px)] font-light text-white/85">
            Structured tracks that take learners from eligibility check through hands-on training
            to a recognized certification, and a job-ready position at the end.
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
              <div className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[clamp(21px,2.5vw,28px)] font-bold leading-tight tracking-[-0.025em] text-[#6f2b8b]">
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
                From eligibility check to a job-ready certification
              </h2>
            </div>
            <p className="text-[15.5px] leading-[1.75] text-[#6f6a7a]">
              Attainly is an AI certification and career platform. It runs structured tracks in
              Generative AI, Data Science and Machine Learning that take learners from eligibility
              check through hands-on training to a recognized certification, with the goal of
              putting them in a job-ready position at the end of the program.
            </p>
          </div>

          <figure className="m-0 mt-10 rounded-2xl border border-[#7030b1]/20 border-l-4 border-l-[#7030b1] bg-[linear-gradient(135deg,#faf5ff,rgba(181,109,211,0.06))] px-9 py-8.5">
            <div className="mb-3.5 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7030b1]">
              In her own words
            </div>
            <blockquote className="m-0 mb-4.5 text-[clamp(17px,2.2vw,21px)] leading-[1.5] tracking-[-0.01em] text-[#14121a]">
              &ldquo;As we scale across tracks and cohorts, our operations team can&rsquo;t grow
              linearly. Quantiva helped us bring Vela-powered agents into the core of how Attainly
              runs, so a small team can serve many learners well.&rdquo;
            </blockquote>
            <figcaption className="text-sm text-[#6f6a7a]">
              <b className="font-semibold text-[#14121a]">Meghana Iyer</b>, Head of Operations,
              Attainly
            </figcaption>
          </figure>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>What Attainly Needed</div>
          <h2 className={ui.heading}>Serve more learners without growing the team</h2>
          <BulletList items={NEEDS} twoUp />
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>The Agents Quantiva Built</div>
          <h2 className={ui.heading}>
            Six agents across screening, teaching, operations and assessment
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
          <h2 className={ui.heading}>When the answer shapes a learner&rsquo;s next step</h2>
          <BulletList items={WHY_VELA} twoUp />
        </section>

        <section className={ui.section}>
          <div className="rounded-2xl border border-[#e6e3dc] bg-white px-7.5 py-8">
            <div className={ui.kicker}>What This Unlocks for Attainly</div>
            <h2 className={ui.heading}>Scale that adds tracks, not headcount</h2>
            <BulletList items={UNLOCKS} twoUp />
          </div>
        </section>

        <section className={ui.section}>
          <div className={ui.kicker}>Why Quantiva</div>
          <h2 className={ui.heading}>One partner, one accountability</h2>
          <BulletList items={WHY_QUANTIVA} twoUp />
        </section>
      </div>

      <section className="bg-[linear-gradient(120deg,#2B0F4D_0%,#6B2BAB_55%,#7030B1_100%)] py-15 text-center text-white">
        <div className={ui.shell}>
          <div className="mb-3.5 font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[clamp(20px,3.2vw,30px)] font-bold tracking-[-0.025em]">
            A small team, serving many learners well.
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
