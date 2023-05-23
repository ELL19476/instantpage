<script>
    import Link from "./Link.svelte";

    export let ariaLabel = "button";
    export let mainColor = "primary";
    export let textColor = "text-3";  
    export let rounding = "none";
    export let hoverColor = "action-color";
    export let hoverTextColor = "text-3";
    export let activeColor = "primary/20";
    export let activeTextColor = "text-3";


    export let pY = "2";
    export let pX = "5";
    
    export let classes = "md:px-8 md:py-4 text-sm md:text-base";
    export {classes as class};
</script>
<Link href="#" class="{classes} font-normal" pY={pY} pX={pX} mainColor={mainColor} textColor={textColor} rounding={rounding} ariaLabel={ariaLabel} hoverColor={hoverColor} activeColor={activeColor} hoverTextColor={hoverTextColor} activeTextColor={activeTextColor}>
<slot></slot>
</Link>