<script lang="ts">
import Center from "./basic/Center.svelte";


    export let width = "3/5";
    export let smWidth = "auto";
    export let textAlign = "center";
    export let Fontsize = "5xl";

    let _class = "";
	export { _class as class };
</script>

<Center>
    <h1 class="mx-3 md:w-{width} w-{smWidth} text-{textAlign} md:text-{Fontsize} {_class || ''} text-3xl font-medium">
        <slot></slot>
    </h1>
</Center>


<style>
    h1{
        text-shadow: 0px -3.51027px 14.0411px rgba(255, 117, 73, 0.45), 0px 7.02053px 9.65324px rgba(0, 0, 0, 0.3);
        line-height: 57px;
    }
</style>