# CLAUDE.md - Development Guidelines

## Build & Development Commands

- 🚀 `npm run dev` - Start development server
- 🏗️ `npm run build` - Build for production
- 🚀 `npm run start` - Start production server
- 🔍 `npm run lint` - Run all linters
- 🎨 `npm run lint:style` - Lint CSS with stylelint
- 🧹 `npm run lint:biome` - Lint with Biome
- ✨ `npm run lint:prettier` - Format with Prettier
- 📂 `npm run mdx:timestamps` - Update MDX file timestamps

## Code Style Guidelines

- **TypeScript**: Strict mode enabled, use explicit typing
- **Formatting**: 2-space indentation, 160 char line width, double quotes
- **Imports**: Order by types → built-ins → third-party → local
  - Use absolute imports with `@/` prefix
- **CSS**: Tailwind CSS with postcss-nested, follow stylelint rules
- **Components**: React functional components with TypeScript
- **Naming**: PascalCase for components, camelCase for functions/variables
- **Error Handling**: Use TypeScript types for error prevention
- **Linting**: Biome for JS/TS/JSX/TSX, Stylelint for CSS

Always run linting before committing changes.
