<script>
    import Meta from "$components/Meta.svelte";
    import Footer from "$components/Footer.svelte";
    import Events from "$components/Events.svelte";
  </script>
  <script context="module">
    export const prerender = true;
  </script>
  <Meta />
  <Events upcoming={true} />
  <Footer />
  