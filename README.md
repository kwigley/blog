# Kyle Wigley's Blog

A personal blog and project showcase built with Astro, Tailwind CSS, and MDX.

## Project Structure

```text
/
├── public/            # Static assets
├── src/
│   ├── components/    # Reusable UI components
│   ├── content/       # Blog posts and project collections
│   │   ├── blog/      # Blog articles
│   │   └── projects/  # Project showcases
│   ├── layouts/       # Page layouts
│   ├── lib/           # Utility functions
│   ├── pages/         # Route definitions
│   └── styles/        # Global styles
└── package.json
```

## Commands

All commands are run from the root of the project:

| Command           | Action                                |
| :---------------- | :------------------------------------ |
| `npm install`     | Installs dependencies                 |
| `npm run dev`     | Starts dev server at `localhost:4321` |
| `npm run build`   | Builds production site to `./dist/`   |
| `npm run preview` | Preview production build locally      |

## Features

- 📝 Content collections for blog posts and projects
- 🔍 Built-in search with PageFind
- 💬 Comments via Giscus
- 📱 Responsive design with Tailwind CSS
- 📊 RSS feed generation
- 🔄 Navigation between posts
- 🏷️ Tag filtering and tag cloud
