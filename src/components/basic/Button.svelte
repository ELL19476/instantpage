<script>    
    export let mainColor = "primary";
    export let textColor = "background";
    export let accentColor = "text-2";
    export let rounding = "full";
    export let pY = "2";
    export let pX = "5";

    export let smPX = "1";
    export let smPY = "2";
    
    export let classes = "";
    export {classes as class};
    // <span class="h-[1em] inline-block ml-2">{@html arrow}</span>
</script>

<button class="font-black transition-colors bg-{mainColor} text-{textColor} hover:bg-{accentColor} focus:outline-none active:ring active:ring-{accentColor} font-bold sm:py-{pY} sm:px-{pX} py-{smPX} px-{smPY} rounded-{rounding} border-0 uppercase shadow-glow shadow-{mainColor}/40 hover:shadow-{accentColor}/40 {classes} flex items-center">
    <slot></slot>
</button>

<style>
    button {
        box-shadow: var(--tw-shadow), 0px 2px 2px rgba(0, 0, 0, 0.4);
    }
</style> 
