window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("banking-interest-calculator").addEventListener("click", async () => {
        window.location.href = 'banking-interest-calculator.html';
    });
    document.getElementById("minion-profit-calculator").addEventListener("click", async () => {
        window.location.href = 'minion-profit-calculator.html';
    });
    document.getElementById("skytasks").addEventListener("click", async () => {
        window.location.href = 'skytasks.html';
    });
    document.getElementById("rngesus-drop-simulator").addEventListener("click", async () => {
        window.location.href = 'rngesus-drop-simulator.html';
    })
    document.getElementById("dungeon-chest-comparator").addEventListener("click", async () => {
        window.location.href = 'dungeon-chest-comparator.html';
    })
    document.getElementById("player-search").addEventListener("click", async () => {
        window.location.href = 'player-search.html';
    })

    const sidebar = document.getElementById("sidebar");

    sidebar.addEventListener("mouseenter", () => {
        sidebar.classList.add("expanded");
    });

    sidebar.addEventListener("mouseleave", () => {
        sidebar.classList.remove("expanded");
    });
//--------------------------------------------------------------------------------------------------------------

    const tradeType = document.getElementById("trade-type")
    const buyPriceInput = document.getElementById("buy-price");
    const sellPriceInput = document.getElementById("sell-price");
    const profitGoalInput = document.getElementById("profit-goal");
    const calculateBtn = document.getElementById("calculate");
    const resultBox = document.querySelector(".result");
    const resultParagraphs = resultBox.querySelectorAll("p");

    const validTradeTypes = [
        "Auction House (Standard)", "Auction House (BIN)", "Bazaar Instant Buy",
        "Bazaar Instant Sell", "Bazaar Buy Order", "Bazaar Sell Order", "Player Trade"
    ]

    calculateBtn.addEventListener("click", () => {

        const buyPrice = parseFloat(buyPriceInput.value);
        const sellPrice = parseFloat(sellPriceInput.value);
        const profitGoal = parseFloat(profitGoalInput.value);

        resultParagraphs[0].textContent = "";
        resultParagraphs[1].textContent = "";
        resultParagraphs[2].textContent = "";
        resultParagraphs[3].textContent = "";

        if (!(validTradeTypes.includes(tradeType.value))) {
            resultParagraphs[0].textContent = "Please enter a valid trade type!";
            return;
        }

        if (isNaN(buyPrice) || buyPrice < 0) {
            resultParagraphs[0].textContent = "Please enter a valid buy price!";
            return;
        }

        if (isNaN(sellPrice) || sellPrice < 0) {
            resultParagraphs[0].textContent = "Please enter a valid sell price!";
            return;
        }

        const untaxedProfit = sellPrice - buyPrice;
        let taxes = 0;

        if (tradeType.value === "Auction House (Standard)") {
            taxes += sellPrice * 0.05;
            if (untaxedProfit > 1000000) {
                taxes += sellPrice * 0.01;
            }
        }

        else if (tradeType.value === "Auction House (BIN)") {
            if (sellPrice < 10000000) {
                taxes += sellPrice * 0.01;
            }
            else if (sellPrice >= 10000000 && sellPrice <= 20000000) {
                taxes += sellPrice * 0.02;
            }
            else {
                taxes += sellPrice * 0.03;
            }
        }
        else if (tradeType.value === "Bazaar Instant Sell" || tradeType.value === "Bazaar Sell Order") {
            taxes += sellPrice * 0.0125;
        }
        else {
            taxes = 0;
        }

        const profit = sellPrice - buyPrice;

        resultParagraphs[0].textContent = `Gross profit: ${profit.toLocaleString()} coins`;
        resultParagraphs[1].textContent = `Taxes: ${taxes.toLocaleString()} coins`;
        resultParagraphs[2].textContent = `Net profit: 
        ${(profit-taxes).toLocaleString()} coins`;


        if (!isNaN(profitGoal)) {
            if (profit >= profitGoal) {
                resultParagraphs[3].textContent = `This meets your goal of a profit of ${profitGoal.toLocaleString()} coins!`;
            }
            else {
                let remainingProfit = profitGoal - profit;
                resultParagraphs[3].textContent = `This is below your goal of a profit of ${profitGoal.toLocaleString()} coins.
                You would need to earn ${remainingProfit.toLocaleString()} more coins to reach that goal.`;
            }
        }


    })
})
