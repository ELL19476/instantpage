<script>
    import Rectangle from "./basic/Rectangle.svelte";
    import pinIcon from "../assets/pin.svg";
    import mailIcon from "../assets/mail.svg";
    import phoneIcon from "../assets/phone.svg";

    export let phone = "";
    export let mail = "";
    export let adress = "";
    export let _class = "";
    export {_class as class}

    let contact = [];
    if(phone) contact.push({text: phone, icon: phoneIcon});
    if(mail) contact.push({text: mail, icon: mailIcon});
    if(adress) contact.push({text: adress, icon: pinIcon});
</script>

<Rectangle width="full" class="{_class}">
    <h1 class="text-2xl font-bold mb-5">Kontakt</h1>
    <div>
        {#each contact as entry}
            <div class="text-md font-bold text-text-1 my-3 flex">
                <span class="h-[1.8em] w-[2em] inline-block mr-2">{@html entry.icon}</span>
                {entry.text}
            </div>
        {/each}
        <span></span>

    </div>
</Rectangle>