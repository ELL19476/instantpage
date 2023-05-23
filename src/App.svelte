<script lang="ts">
    import { onMount } from "svelte";
    import SiteHeader from "./components/SiteHeader.svelte";
    import SiteBody from "./components/SiteBody.svelte";
    // import SiteFooter from "./components/SiteFooter.svelte"

    let header;
    let screenHeight;
    let contentHeight = 0;
    let navbarHeight = 0;
    
    onMount(() => {
        navbarHeight = document.getElementById("header").offsetHeight;
        contentHeight = screenHeight - navbarHeight;
    });
    $: 
    {
        if(header) {
            navbarHeight = document.getElementById("header").offsetHeight;
            contentHeight = screenHeight - navbarHeight;
        }
    }
    
</script>
<svelte:window bind:innerHeight={screenHeight} /> 
<main>
    <SiteHeader bind:this={header} />

    <SiteBody contentHeight={contentHeight} navbarHeight={navbarHeight}/>
    <!-- <SiteFooter /> -->
</main>