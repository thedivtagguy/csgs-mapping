<script>
  import wordmark from "$svg/wordmark.svg";
  
  export const prerender = true;

  const links = [
    { name: "contact", url: "https://thedivtagguy.com/contact" },
    { name: "twitter", url: "https://twitter.com/thedivtagguy/" },
    { name: "instagram", url: "https://www.instagram.com/thedivtagguy"},
    { name: "github", url: "https://github.com/thedivtagguy/" }
  ];

    
</script>

<footer class="max-w-5xl mx-auto  py-4">
<section class="about py-4">
  <div class="w-1/4 mx-auto pb-4">
    <a sveltekit:prefetch  href="/" aria-label="The thedivtagguy">
    <img src="/assets/full_logo.png" alt="The thedivtagguy" /></a>
  </div>
  <!-- <section class="flex mx-auto font-sans pb-4 font-bold gap-6 text-xs justify-center items-center ">
    {#each links as link}
      <div>
        <a
          href={link.url}
          class="hover:underline underline-offset-2  decoration-dashed hover:text-purple-800">
          <span>{link.name.toUpperCase()}</span>
        </a>
      </div>
    {/each}
  </section> -->
  <p class="text-center mx-auto text-xs font-mono font-semibold  text-black  whitespace-pre-wrap">
   A Project by CSGS, Ashoka University
  </p>

</section>


</footer>
