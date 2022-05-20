<script>
    import Hr from "./basic/Hr.svelte";

    export let _class = "";
    export {_class as class};
</script>


<h1 class="text-4xl drop-shadow-text-lg mb-2 font-medium {_class}"><slot></slot></h1>
<Hr color="background-bright/90" width="3/4" class="ml-0 mt-1"></Hr>