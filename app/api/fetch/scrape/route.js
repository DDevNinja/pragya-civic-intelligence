// import { NextResponse } from "next/server";
// import * as cheerio from "cheerio";

// export async function GET(req) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const url = searchParams.get("url");
//     if (!url) {
//       return NextResponse.json({ error: "url required" }, { status: 400 });
//     }

//     const res = await fetch(url, { cache: "no-store" });
//     if (!res.ok) {
//       return NextResponse.json(
//         { error: `fetch failed: ${res.status}` },
//         { status: 400 }
//       );
//     }

//     const html = await res.text();
//     const $ = cheerio.load(html);

//     // Best-effort text extraction
//     const title = ($("title").first().text() || "").trim();
//     const desc =
//       ($('meta[name="description"]').attr("content") || "").trim();

//     const text = (title || desc || "No title/description found").slice(0, 300);

//     // ML-ready item
//     const item = {
//       id: url,
//       source: "scrape",
//       text,
//       timestamp: new Date().toISOString(),
//       url,
//       // optional fields (later fill if you can detect)
//       state: null,
//       district: null,
//     };

//     return NextResponse.json({ count: 1, items: [item] });
//   } catch (e) {
//     return NextResponse.json({ error: String(e) }, { status: 500 });
//   }
// }


// url:- /api/fetch/scrape?url=https://en.wikipedia.org/wiki/Mumbai

// url:-/api/fetch/scrape?url=https://indianexpress.com/



// import { NextResponse } from "next/server";
// import { parseStringPromise } from "xml2js";

// export async function GET(req) {
//   try {
//     const { searchParams } = new URL(req.url);

//     const city = searchParams.get("city") || "Mumbai";
//     const topic = searchParams.get("topic") || "water shortage"; // pothole / dengue / garbage etc.
//     const limit = Number(searchParams.get("limit") || 20);

//     const q = `${topic} ${city}`;
//     const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(
//       q
//     )}&hl=en-IN&gl=IN&ceid=IN:en`;

//     const res = await fetch(rssUrl, { cache: "no-store" });
//     const xml = await res.text();
//     const parsed = await parseStringPromise(xml);

//     const items = (parsed?.rss?.channel?.[0]?.item || []).slice(0, limit).map(i => ({
//       id: i.guid?.[0]?._ || i.link?.[0],
//       source: "news",
//       text: i.title?.[0] || "",
//       timestamp: i.pubDate?.[0] || "",
//       url: i.link?.[0] || "",
//       city,
//       topic
//     }));

//     return NextResponse.json({ city, topic, q, count: items.length, items });
//   } catch (e) {
//     return NextResponse.json({ error: String(e) }, { status: 500 });
//   }
// }



import { NextResponse } from "next/server";
import { parseStringPromise } from "xml2js";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const city = searchParams.get("city") || "Mumbai";
    const topic = searchParams.get("topic") || "water shortage";
    const limit = Number(searchParams.get("limit") || 20);

    const query = `${topic} ${city}`;

    const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(
      query
    )}&hl=en-IN&gl=IN&ceid=IN:en`;

    const res = await fetch(rssUrl, { cache: "no-store" });
    const xml = await res.text();
    const parsed = await parseStringPromise(xml);

    const items =
      parsed?.rss?.channel?.[0]?.item?.slice(0, limit).map((i) => ({
        id: i.guid?.[0]?._ || i.link?.[0],
        source: "news",
        text: i.title?.[0] || "",
        timestamp: i.pubDate?.[0] || "",
        url: i.link?.[0] || "",
        city,
        topic,
      })) || [];

    return NextResponse.json({
      city,
      topic,
      query,
      count: items.length,
      items,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
// http://localhost:3000/api/fetch/news?city=Pune