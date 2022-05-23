<script>
    import Hr from "./basic/Hr.svelte";

    export let _class = "";
    export {_class as class};
</script>


<h1 class="text-4xl drop-shadow-text-lg mb-2 font-medium text-center sm:text-left {_class}"><slot></slot></h1>
<Hr color="panel/70" width="full" class="ml-0 mb-3 sm:w-3/4"></Hr>