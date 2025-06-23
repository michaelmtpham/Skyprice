window.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.getElementById("calculate");
    const result = document.querySelector(".result");

    const oreNames = {
        "Mithril": "MITHRIL_ORE",
        "Amber": "ROUGH_AMBER_GEM",
        "Topaz": "ROUGH_TOPAZ_GEM",
        "Sapphire": "ROUGH_SAPPHIRE_GEM",
        "Amethyst": "ROUGH_AMETHYST_GEM",
        "Jasper": "ROUGH_JASPER_GEM",
        "Ruby": "ROUGH_RUBY_GEM",
        "Opal": "ROUGH_OPAL_GEM",
        "Aquamarine": "ROUGH_AQUAMARINE_GEM",
        "Citrine": "ROUGH_ONYX_GEM",
        "Peridot": "ROUGH_PERIDOT_GEM"
    }

    calculateButton.addEventListener("click", async () => {
        const oreType = document.getElementById("ore-type").value;
        const miningSpeed = parseFloat(document.getElementById("mining-speed").value);
        const miningFortune = parseFloat(document.getElementById("mining-fortune").value);
        const time = parseFloat(document.getElementById("minutes").value);

        if (miningSpeed < 0 || isNaN(miningSpeed)) {
            result.innerHTML = "<p><strong>Please enter a valid mining speed!</strong>"
            return;
        }
        if (miningFortune < 0 || isNaN(miningFortune)) {
            result.innerHTML = "<p><strong>Please enter a valid mining fortune!</strong></p>"
            return;
        }
        if (time < 0 || isNaN(time)) {
            result.innerHTML = "<p><strong>Please enter a valid time!</strong></p>"
            return;
        }

        const internalOreName = oreNames[oreType];
        const [quickBuyPrice, quickSellPrice] = await window.__TAURI__.core.invoke(
            "get_bazaar_price",
            {itemName: internalOreName});


    })
})