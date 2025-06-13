window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("banking-interest-calculator").addEventListener("click", async () => {
        window.location.href = 'banking-interest-calculator.html';
    });
    document.getElementById("minion-profit-calculator").addEventListener("click", async () => {
        window.location.href = 'minion-profit-calculator.html';
    });
    document.getElementById("flip-profit-calculator").addEventListener("click", async () => {
        window.location.href = 'flip-profit-calculator.html';
    });
    document.getElementById("skytasks").addEventListener("click", async () => {
        window.location.href = 'skytasks.html';
    });
    document.getElementById("rngesus-drop-simulator").addEventListener("click", async () => {
        window.location.href = 'rngesus-drop-simulator.html';
    })
    document.getElementById("kuudra-key-checker").addEventListener("click", async () => {
        window.location.href = 'kuudra-key-checker.html';
    })

//--------------------------------------------------------------------------------------------------------------

    document.getElementById("simulate").addEventListener("click", () => {
        const dropName = document.getElementById("drop-name").value.trim();
        const dropChance = parseFloat(document.getElementById("drop-chance").value);
        const dropValue = parseFloat(document.getElementById("drop-value").value);
        const simulations = parseInt(document.getElementById("simulations").value);
        const costPerSimulation = parseFloat(document.getElementById("cost-per-simulation").value);

        const result = document.querySelector(".result");
        result.innerHTML = "";

        if (!dropName) {
            result.innerHTML = "Please enter a valid name!";
            return;
        }

        if (isNaN(dropChance) || dropChance > 100 || dropChance < 0) {
            result.innerHTML = "Please enter a valid drop chance!";
            return;
        }

        if (isNaN(dropValue) || dropValue < 0) {
            result.innerHTML = "Please enter a valid drop chance!";
            return;
        }

        if (isNaN(simulations)) {
            result.innerHTML = "Please enter a valid number of simulations!";
            return;
        }

        if (isNaN(costPerSimulation) || costPerSimulation < 0) {
            result.innerHTML = "Please enter a valid cost per simulation!";
            return;
        }

        const probability = dropChance/100;
        let successfulDrops = 0;
        let longestDryStreak = 0;
        let currentDryStreak = 0;
        const expectedDrops = (probability * simulations).toFixed(2);


        for (let i = 0; i < simulations; i++) {
            if (Math.random() < probability) {
                successfulDrops++;
                if (currentDryStreak > longestDryStreak) {
                    longestDryStreak = currentDryStreak;
                }
                currentDryStreak = 0;
            }
            else {
                currentDryStreak++;
            }
        }

        let emoji = "😐 meh 😐";
        const diff = successfulDrops - expectedDrops;

        if (diff >= 10) {
            emoji = "🤩 OMG WOW SO LUCKY 🤩";
        }
        else if (diff <= -10) {
            emoji = "💀 Cooked 💀";
        }
        else if (diff >= 3) {
            emoji = "😊 YAY YAY YAY YAY YAY 😊";
        }
        else if (diff <= -3) {
            emoji = "😓 gg bro";
        }

        const percentage = ((successfulDrops / simulations) * 100).toFixed(2);
        const profit = (successfulDrops * dropValue) - (simulations * costPerSimulation);
        const averageProfitPerSimulation = (profit / simulations).toFixed(2);

        result.innerHTML = `
            <p>Drop: ${dropName}</p>
            <p>Drop Rate: ${dropChance.toLocaleString()}%</p>
            <p>Simulations: ${simulations.toLocaleString()}</p>
            <p>Expected Drops: ${expectedDrops.toLocaleString()}</p>
            <p>Drops Obtained: ${successfulDrops.toLocaleString()} (${percentage.toLocaleString()}%) </p>
            <p>Profit: ${profit.toLocaleString()} coins</p>
            <p>Average Profit Per Simulation: ${averageProfitPerSimulation.toLocaleString()} coins</p>
            <p>Longest Dry Streak: ${longestDryStreak.toLocaleString()}</p>
            <p>RNGesus Verdict: ${emoji}</p>
        `;
    })
})

