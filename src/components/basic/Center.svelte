<script>
    let input;
    
    export let horizontal = true;
    let _class = "";
    export { _class as class };
</script>

<div bind:this="{input}" class:row={!horizontal} class="flex-dir flex justify-center align-middle {_class || ''}">
    <slot></slot>
</div>