# Leo Gong

Leo Gong's personal portfolio site, built with Vite and React and hosted on GitHub Pages.

Live: https://majim3.github.io/portfolio

The hero is a scroll-driven canvas animation that plays frame images as you scroll.

## About

Leo built this portfolio during his studies as a summer project to showcase the projects he has made.

## Tech stack

Packages declared in `package.json` and used in the source:

- Vite and `@vitejs/plugin-react`
- React and React DOM
- Bootstrap and React Bootstrap
- GSAP (`ScrollTrigger` drives the hero canvas)
- Font Awesome (`@fortawesome/react-fontawesome`, solid and brand icons)
- `react-scroll`, `react-intersection-observer`, `typewriter-effect`, `animate.css`
- Contact form: `react-hook-form`, `@web3forms/react`, `@hcaptcha/react-hcaptcha`, `sweetalert2`

## Run

```bash
npm install
npm run dev
npm run build
```

`npm run dev` starts the Vite dev server. `npm run build` runs `vite build` and writes the production bundle to `dist`.

## Deployment

Pushes to `master` run [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).

1. On `windows-latest`, the workflow checks out the repository, sets up Node.js 20.14.0, runs `npm install`, then `npm run build` with `VITE_WEB3FORMS_KEY` from repository secrets, and uploads `./dist` as the `production-files` artifact.
2. On `ubuntu-latest`, after that job and only when `github.ref` is `refs/heads/master`, the workflow (permission `contents: write`) downloads `production-files` into `./dist` and publishes that directory with `peaceiris/actions-gh-pages@v4` (`github_token`: `GITHUB_TOKEN`, `publish_dir`: `./dist`).

## How it was built

Leo built most of the site himself. In the final stage he used Cursor's AI coding agent for specific fixes, under his own direction.

## Contact

leo.gong.dev@gmail.com
