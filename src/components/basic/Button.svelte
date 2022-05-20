<script>    
    export let mainColor = "primary";
    export let textColor = "background";
    export let accentColor = "text-2";
    export let rounding = "full";
    export let pY = "2";
    export let pX = "5";
    export let classes = "";
</script>

<button class="transition-colors bg-{mainColor} text-{textColor} hover:bg-{accentColor} focus:outline-none active:ring active:ring-{accentColor} font-bold py-{pY} px-{pX} rounded-{rounding} border-0 uppercase shadow-glow shadow-{mainColor}/40 hover:shadow-{accentColor}/40 {classes} flex items-center">
    <slot></slot>
</button>

<style>
    button {
        box-shadow: var(--tw-shadow), 0px 2px 2px rgba(0, 0, 0, 0.4);
    }
</style> 