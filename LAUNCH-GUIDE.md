# Launch Guide — musatutoring.org

Follow these in order. Do not skip ahead: each step is verifiable, so if
something breaks you will know exactly which step caused it.

Nothing here requires installing software. Everything happens in your browser.

Total time: about 40 minutes of work, plus waiting for DNS.

---

## Before you start

Have these open in tabs:

- github.com (logged in)
- Your TutorCruncher account
- Your Squarespace account (Domains section)

---

## Step 1 — Create the repository (5 min)

1. Go to **github.com** and click the **+** in the top right → **New repository**.
2. In **Repository name**, type exactly:

   ```
   YOUR-USERNAME.github.io
   ```

   Replace `YOUR-USERNAME` with your actual GitHub username, lowercase. If your
   username is `musaahmed`, the repository name is `musaahmed.github.io`.

   > **Why this exact name matters.** GitHub treats a repository named this way
   > as your main site and serves it from the root of the address. Any other
   > name puts the site in a subfolder, and the site's images and styling will
   > not load. This is the single most common way this goes wrong.

3. Set it to **Public**. GitHub Pages requires this on the free plan.
4. Do **not** tick "Add a README file". Leave all three checkboxes empty.
5. Click **Create repository**.

---

## Step 2 — Upload the website (5 min)

1. Unzip `musa-tutoring-website.zip` on your computer.
2. Open the unzipped folder. You should see `src`, `public`, `index.html`,
   `package.json` and others.
3. Back on the empty GitHub repository page, click the link
   **uploading an existing file**.
4. Select **everything inside** the folder and drag it into the browser window.

   Drag the **contents**, not the folder itself. If GitHub ends up showing a
   single folder named `musa-tutoring-website`, you dragged the wrong thing —
   delete it and try again.

5. Wait for all files to finish uploading (there are about 100).
6. Scroll down, click **Commit changes**.

**Check before moving on:** the repository file list shows `index.html`,
`package.json`, `src`, and `public` at the top level.

> **If `.github` did not upload:** some browsers skip folders starting with a
> dot. Check whether you can see a `.github` folder in the list. If not, see
> "If the .github folder is missing" at the bottom of this guide.

---

## Step 3 — Turn on GitHub Pages (2 min)

1. In your repository, click **Settings** (top row).
2. In the left sidebar, click **Pages**.
3. Under **Source**, choose **GitHub Actions** from the dropdown.

   Do not pick any of the workflows GitHub suggests. The right one is already
   in your project.

4. Click the **Actions** tab at the top of the repository.
5. You should see a run called **Deploy website** with a yellow dot (running).
   Wait about two minutes for it to turn into a green tick.

**Check before moving on:** visit `https://YOUR-USERNAME.github.io`. The site
should load with your logo, blue and navy colours, and the hero image.

If the run went red instead of green, jump to **Troubleshooting** below.

---

## Step 4 — Allow the enquiry form to run (3 min)

The form will not appear until TutorCruncher knows your website is allowed to
use it.

1. In TutorCruncher, go to **System → Settings → TutorCruncher API → API Integrations**.
2. Open your Socket integration (public key `1dd4875e818fff8c65bb`).
3. Click **Edit**.
4. In **Allowed Domains**, add both of these, one per line:

   ```
   musatutoring.org
   YOUR-USERNAME.github.io
   ```

5. Click **Save**.

**Check before moving on:** go to your site, scroll to the bottom section, and
confirm the enquiry form appears with a reCAPTCHA box. Submit a test enquiry
with your own name, then check it arrived in TutorCruncher as a new client.

> Changes to the enquiry form itself can take up to 24 hours to appear. The
> allowed-domains setting takes effect immediately.

---

## Step 5 — Connect musatutoring.org (10 min, then waiting)

This is the step where you can break your email. Read the warning.

> ### Do not touch your MX records
>
> In your Squarespace DNS settings you will see records of type **MX**, plus
> **TXT** records starting with `google-site-verification` or `v=spf1`.
>
> **These are your Google Workspace email. If you delete or change them, email
> to info@musatutoring.org stops working.**
>
> You are only adding **A** records and one **CNAME** record. Leave everything
> else alone.

### 5a — Tell GitHub the domain

1. Repository → **Settings** → **Pages**.
2. Under **Custom domain**, type `musatutoring.org` and click **Save**.
3. GitHub adds a file called `CNAME` to your repository. Leave it alone.
4. GitHub will show a warning that DNS is not set up yet. That is expected —
   you are about to fix it.

### 5b — Add the DNS records at Squarespace

1. Squarespace → **Domains** → `musatutoring.org` → **DNS Settings**.
2. Add four **A** records. Host `@`, pointing to each of these in turn:

   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

3. Add one **CNAME** record: Host `www`, Value `YOUR-USERNAME.github.io`
4. If there is an existing **A** record on `@` pointing anywhere else (usually
   Squarespace's own parking page), delete that one. Only that one.

### 5c — Wait, then turn on HTTPS

DNS changes take anywhere from ten minutes to a few hours.

1. Check progress at **dnschecker.org** — search `musatutoring.org`, type A.
   You are waiting for the GitHub addresses above to show up worldwide.
2. Once GitHub Pages settings shows the domain verified with a green tick,
   tick **Enforce HTTPS**. The certificate is free and automatic.
3. If **Enforce HTTPS** is greyed out, DNS has not finished. Wait and come back.

**Check before moving on:** `https://musatutoring.org` loads your site with a
padlock in the address bar, and email to `info@musatutoring.org` still arrives.

---

## Step 6 — Tell Google the site exists (10 min)

This is the highest-return thing you will do all week.

1. **Google Business Profile** — go to business.google.com and create a profile.
   Choose **service area business** (not storefront) so you do not publish your
   home address. Add Minnetonka, Hopkins, Eden Prairie, St. Louis Park.
   Add your phone and `https://musatutoring.org`.
2. **Google Search Console** — go to search.google.com/search-console, add
   `musatutoring.org`, verify with the TXT record method (this adds another TXT
   record at Squarespace — safe, it does not affect email).
3. In Search Console, submit your sitemap: enter `sitemap.xml` and click Submit.

Then ask every happy parent for a Google review. Reviews on Google do more for
you than testimonials on your own site.

---

## Making changes after launch

You do not need any software.

1. In GitHub, click into the file you want to change — almost always something
   in `src/content/`.
2. Click the **pencil icon** at the top right.
3. Change only the text between the quote marks.
4. Click **Commit changes**, add a short note like "updated phone number".
5. Wait two minutes. Refresh your site.

The files you will actually touch:

| To change | Edit this file |
| --- | --- |
| Dates, places, what's included, promises | `src/content/program.ts` |
| Phone, email, address, booking link | `src/content/site.ts` |
| The four enrolment steps | `src/content/process.ts` |
| Courses taught | `src/content/curriculum.ts` |
| FAQ questions | `src/content/faq.ts` |
| Add a tutor | `src/content/tutors.ts` |
| Add a parent review | `src/content/testimonials.ts` |

**If the site breaks after an edit:** you deleted a quote mark, comma, or curly
brace. Go to the **Commits** list, open your last commit, and click **Revert**.

---

## Troubleshooting

| What you see | What it means | Fix |
| --- | --- | --- |
| Actions run is red | The build failed | Click the failed run, then the red step. The error names the file and line. Usually a missing quote mark from an edit |
| Site loads but no styling or images | Repository is named wrong | It must be `YOUR-USERNAME.github.io` exactly |
| Enquiry form does not appear | Domain not allowed | Add your domain to Allowed Domains in TutorCruncher (Step 4) |
| Form shows a 403 error | Same as above | Same fix |
| `/pathways` shows a 404 | `public/404.html` was deleted | Restore it from the zip. It must stay |
| Email stopped working | An MX record was changed | Restore the MX records in Squarespace immediately |
| Domain shows the wrong page | DNS still propagating | Wait, check dnschecker.org |
| "Enforce HTTPS" greyed out | DNS not verified yet | Wait, then reload the Pages settings |

### If the .github folder is missing

Some browsers refuse to upload folders whose name starts with a dot. Without it,
the site will never build. To add it by hand:

1. In your repository, click **Add file** → **Create new file**.
2. In the filename box, type exactly:

   ```
   .github/workflows/deploy.yml
   ```

   (Typing the slashes creates the folders automatically.)
3. Open `deploy.yml` from the unzipped folder in a text editor, copy everything,
   and paste it in.
4. Click **Commit changes**.

---

## Still to do after launch

These are not blocking, but each one matters:

- [ ] Open evening and weekend slots on the Math Plan Call schedule — working
      parents are the buyer, and an empty-looking calendar loses them silently
- [ ] Check the four credibility figures in `program.ts`, especially hours delivered
- [ ] Interview and onboard the second tutor, or reduce `seatsTotal` to 12
- [ ] Replace the hero photograph with a real one, with permission
- [ ] Collect two or three real parent reviews for `testimonials.ts`
- [ ] Record baseline and final scores for this cohort so the next one can sell on proof
