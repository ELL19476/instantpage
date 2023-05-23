<script>
    import logo from "../assets/general/logo.svg" 
    import hamburger from "../assets/ui/hamburger.svg"
    import Button from "./basic/Button.svelte"
    import Link from "./basic/Link.svelte";

    let menu;
    let y;
    let extraClasses = "";
    $: extraClasses = y > 0? "shadow-vertical" : "";

    function toggleMenu() {
        menu.classList.toggle("translate-x-[100%]")
    }
</script>

<svelte:window bind:scrollY={y} />
<div id="header" class="bg-bright-1 font-display flex justify-between font-light uppercase p-2 md:p-4 text-md lg:text-lg z-50 top-0 left-0 right-0 fixed transition-shadow duration-300 ease-linear {extraClasses}">
    <div id="logo" class="h-[2.5em] md:h-[3em]">
        {@html logo}
    </div>
    <div class="md:hidden flex gap-4">
        <Button class="my-auto" pX="2" pY="1">Anrufen</Button>
        <button id="hamburger-button" class="h-[2.5em]" on:click={toggleMenu}>
            {@html hamburger}
        </button>
    </div>
    <div bind:this={menu} class="bg-bright-1 z-50 translate-x-[100%] md:translate-x-0 transition-transform ease-out duration-300 flex align-end text-right w-full sm:w-auto md:text-left p-4 md:p-0 md:mb-1 md:mr-2 gap-10 md:justify-end flex-col md:flex-row md:mt-auto top-14 md:top-0 bottom-0 right-0 absolute md:relative lg:mr-8 lg:gap-24">
        <Link href="">Referenzen</Link>
        <Link href="">Wie es Funktioniert</Link>
        <Link href="">Preisrechner</Link>
        <Link href="">Kontakt</Link>
    </div>
</div>