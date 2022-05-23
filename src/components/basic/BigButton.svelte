<script>
    import Button from "./Button.svelte";

    export let _class;
    export {_class as class}
</script>

<Button pY="4" pX="3" rounding="[0.25rem]" class="text-md md:text-lg w-max {_class}"><slot></slot></Button>