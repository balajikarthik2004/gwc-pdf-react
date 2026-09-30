import { useEffect, useState } from 'react'
import AnchorwellHealthPage from './pages/AnchorwellHealthPage.jsx'
import ArcwellSystemsPage from './pages/ArcwellSystemsPage.jsx'
import AurelleHospitalityPage from './pages/AurelleHospitalityPage.jsx'
import BrightpathLearningPage from './pages/BrightpathLearningPage.jsx'
import SankalpaPage from './pages/SankalpaPage.jsx'
import VastraaRetailPage from './pages/VastraaRetailPage.jsx'

const PAGES = [
  { id: 'arcwell', label: 'Arcwell Systems', Page: ArcwellSystemsPage },
  { id: 'sankalpa', label: 'Sankalpa', Page: SankalpaPage },
  { id: 'vastraa', label: 'Vastraa Retail', Page: VastraaRetailPage },
  { id: 'aurelle', label: 'Aurelle Hospitality', Page: AurelleHospitalityPage },
  { id: 'anchorwell', label: 'Anchorwell Health', Page: AnchorwellHealthPage },
  { id: 'brightpath', label: 'Brightpath Learning', Page: BrightpathLearningPage },
]

const DEFAULT_ID = PAGES[0].id

function readHash() {
  const id = window.location.hash.replace('#', '')
  return PAGES.some((page) => page.id === id) ? id : DEFAULT_ID
}

export default function App() {
  const [active, setActive] = useState(readHash)

  useEffect(() => {
    const onHashChange = () => setActive(readHash())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const { Page } = PAGES.find((page) => page.id === active) ?? PAGES[0]

  return (
    <div className="bg-white font-[Poppins,ui-sans-serif,system-ui,sans-serif]">
      <nav
        aria-label="Case studies"
        className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-4 border-b border-[#e5e7eb] bg-white/90 px-6 py-3 backdrop-blur-[10px]"
      >
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-[#7030b1]">
          GWC Data.AI &middot; Solution Matters
        </span>
        <div className="flex flex-wrap gap-2">
          {PAGES.map((page) => (
            <a
              key={page.id}
              href={`#${page.id}`}
              aria-current={page.id === active ? 'page' : undefined}
              className={
                page.id === active
                  ? 'inline-block rounded-full border border-transparent bg-[linear-gradient(120deg,#6f2b8b,#0846aa)] px-4.5 py-2 text-[13.5px] font-medium text-white no-underline'
                  : 'inline-block rounded-full border border-[#e5e7eb] px-4.5 py-2 text-[13.5px] font-medium text-[#404040] no-underline transition-colors hover:border-[#b56dd3] hover:text-[#6f2b8b]'
              }
            >
              {page.label}
            </a>
          ))}
        </div>
      </nav>

      <main>
        <Page />
      </main>
    </div>
  )
}
