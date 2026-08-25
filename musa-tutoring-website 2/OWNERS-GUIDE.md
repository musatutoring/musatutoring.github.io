# Musa Tutoring — Owner's Guide

Everything you need to edit, publish and hand-manage this website. No coding background assumed.

---

## 1. What this website is

It is a **static website**. That means it is a set of files that get uploaded to a host — there is no database, no server, and no monthly software bill. Nothing can break because a subscription lapsed.

Because of that, two things live outside the website:

| Job | Where it happens |
| --- | --- |
| Booking, scheduling, invoices, payments, CRM | **TutorCruncher** ($30/mo plan) |
| Email, calendar, documents | **Google Workspace** on `musatutoring.org` |

The website's job is to explain the offer and send people into TutorCruncher.

---

## 2. Editing the site content

**All the text you will ever need to change lives in one folder: `src/content/`.**

You do not need to touch anything else.

| File | What it controls |
| --- | --- |
| `program.ts` | **The most important file.** Dates, number of places, what is included, the two promises, the pricing wording, the credibility figures |
| `site.ts` | Business name, phone, email, office address, **the booking link**, **enquiry form key** |
| `process.ts` | The four enrolment steps and the weekly rhythm |
| `curriculum.ts` | The courses you teach |
| `faq.ts` | The questions and answers |
| `tutors.ts` | Who teaches — add or remove people here |
| `testimonials.ts` | Parent reviews (empty on purpose; the section stays hidden until you add one) |

### The two things you will change most often

**When enrolment closes.** In `program.ts`:

```
enrolmentCloses: '2026-08-30',
enrolmentClosesLabel: 'August 30',
```

Change both. The first drives the countdown, the second is what parents read. Once
that date passes, the whole site switches itself to waiting-list mode — the headings
change, the enquiry form becomes a waiting list, and the footer follows. You do not
need to edit anything on the day.

**The number of places.** In `program.ts`:

```
seatsTotal: 20,
```

### Check these before you advertise

`program.ts` contains four credibility figures. Three came from you. The fourth,
hours of instruction delivered, is an estimate — replace it with the real number or
remove that entry entirely.

### The rules for editing

1. Only change the text **between the quote marks**.
2. Never delete a comma, a quote mark, or a curly brace `{ }`.
3. If a word has an apostrophe inside single quotes, write it as `\'` — e.g. `'the student\'s plan'`.
4. Save, then look at the site. If it goes blank, undo your last change.

### Adding a tutor

Open `src/content/tutors.ts`, copy one whole block from `{` down to `},`, paste it below the others, and change the details. The website adds the card automatically.

### Adding a testimonial

Open `src/content/testimonials.ts`. There is an example block commented out with `/*` and `*/`. Delete those two markers and fill in the real details. **The testimonials section stays hidden until there is at least one real review in this file** — so it will never show placeholder content.

### How someone books a call

Every "Book Your Math Plan Call" button on the site scrolls down to the Enrol section
at the foot of the home page. None of them jump straight to Google — the section
explains what the call is and that nothing is payable, and only then shows the
calendar.

What appears there depends on two things:

| Situation | What the visitor sees |
| --- | --- |
| Enrolment open, on a computer | Your Google calendar, embedded in the page |
| Enrolment open, on a phone | A gold button opening the same booking page |
| Enrolment closed | The calendar disappears; the TutorCruncher waiting-list form takes its place |

The switch happens on its own, based on `enrolmentCloses` in `program.ts`. There is
nothing to change on the day.

**Why the phone is different.** Google's calendar needs about 900 pixels to be usable.
Below that the tap targets shrink and it scrolls inside itself, which loses bookings.
On a phone we send people to Google's own mobile booking page instead, which is built
for it.

**The booking link** is `schedulerUrl` in `src/content/site.ts`. If you ever rebuild
the appointment schedule in Google Calendar the link changes — instructions for
getting the new one are written directly above that line.

### The TutorCruncher form (waiting list only)

**This form no longer appears while enrolment is open.** Bookings now go through
Google Calendar, and your Apps Script creates the TutorCruncher client automatically.

The form only comes back once enrolment closes, when the Enrol section becomes a
waiting list. So leave the key in `site.ts` alone — the waiting list stops working
without it.

It is controlled by one line in `src/content/site.ts`:

```
tutorCruncherSocketKey: '1dd4875e818fff8c65bb',
```

If the form ever stops appearing:

1. Go to **System > Settings > TutorCruncher API > API Integrations** in TutorCruncher.
2. Check `musatutoring.org` is listed under **Allowed Domains**. This is the usual cause.
3. Check the public key above still matches the one shown there.

Every "Book" button on the site scrolls down to this form. There is no separate
booking link to keep in step.

---

## 3. How the site gets built

You never build anything yourself. GitHub does it.

The project contains a file at `.github/workflows/deploy.yml`. Every time you
commit a change, GitHub installs the project, builds the website, and publishes
it — about two minutes, start to finish. You can watch it happen in the
**Actions** tab of your repository.

This means there is no `dist` folder to manage and nothing to upload by hand.
Edit text, commit, wait two minutes, refresh.

---

## 4. Setting up GitHub (do this once)

You do not need Netlify or any second account. GitHub alone can host the site for free.

1. Go to **github.com** and click **Sign up**.
2. Use your Google Workspace address — `musatutoring.org` or `info@musatutoring.org`. Using the business email keeps the account tied to the business, not to a personal address.
3. Verify the email, pick a username (e.g. `musatutoring`), and choose the **Free** plan.
4. Turn on two-factor authentication when prompted. GitHub requires it, and you want it anyway.

### Uploading the site

1. Click the **+** in the top right → **New repository**.
2. Name it **exactly** `YOUR-USERNAME.github.io`, replacing YOUR-USERNAME with your GitHub username. This name is not cosmetic — it makes GitHub serve the site from the root of the address, which is what the site is built for. Set it to **Public** (GitHub Pages requires public on the free plan). Click **Create repository**.
3. On the new empty repository page, click **uploading an existing file**.
4. Unzip the source ZIP, then drag **the contents** of the folder into the browser window (the files themselves, not the enclosing folder).
5. Scroll down and click **Commit changes**.

---

## 5. Publishing with GitHub Pages

GitHub can build and publish the site every time you change it.

1. In your repository, go to **Settings** → **Pages**.
2. Under **Source**, choose **GitHub Actions**.
3. Do **not** pick one of GitHub's suggested workflows. The correct one is already in the project at `.github/workflows/deploy.yml`.
4. Go to the **Actions** tab and watch the run finish (about two minutes).
5. When it finishes green, your site is live at `https://<username>.github.io/`.

From then on, **every edit you commit republishes the site automatically**. You edit the text in `src/content/`, commit, and two minutes later it is live.

### Editing directly in the browser

You do not need any software on your computer:

1. In GitHub, click into `src/content/site.ts` (or whichever file).
2. Click the **pencil icon** in the top right.
3. Make your change.
4. Click **Commit changes**, add a short note like "updated phone number", and confirm.

That is the whole workflow.

---

## 6. Pointing musatutoring.org at the site

The domain is registered at Squarespace and the email is Google Workspace. **The email records must not be touched** — breaking them takes down your inbox.

### Step 1 — Tell GitHub about the domain

1. Repository → **Settings** → **Pages** → **Custom domain**.
2. Enter `musatutoring.org` and click **Save**.
3. This creates a `CNAME` file in the repository. Leave it alone.

### Step 2 — Add the DNS records at Squarespace

1. Log in to Squarespace → **Domains** → `musatutoring.org` → **DNS Settings**.
2. **Leave every `MX` record exactly as it is.** Those are your Google Workspace email records. Same for any `TXT` record starting with `google-site-verification` or `v=spf1`.
3. Add four **A** records, host `@`, pointing to:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
4. Add one **CNAME** record: host `www`, value `<username>.github.io`.
5. Remove any pre-existing A record on `@` that points somewhere else (Squarespace's own parking page).

### Step 3 — Wait, then turn on HTTPS

DNS changes take anywhere from ten minutes to a few hours. Once GitHub shows the domain as verified, tick **Enforce HTTPS** on the Pages settings screen. GitHub issues the certificate free.

> If anything looks wrong, check the records at `dnschecker.org` before changing more settings. Most problems are just propagation delay.

---

## 7. Email on the domain

Google Workspace is already paid for and the MX records already exist. What is worth setting up:

- **`info@musatutoring.org`** as the main inbox — this is what the website shows.
- A **Google Group** or delegated access if more than one person should read it.
- An **email signature** with the business name, phone and website URL.
- **Gmail templates** for the three emails you send constantly: first reply, plan-and-rate, and post-session summary.

Enquiries from the website go straight into TutorCruncher, not into your inbox. Email is still worth setting up properly for replies, plans, and session summaries — but the enquiry itself is already a client record by the time you see it.

---

## 8. The workflow, first touch to enrolled

This is the operating rhythm the website is built to feed.

```text
  PARENT FINDS YOU
  Google Business Profile / referral / social / website
            |
            v
  FIRST TOUCH                          Target: reply within 24 hours
  Website form -> TutorCruncher client record
  or phone/text
            |
            v
  BOOK THE FREE SESSION                Done in TutorCruncher
  Parent gets a confirmation + reminder automatically
            |
            v
  FREE FIRST SESSION (30 minutes)
  - Student works with a tutor
  - Placement test administered
  - Parent conversation about goals
            |
            v
  PLAN + RATE, IN WRITING              Within 48 hours
  What to work on, in what order,
  how often, and what it costs
            |
            v
  ENROLL                               TutorCruncher
  Recurring slot booked, payment method on file
            |
            v
  ONGOING
  Session notes after each lesson
  Progress check-in with parent monthly
  Ask for a review after a clear win
```

### Rules that keep this from becoming chaos

1. **One inbox.** Everything goes to `info@musatutoring.org`. Nothing important lives in a personal text thread.
2. **One system of record.** If it is not in TutorCruncher, it did not happen. Every enquiry becomes a client record, even the ones that go nowhere — that is how you learn where leads come from.
3. **One booking link.** The website has exactly one, set in `site.ts`. Never send an ad-hoc link.
4. **The 24-hour rule.** Speed of first reply is the single biggest factor in whether a parent enrolls. It beats price and it beats credentials.
5. **Never quote a rate before the placement test.** The rate is the output of the plan. Quoting first turns a consultation into a price comparison.

---

## 9. Brand and marketing, in order of return

Do these in this order. The first one is worth more than the rest combined.

1. **Google Business Profile.** Free. This is how local parents find tutors. Set the service area, add the phone and website, post a photo. Ask every happy parent for a review here — reviews on Google do more than testimonials on your own site.
2. **Real photos.** Two or three genuine photos of sessions (with permission) beat any stock image. Replace the hero image when you have them.
3. **Testimonials.** Once you have three real ones with permission, add them to `testimonials.ts` and the section appears on its own.
4. **Consistent handles.** Claim `@musatutoring` everywhere you can, even if you do not post yet.
5. **One social channel, done properly.** Pick the one where Twin Cities parents actually are and post something useful weekly — a study tip, a common mistake on a test. Do not open five accounts and abandon four.
6. **A simple wordmark.** The current crest works. Do not spend money on a rebrand until clients are coming in.

### Using AI without paying for it

Free tiers of ChatGPT, Claude or Gemini are plenty for a business this size. Where they save real hours:

- Drafting session summaries from your rough notes
- Generating practice problem sets at a specific level
- Writing first drafts of social posts and email replies
- Turning a placement test result into a written plan

**Do not put AI on the website.** It would need a paid server, it would cost money per visit, and it would be one more thing to break after handoff. Use AI in your own workflow instead — same benefit, zero cost, nothing to maintain.

---

## 10. If something goes wrong

| Problem | What to do |
| --- | --- |
| Site went blank after an edit | Undo your last change in GitHub (repository → Commits → revert) |
| Email stopped working | Restore the MX records in Squarespace. Only MX and SPF/DKIM TXT records affect email |
| Domain shows the wrong page | DNS propagation. Wait a few hours, check `dnschecker.org` |
| Build failed in the Actions tab | Click the failed run, read the red line — it usually names the file and line with the typo |
| Enquiry form does not appear | Add `musatutoring.org` to **Allowed Domains** in TutorCruncher (System > Settings > TutorCruncher API) |
| Enquiry form shows a 403 error | Same fix as above — the domain is not on the allowed list |
| A page like /pathways shows "404" | `public/404.html` was deleted. It must stay for deep links to work |

---

## 11. What is intentionally not on the site

These were removed and should not come back unless they become true:

- Student counts, star ratings and review totals
- "Average grade improvement" percentages
- Any claim of being a licensed or accredited provider
- Invented testimonials
- Specific fixed prices — the rate is set after the placement test

Everything currently on the site is either verifiable or clearly framed as a description of the process.
