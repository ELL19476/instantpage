<script>
    import Hr from "./basic/Hr.svelte";
    import Button from "./basic/Button.svelte";
    import arrow from "../assets/arrow.svg";

    export let title; 
    export let subheading; 
    export let text; 
    export let button = undefined; 
</script>

<div class="ml-12 mt-9 max-w-sm">
    <h2 class="text-2xl leading-7 font-bold text-text-2 drop-shadow-text mb-2">{@html title}</h2>
    <Hr color="text-2" strength="[3px]" class="mb-3"></Hr>
    <p class="text-lg leading-6 text-text-2 font-bold drop-shadow-text">{@html subheading}</p>
    <p class="text-md leading-6  text-text-3 drop-shadow-text">{@html text}</p>
    {#if button}
    <Button pY="4" pX="3" rounding="[0.25rem]" class="mt-5 text-lg mb-4">{button} <span class="h-[1em] inline-block ml-2">{@html arrow}</span></Button>
    {/if}

    <slot></slot>
</div> 
