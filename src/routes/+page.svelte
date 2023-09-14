<script lang="ts">
  import "../app.css";
  import dayjs from "dayjs";

  export let data;

  function findUsername(link: String) {
    const regex = /@([^/]+)/;
    const match = link.match(regex);
    return match[0];
  }
</script>

<main class="flex flex-col items-center justify-center mx-2 my-1">
  {#each data.sortedFeed as item}
    <div
      class="w-full max-w-4xl m-1 rounded-lg card card-compact card-side bg-neutral hover:bg-neutral-focus"
    >
      <div class="card-body">
        <h2 class="card-title">
          <a href={item.link}>
            {#if !item.title}
              {item.contentSnippet}
            {:else}
              {item.title}
            {/if}
          </a>
        </h2>
        <div class="font-medium flex items-center">
          <img
            class="w-4 h-4 mr-1"
            src="https://www.google.com/s2/favicons?domain={item.link}"
            alt="Logo for article site."
          />
          {#if !item.author}
            {findUsername(item.guid)}
          {:else}
            {item.author}
          {/if}
          <span class="text-accent">&nbsp;|&nbsp;</span>
          {dayjs(item.pubDate).format("MMMM D, YYYY")}
        </div>
      </div>
    </div>
  {/each}
</main>
