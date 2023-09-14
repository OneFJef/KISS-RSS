<script>
  import "../app.css";
  import dayjs from "dayjs";

  export let data;
</script>

<main class="flex flex-col items-center justify-center mx-2 my-1">
  {#each data.sortedFeed as item}
    <div
      class="w-full max-w-4xl m-1 rounded-lg card card-compact card-side bg-neutral hover:bg-neutral-focus"
    >
      <div class="card-body">
        <h2 class="card-title">
          <a href={item.link}>
            {item.title}
          </a>
        </h2>
        <div class="font-medium flex items-center">
          <img
            class="w-4 h-4 mr-1"
            src="https://www.google.com/s2/favicons?domain={item.link}"
            alt="Logo for article site."
          />
          {item.author}
          <span class="text-accent">&nbsp;|&nbsp;</span>
          {dayjs(item.pubDate).format("MMMM D, YYYY")}
        </div>
      </div>
    </div>
  {/each}
</main>
