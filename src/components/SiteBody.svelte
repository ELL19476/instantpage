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

  let root;
  onMount(() => {
        root.style.minHeight = contentHeight + "px";
        root.style.marginTop = navbarHeight + "px";
    });

    $: {
        if(root) {
            root.style.minHeight = contentHeight + "px";
            root.style.marginTop = navbarHeight + "px";
        }     
    }

</script>

<div class="flex relative h-min" bind:this={root}>
    <DownArrow jumpHeight="1.5rem" class="absolute bottom-4 right-0 left-0 m-auto" arrowClasses="w-4"></DownArrow>
    <div class="p-14 pr-0 mr-12 pb-0 h-100 flex flex-col gap-1 md:gap-4 lg:gap-5 grow basis-[content] bg-bright-3/60 max-w-4xl">
        <h1 class="uppercase text-4xl lg:text-5xl text-text-1/90 leading-snug md:leading-snug lg:leading-snug mb-3 max-w-2xl">Das studentische Webdesign Kollektiv aus Wien.</h1>
        <span class="max-w-xl mb-4">
            <p class="bg-primary/90 text-text-3 text-2xl lg:text-3xl inline whitespace-break-spaces px-[.2em] font-light">Wir sind die Alternative zu großen Agenturen und etablierten Preisen.</p>
        </span>
        <p class="hidden md:block text-md lg:text-lg leading-9 lg:leading-9 mr-24 max-w-xl">Wir sind jung, gut ausgebildet und auf dem neusten Stand der Technik. Unser Geschäftsmodell ist fair und transparent: Sie zahlen einen Bruchteil eines Agentur-Preises und verzichten auf verglaste Meeting-Räume, wir liefern Ihnen im Gegenzug eine hochqualitative Webseite.</p>
    
        <div class="mt-auto mb-12">
            <Button pX="4" pY="3">Mehr Erfahren</Button><Link class="uppercase md:px-8 md:py-4 text-sm md:text-base" pX="4" pY="3" activeTextColor="text-3" activeColor="primary/20" hoverTextColor="text-3" hoverColor="action-color" href="tel:+436504540202">Anrufen</Link>
        </div>
    </div>
    <div class="flex mx-auto grow justify-center mr-12">
        <div class="w-52 -mr-16 z-10 mt-24 drop-shadow-cmd">
            {@html pricing_circle}
        </div>
        <figure class="overflow-clip min-h-[32rem] h-[85vh] mt-auto w-auto">
            <PhoneFrame class="mt-20 h-full w-auto drop-shadow-clg" imageLink="assets/frames/frame_1.svg" imageAlt="Dunkles, mobiles Handymockup für eine Immobiliensuch Website."></PhoneFrame>
        </figure>
    </div>
    <div class="absolute top-0 bottom-0 left-0 right-0 -z-10 overflow-clip">
        <img src="assets/images/Stephan.png" alt="Bild vom Stephansdom in Wien." class="absolute bottom-0 left-0 h-3/4 w-auto blur-sm -z-20">
        <img src="assets/images/Stephan.png" alt="Bild vom Stephansdom in Wien." class="absolute bottom-0 left-0 h-3/4 w-auto blur-3xl -z-30 scale-110 -translate-y-16 opacity-40">
        <img src="assets/images/FerrisWheel.png" alt="Bild vom Riesenrad in Wien." class="absolute top-0 right-0  h-3/5 w-auto blur-sm -z-20 rotate-180">
        <span class="absolute -z-40 text-[#88BFFF] h-full bottom-0 left-0 translate-y-24 blur-3xl">
        {@html bg_shape}
        </span>
        <span class="absolute -z-40 text-[#82FFF7] h-full bottom-0 right-0 translate-x-24 rotate-180 opacity-30 blur-3xl">
            {@html bg_shape}
        </span>
        <div class="w-full h-full bg-bright-4/30"></div>
    </div>
</div>