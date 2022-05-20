<script>
    let _class = "";
    export { _class as class };
</script>

<div class="flex justify-center align-middle {_class || ''}">
    <slot></slot>
</div>