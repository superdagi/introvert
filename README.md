# Articles App - Nuxt 3 Project

A bilingual Nuxt 3 Vue.js application for managing and displaying articles in English and Norwegian.

## 🚀 Getting Started

### Prerequisites
- Node.js (v20.14.0 or higher recommended)
- npm

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

The app will be available at http://localhost:3000

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
├── content/
│   └── articles/
│       ├── *.md              # English articles
│       └── no/
│           └── *.md          # Norwegian articles
├── components/
│   └── ArticleCard.vue       # Article preview component
├── layouts/
│   └── default.vue           # Main layout
├── pages/
│   ├── index.vue            # Homepage with language switcher
│   └── [...slug].vue        # Dynamic article pages
├── assets/
│   └── css/
│       └── main.css         # Custom styling
├── nuxt.config.ts           # Nuxt configuration
└── package.json             # Dependencies and scripts
```

## 🌐 Language Support

The app supports both English and Norwegian articles:

- **English articles**: Located in `/content/articles/`
- **Norwegian articles**: Located in `/content/articles/no/`

### Adding New Articles

#### English Article
Create a new `.md` file in `/content/articles/`:

```markdown
---
title: 'Your Article Title'
description: 'Brief description'
date: '2026-03-20'
---

# Your Article Title

Your article content here...
```

#### Norwegian Article
Create a new `.md` file in `/content/articles/no/`:

```markdown
---
title: 'Din Artikkeltittel'
description: 'Kort beskrivelse'
date: '2026-03-20'
language: 'no'
---

# Din Artikkeltittel

Ditt artikkelinnhold her...
```

## 🎨 Features

- **Bilingual Support**: Switch between English and Norwegian articles
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Markdown Content**: Easy article creation with markdown
- **Code Syntax Highlighting**: Built-in syntax highlighting for code blocks
- **SEO Optimized**: Proper meta tags and structured content
- **Fast Performance**: Nuxt 3 with SSR and Vite
- **TypeScript Support**: Full type safety

## 🔧 Technology Stack

- **Framework**: Nuxt 3
- **Frontend**: Vue 3 with TypeScript
- **Content**: @nuxt/content for markdown processing
- **Styling**: Custom CSS with utility classes
- **Build**: Vite
- **SSR**: Nitro

## 📖 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

## 🎯 Article Topics

The current articles focus on introversion and social energy:

### English Articles
- Understanding Introversion: More Than Just Being Quiet
- Why Do People Make Me Tired?
- Is It Normal to Like Being Alone?
- Why Don't I Like Small Talk?

### Norwegian Articles (Norske Artikler)
- Forstå introversjon: Mer enn bare å være stille
- Hvorfor blir jeg sliten av mennesker?
- Er det normalt å like å være alene?
- Hvorfor liker jeg ikke small talk?

## 🤝 Contributing

1. Add new articles in the `/content/articles/` directory
2. Follow the frontmatter structure shown above
3. Test locally with `npm run dev`
4. Build to ensure no errors: `npm run build`

## 📝 License

This project is for personal/educational use.

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository or use this template
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:

```bash
npm run dev
```

Your app will be available at [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Generate Static Site

```bash
npm run generate
```

## Project Structure

```
├── .github/
│   └── copilot-instructions.md  # Copilot configuration
├── assets/
│   └── css/
│       └── main.css             # Global styles
├── components/
│   └── ArticleCard.vue          # Article preview component
├── content/
│   └── articles/                # Markdown articles
├── layouts/
│   └── default.vue              # Default layout
├── pages/
│   ├── index.vue                # Homepage (article list)
│   └── [...slug].vue            # Dynamic article pages
├── app.vue                      # Root component
├── nuxt.config.ts              # Nuxt configuration
└── package.json                # Dependencies and scripts
```

## Adding Articles

Create new articles by adding Markdown files to the `content/articles/` directory:

```markdown
---
title: 'Your Article Title'
description: 'Short description of your article'
date: '2026-03-20'
---

# Your Article Title

Your article content here...
```

Articles will automatically appear on the homepage and be accessible via their filename as a URL.

## Customization

- **Styling**: Edit `assets/css/main.css` for global styles
- **Layout**: Modify `layouts/default.vue` for the site structure
- **Components**: Create new components in the `components/` directory
- **Configuration**: Update `nuxt.config.ts` for Nuxt settings

## Development Tasks

The project includes VS Code tasks for easy development:

- **dev:start** - Start development server (runs in background)

Access tasks via VS Code Command Palette: `Tasks: Run Task`

## License

This project is private and proprietary.