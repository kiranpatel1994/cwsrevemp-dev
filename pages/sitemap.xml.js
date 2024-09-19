import axios from "axios";

const frontURL = process.env.NEXT_PUBLIC_FRONTEND_URL;
const baseURL = process.env.NEXT_PUBLIC_WORDPRESS_REST_URL;

async function getSitemapPages() {
  const pageRes = await axios.get(`${baseURL}/wp-json/sitemap/v1/posts?pageNo=1&perPage=1000&postType=page`);
  const postRes = await axios.get(`${baseURL}/wp-json/sitemap/v1/posts?pageNo=1&perPage=1000&postType=post`);
  const portfolioRes = await axios.get(`${baseURL}/wp-json/sitemap/v1/posts?pageNo=1&perPage=1000&postType=portfolio`);
  
  let pageData = await pageRes.data;
  let postData = await postRes.data;
  let portfolioData = await portfolioRes.data;
  
  let data = [...pageData, ...postData, ...portfolioData];
  if (!data.length) return [];
  
  const items = [];
  data.forEach(item => {
    let url = `${frontURL}${item.url}`;
    let lastmod = new Date(item.post_modified_date).toISOString().split("T")[0]; 
    items.push(`
      <url>
         <loc>${url}</loc>
         <lastmod>${lastmod}</lastmod>
         <changefreq>monthly</changefreq>
         <priority>1</priority>
      </url>
    `);
  });
  return items.join("");
}

export default function SitemapIndexPage() {
  return null;
}

export async function getServerSideProps({ res }) {
  const details = await getSitemapPages();
  
  let sitemapIndex = `<?xml version='1.0' encoding='UTF-8'?>
  <urlset xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd"
          xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${details}
  </urlset>`;
  res.setHeader("Content-Type", "text/xml; charset=utf-8");
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=600, stale-while-revalidate=600"
  );
  res.write(sitemapIndex);
  res.end();
  return { props: {} };
}
