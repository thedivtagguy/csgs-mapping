<script context="module">
  import "../styles/tailwind.css";
  export const prerender = true;
	export const router = true;
</script>

<script>
  import Footer from "$components/Footer.svelte";
  import Meta from "$components/Meta.svelte";
  import SearchPage from "$components/SearchPage.svelte";
</script>

<Meta />
<SearchPage  />
<Footer />
