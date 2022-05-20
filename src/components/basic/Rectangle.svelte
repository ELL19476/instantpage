<script lang="ts">
    export let width = "fit";
    export let height = "fit";
    export let padding = "3";
</script>

<div class="w-{width} h-{height} p-{padding} rounded-lg bg-panel bg-opacity-40">
    <slot></slot>
</div>

<style>
    div{
        /* inner shadow */
        box-shadow: inset 0px 0px 70.826px rgba(15, 5, 36, 0.22);
    }
</style>