<script lang="ts">
import Hr from "./components/basic/Hr.svelte";
import Rectangle from "./components/basic/Rectangle.svelte";
import { Body } from 'svelte-body'
import Title from "./components/Title.svelte";
import Center from "./components/basic/Center.svelte";
import Panel from "./components/Panel.svelte";

</script>

<main>
    <Title class="mt-12">IHRE <b>PROFESSIONELLE</b>, <b>HANDGEMACHTE</b> WEBSITE AUS WIEN</Title>
    
    <Center class="mt-14" horizontal={false}>
        <Panel></Panel>
    </Center>
</main>
