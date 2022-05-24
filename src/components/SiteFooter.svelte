<script>
    import Hr from "./basic/Hr.svelte";

    let footerData = [
        {
            title: "Lorem ipsum Dolor",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi magnam tempora recusandae quasi, inventore veritatis voluptates iste officia repellendus molestias! Totam vitae ad minima quidem, odit eum blanditiis. Nisi, rem?"
        },
        {
            title: "Lorem ipsum Dolor",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi magnam tempora recusandae quasi, inventore veritatis voluptates iste officia repellendus molestias! Totam vitae ad minima quidem, odit eum blanditiis. Nisi, rem?"
        },
        {
            title: "Lorem ipsum Dolor",
            text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi magnam tempora recusandae quasi, inventore veritatis voluptates iste officia repellendus molestias! Totam vitae ad minima quidem, odit eum blanditiis. Nisi, rem?"
        }
    ]
</script>

<Hr class="mt-12" color="panel/70"></Hr>
<div class="grid lg:grid-cols-3 grid-cols-1 text-center mx-5 md:mx-32 md:text-left text-text-3 mt-3 md:mt-10 gap-x-10 mb-7">
    {#each footerData as d}
        <div class="mt-6 md:mt-0">
            <h3 class="font-bold text-xl text-text-3 mb-3">{d.title}</h3>
            <p class="text-sm">{d.text}</p>
        </div>
    {/each}
</div>