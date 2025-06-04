const features = ["price-calculator", "price-history", "npc-bazaar", "bazaar-npc", "craft-flips", "kat-flips", "bits-shop-items", "player-search"];

async function loadFile(feature) {
    const content = document.getElementById("homeContent");
    const response = await fetch(`${feature}.html`);
    content.innerHTML = await response.text();

    loadCSS(`${feature}.css`);
    loadJS(`${feature}.js`);
}

function loadCSS(feature) {
    if (document.querySelector(`link[href="${feature}"]`)) {
        return;
    }   
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = feature;
    document.head.appendChild(link);
}

function loadJS(feature) {
    if (document.querySelector(`script[src="${feature}"]`)) {
        return;
    }
    const script = document.createElement("script");
    script.src = feature;
    script.defer = true;
    document.body.appendChild(script);
}

features.forEach(id => {
    const element = document.getElementById(id);
    if (element) {
        element.addEventListener("click", () => loadFile(id))
    }
});