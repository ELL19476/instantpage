<script>
    export let jumpHeight = "1rem";
    import arrow from "../../assets/ui/down-arrow.svg";
    import Link from "./Link.svelte";

    export let classes = "md:px-8 md:py-4 text-sm md:text-base";
    export let href = "#";
    export {classes as class};
    export let arrowClasses = "";
</script>

<div class="rounded-full arrow w-fit mx-auto z-50 {classes}" style="--jumpHeight:{jumpHeight}">
    <Link pX="2" pY="2" rounding="full" href={href}>
        <div class="block {arrowClasses}">
            {@html arrow}
        </div>
    </Link>
</div>
<style>
    .arrow {
        animation: jumpInfinite 2.5s infinite ease-in;
    }
    .arrow:hover {
        animation-play-state: paused;
    }

    @keyframes jumpInfinite {
        0% {
            bottom: var(--jumpHeight);
        }
        50% {
            opacity: .6;
        }
        80% {
            bottom: 0;
            opacity: 0;
        }
        81% {
            bottom: var(--jumpHeight);
            opacity: 0;
        }
        100% {
            opacity: 1;
            bottom: var(--jumpHeight);
        }
    }
</style>