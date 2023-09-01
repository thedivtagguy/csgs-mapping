<script context="module">
  import "../styles/tailwind.css";
  export const prerender = true;
  export const router = true;
</script>

<script>
  import Footer from "$components/Footer.svelte";
  import Meta from "$components/Meta.svelte";
  import Home from "$components/Home.svelte";
  import Menu from "$components/Menu.svelte";
</script>

<Meta />
<Menu />

<!-- Section 1 -->
<section class="h-auto ">
    <div class="bg"></div>
  <div class="max-w-7xl content py-8 px-4  sm:text-left">
    <p
      class="mt-1 text-xl font-light font-sans text-gray-700 sm:text-5xl sm:tracking-tight lg:text-3xl"
    >
      About the directory
    </p>
    <p class="mt-5   whitespace-pre-line mx-auto text-gray-500">
      The Directory – Mapping Sexuality in India – is a compendium of the names of institutions, organisations, publications, audio-visual material, digital outlets, and events in the broad sphere of gender and sexuality studies in India. <a href="https://csgs.ashoka.edu.in/" target="_blank" rel="noopener noreferrer">The Centre for Studies in Gender and Sexuality (CSGS) </a>at Ashoka University has compiled this directory as an urgent resource to produce knowledge that can help researchers, activists, and media outlets as they work on gender and sexuality in India. 
      
      The resources listed in the Directory are ones that engage with questions of identity, rights, inequality, fantasy, pleasure, and politics through which we approach the domains of gender and sexuality. While this list is far from exhaustive, the Centre hopes that these interactive maps, charts, and figures in the Directory provide an enriching and user-friendly experience to anyone who wishes to navigate the diverse kinds of interventions in the field. For more in-depth information about the project, the process and the relevance of creating such a repository, <a href="https://medium.com/@csgs/mapping-sexuality-in-india-insights-from-the-csgs-project-10c8af3871" target="_blank" rel="noopener noreferrer">click here.</a>
      
      The CSGS envisages this as a one-stop digital repository that will be regularly updated based on user inputs. <a href="/contact">Have a resource to add? </a>
      
      The data for the Directory was compiled under the aegis of the Governing Intimacies Project, located at the University of Witwatersrand, South Africa.
    </p>

    <p
      class="mt-8 text-xl font-light font-sans text-gray-700 sm:text-5xl sm:tracking-tight lg:text-3xl"
    >
      About the design
    </p>
    <p class="mt-5   whitespace-pre-line mx-auto text-gray-500">
      The design attempts to capture the diversity of the directory in its use of line, colour, shape, and interaction. The main buttons on the homepage break open when hovered over, to echo the CSGS logo and the idea that gender and sexuality do not fit into neat little boxes.
     
      Similarly, in the charts, no shape is quite rectangular or perfectly circular. Instead, they are all unique, and not one is exactly the same as the other. The shapes are generated differently each time the website loads. The animation on the homepage morphs shape and colour continuously, as a visual metaphor for the fluidity of gender and sexuality and how they interact with one another.
    </p>

    <p
      class="mt-8 text-xl font-light font-sans text-gray-700 sm:text-5xl sm:tracking-tight lg:text-3xl"
    >
      About the team
    </p>
    <p class="mt-5   whitespace-pre-line mx-auto text-gray-500">
      Project Lead: Samreen Mushtaq 
      Research Assistants: Yanam Bage, with support from Varun Tiwari
      Project Contributors: Shreyashi Sharma, Srija, Neel 
      Data Visualisation and Design by: <a href = "https://www.nithyasubramanian.com/" target="_blank" rel="noopener noreferrer">Nithya Subramanian </a> and <a href = "https://thedivtagguy.com/" target="_blank" rel="noopener noreferrer"> Aman Bhargava</a>
    </p>
    <p
      class="mt-8 text-xl font-light font-sans text-gray-700 sm:text-5xl sm:tracking-tight lg:text-3xl"
    >
    Sex, Sexuality and the Law

    </p>
    <p class="mt-5   whitespace-pre-line mx-auto text-gray-500">
      Sex, Sexuality and the Law was conceptualized by the CSGS as an Experiential Learning Module for Young India Fellowship. It attempts to map the legal judgments over the past five decades which have contributed to the development of the discourse around sex, sexuality, and sexual justice in India. 
The CSGS aims to map these plethora of judgments to examine India as a sexual state through the law’s engagement with, and regulation of, sexuality. It builds on the Centre’s existing work to map the field of gender and sexuality studies in India, which is significantly shaped by discursive formations pushed through the law. It will act as a valuable repository for lawyers, activists, scholars and anyone curious to navigate the field of sexuality and sexual justice through the legal lens. 
In addition to this visualization, the Young India Fellows have also created the Sexual Justice Project podcast series under the aegis of the CSGS with discussions from eminent legal scholars and lawyers around these judgments. It is available on Spotify <a href = "https://open.spotify.com/show/5XwPMRHgiOcGSwtUXUM0sP?si=3066ee46e3e24d08" target="_blank" rel="noopener noreferrer">here </a>
</p>
<p class="mt-5   whitespace-pre-line mx-auto text-gray-500">
  Project Leads: Samreen Mushtaq, Shreyashi Sharma
Project Contributor: Charul Mehndiratta
Legal Judgments Compiled by: Aliya Sheriff, Kuhoo Tiwari, Nishita Singh, Shreya Kaul, Sonakshi Grover
Design and Data Visualisation: <a href = "https://www.nithyasubramanian.com/" target="_blank" rel="noopener noreferrer">Nithya Subramanian </a>
</p>



    <p
      class="mt-8 text-xl font-light font-sans text-gray-700 sm:text-5xl sm:tracking-tight lg:text-3xl"
    >
      About CSGS
    </p>
    <p class="mt-5   whitespace-pre-line mx-auto text-gray-500">
      The Centre for Studies in Gender and Sexuality (CSGS) was established at Ashoka University in 2015, and is one of the Centres of Excellence at the university. It is the first Centre of its kind in India to study the spectrum of questions relating to both gender and sexuality. The mandate of the Centre is to take seriously the multiplicity of norms, identities, issues, practices, and movements in the broad spheres covered by both gender and sexuality. Our engagement with these fields takes place through invited talks, international conferences, published articles, and multiple workshops.
    </p>
  </div>
</section>

<Footer />

<style>
    section {
       position: relative;
    }

    .bg {
        position: absolute;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url('/assets/placeholder.png') center center;
    background-repeat: no-repeat;
    opacity: .4;
    width: 100%;
    height: 100%;
    }
  
</style>
