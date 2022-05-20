<script>
    export let text = "Click me"; 
</script>

<button class="bg-primary text-background hover:bg-accent-1 focus:outline-none hover:active:focus:bg-accent-1 font-bold py-2 px-5 rounded-full border-0 uppercase shadow-glow shadow-primary/40 hover:shadow-accent-1/40 focus:active:shadow-accent-1/40">{text}</button>

<style>
    button {
        box-shadow: var(--tw-shadow), 0px 2px 2px rgba(0, 0, 0, 0.4);
    }
</style> 