/**
 * Site chrome - floating pill navbar, matching the reference site's pattern:
 * rounded-full, white, backdrop-blur, centred with a max width and top margin.
 */

export default function SiteHeader({ pages, active, onHome }) {
  return (
    <div className="sticky top-0 z-50 px-4 pb-2 pt-4">
      <header className="mx-auto flex h-16 w-full max-w-[1250px] items-center justify-between gap-6 rounded-full border border-white/60 bg-white/85 px-3 pl-5 shadow-[0_2px_8px_rgba(20,18,26,0.04),0_12px_32px_-12px_rgba(112,48,177,0.18)] backdrop-blur-xl">
        <a
          href="#home"
          onClick={onHome}
          className="flex shrink-0 items-center gap-2.5 no-underline"
          aria-label="Quantiva Data.AI home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-[#7030B1] to-[#B56DD3] text-[14px] font-bold text-white shadow-[0_4px_12px_-2px_rgba(112,48,177,0.5)]">
            Q
          </span>
          <span className="font-[Poppins,ui-sans-serif,system-ui,sans-serif] text-[15px] font-extrabold tracking-[-0.02em] text-[#14121a]">
            QUANTIVA
            <span className="bg-gradient-to-b from-[#7030B1] to-[#B56DD3] bg-clip-text text-transparent">
              {' '}
              DATA.AI
            </span>
          </span>
        </a>

        <nav aria-label="Case studies" className="hidden items-center gap-0.5 lg:flex">
          {pages.map((page) => {
            const isActive = page.id === active
            return (
              <a
                key={page.id}
                href={`#${page.id}`}
                aria-current={isActive ? 'page' : undefined}
                className={
                  isActive
                    ? 'rounded-full bg-gradient-to-r from-[#7030B1] to-[#B56DD3] px-4 py-2 text-[13px] font-semibold text-white no-underline shadow-[0_4px_12px_-3px_rgba(112,48,177,0.55)]'
                    : 'group rounded-full px-4 py-2 text-[13px] font-medium text-[#6f6a7a] no-underline transition-colors hover:bg-[#7030B1]/[0.06]'
                }
              >
                <span
                  className={
                    isActive
                      ? ''
                      : 'transition-all duration-200 group-hover:bg-gradient-to-b group-hover:from-[#7030B1] group-hover:to-[#B56DD3] group-hover:bg-clip-text group-hover:text-transparent'
                  }
                >
                  {page.navLabel}
                </span>
              </a>
            )
          })}
        </nav>

        <a
          href="#home"
          onClick={onHome}
          className="shrink-0 rounded-full bg-[#14121a] px-5 py-2.5 text-[13px] font-semibold text-white no-underline transition-transform hover:-translate-y-0.5"
        >
          All work
        </a>
      </header>

      {/* Compact nav for narrow screens */}
      <nav
        aria-label="Case studies"
        className="mx-auto mt-2 flex w-full max-w-[1250px] gap-1.5 overflow-x-auto rounded-full border border-white/60 bg-white/85 px-3 py-2 backdrop-blur-xl lg:hidden"
      >
        {pages.map((page) => (
          <a
            key={page.id}
            href={`#${page.id}`}
            className={
              page.id === active
                ? 'shrink-0 rounded-full bg-gradient-to-r from-[#7030B1] to-[#B56DD3] px-3.5 py-1.5 text-[12.5px] font-semibold text-white no-underline'
                : 'shrink-0 rounded-full px-3.5 py-1.5 text-[12.5px] font-medium text-[#6f6a7a] no-underline'
            }
          >
            {page.navLabel}
          </a>
        ))}
      </nav>
    </div>
  )
}
