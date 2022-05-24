<script lang="ts">
import Center from "./basic/Center.svelte";
import Panel from "./Panel.svelte";

import wpLogo from "../assets/startpage/wp-logo.svg"
import moneyReturn from "../assets/startpage/money-return.svg"

import Title from "./Title.svelte";
import Hr from "./basic/Hr.svelte";
import Button from "./basic/Button.svelte";
import { onMount } from "svelte";
import App from "../App.svelte";

let imageIndex = 0;

let panelPositions: number[] = []
let scrollDifference: number;

let parent: Element = null;

onMount(() => {
    let currentParent = parent.firstChild as Element;
    
    snapPoints.forEach(snapPoint => {
        let child = currentParent.children[snapPoint];
        let rect = child.getBoundingClientRect();
        panelPositions.push(rect.x)
    });
    scrollDifference = panelPositions[1] - panelPositions[0];
});



let initialScroll: number = null;

function onPanelScroll(e: any) {
    let offset: number = e.target.scrollLeft;

    if (initialScroll === null) {
        initialScroll = offset;
    }

    offset = offset - initialScroll;

    if(!isScrolling){
        let diff = offset % scrollDifference;
        if(diff < 10.0) {
            imageIndex = clamp(Math.floor(offset / scrollDifference), 0, 3);
        }

    }
}

function clamp(num: number, min: number, max: number) {
    return Math.min(Math.max(num, min), max);
}

function easeOut(t: number) {
    return 1 - Math.pow(1 - t, 3);
}

let isScrolling: boolean = false;

function snapToPanel(index: number) {
    if(index === imageIndex) return;
    
    let scrollPos = 17 + (index * scrollDifference);
    // lerp parent to the new position
    let time = 0.0;
    
    let scrollStart = parent.scrollLeft;
    
    let startTime = Date.now();
    imageIndex = index;
    
    const step = () => {
        let elapsed = Date.now() - startTime;
        
        time += elapsed / 1000.0;
        let t = easeOut(time);
        
        let scroll = t * scrollPos + (1.0 - t) * scrollStart;

        parent.scrollLeft = scroll;
        
        
        if(time < 1.0) {
            requestAnimationFrame(step);
        }
        else isScrolling = false;
    }
    isScrolling = true;
    requestAnimationFrame(step);
    

}

function lerp(a: number, b: number, t: number) {
    return (1.0 - t) * a + t * b;
}

let snapPoints = [...Array(3).keys()];

</script>

<div class="z-10 absolute h-screen w-16 bg-gradient-to-r from-background to-background/0">
    
</div>

<div class="z-10 absolute right-0 h-screen w-16 bg-gradient-to-l from-background to-background/0">
    
</div>
<div class="flex justify-evenly flex-col min-h-screen">
    <h1>
        {imageIndex}

    </h1>
    
    <Title class="z-20 sm:mt-12">IHRE <b>PROFESSIONELLE</b>, <b>HANDGEMACHTE</b> WEBSITE AUS WIEN</Title>
    
    <div bind:this="{parent}" class:snap-x={!isScrolling} class="overflow-x-scroll scrollbar-hide snap-mandatory" on:scroll="{onPanelScroll}">
        <Center class="mt-14 ml-[25vw] space-x-5 w-fit md:w-auto" horizontal={false}>
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
            <div class="w-[25vw]"></div>
        </Center>
    </div>

    <Center class="md:hidden my-6">
        {#each snapPoints as index}
            <div on:click="{() => snapToPanel(index)}" class="{index != imageIndex ? 'bg-opacity-50 scale-75' : ''} h-3 w-3 m-1 bg-text-2 rounded-full duration-150 ease-out"></div>
        {/each}
    </Center>

    <Hr color="panel/40" class="my-12 hidden md:block" width="2/3"></Hr>
    <!-- <Center class="space-x-5 mb-12"> -->
    <div class="flex justify-center items-center flex-col xs:flex-row space-y-4 xs:space-y-0 xs:space-x-5">
        <Button class="z-20 max-w-fit"><p>jetzt loslegen</p></Button>
        <Button class="z-20 max-w-fit" mainColor="accent-1"><p>mehr erfahren</p></Button>
    </div>
    <!-- </Center> -->
</div>