<script>
  import { Twitter, WhatsApp }  from 'svelte-share-buttons-component';
  export const prerender = true;

	const url = 'http://mappingsexuality.ashoka.edu.in/';
	const title = 'Mapping Sexuality in India';
	const desc = 'The Centre for Studies in Gender and Sexuality, Ashoka University, brings to you a one-stop resource directory on all things gender and sexuality in India';
    
</script>

<footer class="max-w-5xl mx-auto py-4 ">
<section class="about mx-auto mt-auto py-4">
  <div class="flex justify-center py-6 gap-2 items-center">
    <p class = " py-1 text-base  text-gray-700">
      If you like this project, do consider sharing it!
     </p>
    <Twitter class="share-button" text="{title}" {url} hashtags="gender,sexuality, dataviz"/>
    
  </div>
  <div class="w-2/3 text-center mx-auto pb-4 ">
    <p class="text-center mx-auto py-1 text-sm font-semibold  text-gray-400  whitespace-pre-wrap">
      A Project by 
     </p>
    <a sveltekit:prefetch  href="https://csgs.ashoka.edu.in/" aria-label="CSGS">
    Centre for Studies in Gender and Sexuality, Ashoka University</a>
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
