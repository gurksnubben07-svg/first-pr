# first-pr

A practice repository for learning the GitHub pull request workflow.

## What is this?

This repo exists so I can practice the full cycle of contributing to a project:

1. Create a branch
2. Make a small improvement
3. Push the branch to GitHub
4. Open a pull request
5. Review and merge it

## Why practice on a toy repo?

Because making mistakes here is completely safe. Nothing depends on this
code, so I can experiment with branches, commits, and pull requests until
the workflow feels natural.

---

## The app in this branch: "Cascade"

This branch contains a small web app: **Cascade — the creative engine for
commerce brands**. It recreates the structure and feel of a modern
creative-AI marketing site (hero prompt box, logo marquee, workflow tabs,
pricing, FAQ) plus an interactive demo **Studio** where prompts run a
simulated generation flow, with draggable text/CTA/badge/logo layers,
variations, a batch-render queue, and real PNG export drawn on a canvas.

All copy, imagery, and code are original to this repo (a fictional demo
brand) — nothing is copied from any real product's site or assets.

### Run it

```bash
npm install
npm run dev     # http://localhost:5173
npm run build   # production build in dist/
```

Built with React + Vite. Routing is hash-based: `#/` (landing) and
`#/studio` (interactive app).

## Useful commands

| Command | What it does |
| --- | --- |
| `git status` | Show which files have changed |
| `git switch -c my-branch` | Create and switch to a new branch |
| `git add .` | Stage all changes for commit |
| `git commit -m "message"` | Save staged changes as a commit |
| `git push` | Upload commits to GitHub |
