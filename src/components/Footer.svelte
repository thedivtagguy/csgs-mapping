<script>
  import { Twitter, WhatsApp }  from 'svelte-share-buttons-component';
  export const prerender = true;

	const url = 'https://csgs.netlify.app';
	const title = 'Sexuality and Gender Resources Archive';
	const desc = 'Some description about it will go here';
    
</script>

<footer class="max-w-5xl mx-auto  py-4">
<section class="about mx-auto py-4">
  <div class="flex justify-center py-6 gap-2 items-center">
    <Twitter class="share-button" text="{title}" {url} hashtags="github,svelte" via="username" related="other,users" />
    <WhatsApp class="share-button" text="{title} {url}" />
  </div>
  <div class="w-1/4 mx-auto pb-4">
    <p class="text-center mx-auto text-xs font-mono font-semibold  text-black  whitespace-pre-wrap">
      A Project by 
     </p>
    <a sveltekit:prefetch  href="https://csgs.ashoka.edu.in/" aria-label="The thedivtagguy">
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


</section>


</footer>
