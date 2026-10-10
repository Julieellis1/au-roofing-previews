# Roofing websites (multi-page)

There are 12 static sites, one folder per company. Each folder holds an index.html, its images, and a wrangler.jsonc for Cloudflare.

Pages are switched with hash routes inside index.html (#/services, #/about, #/contact and so on), so any static host will serve them.

Deploy a site with: `cd <folder> && npx wrangler deploy`. You can also drag the folder into Netlify, Vercel or Cloudflare Pages.

Each site still carries the noindex tag and the "concept preview" banner. Remove both once the owner approves.
