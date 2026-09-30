/**
 * Landing page. Design language taken from the reference site:
 * #7030B1 -> #B56DD3 signature gradient, pill shapes, concentric rings.
 */

const CAPABILITIES = [
  {
    title: 'Agent engineering',
    body: 'Production agents that act through tools and APIs, not chat demos.',
  },
  {
    title: 'Data & BI foundations',
    body: 'Governed pipelines and dashboards the agents can be trusted to read.',
  },
  {
    title: 'Human-in-the-loop',
    body: 'Guardrails that decide what ships automatically and what needs a person.',
  },
]

const MARQUEE = [
  'Lead-to-cash',
  'Merchandising',
  'Menu compliance',
  'Pipeline triage',
  'BI migration',
  'Devotee guidance',
  'Action tracking',
  'Document intelligence',
  'Certification ops',
  'GEO visibility',
  'Loan documents',
]

export default function HomePage({ pages }) {
  return (
    <div className="font-[Inter,ui-sans-serif,system-ui,sans-serif] text-[#4a4552] antialiased">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-[22%] -top-[65%] h-[900px] w-[900px] rounded-full bg-[radial-gradient(circle,rgba(112,48,177,0.18),rgba(181,109,211,0.07)_45%,transparent_70%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[70%] -left-[18%] h-[720px] w-[720px] rounded-full bg-[radial-gradient(circle,rgba(54,136,214,0.14),transparent_68%)]"
        />

        <div className="relative z-10 mx-auto grid w-full max-w-[1250px] items-center gap-14 px-6 pb-16 pt-14 lg:grid-cols-[1.08fr_0.92fr] lg:pb-20 lg:pt-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#7030B1]/15 bg-white/70 py-1.5 pl-1.5 pr-4 text-[11px] font-bold uppercase tracking-[0.18em] text-[#7030B1] backdrop-blur">
              <span className="rounded-full bg-gradient-to-r from-[#7030B1] to-[#B56DD3] px-2.5 py-1 text-white">
                {pages.length}
              </span>
              Client engagements
            </span>

            <h1 className="mt-5 font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[clamp(36px,5.6vw,60px)] font-extrabold leading-[1.03] tracking-[-0.04em] text-[#14121a]">
              Agentic AI, shipped into{' '}
              <span className="bg-gradient-to-b from-[#7030B1] to-[#B56DD3] bg-clip-text text-transparent">
                real operations
              </span>
            </h1>

            <p className="mt-5 max-w-[54ch] text-[16.5px] leading-[1.6] text-[#6f6a7a]">
              Quantiva Data.AI puts Vela-powered agents into the back office, the trading floor,
              the service desk and the reporting estate — then measures what actually changed.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={`#${pages[0].id}`}
                className="rounded-full bg-gradient-to-r from-[#7030B1] to-[#B56DD3] px-6 py-3.5 text-[14px] font-semibold text-white no-underline shadow-[0_8px_24px_-8px_rgba(112,48,177,0.7)] transition-transform hover:-translate-y-0.5"
              >
                Explore the work
              </a>
              <a
                href="#brightpath"
                className="rounded-full border border-[#14121a]/12 bg-white px-6 py-3.5 text-[14px] font-semibold text-[#14121a] no-underline transition-colors hover:border-[#7030B1]/35 hover:text-[#7030B1]"
              >
                ~8x faster BI migration
              </a>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-[#e6e3dc] pt-6">
              {[
                [String(new Set(pages.map((p) => p.sector)).size), 'Industries'],
                ['25+', 'Agents built'],
                ['L1–L2', 'Handled autonomously'],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[23px] font-bold tracking-[-0.03em] text-[#14121a]">
                    {value}
                  </dt>
                  <dd className="mt-0.5 text-[12.5px] leading-snug text-[#6f6a7a]">{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Concentric ring motif, echoing the reference site */}
          <div className="relative hidden aspect-square items-center justify-center lg:flex">
            <div className="absolute inset-0 rounded-full border border-[#7030B1]/8" />
            <div className="absolute inset-[11%] rounded-full border border-[#7030B1]/12" />
            <div className="absolute inset-[22%] rounded-full border border-[#7030B1]/16" />
            <div className="absolute inset-[33%] rounded-full bg-gradient-to-br from-[#7030B1]/[0.07] to-[#B56DD3]/[0.03] backdrop-blur-sm" />

            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.title}
                className="absolute w-[76%] rounded-2xl border border-white/80 bg-white/90 p-5 shadow-[0_2px_8px_rgba(20,18,26,0.05),0_18px_44px_-18px_rgba(112,48,177,0.35)] backdrop-blur-sm"
                style={{
                  top: `${13 + i * 27}%`,
                  left: i % 2 === 0 ? '2%' : 'auto',
                  right: i % 2 === 0 ? 'auto' : '2%',
                }}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#7030B1] to-[#B56DD3] text-[11px] font-bold text-white">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[14px] font-bold tracking-[-0.01em] text-[#14121a]">
                      {cap.title}
                    </h3>
                    <p className="mt-1 text-[12.5px] leading-snug text-[#6f6a7a]">{cap.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marquee strip ──────────────────────────────────────── */}
      <section className="overflow-hidden border-y border-[#e6e3dc] bg-white/60 py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 px-6">
          {MARQUEE.map((item) => (
            <span
              key={item}
              className="rounded-full border border-[#e6e3dc] bg-white px-3.5 py-1.5 text-[12px] font-medium text-[#6f6a7a]"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* ── Case study grid ────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-[1250px] px-6 py-16 lg:py-20">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div>
            <div className="mb-3 flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-[#7030B1]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#EF6706]" />
              The Work
            </div>
            <h2 className="max-w-[22ch] font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[clamp(26px,3.6vw,38px)] font-extrabold leading-[1.1] tracking-[-0.032em] text-[#14121a]">
              {pages.length} engagements, {pages.length} measurable outcomes
            </h2>
          </div>
          <p className="max-w-[34ch] text-[14.5px] leading-relaxed text-[#6f6a7a]">
            Each one built against real operations, with the before-and-after stated plainly.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pages.map((page, i) => (
            <a
              key={page.id}
              href={`#${page.id}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#e6e3dc] bg-white p-7 no-underline shadow-[0_1px_2px_rgba(20,18,26,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#7030B1]/25 hover:shadow-[0_2px_6px_rgba(20,18,26,0.04),0_26px_56px_-20px_rgba(112,48,177,0.4)]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[#7030B1] to-[#B56DD3] transition-transform duration-300 group-hover:scale-x-100"
              />
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-[#7030B1]/[0.07] px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#7030B1]">
                  {page.sector}
                </span>
                <span className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[12px] font-bold text-[#e6e3dc]">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-5 font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[21px] font-bold leading-snug tracking-[-0.025em] text-[#14121a] transition-all duration-200 group-hover:bg-gradient-to-b group-hover:from-[#7030B1] group-hover:to-[#B56DD3] group-hover:bg-clip-text group-hover:text-transparent">
                {page.label}
              </h3>
              <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-[#6f6a7a]">
                {page.blurb}
              </p>

              <span className="mt-6 flex items-center justify-between border-t border-[#e6e3dc] pt-4">
                <span className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[17px] font-bold tracking-[-0.02em] text-[#7030B1]">
                  {page.metric}
                </span>
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 place-items-center rounded-full bg-[#f5f5f0] text-[14px] text-[#6f6a7a] transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-[#7030B1] group-hover:to-[#B56DD3] group-hover:text-white"
                >
                  &rarr;
                </span>
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ── Closing band ───────────────────────────────────────── */}
      <section className="mx-auto w-full max-w-[1250px] px-6 pb-20">
        <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(120deg,#2B0F4D_0%,#6B2BAB_52%,#7030B1_100%)] px-8 py-14 text-center sm:px-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-[10%] -top-[80%] h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(181,109,211,0.45),transparent_66%)]"
          />
          <div className="relative z-10">
            <h2 className="mx-auto max-w-[22ch] font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[clamp(25px,3.6vw,38px)] font-extrabold leading-[1.12] tracking-[-0.032em] text-white">
              Data to AI to insight to action, with one accountability.
            </h2>
            <p className="mx-auto mt-4 max-w-[52ch] text-[15px] leading-relaxed text-white/65">
              The Innovation Lab ships production-ready agents on a recurring cadence —
              meaningful, methodical, measurable.
            </p>
            <a
              href={`#${pages[0].id}`}
              className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-[14px] font-semibold text-[#2B0F4D] no-underline transition-transform hover:-translate-y-0.5"
            >
              Start with Arcwell Systems
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
