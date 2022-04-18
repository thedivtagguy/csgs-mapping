<script context="module">
  import "../styles/tailwind.css";
  export const prerender = true;
	export const router = true;
  import storiesData from "$data/stories.csv";
  import parseStories from "$utils/cleanStories";
  import Footer from "$components/Footer.svelte";

  export async function load({ page, fetch, session, stuff }) {
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

    // const url = "api/stories.js";
    // const response = await fetch(url);
    // 
    // if (response.ok) {
    //   const data = await response.json();
    // }

    const stories = parseStories(storiesData, keys);
    return {
      props: { stories }
    };
  }
</script>

<script>
  import Meta from "$components/Meta.svelte";
  import Home from "$components/Home.svelte";

  export let stories;
</script>

<Meta />
<Home {stories} />
<Footer />
