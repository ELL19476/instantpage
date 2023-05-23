<script>
  import Button from "./basic/Button.svelte";
  import Link from "./basic/Link.svelte";
  import PhoneFrame from "./PhoneFrame.svelte";
  import DownArrow from "./basic/DownArrow.svelte";
  import pricing_circle from "../assets/ui/pricing_circle.svg"
  import bg_shape from "../assets/ui/bg_shape.svg"
  import { onMount } from "svelte";

  export let contentHeight;
  export let navbarHeight;
  let contentWidth;
  let root;
  onMount(() => {
        root.style.minHeight = contentHeight + "px";
        root.style.marginTop = navbarHeight + "px";
        if(contentWidth < 768) {
            root.style.height = contentHeight + "px";
        }
    });

    $: {
        if(root) {
            root.style.minHeight = contentHeight + "px";
            root.style.marginTop = navbarHeight + "px";
            if(contentWidth < 768) {
                root.style.height = contentHeight + "px";
            }
        }     
    }

</script>

<svelte:window bind:innerWidth={contentWidth} />

<div class="flex relative h-min flex-col md:flex-row overflow-clip md:overflow-auto" bind:this={root}>
    <DownArrow jumpHeight="1.5rem" class="absolute bottom-0 right-0 left-0 m-auto hidden md:block" arrowClasses="h-6 w-auto p-0" href="#referenzen"></DownArrow>
    <div class="pt-5 pb-20 xs:pb-28 xs:p-5 text-center md:text-left md:p-14 md:pr-0 md:mr-3 lg:mr-6 xl:mr-12 md:pb-0 h-screen md:h-auto flex flex-col gap-1 md:gap-4 lg:gap-5 grow basis-[content] bg-bright-3/60 md:max-w-3xl xl:max-w-4xl relative">
        <h1 class="uppercase text-4xl lg:text-5xl text-text-1/90 leading-snug md:leading-snug lg:leading-snug m-auto md:m-0 md:mb-3 md:max-w-xl">Das studentische Webdesign Kollektiv aus Wien.</h1>
        <span class="md:max-w-xl m-auto md:mb-4 md:m-0">
            <p class="sm:m-0 xs:mx-4 mx-0 bg-primary/90 text-text-3 text-2xl lg:text-3xl sm:inline sm:whitespace-break-spaces px-1 xs:p-2 sm:p-0 sm:px-[.2em] font-light">Wir sind die Alternative zu großen Agenturen und etablierten Preisen.</p>
        </span>
        <p class="hidden md:block text-md lg:text-lg leading-9 lg:leading-9 mr-24 max-w-xl">Wir sind jung, gut ausgebildet und auf dem neusten Stand der Technik. Unser Geschäftsmodell ist fair und transparent: Sie zahlen einen Bruchteil eines Agentur-Preises und verzichten auf verglaste Meeting-Räume, wir liefern Ihnen im Gegenzug eine hochqualitative Webseite.</p>
    
        <div class="mt-auto mb-12 hidden md:block">
            <Button pX="4" pY="3">Mehr Erfahren</Button><Link class="uppercase md:px-8 md:py-4 text-sm md:text-base" pX="4" pY="3" activeTextColor="text-3" activeColor="primary/20" hoverTextColor="text-3" hoverColor="action-color" href="tel:+436504540202">Anrufen</Link>
        </div>
        <img src="assets/images/FerrisWheel.png" alt="Bild vom Riesenrad in Wien." class="absolute right-0 left-0 bottom-0 -z-20 h-[130%] xs:h-[160%] sm:w-full sm:h-100% object-bottom object-cover md:hidden">
    </div>
    <div class="flex mx-auto grow justify-center md:mr-3 lg:mr-6 xl:mr-12 relative">
        <div class="hidden md:block md:w-36 lg:w-44 xl:w-52 xl:-mr-16 lg:-mr-12 z-10 xl:mt-24 drop-shadow-cmd md:absolute xl:relative -left-16 lg:-left-20 xl:left-0 top-0 bottom-0">
            {@html pricing_circle}
        </div>
        <figure class="overflow-clip w-full h-auto md:min-h-[32rem] md:h-[70vh] xl:h-[85vh] xl:mt-auto sm:w-auto drop-shadow-clg xl:my-0 md:my-auto px-4 -mt-16 xs:-mt-24 md:px-0">
            <PhoneFrame class="xl:mt-20 md:h-full md:w-auto" imageLink="assets/frames/frame_1.svg" imageAlt="Dunkles, mobiles Handymockup für eine Immobiliensuch Website."></PhoneFrame>
        </figure>
    </div>
    <div class="absolute top-0 bottom-0 left-0 right-0 -z-10 overflow-clip">
        <img src="assets/images/Stephan.png" alt="Bild vom Stephansdom in Wien." class="absolute bottom-0 left-0 h-1/2 lg:h-3/4 w-auto hidden md:block blur-sm -z-20">
        <img src="assets/images/Stephan.png" alt="Bild vom Stephansdom in Wien." class="absolute bottom-0 left-0 h-1/2 lg:h-3/4 w-auto hidden md:block blur-3xl -z-30 scale-110 -translate-y-16 opacity-50">
        <img src="assets/images/FerrisWheel.png" alt="Bild vom Riesenrad in Wien." class="absolute top-0 right-0 md:h-1/2 lg:h-3/5 w-auto hidden md:block blur-sm -z-20 rotate-180">
        <img src="assets/images/FerrisWheel.png" alt="Bild vom Riesenrad in Wien." class="absolute top-0 right-0 md:h-3/5 lg:h-3/4 w-auto hidden md:block -z-30 rotate-180 blur-3xl opacity-30">
        <span class="absolute -z-40 text-[#88BFFF] w-[160%] md:h-full md:bottom-0 left-0 -ml-28 opacity-40 md:opacity-30 md:translate-x-0 translate-y-24 blur-3xl">
        {@html bg_shape}
        </span>
        <span class="absolute -z-40 text-[#82FFF7] h-full bottom-0 right-0 translate-x-24 rotate-180 opacity-30 blur-3xl hidden md:block">
            {@html bg_shape}
        </span>
        <div class="w-full h-full bg-bright-4/30"></div>
    </div>
</div>