window.addEventListener("DOMContentLoaded", () => {
    const minionNames = [
        "Wheat", "Carrot", "Potato",
        "Pumpkin", "Melon", "Mushroom",
        "Cocoa Beans", "Cactus", "Sugar Cane",
        "Cow", "Pig", "Chicken",
        "Sheep", "Rabbit", "Nether Wart",
        "Cobblestone", "Coal", "Iron",
        "Gold", "Diamond", "Lapis",
        "Emerald", "Redstone", "Quartz",
        "Obsidian", "Glowstone", "Gravel",
        "Ice", "Sand", "End Stone",
        "Mithril", "Snow", "Hard Stone",
        "Mycelium", "Red Sand", "Zombie",
        "Skeleton", "Spider", "Cave Spider",
        "Creeper", "Enderman", "Ghast",
        "Slime", "Blaze", "Magma Cube",
        "Revenant", "Tarantula", "Voidling",
        "Inferno", "Vampire", "Oak",
        "Spruce", "Birch", "Dark Oak",
        "Acacia", "Jungle", "Fishing",
        "Clay"
    ];

    const miningTypes = new Set([
        "Cobblestone", "Coal", "Iron", "Gold", "Diamond", "Lapis",
        "Emerald", "Redstone", "Quartz", "Obsidian", "Glowstone",
        "Gravel", "Ice", "Sand", "End Stone", "Mithril", "Snow",
        "Hard Stone", "Mycelium", "Red Sand"
    ]);

    const farmingTypes = new Set([
        "Wheat", "Carrot", "Potato", "Pumpkin", "Melon", "Mushroom",
        "Cocoa Beans", "Cactus", "Sugar Cane", "Nether Wart",
        "Cow", "Pig", "Chicken", "Sheep", "Rabbit"]);

    const foragingTypes = new Set(["Oak", "Birch", "Spruce", "Dark Oak", "Acacia", "Jungle"]);

    const combatTypes = new Set([
        "Zombie", "Skeleton", "Spider", "Cave Spider", "Creeper",
        "Enderman", "Ghast", "Slime", "Blaze", "Magma Cube",
        "Revenant", "Tarantula", "Voidling", "Inferno", "Vampire"
    ]);

    const fishingTypes = new Set([
        "Fishing", "Clay"
    ]);

    const fuels = [
        "Coal",
        "Block of Coal",
        "Enchanted Bread",
        "Enchanted Coal",
        "Enchanted Charcoal",
        "Solar Panel",
        "Enchanted Lava Bucket",
        "Magma Bucket",
        "Plasma Bucket",
        "Everburning Flame",
        "Hamster Wheel",
        "Foul Flesh",
        "Tasty Cheese",
        "Catalyst",
        "Hyper Catalyst",
        "(RARE) Inferno Minion Fuel",
        "(EPIC) Inferno Minion Fuel",
        "(LEGENDARY) Inferno Minion Fuel",
        "N/A"
    ];

    const upgrades = [
        "Minion Expander",
        "Flycatcher",
        "Diamond Spreading",
        "Potato Spreading",
        "Krampus Helmet",
        "Enchanted Egg",
        "Flint Shovel",
        "Lesser Soulflow Engine",
        "Soulflow Engine",
        "Corrupt Soil",
        "Sleepy Hollow",
        "Auto Smelter",
        "Compactor",
        "Super Compactor 3000",
        "Dwarven Super Compactor",
        "Enchanted Shears",
        "N/A"
    ];

    const infernoOnlyFuels = [
        "(RARE) Inferno Minion Fuel", "(EPIC) Inferno Minion Fuel",
        "(LEGENDARY) Inferno Minion Fuel"
    ];

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
        "Acacia": [3600, 3600, 3840, 3840, 4114, 4114, 4547, 4547, 5236, 5236, 6400]
    }
    const fishingDrops = {
        "Fishing": [[554, 277, 133, 44, 33, 33, 33], [576, 288, 138, 46, 35, 35, 35], [600, 300, 144, 48, 36, 36, 36],
            [600, 300, 144, 48, 36, 36, 36], [635, 318, 152, 51, 38, 38, 38], [635, 318, 152, 51, 38, 38, 38],
            [691, 346, 166, 55, 41, 41, 41], [691, 346, 166, 55, 41, 41, 41], [815, 408, 196, 65, 49, 49, 49],
            [815, 408, 196, 65, 49, 49, 49], [1234, 617, 296, 99, 74, 74, 74], [1440, 720, 346, 115, 86, 86, 86]],
        "Clay": [5400, 5400, 5760, 5760, 6284, 6284, 7200, 7200, 8640, 8640, 10800, 12343]
    }
    const farmingDrops = {
        "Wheat": [[2880, 4320], [2880, 4320], [3323, 4985], [3323, 4985], [3927, 5891], [3927, 5891], [4320, 6480],
            [4320, 6480,], [4800, 7200], [4800, 7200], [5400, 8100], [6171, 9257]],
        "Melon": [9000, 9000, 9600, 9600, 10286, 10286, 11676, 11676, 13500, 13500, 16615, 21600],
        "Pumpkin": [1350, 1350, 1440, 1440, 1600, 1600, 1800, 1800, 2160, 2160, 2700, 3600],
        "Carrot": [6480, 6480, 7200, 7200, 8100, 8100, 9257, 9257, 10800, 10800, 12960, 16200],
        "Potato": [6480, 6480, 7200, 7200, 8100, 8100, 9257, 9257, 10800, 10800, 12960, 16200],
        "Mushroom": [[720, 720], [720, 720], [771, 771], [771, 771], [831, 831], [831, 831], [939, 939], [939, 939],
            [1080, 1080], [1080, 1080], [1350, 1350], [1800, 1800]],
        "Cactus": [4800, 4800, 5184, 5184, 5635, 5635, 6171, 6171, 7200, 7200, 8640, 10800],
        "Cocoa Beans": [4800, 4800, 5184, 5184, 5635, 5635, 6171, 6171, 7200, 7200, 8640, 10800],
        "Sugar Cane": [5891, 5891, 6480, 6480, 7200, 7200, 8100, 8100, 8938, 8938, 10800, 14400],
        "Nether Wart": [2592, 2592, 2757, 2757, 2945, 2945, 3161, 3161, 3411, 3411, 4050, 4800],
        "Cow": [[1662, 1662], [1662, 1662], [1800, 1800], [1800, 1800], [1964, 1964], [1964, 1964],
            [2160, 2160], [2160, 2160], [2541, 2541], [2541, 2541], [3323, 3323], [4320, 4320]],
        "Pig": [1662, 1662, 1800, 1800, 1964, 1964, 2160, 2160, 2541, 2541, 3323, 4320],
        "Chicken": [[1662, 1662], [1662, 1662], [1800, 1800], [1800, 1800], [1964, 1964], [1964, 1964],
            [2160, 2160], [2160, 2160], [2400, 2400], [2400, 2400], [2880, 2880], [3600, 3600]],
        "Sheep": [[1800, 1800], [1800, 1800], [1964, 1964], [1964, 1964], [2160, 2160], [2160, 2160],
            [2400, 2400], [2400, 2400], [2700, 2700], [2700, 2700], [3600, 3600], [4800, 4800]],
        "Rabbit": [[1662, 582, 582], [1662, 582, 582], [1800, 630, 630], [1800, 630, 630], [1964, 687, 687],
            [1964, 687, 687], [2160, 756, 756], [2160, 756, 756], [2541, 889, 889], [2541, 889, 889],
            [3323, 1163, 1163], [4320, 1512, 1512]]
    }
    const combatDrops = {
        "Zombie": [[1662, 83, 17, 17], [1662, 83, 17, 17], [1800, 90, 18, 18], [1800, 90, 18, 18],
            [1964, 98, 20, 20], [1964, 98, 20, 20], [2160, 108, 22, 22], [2160, 108, 22, 22], [2541, 127, 25, 25],
            [2541, 127, 25, 25], [3323, 166, 33, 33]],
        "Revenant": [[4469, 298], [4469, 298], [4985, 332], [4985, 332], [5635, 376], [5635, 376],
            [6821, 455], [6821, 455], [8938, 596], [8938, 596], [12960, 864], [16200, 1080]],
        "Voidling": [[384, 2323, 0.6], [384, 2323, 0.6], [411, 2489, 0.6], [411, 2489, 0.6], [443, 2681, 0.7],
            [443, 2681, 0.7], [494, 2987, 0.8], [494, 2987, 0.8], [576, 3485, 0.9], [576, 3485, 0.9], [720, 4356, 1.1]],
        "Inferno": [43, 44, 45, 47, 49, 51, 52, 55, 57, 59, 62],
        "Vampire": [227, 227, 247, 247, 270, 270, 309, 309, 369, 369, 455],
        "Skeleton": [1662, 1662, 1800, 1800, 1964, 1964, 2160, 2160, 2541, 2541, 3323],
        "Creeper": [1600, 1600, 1728, 1728, 1878, 1878, 2057, 2057, 2400, 2400, 3086],
        "Spider": [[1662, 831], [1662, 831], [1800, 900], [1800, 900], [1964, 982],
            [1964, 982], [2160, 1080], [2160, 1080], [2541, 1271], [2541, 1271], [3323, 1662]],
        "Tarantula": [[4707, 1490, 298], [4707, 1490, 298], [5250, 1662, 332], [5250, 1662, 332],
            [5935, 1878, 376], [5935, 1878, 376], [7185, 2274, 455], [7185, 2274, 455], [9415, 2979, 596],
            [9415, 2979, 596], [13651, 4320, 864]],
        "Cave Spider": [[1662, 831], [1662, 831], [1800, 900], [1800, 900],
            [1964, 982], [1964, 982], [2160, 1080], [2160, 1080], [2541, 1271], [2541, 1271], [3323, 1662]],
        "Blaze": [1309, 1309, 1394, 1394, 1516, 1516, 1728, 1728, 2057, 2057, 2618, 2880],
        "Magma Cube": [2430, 2430, 2592, 2592, 2777, 2777, 3110, 3110, 3535, 3535, 4320, 4860],
        "Enderman": [1350, 1350, 1440, 1440, 1543, 1543, 1728, 1728, 1964, 1964, 2400],
        "Ghast": [864, 864, 919, 919, 982, 982, 1054, 1054, 1137, 1137, 1350, 1440],
        "Slime": [2991, 2991, 3240, 3240, 3535, 3535, 4093, 4093, 4860, 4860, 6480]
    }
    const fuelModifiers = {
        "Coal": [1.05, 30],
        "Block of Coal": [1.05, 300],
        "Enchanted Bread": [1.05, 720],
        "Enchanted Coal": [1.10, 1440],
        "Enchanted Charcoal": [1.20, 2160],
        "Solar Panel": [1.25, Infinity],
        "Enchanted Lava Bucket": [1.25, Infinity],
        "Magma Bucket": [1.35, Infinity],
        "Plasma Bucket": [1.35, Infinity],
        "Everburning Flame": [1.4, Infinity],
        "Hamster Wheel": [1.5, 1440],
        "Foul Flesh": [1.9, 300],
        "Tasty Cheese": [2, 60],
        "Catalyst": [3, 180],
        "Hyper Catalyst": [4, 360],
        "(RARE) Inferno Minion Fuel": [10, 1440],
        "(EPIC) Inferno Minion Fuel": [15, 1440],
        "(LEGENDARY) Inferno Minion Fuel": [20, 1440],
        "N/A": [1,Infinity]
    }
    const upgradeModifiers = {
        "Minion Expander": (minion, config) => ({speedMultiplier: 1.05}),
        "Flycatcher": (minion, config) => ({speedMultiplier: 1.20}),

        "Diamond Spreading": (minion, config) => {
            return {
                extraDrops: [{item: "Diamond", chance: 0.1}]
            }
        },
        "Potato Spreading": (minion, config) => {
            return {
                extraDrops: [{item: "Potato", chance: 0.05}]
            }
        },

        "Krampus Helmet": (minion, config) => {
            return minion === "Snow" ? {speedMultiplier: 1.1} : {};
        },

        "Enchanted Egg": (minion, config) => {
            return minion === "Chicken" ? {
                extraDrops: [{item: "Enchanted Egg", chance: 0.01}]
            } : {};
        },

        "Flint Shovel": (minion, config) => {
            return minion === "Gravel" ? {
                outputReplacement: {from : "Gravel", to: "Flint"}
            } : {};
        },

        "Lesser Soulflow Engine": (minion, config) => {
            if (combatTypes.has(minion)) {
                return {
                    extraDrops: [{
                        item: "Soulflow",
                        amount: 1,
                        perActions: 10,
                        value: 1000
                    }]
                };
            }
            return {};
        },

        "Soulflow Engine": (minion, config) => {
            if (combatTypes.has(minion)) {
                return {
                    extraDrops: [{
                        item: "Soulflow",
                        amount: 1,
                        perActions: 5,
                        value: 1000
                    }]
                };
            }
            return {};
        },

        "Corrupt Soil": (minion, config) => {
            return config.minionType === "Combat" ? {
                outputReplacement: {from: "All", to: "Corrupt Fragment"},
            } : {};
        },

        "Sleepy Hollow": (minion, config) => {
            if (minion === "Pumpkin") {
                return {
                    extraDrops: [{
                        item: "Pumpkin Candy",
                        chance: 0.1,
                        value: 100
                    }]
                };
            }
            return {};
        },

        "Auto Smelter": (minion, config) => {
            const smeltingMap = {
                "Iron": {from: "Iron Ore", to: "Iron Ingot"},
                "Gold": {from: "Gold Ore", to: "Gold Ingot"},
                "Sand": {from: "Sand", to: "Glass"}
            }
            return smeltingMap[minion] || {};
        },

        "Compactor": (minion, config) => ({
            compaction: {
                ratio: 9,
                from: minion + " Item",
                to: minion + " Block"
            }
        }),
        "Super Compactor 3000": (minion, config) => ({
            compaction: {
                ratio: 160,
                from: minion + " Item",
                to: "Enchanted " + minion
            },
        }),
        "Dwarven Super Compactor": (minion, config) => ({
            compaction: {
                ratio: 160,
                from: minion + " Item",
                to: "Enchanted " + minion,
                mithrilOnly: true
            }
        }),
        "Enchanted Shears": (minion, config) => {
            if (minion === "Sheep") {
                return {
                    outputMultiplier: 1.3,
                    extraDrops: [{
                        item: "Mutton",
                        chance: 0.05,
                        value: 10
                    }]
                };
            }
            return {};
        },

        "N/A": () => ({}),
        "": () => ({})
    }

    const hopperLoss = {
        "Budget Hopper": 0.5,
        "Enchanted Hopper": 0.9,
        "N/A": 1.0
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
    const maxTiers = {
        miningMaxTiers,
        foragingMaxTiers,
        fishingMaxTiers,
        farmingMaxTiers,
        combatMaxTiers
    }


//----------------------------------------------------------------------------------------------------------------------

document.getElementById("calculate").addEventListener("click", async () => {
    const minionType = document.getElementById("minion-type").value.trim();
    const tier = parseInt(document.getElementById("minion-tier").value);
    const fuel = document.getElementById("fuel-type").value.trim();
    const hopper = document.getElementById("automated-shipping").value.trim();
    const upgrade1 = document.getElementById("upgrade-1").value.trim();
    const upgrade2 = document.getElementById("upgrade-2").value.trim();

    const resultBox = document.querySelector(".result");
    resultBox.innerHTML = "Calculating...";


//----------------------------------------------------------------------------------------------------------------------

    if (!(minionNames.includes(minionType))) {
        resultBox.innerHTML = "Please enter a valid minion type!";
        return;
    }

    let maxTier = null;

    if (isNaN(tier)) {
        resultBox.innerHTML = "Please enter a valid tier number.";
        return;
    }

    for (const category in maxTiers) {
        if (maxTiers[category][minionType] !== undefined) {
            maxTier = maxTiers[category][minionType];
            break;
        }
    }

    if (maxTier == null) {
        resultBox.innerHTML = "Tier data not found for this minion.";
        return;
    }

    if (tier > maxTier) {
        resultBox.innerHTML = `${minionType} minion can only go up to Tier ${maxTier}!`;
        return;
    }

    if (!fuels.includes(fuel)) {
        resultBox.innerHTML = "Please enter a valid fuel type!";
        return;
    }

    if (infernoOnlyFuels.includes(fuel) && minionType !== "Inferno") {
        resultBox.innerHTML = `${fuel} can only be used in Inferno minions!`;
        return;
    }

    if (!Object.keys(hopperLoss).includes(hopper)) {
        resultBox.innerHTML = "Please enter a valid hopper type!";
        return;
    }

    if (!upgrades.includes(upgrade1) || !upgrades.includes(upgrade2)) {
        resultBox.innerHTML = "Please enter a valid upgrade!";
        return;
    }

    if (upgrade1 === upgrade2) {
        resultBox.innerHTML = "A minion cannot have two of the same upgrade!";
        return;
    }

    if (miningTypes.has(minionType)) {
        resultBox.innerHTML = "The mining community greets you!";
        return;
    }

    if (farmingTypes.has(minionType)) {
        resultBox.innerHTML = "The farming community greets you!";
        return;
    }

    if (fishingTypes.has(minionType)) {
        resultBox.innerHTML = "The fishing community greets you!";
        return;
    }

    if (foragingTypes.has(minionType)) {
        resultBox.innerHTML = "The foraging community greets you!";
        return;
    }

    if (combatTypes.has(minionType)) {
        resultBox.innerHTML = "The combat community greets you!";
        return;
    }
})
})