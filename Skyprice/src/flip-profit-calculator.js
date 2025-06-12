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

//--------------------------------------------------------------------------------------------------------------

    const tradeType = document.getElementById("trade-type")
    const buyPriceInput = document.getElementById("buy-price");
    const sellPriceInput = document.getElementById("sell-price");
    const profitGoalInput = document.getElementById("profit-goal");
    const calculateBtn = document.getElementById("calculate");
    const resultBox = document.querySelector(".result");
    const resultParagraphs = resultBox.querySelectorAll("p");

    calculateBtn.addEventListener("click", () => {

        const buyPrice = parseFloat(buyPriceInput.value);
        const sellPrice = parseFloat(sellPriceInput.value);
        const profitGoal = parseFloat(profitGoalInput.value);

        const validTradeTypes = [
            "Auction House (Standard)", "Auction House (BIN)", "Bazaar Instant Buy",
            "Bazaar Instant Sell", "Bazaar Buy Order", "Bazaar Sell Order", "Player Trade"
        ]

        resultParagraphs[0].textContent = "";
        resultParagraphs[1].textContent = "";




        if (isNaN(buyPrice) || isNaN(sellPrice)) {
            resultParagraphs[0].textContent = "Please enter valid numbers for buy and sell prices!";
            return;
        }

        const profit = sellPrice - buyPrice;


        resultParagraphs[0].textContent = `Profit per flip: ${profit.toLocaleString()} coins`

        if (!isNaN(profitGoal)) {
            if (profit >= profitGoal) {
                resultParagraphs[1].textContent = `This meets your goal of a profit of ${profitGoal.toLocaleString()} coins!`;
            }
            else {
                remainingProfit = profitGoal - profit;
                resultParagraphs[1].textContent = `This is below your goal of a profit of ${profitGoal.toLocaleString()} coins.
                You would need to earn ${remainingProfit.toLocaleString()} more coins to reach that goal.`;
            }
        }
    })
})
