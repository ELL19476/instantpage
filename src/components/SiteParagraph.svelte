<script>
    import Hr from "./basic/Hr.svelte";
    import BigButton from "./basic/BigButton.svelte";
    import arrow from "../assets/arrow.svg";

    export let title; 
    export let subheading; 
    export let text; 
    export let button = undefined; 
</script>

<div class="mx-auto px-3 md:px-0 md:ml-12 md:mr-0 mt-9 max-w-xs sm:max-w-sm text-center md:text-left">
    <div class="mx-auto md:mx-0 w-fit md:w-auto">
        <h2 class="text-2xl leading-7 font-bold text-text-2 drop-shadow-text mb-1 md:mb-2 mx-2 md:mx-0">{@html title}</h2>
        <Hr color="text-2" strength="[3px]" class="mb-3"></Hr>
    </div>
    <p class="text-lg leading-6 text-text-2 font-bold drop-shadow-text">{@html subheading}</p>
    <p class="text-md leading-6  text-text-3 drop-shadow-text">{@html text}</p>
    {#if button}
        <BigButton class="mx-auto md:mx-0 mb-5 mt-4">{button} <span class="h-[1em] inline-block ml-2">{@html arrow}</span></BigButton>
    {/if}

    <slot></slot>
</div> 
