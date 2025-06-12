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

//--------------------------------------------------------------------------------------------------------------

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
                resultParagraphs[1].textContent = `This is below your goal of a profit of ${profitGoal.toLocaleString()} coins.
                You would need to earn `;
            }
        }
    })
})
