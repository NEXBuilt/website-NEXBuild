<<<<<<< HEAD
# NEXBuild — website

Next.js 14 (App Router) · TypeScript · Tailwind CSS · Geist font.
Static, no database, deploys anywhere (Vercel recommended).

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start   # production check
```

Requires Node 18.17+.

## Edit your content — one file

Almost everything you'll want to change lives in **`lib/data.ts`**:
site name, email, social links, services, projects / case studies, process steps, team, budget options.
Search for `EDIT ME` to find the placeholder values.

## Replace mockups with real screenshots

1. Put images in `public/projects/` (e.g. `urban-sensing.png`, ~1600×900).
2. In `lib/data.ts`, set `image: "/projects/urban-sensing.png"` for that project.

Until an image is set, a stylised browser mockup is shown. Same idea for people: add
photos to `public/team/` and set `photo: "/team/thinakar.jpg"`.

## Add a new project

Add another object to the `projects` array in `lib/data.ts`. Its page appears
automatically at `/work/<slug>`.

## Contact form

The form currently opens the visitor's email app (`mailto:`). To receive submissions
directly, replace `handleSubmit` in `components/ContactForm.tsx` with a `fetch()` to
[Formspree](https://formspree.io), Resend, or your own API route.

## Brand tweaks

- Accent colour: `tailwind.config.ts` → `colors.accent` (and `#4F46FF` in `components/Logo.tsx`, `app/icon.svg`)
- Domain for SEO / share cards: `metadataBase` in `app/layout.tsx`
- Logo: `components/Logo.tsx`

## Structure

```
app/
  page.tsx                 home (all sections)
  work/ services/ process/ team/ contact/
  work/[slug]/page.tsx     case study template
components/                Navbar, Hero, Services, FeaturedWork, Process, Why, Team, CTA, Contact…
lib/data.ts                all copy + content
```

## Deploy

Push to GitHub, import the repo in Vercel, done. No environment variables needed.
=======
# website-NEXBuild
>>>>>>> 287224b89737f3ffb22f1cc893137c5bc08c7337
