import type { PageServerLoad } from "./$types";
import Parser from "rss-parser";
import { feedUrls } from "$lib/feedUrls";
import dayjs from "dayjs";

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
    dayjs(p1.pubDate) < dayjs(p2.pubDate)
      ? 1
      : dayjs(p1.pubDate) > dayjs(p2.pubDate)
      ? -1
      : 0
  );

  console.log(parsedFeed);

  return { sortedFeed };
}) satisfies PageServerLoad;
