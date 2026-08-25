# Musa Tutoring — Website

The website for Musa Tutoring, musatutoring.org.

## Start here

| If you want to... | Read |
| --- | --- |
| Put the site live for the first time | **LAUNCH-GUIDE.md** |
| Change text, add a tutor, add a review | **OWNERS-GUIDE.md** |

## What this is

A static website. There is no database and no server, so there is no monthly
bill and nothing that breaks because a subscription lapsed.

Two things live outside the website:

| Job | Where it happens |
| --- | --- |
| Enquiries, booking, scheduling, invoices, payments | TutorCruncher |
| Email, calendar, documents | Google Workspace on musatutoring.org |

The website's job is to explain the offer and feed enquiries into TutorCruncher.

## How it publishes

Hosted free on GitHub Pages. Every commit to `main` triggers
`.github/workflows/deploy.yml`, which builds the site and publishes it in about
two minutes. You never build anything yourself.

## Where things live

```
src/content/     All the words on the site. This is the only folder
                 you normally need to touch.
src/components/  The page sections (hero, services, contact, ...)
src/pages/       Home page and the Pathways page
src/assets/      Logo and hero image
public/          Favicon, share image, robots.txt, sitemap.xml,
                 and 404.html (required — do not delete)
```

## Built with

Vite, React, TypeScript, Tailwind CSS, shadcn/ui.

## For a developer

```sh
npm install
npm run dev      # local preview at http://localhost:8080
npm run build    # production build into dist/
```
