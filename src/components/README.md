# GWC Data.AI case-study components

Six self-contained React components, one per source PDF, styled with Tailwind CSS.

Client names in these components are **anonymized**. Each real client from the source PDFs was
replaced with an invented brand name that fits the same sector. GWC Data.AI and all technology
names (Claude, Domo, Tableau, Power BI, Salesforce, Boomi, NetSuite) are unchanged.

| Folder | Component | Client name used | Sector |
| --- | --- | --- | --- |
| `ArcwellSystemsCaseStudy/` | `ArcwellSystemsCaseStudy` | Arcwell Systems | MSP / IT software |
| `SankalpaCaseStudy/` | `SankalpaCaseStudy` | Sankalpa | Spiritual technology |
| `VastraaRetailUseCase/` | `VastraaRetailUseCase` | Vastraa Retail | Fashion retail |
| `AurelleHospitalityCaseStudy/` | `AurelleHospitalityCaseStudy` | Aurelle Hospitality Group | Hospitality |
| `AnchorwellHealthCaseStudy/` | `AnchorwellHealthCaseStudy` | Anchorwell Health | Healthcare |
| `BrightpathLearningUseCase/` | `BrightpathLearningUseCase` | Brightpath Learning | Education |

The invented names were chosen to avoid known real companies, but they were not run through a
trademark search. Check them before using these pages publicly.

Each folder contains just two files:

- `<Name>.jsx` - markup, Tailwind classes, and all copy in plain data arrays at the top, so text edits need no JSX changes.
- `index.js` - default and named export.

## Reusing in another project

Copy the whole folder across and import it:

```jsx
import ArcwellSystemsCaseStudy from './components/ArcwellSystemsCaseStudy'

export default function Page() {
  return <ArcwellSystemsCaseStudy />
}
```

### What the host project must provide

1. **Tailwind CSS v4**, already processing the folder you copy into. Tailwind scans source files for class names, so components dropped outside the scanned paths will render unstyled.
2. **The Poppins font.** Add this to the host project's global CSS (it is the only global style these components rely on):

   ```css
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
   ```

No `tailwind.config` entries are needed - brand colours are written as arbitrary values (`bg-[#7030b1]`), so nothing has to be registered in the host theme.

## Brand system

Taken from the live styling on https://gwcdata.ai:

- Font: **Poppins** (300/400/500/600/700/800)
- Purple: `#7030b1` primary, `#6f2b8b` deep, `#8c49bf` light, `#b56dd3` soft
- Blue: `#0846aa`, `#107ac6`, `#3688d6`
- Neutrals: `#1a1a1a`, `#404040`, `#6b7280`, `#e5e7eb`, `#fafafa`, `#f3f4f6`

## Rebranding

Each component defines a `ui` object at the top of its file holding the repeated class strings
(`shell`, `section`, `kicker`, `heading`, `lead`, `card`, `tick`). Editing those covers most of
the look in one place; the hero gradients and accent colours are inline on their own elements.

Two components carry extra accent colours beyond the core palette, taken from their source PDFs:
`AccorCaseStudy` uses green / amber / red for the guardrail score bands, and
`CurriculumAssociatesUseCase` uses amber (`#fbbf24`) on dark cards for its results figures.

If you would rather use semantic names than hex values, register the palette once in the host
project's CSS and swap the arbitrary values for the generated utilities:

```css
@theme {
  --color-gwc-purple: #7030b1;
  --color-gwc-blue: #0846aa;
}
```

That turns `bg-[#7030b1]` into `bg-gwc-purple`, at the cost of the components depending on that
theme block being present.
