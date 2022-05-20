<script lang="ts">
import Center from "./basic/Center.svelte";
import Rectangle from "./basic/Rectangle.svelte";

    export let header: string;
    export let subheader: string;
    export let text: string;

    export let contentWidth = "55";
    
</script>

<Rectangle class="text-center">
    <h3 class="px-5 text-2xl text-text-1 font-medium text-opacity-80 drop-shadow-text">{header}</h3>
    <Center>
        <div class="w-[{contentWidth}%] m-5 text-text-1">
            <slot></slot>
        </div>
    </Center>
    <div class="px-2 w-full tracking-tight leading-none text-text-2 mb-2">
        <h4 class="font-bold text-xl">
            {subheader}
        </h4>
        <p class="font-medium">
            {text}
        </p>
    </div>
</Rectangle>