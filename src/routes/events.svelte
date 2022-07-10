<script>
    import "../styles/tailwind.css";
    import Meta from "$components/Meta.svelte";
    import Footer from "$components/Footer.svelte";
    import Events from "$components/Events.svelte";
import Menu from "$components/Menu.svelte";
  </script>
  <script context="module">
    export const prerender = true;
  </script>
  <Meta />
  <Menu />
  <Events upcoming={false} />
  <Footer />
  