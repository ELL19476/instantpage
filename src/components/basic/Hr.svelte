<script>
    export let color = "primary";
    export let width = "full";
    export let strength = "4";

    export let _class = "";
    export { _class as class };
</script>

<hr class="text-{color} border-t-{strength} mx-auto w-{width} {_class}"/>