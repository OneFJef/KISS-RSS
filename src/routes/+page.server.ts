import type { PageServerLoad } from "./$types";
import Parser from "rss-parser";
import { feedUrls } from "$lib/feedUrls";

let parsedFeed: any[] = [];
let parser = new Parser();

export const load = (async () => {
  for (let feedUrl of feedUrls) {
    try {
      let feed = await parser.parseURL(feedUrl);
      parsedFeed.push(...feed.items);
    } catch (error) {
      console.error(`Error fetching or parsing feed from ${feedUrl}:`, error);
    }
  }

  let sortedFeed = parsedFeed.sort((p1, p2) =>
    p1.isoDate < p2.isoDate ? 1 : p1.isoDate > p2.isoDate ? -1 : 0
  );

  console.log(parsedFeed);

  return { sortedFeed };
}) satisfies PageServerLoad;
