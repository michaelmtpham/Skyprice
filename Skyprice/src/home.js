const priceCalculator = document.getElementById("price-calculator");
const priceHistory = document.getElementById("price-history");
const npcToBazaar = document.getElementById("npc-bazaar");
const bazaarToNPC = document.getElementById("bazaar-npc");
const craftFlips = document.getElementById("craft-flips");
const katFlips = document.getElementById("kat-flips");
const bitsShopItems = document.getElementById("bits-shop-items");
const playerSearch = document.getElementById("player-search");

priceCalculator.addEventListener("click", async event => {
    const response = await fetch('price-calculator.html');
    document.querySelector("#homeContent").innerHTML = await response.text();
});

priceHistory.addEventListener("click", async event => {
    const response = await fetch('price-history.html');
    document.querySelector("#homeContent").innerHTML = await response.text();
});

npcToBazaar.addEventListener("click", async event => {
    const response = await fetch('npc-bazaar.html');
    document.querySelector("#homeContent").innerHTML = await response.text();
});

bazaarToNPC.addEventListener("click", async event => {
    const response = await fetch('bazaar-npc.html');
    document.querySelector("#homeContent").innerHTML = await response.text();
});

craftFlips.addEventListener("click", async event => {
    const response = await fetch('craft-flips.html');
    document.querySelector("#homeContent").innerHTML = await response.text();
});

katFlips.addEventListener("click", async event => {
    const response = await fetch('kat-flips.html');
    document.querySelector("#homeContent").innerHTML = await response.text();
});

bitsShopItems.addEventListener("click", async event => {
    const response = await fetch('bits-shop-items.html');
    document.querySelector("#homeContent").innerHTML = await response.text();
});

playerSearch.addEventListener("click", async event => {
    const response = await fetch('player-search.html');
    document.querySelector("#homeContent").innerHTML = await response.text();
});

