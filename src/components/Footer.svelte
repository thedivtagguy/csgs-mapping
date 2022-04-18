<script>
  import storiesData from "$data/stories.csv";
  import parseStories from "$utils/cleanStories";
  import wordmark from "$svg/wordmark.svg";

  export let keywords;
  export let current;
  let stories = [];

  export const prerender = true;

  const links = [
    { name: "contact", url: "https://thedivtagguy.com/contact" },
    { name: "twitter", url: "https://twitter.com/thedivtagguy/" },
    { name: "instagram", url: "https://www.instagram.com/thedivtagguy"},
    { name: "github", url: "https://github.com/thedivtagguy/" }
  ];

    if(keywords){
    const keys = [
      "url",
      "date",
      "heading",
      "desc",
      "cat",
      "author",
      "keyword",
      "published",
      "img",
      "path",
      "slug",
      "month",
      "date"
    ];

    stories = parseStories(storiesData, keys);

    stories = stories.filter(story => {
      return story.keyword.some(keyword => keywords.includes(keyword));
    });

    // Remove stories.link where it is the same as current
    stories = stories.filter(story => {
      return story.link !== current && story.published !== "FALSE";
    });

    // Show two random stories
    stories = stories.sort(() => 0.5 - Math.random());
    stories = stories.slice(0, 2);

    

    }

    const external = true;
</script>

<footer class="max-w-5xl mx-auto bg-white py-4">
<section class="about py-4">
  <div class="w-[40px] mx-auto pb-4">
    <a sveltekit:prefetch  href="/" aria-label="The thedivtagguy">{@html wordmark}</a>
  </div>
  <section class="flex mx-auto font-sans pb-4 font-bold gap-6 text-xs justify-center items-center ">
    {#each links as link}
      <div>
        <a
          href={link.url}
          class="hover:underline underline-offset-2  decoration-dashed hover:text-purple-800">
          <span>{link.name.toUpperCase()}</span>
        </a>
      </div>
    {/each}
  </section>
  <p class="text-center mx-auto text-xs font-mono font-semibold  text-black  whitespace-pre-wrap">
    &lt;/&gt; with Svelte, Tailwind, Google Docs & &lt;3 in Bangalore, IN
  </p>
  <p class="text-center text-[0.65rem] leading-snug font-sans font-semibold italic py-4 text-gray-600">
    Another Thing Srishti Should Have Done But Did Not So We Will Do It
  </p>
</section>


</footer>
