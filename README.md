# Leo Gong – Portfolio

A personal portfolio site built with Vite and React and hosted on GitHub Pages.

Live: https://majim3.github.io/portfolio

The hero section is a scroll-driven canvas animation that plays a sequence of frame images as you scroll.

## About

This portfolio was made as a summer project during my studies, to showcase the projects I have built.

## Tech stack

Packages declared in `package.json` and used in the source:

- Vite and `@vitejs/plugin-react`
- React and React DOM
- Bootstrap and React Bootstrap
- GSAP (`ScrollTrigger` drives the hero canvas)
- Font Awesome (`@fortawesome/react-fontawesome`, solid and brand icons)
- `react-scroll`, `react-intersection-observer`, `typewriter-effect`, `animate.css`
- Contact form: `react-hook-form`, `@web3forms/react`, `@hcaptcha/react-hcaptcha`, `sweetalert2`

## Getting started

```bash
npm install
npm run dev
npm run build
```

`npm run dev` starts the Vite development server. `npm run build` runs `vite build` and writes the production bundle to `dist`.

## Deployment

Every push to `master` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. A build job on `windows-latest` checks out the repository, sets up Node.js 20.14.0, runs `npm install` and `npm run build` (with `VITE_WEB3FORMS_KEY` from the repository secrets), and uploads `./dist` as the `production-files` artifact.
2. A deploy job on `ubuntu-latest` runs after the build, only on `refs/heads/master`. It downloads `production-files` into `./dist` and publishes it to GitHub Pages with `peaceiris/actions-gh-pages@v4`, using `GITHUB_TOKEN` and the `contents: write` permission.

## How it was built

Most of the site was built by hand. A Cursor coding agent was used near the end for specific fixes, under my direction.

## Why not WordPress?

The site was not made with WordPress or any other ready-made site builder. Building and publishing it from scratch was a deliberate choice, so the result shows my own skills.

## Contact

leo.gong.dev@gmail.com
