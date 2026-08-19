# Al Atkinson — children’s book site

Author site for **Al Atkinson**, promoting:

- **Upstream** — available now (Amazon + IngramSpark)
- **A Chew Story** — due December

Copy comes from `Information for the Al Atkinson website.docx`. Character sketches are from the Al Atkinson website folder (Chris Daily and related studies).

## Local preview

```bash
cd /Users/matthewlocke/projects/al-atkinson
python3 -m http.server 5173
```

Open http://localhost:5173

## Contact email

`js/main.js` currently drafts mail to `hello@alatkinsonbooks.com`. Change that address when Al confirms the inbox he wants.

## Deploy (Cloudflare Pages)

```bash
npx wrangler pages deploy . --project-name=al-atkinson
```
