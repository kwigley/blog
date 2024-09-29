# CLAUDE.md - Coding Guidelines

## Build Commands

- Development: `npm run dev` or `bun run dev` (starts Astro dev server)
- Build: `npm run build` or `bun run build` (runs type check and builds)
- Preview: `npm run preview` (previews built site)

## Code Style

- **Formatting**: Uses Prettier with Astro and Tailwind plugins
- **Types**: TypeScript with strict null checks enabled
- **Imports**: Use path aliases with `@` prefix for src directory
- **Components**: PascalCase for component files
- **Utilities**: camelCase for utility files and functions
- **Content**: Organized in collections (blog, projects)

## Project Structure

- Astro components in `src/components/`
- Page routes in `src/pages/`
- Content collections in `src/content/`
- Shared layouts in `src/layouts/`
- Utility functions in `src/lib/`

## Convention Notes

- Use Tailwind for styling via class attributes
- Leverages Astro's content collections for blog posts and projects
- Components should be small, focused, and reusable
