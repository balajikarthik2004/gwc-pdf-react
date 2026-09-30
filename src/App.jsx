import { useEffect, useState } from 'react'
import AnchorwellHealthPage from './pages/AnchorwellHealthPage.jsx'
import ArcwellSystemsPage from './pages/ArcwellSystemsPage.jsx'
import AttainlyPage from './pages/AttainlyPage.jsx'
import AurelleHospitalityPage from './pages/AurelleHospitalityPage.jsx'
import BrightpathLearningPage from './pages/BrightpathLearningPage.jsx'
import EchorankPage from './pages/EchorankPage.jsx'
import NorthlineCreditUnionPage from './pages/NorthlineCreditUnionPage.jsx'
import SankalpaPage from './pages/SankalpaPage.jsx'
import VastraaRetailPage from './pages/VastraaRetailPage.jsx'
import HomePage from './site/HomePage.jsx'
import SiteFooter from './site/SiteFooter.jsx'
import SiteHeader from './site/SiteHeader.jsx'

const PAGES = [
  {
    id: 'arcwell',
    label: 'Arcwell Systems',
    navLabel: 'Arcwell',
    sector: 'MSP / IT Software',
    blurb:
      'A back-office agent that watches every hand-off in the lead-to-cash flow, auto-fixing what it can and escalating the rest.',
    metric: 'Zero missed orders',
    Page: ArcwellSystemsPage,
  },
  {
    id: 'sankalpa',
    label: 'Sankalpa',
    navLabel: 'Sankalpa',
    sector: 'Spiritual Technology',
    blurb:
      'Six agents across guidance, consultation matching, booking and community moderation, held to the standard the tradition deserves.',
    metric: '6 agents live',
    Page: SankalpaPage,
  },
  {
    id: 'vastraa',
    label: 'Vastraa Retail',
    navLabel: 'Vastraa',
    sector: 'Fashion Retail',
    blurb:
      'Team-built playbooks watch trading on schedule, raise category insights, and follow every action through to closure.',
    metric: '4 agents, one network',
    Page: VastraaRetailPage,
  },
  {
    id: 'aurelle',
    label: 'Aurelle Hospitality',
    navLabel: 'Aurelle',
    sector: 'Hospitality',
    blurb:
      'Menu PDFs in any language or layout, checked against each hotel licence, then approved, rejected or routed for review.',
    metric: '3 decision paths',
    Page: AurelleHospitalityPage,
  },
  {
    id: 'anchorwell',
    label: 'Anchorwell Health',
    navLabel: 'Anchorwell',
    sector: 'Healthcare',
    blurb:
      'Failed pipeline and cloud runs come back with a root cause and a recommended fix, with no manual log analysis.',
    metric: 'Every run explained',
    Page: AnchorwellHealthPage,
  },
  {
    id: 'brightpath',
    label: 'Brightpath Learning',
    navLabel: 'Brightpath',
    sector: 'Education',
    blurb:
      'A migration accelerator that moved 21 multi-page dashboards, over 40 report pages, from Vizor to Metrix BI.',
    metric: '~8x faster',
    Page: BrightpathLearningPage,
  },
  {
    id: 'attainly',
    label: 'Attainly',
    navLabel: 'Attainly',
    sector: 'Education / Certification',
    blurb:
      'Six agents covering eligibility screening, learner support, cohort ops and assessment, so a small team serves many learners.',
    metric: '3 tracks, one team',
    Page: AttainlyPage,
  },
  {
    id: 'echorank',
    label: 'Echorank AI',
    navLabel: 'Echorank',
    sector: 'AI Search / GEO',
    blurb:
      'Thousands of prompts tested continuously across answer engines, turning raw visibility signals into changes marketing can act on.',
    metric: '4 engines monitored',
    Page: EchorankPage,
  },
  {
    id: 'northline',
    label: 'Northline Credit Union',
    navLabel: 'Northline',
    sector: 'Financial Services',
    blurb:
      'A demo utility that reads loan documents with image understanding and extracts the fields, with compliance built in.',
    metric: 'Up to 8% recovered',
    Page: NorthlineCreditUnionPage,
  },
]

const HOME_ID = 'home'

function readHash() {
  const id = window.location.hash.replace('#', '')
  return PAGES.some((page) => page.id === id) ? id : HOME_ID
}

export default function App() {
  const [active, setActive] = useState(readHash)

  useEffect(() => {
    const onHashChange = () => {
      setActive(readHash())
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const current = PAGES.find((page) => page.id === active)

  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f0]">
      <SiteHeader pages={PAGES} active={active} onHome={() => setActive(HOME_ID)} />

      <main className="flex-1">{current ? <current.Page /> : <HomePage pages={PAGES} />}</main>

      <SiteFooter pages={PAGES} />
    </div>
  )
}
