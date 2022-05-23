<script>
    import SiteParagraph from "./SiteParagraph.svelte";
    import SectionHeader from "./SectionHeader.svelte";
    import ContactPanel from "./ContactPanel.svelte";
    import Hr from "./basic/Hr.svelte";
    import BigButton from "./basic/BigButton.svelte"

    let siteData = [
        {
            title: `<strong class="font-bold">Wie</strong> es Funktioniert`,
            grid: [
                {
                    title: "Ihre Vision professionell <em>umgesetzt</em>.",
                    subheading: "Wir analysieren Ihre Wünsche, und legen sofort los!",
                    text: "In einem innovativen Präferenzfindungs-prozess geben Sie mir die nötigen Informationen, um Ihre  maßgeschneiderte Webpräsenz zu erstellen.",
                    button: "Teilen Sie uns Ihre Vision mit",
                    time: "3min",
                    img: "./assets/illustrations/progressive_app.svg",
                    imgClass: "mt-9 p-3 pr-4 pl-8 max-h-72",
                    alt: "Webentwicklung für mobile Geräte und Computer illustration."
                }, 
                {
                    title: "Zeit ist Geld. <em>Sparen Sie beides!</em>",
                    subheading: "Keine teuren Meetings, keine Reibungsverluste.",
                    text: "Sie geben uns so viele oder so wenige Infos wie Sie wollen - mithilfe effizienter Tools und professioneller Arbeitsprozesse erstellen wir Ihnen Ihre Website in Rekordzeit.",
                    button: "Ihre Website ab 129€",
                    img: "./assets/illustrations/engineering_team.svg",
                    imgClass: "mt-4 p-3 pl-4 pr-8 max-h-72",
                    alt: "Team an motivierten Webentwicklern."
                },
                {
                    title: "In <em>guten</em> Händen.",
                    subheading: "Ihr Vertrauen ist uns wichtig.",
                    text: "Gefällt Ihnen die Seite nicht? Sie bekommen Ihr Geld zurück. Einfach so.",
                    button: "Kostenlos loslegen",
                    img: "./assets/illustrations/appreciation.svg",
                    imgClass: "mt-9",
                    alt: "Vertrauenswürdiges und humorvolles Team."
                }
            ]
        },
        {
            title: `Unser <strong class="font-bold">Team</strong>`,
            grid: [
                {
                    title: "<em>Webdesigner</em> aus Wien",
                    subheading: "Als Programmierer habe ich schon vor langer Zeit meine Leidenschaft fürs Webdesign entdeckt.",
                    text: "Von komplexen Fullstack-Webapps bis hin zu modernen Online-Auftritten habe ich schon alles umgesetzt. <br> Ich arbeite gerne und viel, doch trotzdem darf der Spaß an der Sache niemals fehlen!",
                    time: "3min",
                    img: "./assets/images/Placeholder.jpeg",
                    imgClass: "mt-9 rounded-md object-cover p-0 max-h-96 shadow-md ",
                    alt: "Webentwicklung für mobile Geräte und Computer illustration.",
                    contactPanel: {
                        phone: "+43 6504540202",
                        mail: "samuel@ellmauer.eu",
                        adress: "Aspangstraße 51, 1030 Wien"
                    }
                }
            ]
        }
    ];
</script>

<div class="xl:max-w-5xl lg:max-w-4xl m-auto pt-16 px-6 md:px-8 mb-8 relative">
        {#each siteData as section}
            <SectionHeader class="mt-16"><strong class="font-bold">{@html section.title}</SectionHeader>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-y-4">
            {#each section.grid as item, i}
                {#if i % 2 == 0}
                <img src="{item.img}" alt="{item.alt}" class="w-full {item.imgClass || ''}">
                {/if}
                <SiteParagraph {...item}>
                    {#if item.contactPanel}
                    <div class="mr-8"> <ContactPanel {...item.contactPanel} class="mt-8 mr-6"></ContactPanel> </div>
                    {/if}
                </SiteParagraph>
                {#if i % 2 != 0}
                <img src="{item.img}" alt="{item.alt}" class="w-full {item.imgClass || ''}">
                {/if}
                {/each}
            </div>
        {/each}
        <Hr class="my-24 w-3/4" color="panel/70"></Hr>
        <img class="mr-56 h-64 -mt-32 ml-auto" src="./assets/illustrations/crossplattform-site.svg" alt="Illustration einer Website, die am Handy, Tablet und PC läuft.">
        <div class="h-14"></div>
        <BigButton class="absolute left-0 right-0 mx-auto -mt-3 w-fit bottom-0">Kostenlos loslegen!</BigButton>
</div>