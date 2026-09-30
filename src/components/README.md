# Quantiva Data.AI case-study components

Nine self-contained React components, one per source PDF, styled with Tailwind CSS.

Client names in these components are **anonymized**. Each real client from the source PDFs was
replaced with an invented brand name that fits the same sector. Quantiva Data.AI and all technology
names (Vela, Lumina, Vizor, Metrix BI, Orbit, Fuselink, Axis) are unchanged.

| Folder | Component | Client name used | Sector |
| --- | --- | --- | --- |
| `ArcwellSystemsCaseStudy/` | `ArcwellSystemsCaseStudy` | Arcwell Systems | MSP / IT software |
| `SankalpaCaseStudy/` | `SankalpaCaseStudy` | Sankalpa | Spiritual technology |
| `VastraaRetailUseCase/` | `VastraaRetailUseCase` | Vastraa Retail | Fashion retail |
| `AurelleHospitalityCaseStudy/` | `AurelleHospitalityCaseStudy` | Aurelle Hospitality Group | Hospitality |
| `AnchorwellHealthCaseStudy/` | `AnchorwellHealthCaseStudy` | Anchorwell Health | Healthcare |
| `BrightpathLearningUseCase/` | `BrightpathLearningUseCase` | Brightpath Learning | Education |
| `AttainlyCaseStudy/` | `AttainlyCaseStudy` | Attainly | Education / certification |
| `EchorankCaseStudy/` | `EchorankCaseStudy` | Echorank AI | AI search / GEO |
| `NorthlineCreditUnionUseCase/` | `NorthlineCreditUnionUseCase` | Northline Credit Union | Financial services |

`NorthlineCreditUnionUseCase` documents a **demo implementation**, not a production deployment.
The hero eyebrow and the intro paragraph both say so; keep that wording if you reuse the page.

The invented names were chosen to avoid known real companies, but they were not run through a
trademark search. Check them before using these pages publicly.

Each folder contains just two files:

- `<Name>.jsx` - markup, Tailwind classes, and all copy in plain data arrays at the top, so text edits need no JSX changes.
- `index.js` - default and named export.

Each component renders the **case-study content only** - no site header or footer. The host app
supplies that chrome. In this project it comes from `src/site/` (`SiteHeader`, `SiteFooter`,
`HomePage`), which is app-level and deliberately not part of these portable folders.

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
2. **Poppins and Inter.** Add this to the host project's global CSS (it is the only global style these components rely on):

   ```css
   @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap');
   ```

3. **A `#f5f5f0` page canvas**, or accept the one each component sets on its own root. Cards are
   white and sit on this warm bone tone; on a pure-white page the cards lose their separation.

No `tailwind.config` entries are needed - brand colours are written as arbitrary values (`bg-[#7030b1]`), so nothing has to be registered in the host theme.

## Brand system

Derived from the reference site's stylesheet and splash screen.

**Type**
- Display / headings: **Poppins** 600-800, tight tracking (`-0.022em` and below at large sizes)
- Body / UI: **Inter** 300-700 - reads better than Poppins in long-form paragraphs

**Colour**
- **Signature gradient: `#7030B1` -> `#B56DD3`.** This is the one to reach for first - it appears
  88 times in the reference site's markup, on buttons, number chips, accent bars and as
  `bg-clip-text` on hover. Purple-to-lavender, not purple-to-blue.
- Dark sections: `#2B0F4D` -> `#4A1772` -> `#6B2BAB` -> `#7030B1`
- Canvas: `#f5f5f0` warm bone with white cards on top
- Accent: `#EF6706` orange, used sparingly on eyebrow dots and one footer badge
- Secondary blue: `#3688D6`, `#0846aa`, `#107ac6`
- Warm neutrals: `#14121a` ink, `#4a4552` body, `#6f6a7a` muted, `#e6e3dc` hairline, `#efeee7` recessed

**Shape**
- `rounded-full` is the dominant shape (116 uses on the reference site): pills for badges,
  buttons, nav items and the floating navbar
- `rounded-2xl` with `p-7`/`p-8` for cards

The neutrals are warm rather than cool (`#6f6a7a` not `#6b7280`) so they sit correctly on the bone
canvas; cool greys read as dirty against it.

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
  --color-brand-purple: #7030b1;
  --color-brand-blue: #0846aa;
}
```

That turns `bg-[#7030b1]` into `bg-brand-purple`, at the cost of the components depending on that
theme block being present.
