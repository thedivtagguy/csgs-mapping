<script>
  export let title = "Mapping Sexuality in India";
  export let description =
    "The Centre for Studies in Gender and Sexuality, Ashoka University, brings to you a one-stop resource directory on all things gender and sexuality in India";
  export let url = "https://csgs.ashoka.edu.in";
  // export let slug = 
  //   "common/assets/thumbnails/960/social.jpg"
</script>

<svelte:head>
  <title>{title}</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <script src="https://unpkg.com/flowbite@1.3.2/dist/flowbite.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=block" rel="stylesheet"> 
  <link href="https://fonts.googleapis.com/css2?family=Lora&display=block" rel="stylesheet">
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="description" content={description} />
  <meta name="author" content="Center for Sexuality and Gender Studies" />
  <meta name="keywords" content="Advocacy, Capacity building, Capacity Building courses, Digital Archive, Education, Gender, Gender sensitisation, HIV/AIDS prevention, Legal aid, LGBTQ rights, Mental health Research, Self Help Groups, Sex workers, Sexual abuse prevention, Sexual and reproductive health, Support group, Support services, Technology, Women's rights" />

  <meta property="og:title" content={title} />
  <meta property="og:site_name" content="Mapping Sexuality in India" />
  <meta property="og:url" content={url} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="en_US" />

  <!-- <meta property="og:image" content="https://thedivtagguy.com/{slug}" /> -->
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="600" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="https://csgs.ac.in" />
  <meta name="twitter:creator" content="@csgs_ashoka" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <!-- <meta name="twitter:image:src" content="https://thedivtagguy.com/{slug}" /> -->

  <meta name="robots" content="max-image-preview:large" />
 
  <link rel="canonical" href="{url}/" />
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/logo.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/logo.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/logo.png"> 
</svelte:head>
