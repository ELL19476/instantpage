<script lang="ts">
import Button from "./components/basic/Button.svelte";

import Title from "./components/Title.svelte";
import Center from "./components/basic/Center.svelte";
import Panel from "./components/Panel.svelte";
import wpLogo from "./assets/startpage/wp-logo.svg"
import moneyReturn from "./assets/startpage/money-return.svg"
import Hr from "./components/basic/Hr.svelte";

</script>

<main>
    <Title class="mt-12">IHRE <b>PROFESSIONELLE</b>, <b>HANDGEMACHTE</b> WEBSITE AUS WIEN</Title>
    
    <Center class="mt-14 space-x-5" horizontal={false}>
        <Panel
            header="AB"
            subheader="85% billiger"
            text="als die Konkurrenz"
            contentWidth="100"
        >
            <Title>129€</Title>
        </Panel>
        <Panel
            header="100% EDITIERBAR"
            subheader="Wordpress Support"
            text="Inhalte selbst schreiben und austauschen"
        >
            {@html wpLogo}
        </Panel>
        <Panel
            header="GELD-ZURÜCK GARANTIE"
            subheader="Nicht zufrieden?"
            text="Sie bekommen einfach Ihr Geld zurück!"
            contentWidth="50"
        >
            {@html moneyReturn}
        </Panel>
    </Center>
    <Hr color="panel/40" class="my-12" width="2/3"></Hr>
</main>
