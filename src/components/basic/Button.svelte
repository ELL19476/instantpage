<script>
    import arrow from '../../assets/arrow.svg'
    
    export let mainColor = "primary";
    export let textColor = "background";
    export let accentColor = "text-2";
    export let classes = "";
</script>

<button class="bg-{mainColor} text-{textColor} hover:bg-{accentColor} focus:outline-none active:ring active:ring-{accentColor} font-bold py-2 px-5 rounded-full border-0 uppercase shadow-glow shadow-{mainColor}/40 hover:shadow-{accentColor}/40 {classes}">
    <slot></slot><span class="inline h-[1em]">{@html arrow}</span>
</button>

<style>
    button {
        box-shadow: var(--tw-shadow), 0px 2px 2px rgba(0, 0, 0, 0.4);
    }
</style> 