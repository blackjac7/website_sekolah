import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import fs from "fs";

// Define your website routes
const links = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  // Profile routes
  { url: "/profile", changefreq: "weekly", priority: 0.8 },
  { url: "/profile/sejarah", changefreq: "monthly", priority: 0.7 },
  { url: "/profile/struktur", changefreq: "monthly", priority: 0.7 },
  { url: "/profile/sambutan", changefreq: "monthly", priority: 0.7 },
  { url: "/profile/guru", changefreq: "weekly", priority: 0.7 },
  // Main routes
  { url: "/facilities", changefreq: "weekly", priority: 0.8 },
  { url: "/extracurricular", changefreq: "weekly", priority: 0.8 },
  { url: "/news", changefreq: "daily", priority: 0.9 },
  { url: "/contact", changefreq: "monthly", priority: 0.6 },
  { url: "/academic-calendar", changefreq: "monthly", priority: 0.7 },
];

// Create sitemap
const stream = new SitemapStream({
  hostname: "https://www.smpipyakinjakarta.sch.id", // Update this with your actual Vercel domain
});

// Write sitemap
streamToPromise(Readable.from(links).pipe(stream))
  .then((data) => {
    fs.writeFileSync("./public/sitemap.xml", data.toString());
  })
  .catch(console.error);
