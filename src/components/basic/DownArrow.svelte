<script>
    export let jumpHeight = "1rem";
    import arrow from "../../assets/ui/down-arrow.svg";
    import Link from "./Link.svelte";

    export let classes = "md:px-8 md:py-4 text-sm md:text-base";
    export {classes as class};
    export let arrowClasses = "";
</script>

<div class="rounded-full arrow {classes}" style="--jumpHeight:{jumpHeight}">
    <Link pX="2" py="4" rounding="full" class="{classes}">
        <span class="{arrowClasses} animate-bounce">
            {@html arrow}
        </span>
    </Link>
</div>
<style>
    .arrow {
        animation: jumpInfinite 2.5s infinite ease-in;
    }

    @keyframes jumpInfinite {
        0% {
            transform: translateY(0);
        }
        80% {
            transform: translateY(--jumpHeight);
            opacity: 0;
        }
        81% {
            transform: translateY(0);
            opacity: 0;
        }
        100% {
            opacity: 1;
            transform: translateY(0);
        }
    }
</style>