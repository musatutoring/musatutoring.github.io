# Uploading Without the Browser

The browser uploader has now dropped files on you twice. It has two limits
that it never warns you about:

- it silently discards files once you go past about 100
- it silently skips anything whose name starts with a dot, which is why
  `.github/workflows/deploy.yml` never arrives

**GitHub Desktop has neither limit.** It is a normal app with buttons, not a
terminal. Setting it up once takes about ten minutes and removes this whole
category of problem permanently.

---

## One-time setup

1. Download **GitHub Desktop** from `desktop.github.com` and install it.
2. Open it and sign in with your GitHub account.
3. Click **File → Clone repository**.
4. Choose `musatutoring/musatutoring.github.io` from the list.
5. Note the **Local path** it shows you, then click **Clone**.

You now have a folder on your computer that mirrors your repository.

---

## Every time you want to publish a change

1. Unzip the new website zip.
2. Open the folder GitHub Desktop cloned in step 5 above.
3. Copy **everything inside** the unzipped folder into it, replacing when asked.
   Include the hidden files — see below if you cannot see them.
4. Switch to GitHub Desktop. The left panel now lists every changed file.
   **This is the part the browser never gave you: an honest list.**
5. Type a short summary at the bottom left, for example `New navy and gold design`.
6. Click **Commit to main**.
7. Click **Push origin** at the top.

Then watch the **Actions** tab on GitHub as usual.

### Seeing hidden files when you copy

- **Mac:** press `Cmd` + `Shift` + `.` in Finder
- **Windows:** File Explorer → View → tick **Hidden items**

---

## Proving the deploy worked

Every build now carries a stamp. After the Actions run goes green, open:

```
https://musatutoring.org/version.txt
```

If it shows the version line for the build you just pushed, the deploy landed
and anything odd on the page is a browser cache issue — clear it with
`Cmd/Ctrl` + `Shift` + `R`.

If it 404s or shows an older line, the deploy did not land, and the problem is
in the upload or the Actions run rather than in the website code.

You can also right-click the page and choose **View Page Source**. The second
line shows the same stamp.
