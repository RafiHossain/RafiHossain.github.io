# RafiHossain.github.io

Academic research portfolio of **Al Hossain Rafi**, published at <https://rafihossain.github.io/>.

Built with [Astro](https://astro.build) and Tailwind CSS. It is a static site with no backend or database. Every push to `main` is built and deployed automatically by GitHub Actions.

---

## Where to edit things

All content lives in plain text files. You never need to touch the page layouts to update the site.

| What | File |
| --- | --- |
| Name, designation, biography, keywords, emails, profile links | `src/data/profile.ts` |
| Research interests and methods/tools list | `src/data/profile.ts` (`researchInterests`, `skills`) |
| Research themes and collaborators (Research page) | `src/data/research.ts` |
| Publications | `src/content/publications.yaml` |
| Research updates / news | `src/content/news.yaml` |
| Projects (one file per project) | `src/content/projects/*.md` |
| Education | `src/content/education.yaml` |
| Experience, training, leadership | `src/content/experience.yaml` |
| Profile photo | `src/assets/profile.jpg` |
| CV (PDF, optional) | `public/cv/Al_Hossain_Rafi_CV.pdf` |

You can edit any of these directly on GitHub: open the file, click the pencil icon, and commit. The site rebuilds in about a minute.

### Add a publication

Copy an existing block in `src/content/publications.yaml` and change the values:

```yaml
- id: my-new-paper-2026          # unique, no spaces
  title: Title of the paper
  authors: "Haydar, M.; Rafi, A. H.; Hosan, S."   # separated by semicolons
  year: 2026
  venue: Journal Name
  volume: "12"
  pages: "101234"
  doi: 10.xxxx/xxxxx             # without https://doi.org/
  pdf: /papers/my-new-paper.pdf  # optional; put the file in public/papers/
  type: journal                  # journal | conference | thesis
  status: published              # published | accepted | under-review | submitted | in-preparation
  selected: true                 # show on the home page
```

* Your name is bolded automatically when it is written exactly `Rafi, A. H.`.
* When a submitted paper is accepted, change its `status`, then add `authors`, `year` and `doi`.
* Publications are grouped automatically on the Publications page (journal, conference, submitted, thesis).

### Add a news item

Add a block at the top of `src/content/news.yaml`:

```yaml
- id: award-2026
  date: 2026-11-15
  text: "Received the XYZ award. [Details](https://example.org)"
```

Items are sorted by date. The newest six appear on the home page and the rest are kept in the file.

### Add a project

Create a new file in `src/content/projects/`, for example `my-project.md`:

```markdown
---
title: Project title
category: research          # research (with code) | academic (coursework / field study)
order: 4                    # lower numbers appear first
featured: true              # show on the home page
summary: One or two sentences.
problem: The research problem.
methods:
  - Method one
  - Method two
tools: [Python, Google Earth Engine]
repo: https://github.com/RafiHossain/repo-name     # optional
relatedPublication: id-from-publications-yaml      # optional
output: Key result in one sentence.                # optional
---

Optional longer description in Markdown.
```

### Update the photo

Save a square-ish portrait as `src/assets/profile.jpg` (or `.png` / `.webp`). It is resized and optimized automatically. Without a photo, the site shows your initials.

### Upload a CV (optional)

The site currently has no CV. To add one, save the PDF as `public/cv/Al_Hossain_Rafi_CV.pdf`. A "CV (PDF)" link then appears under your photo and on the contact page. The link stays hidden while the file is missing, so there are never broken links.

### Contact links

In `src/data/profile.ts`, fill in or clear the values under `links`. An empty string (`''`) hides that link everywhere. To show your phone number or postal address on the contact page, set `show: true`.

---

## Run locally (optional)

Requires [Node.js](https://nodejs.org) 22 or newer.

```bash
npm install
npm run dev       # http://localhost:4321, live reload
npm run build     # type-check and build into dist/
npm run preview   # serve the built site
```

> **Windows note:** if the project folder path is very long, Node can fail with
> `Named export 'walk' not found`. Move the folder to a shorter path (for example
> `C:\code\RafiHossain.github.io`) and run `npm install` again.

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes it with GitHub Pages on every push to `main`.

One-time setup: in the repository on GitHub, go to **Settings → Pages → Build and deployment → Source** and choose **GitHub Actions**.

## Project structure

```
src/
  content/          publications, news, projects, education, experience (edit these)
  content.config.ts schema that validates the content files
  data/             profile.ts and research.ts (edit these)
  assets/           profile photo
  components/       reusable pieces (publication entry, project entry, ...)
  layouts/          page shells
  pages/            one file per page: index, research, publications, projects, experience, contact
  styles/global.css colors, fonts and base styles
public/             files copied as-is (favicon, robots.txt, cv/, papers/)
```

The color palette is set in `src/styles/global.css` under `@theme`. Navy (`--color-navy`) is the single accent color.
