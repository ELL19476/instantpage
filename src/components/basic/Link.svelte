<script>    
    export let ariaLabel = "button";
    export let href = "#";
    export let mainColor = "transparent";
    export let textColor = "text-1";
    export let rounding = "none";
    export let hoverColor = "primary";
    export let hoverTextColor = "action-color";
    export let activeColor = "bright-1";
    export let activeTextColor = "action-color";


    export let pY = "0";
    export let pX = "1";
    
    export let classes = "";
    export {classes as class};

    let hoverBg, activeBg;

    function activate(e, bg) {
        reposition(e, bg);
        let diagonal = Math.sqrt(Math.pow(e.target.offsetWidth, 2) + Math.pow(e.target.offsetHeight, 2));
        bg.style.height = 2 * diagonal + "px";
        bg.style.width = 2 * diagonal + "px";
    }
    function deactivate(e, bg) {
        reposition(e, bg);
        bg.style.width = "0";
        bg.style.height = "0";
    }
    function reposition(e, bg) {
        let parentOffset = e.target.getBoundingClientRect();
        let pointerPosition = getPointerPosition(e);
        let relX = pointerPosition.x - parentOffset.left;
        let relY = pointerPosition.y - parentOffset.top;
        bg.style.left = relX + "px";
        bg.style.top = relY + "px";
    }
    function getPointerPosition(e) {
        switch (e.pointerType) {
            case "mouse":
            return {x: e.clientX, y: e.clientY};
            case "pen":
            return {x: e.clientX, y: e.clientY};
            case "touch":
            return {x: e.touches[0].clientX, y: e.touches[0].clientY};
            default:
            console.log(`pointerType ${e.pointerType} is not supported`);
      }
      return {x: e.clientX, y: e.clientY};
    }
</script>
<a on:pointerenter={e => activate(e, hoverBg)} on:pointerdown={e => activate(e, activeBg)} on:pointerout={e => {deactivate(e, hoverBg); deactivate(e, activeBg)}} on:pointerup={e => deactivate(e, activeBg)} on:click class="button bg-{mainColor} text-{textColor} py-{pY} px-{pX} rounded-{rounding} border-0 uppercase inline-block transition-all duration-300 ease-out hover:text-{hoverTextColor} anoh:text-{textColor} hactive:{activeTextColor} active:scale-95 {classes}" href="{href}" aria-label="{ariaLabel}">
    <span bind:this={hoverBg} class="bg z-10 pointer-events-none -translate-x-1/2 -translate-y-1/2 duration-300 ease-in-out bg-{hoverColor} rounded-[50%] absolute w-0 h-0"></span>
    <span bind:this={activeBg} class="bg z-20 pointer-events-none -translate-x-1/2 -translate-y-1/2 duration-300 ease-in-out bg-{activeColor} rounded-[50%] absolute w-0 h-0"></span>
    <span class="button-text z-30 relative pointer-events-none"><slot></slot></span>
</a>

<style>
.button {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}
.button-text, .bg {
    -webkit-animation: hue-rotate 10s linear infinite;
    animation: hue-rotate 10s linear infinite;
  -webkit-font-smoothing: antialiased;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;

    transition-property: width, height;
}

@-webkit-keyframes hue-rotate {
  from {
    -moz-filter: hue-rotate(0);
    -ms-filter: hue-rotate(0);
    filter: hue-rotate(0);  
  }
  to {
    -moz-filter: hue-rotate(360deg);
    -ms-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
  }
}

@keyframes hue-rotate {
  from {
    -moz-filter: hue-rotate(0);
    -ms-filter: hue-rotate(0);
    filter: hue-rotate(0);
  }
  to {
    -moz-filter: hue-rotate(360deg);
    -ms-filter: hue-rotate(360deg);
    filter: hue-rotate(360deg);
  }
}
</style> 