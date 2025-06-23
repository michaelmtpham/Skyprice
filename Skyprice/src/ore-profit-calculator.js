window.addEventListener("DOMContentLoaded", () => {
    const calculateButton = document.getElementById("calculate");
    const result = document.querySelector(".result");

    const oreNames = {
        "Mithril": "MITHRIL_ORE",
        "Amber": "ROUGH_AMBER_GEMSTONE",
        "Topaz": "ROUGH_TOPAZ_GEMSTONE",
        "Sapphire": "ROUGH_SAPPHIRE_GEMSTONE",
        "Amethyst": "ROUGH_AMETHYST_GEMSTONE",
        "Jasper": "ROUGH_JASPER_GEMSTONE",
        "Ruby": "ROUGH_RUBY_GEMSTONE",
        "Opal": "ROUGH_OPAL_GEMSTONE",
        "Aquamarine": "ROUGH_AQUAMARINE_GEMSTONE",
        "Citrine": "ROUGH_ONYX_GEMSTONE",
        "Peridot": "ROUGH_PERIDOT_GEMSTONE"
    }

    calculateButton.addEventListener("click", () => {
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


    })
})