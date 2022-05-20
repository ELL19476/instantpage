<script>
    export let horizontal = true;
    let _class = "";
    export { _class as class };
</script>

<div class:row={!horizontal} class="flex-dir flex justify-center align-middle {_class || ''}">
    <slot></slot>
</div>