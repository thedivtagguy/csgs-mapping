<script>
    import Meta from "$components/Meta.svelte";
    import Footer from "$components/Footer.svelte";
    import Contact from "$components/Contact.svelte";
    import Menu from "$components/Menu.svelte";
  </script>
  <script context="module">
    export const prerender = true;
  </script>
  <Meta />
  <Contact />
  <Footer />
  