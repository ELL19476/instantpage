<script lang="ts">
    export let height = "fit";
    export let padding = "3";

    let _class = "";
    export { _class as class };
</script>

<div class="h-{height} p-{padding} rounded-lg bg-panel bg-opacity-40 {_class || ''}">
    <slot></slot>
</div>

<style>
    div{
        /* inner shadow */
        box-shadow: inset 0px 0px 70.826px rgba(15, 5, 36, 0.22);
    }
</style>