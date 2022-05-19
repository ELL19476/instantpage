<script lang="ts">
    export let width = "auto";
    export let height = "auto";
</script>

<div class="w-{width} w-auto h-{height}">
    <slot></slot>
</div>

<style>
    div{
        /* inner shadow */
        box-shadow: inset 0 0 0 1px rgba(0,0,0,.1);
    }
</style>