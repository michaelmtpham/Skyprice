document.getElementById("banking-interest-calculator").addEventListener("click", async ()=> {
    window.location.href = 'banking-interest-calculator.html';
});
document.getElementById("price-calculator").addEventListener("click", async () => {
    window.location.href = 'price-calculator.html';
});
document.getElementById("minion-profit-calculator").addEventListener("click", async () => {
    window.location.href = 'minion-profit-calculator.html';
});

//----------------------------------------------------------------------------------------------------------------------


//async function getBazaarPrice(productID) {
//     const response = await fetch('https://api.hypixel.net/skyblock/bazaar');
//     const data = await response.json();
//
//     if ((data.success) && (data.products[]))
// }



document.getElementById("calculate").addEventListener("click", async () => {
    const minionType = document.getElementById("minion-type").value;
    const tier = parseInt(document.getElementById("minion-tier").value);
    const fuel = document.getElementById("fuel-type").value;
    const hopper = document.getElementById("automated-shipping").value;
    const upgrade1 = document.getElementById("upgrade-1").value;
    const upgrade2 = document.getElementById("upgrade-2").value;

    const resultBox = document.querySelector(".result");
    resultBox.innerHTML = "Calculating...";


    const miningDrops = {
        "Cobblestone": [3086, 3086, 3600, 3600, 4320, 4320, 4800, 4800, 5400, 5400, 6171, 7200],
        "Obsidian": [960, 960, 1029, 1029, 1108, 1108, 1234, 1234, 1440, 1440, 1800, 2057],
        "Glowstone": [5184, 5184, 5635, 5635, 6171, 6171, 6821, 6821, 8100, 8100, 9969, 11782],
        "Gravel": [1662, 1662, 1800, 1800, 1964, 1964, 2274, 2274, 2700, 2700, 3323],
        "Sand": [1662, 1662, 1800, 1800, 1964, 1964, 2274, 2274, 2700, 2700, 3323],
        "Red Sand": [1662, 1728, 1800, 1878, 1964, 2057, 2160, 2274, 2400, 2700, 3323, 3927],
        "Mycelium:": [1662, 1728, 1800, 1878, 1964, 2057, 2160, 2274, 2400, 2700, 3323, 3927],
        "Ice": [3086, 3086, 3600, 3600, 4320, 4320, 4800, 4800, 5400, 5400, 6171, 7200],
        "Coal": [2880, 2880, 3323, 3323, 3600, 3600, 4320, 4320, 4800, 4800, 6171, 7200],
        "Iron": [2541, 2541, 2880, 2880, 3086, 3086, 3600, 3600, 4320, 4320, 5400, 6171],
        "Gold": [1964, 1964, 2160, 2160, 2400, 2400, 2700, 2700, 3086, 3086, 3927, 4800],
        "Diamond": [1490, 1490, 1600, 1600, 1728, 1728, 1964, 1964, 2274, 2274, 2880, 3600],
        "Lapis": [8938, 8938, 9600, 9600, 10368, 10368, 11270, 12343, 12343, 14400, 16200],
        "Redstone": [6703, 6703, 7200, 7200, 7776, 7776, 8452, 8452, 9257, 9257, 10800, 12150],
        "Emerald": [1543, 1543, 1662, 1662, 1800, 1800, 2057, 2057, 2400, 2400, 3086, 3600],
        "Quartz": [1920, 1920, 2057, 2057, 2274, 2274, 2541, 2541, 2979, 2979, 3757, 4320],
        "Endstone": [1662, 1662, 1800, 1800, 1964, 1964, 2274, 2274, 2700, 2700, 3323],
        "Mithril": [1080, 1080, 1152, 1152, 1234, 1234, 1329, 1329, 1440, 1440, 1571, 1728],
        "Hard Stone": [3086, 3086, 3600, 3600, 4320, 4320, 4800, 4800, 5400, 5400, 6171, 7200],
        "Snow": [13292, 13292, 14400, 14400, 15709, 15709, 18189, 18189, 21600, 21600, 26585, 29793]
    }

    const foragingDrops = {
        "Oak": [3600, 3600, 3840, 3840, 4114, 4114, 4547, 4547, 5236, 5236, 6400],
        "Birch": [3600, 3600, 3840, 3840, 4114, 4114, 4547, 4547, 5236, 5236, 6400],
        "Spruce": [3600, 3600, 3840, 3840, 4114, 4114, 4547, 4547, 5236, 5236, 6400],
        "Jungle": [3600, 3600, 3840, 3840, 4114, 4114, 4547, 4547, 5236, 5236, 6400],
        "Dark Oak": [3600, 3600, 3840, 3840, 4114, 4114, 4547, 4547, 5236, 5236, 6400],
        "Acacia": [3600, 3600, 3840, 3840, 4114, 4114, 4547, 4547, 5236, 5236, 6400],
    }

    const fuelModifiers = {
        "Coal": [1.05, 5],
        "Enchanted Bread": [1.05, 12],
        
    }

    const miningMaxTiers = {
        "Cobblestone": 12,
        "Obsidian": 12,
        "Glowstone": 12,
        "Gravel": 11,
        "Sand": 11,
        "Red Sand": 12,
        "Mycelium": 12,
        "Ice": 12,
        "Coal": 12,
        "Iron": 12,
        "Gold": 12,
        "Diamond": 12,
        "Lapis": 12,
        "Redstone": 12,
        "Emerald": 12,
        "Quartz": 12,
        "End Stone": 11,
        "Mithril": 12,
        "Hard Stone": 12,
        "Snow": 11
    }

    const foragingMaxTiers = {
        "Oak": 11,
        "Birch": 11,
        "Spruce": 11,
        "Jungle": 11,
        "Dark Oak": 11,
        "Acacia": 11,
        "Flower": 11
    }

    const fishingMaxTiers = {
        "Fishing": 12,
        "Clay": 12
    }

    const farmingMaxTiers = {
        "Wheat": 12,
        "Melon": 12,
        "Pumpkin": 12,
        "Carrot": 12,
        "Potato": 12,
        "Mushroom": 12,
        "Cactus": 12,
        "Cocoa Beans": 12,
        "Sugar Cane": 12,
        "Nether Wart": 12,
        "Cow": 12,
        "Pig": 12,
        "Chicken": 12,
        "Sheep": 12,
        "Rabbit": 12
    }

    const combatMaxTiers = {
        "Zombie": 11,
        "Revenant": 12,
        "Voidling": 11,
        "Inferno": 11,
        "Vampire": 11,
        "Skeleton": 11,
        "Creeper": 11,
        "Spider": 11,
        "Tarantula": 11,
        "Cave Spider": 11,
        "Blaze": 12,
        "Magma Cube": 12,
        "Enderman": 11,
        "Ghast": 12,
        "Slime": 11
    }


})