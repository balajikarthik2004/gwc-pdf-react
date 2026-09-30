/**
 * Site chrome - footer. App-level, not part of the portable components.
 */

export default function SiteFooter({ pages }) {
  return (
    <footer className="relative overflow-hidden bg-[#14121a] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-[8%] -top-[60%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(112,48,177,0.32),transparent_66%)]"
      />
      <div className="relative z-10 mx-auto w-full max-w-[1250px] px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#7030B1] to-[#B56DD3] text-[14px] font-bold text-white">
                Q
              </span>
              <span className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[15px] font-extrabold tracking-[-0.02em]">
                QUANTIVA
                <span className="bg-gradient-to-b from-[#B56DD3] to-[#7030B1] bg-clip-text text-transparent">
                  {' '}
                  DATA.AI
                </span>
              </span>
            </div>
            <p className="mt-4 max-w-[40ch] text-[14px] leading-relaxed text-white/50">
              Data, BI and Agentic AI for enterprise teams. One partner, one accountability,
              from data through to action.
            </p>
            <span className="mt-5 inline-block rounded-full border border-[#EF6706]/30 bg-[#EF6706]/10 px-3.5 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#EF6706]">
              Solution Matters
            </span>
          </div>

          {(() => {
            const half = Math.ceil(pages.length / 2)
            return [
              { title: 'Case Studies', items: pages.slice(0, half) },
              { title: 'More Work', items: pages.slice(half) },
            ]
          })().map((col) => (
            <div key={col.title}>
              <h3 className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-white/35">
                {col.title}
              </h3>
              <ul className="mt-4 grid gap-2.5">
                {col.items.map((page) => (
                  <li key={page.id}>
                    <a
                      href={`#${page.id}`}
                      className="group inline-flex items-center gap-2 text-[14px] text-white/65 no-underline transition-colors hover:text-white"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#B56DD3] opacity-0 transition-opacity group-hover:opacity-100" />
                      {page.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-[12.5px] text-white/40">
          <span>Data. BI. Agentic AI.</span>
          <span>www.quantivadata.ai</span>
        </div>
      </div>
    </footer>
  )
}
