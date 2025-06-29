window.addEventListener("DOMContentLoaded", () => {
    const calculate = document.getElementById("calculate");
    const result = document.getElementById("result");

    calculate.addEventListener("click", async () => {
        const chestCost = parseFloat(document.getElementById("chest-cost").value);
        const inputs = [
            document.getElementById("input-1"),
            document.getElementById("input-2"),
            document.getElementById("input-3"),
            document.getElementById("input-4"),
            document.getElementById("input-5")
        ];

        result.textContent = "Calculating...";

        if (isNaN(chestCost) || chestCost < 0) {
            result.textContent = "Please enter a valid chest cost!";
            return;
        }

        const items = inputs
            .map(input => input.value.trim())
            .filter(name => name.length > 0);

        if (items.length === 0) {
            result.textContent = "Please enter at least one item!";
            return;
        }

        try {
            const itemValues = [];
            let errorItems = [];

            for (const item of items) {
                try {
                    const formattedItem = item
                        .toUpperCase()
                        .replace(/' /g, "")
                        .replace(/\s+/g, '_')
                        .replace(/[()]/g, "");
                    const prices = await window.__TAURI__.core.invoke("get_bazaar_price", {itemName: item});
                    itemValues.push(prices[1]);
                } catch (error) {
                    console.error(`Error for ${item}:`, error);
                    errorItems.push(item);
                }
            }
            if (errorItems.length > 0) {
                result.innerHTML = `Could not find prices for: <br>${errorItems.join("<br>")}`;
                return;
            }

            const totalValue = itemValues.reduce((sum, price) => sum + price, 0);
            const profit = totalValue - chestCost;

            if (profit >= 0) {
                result.innerHTML = `
            Total Value: ${totalValue.toLocaleString()} coins<br>
            Chest Cost: ${chestCost.toLocaleString()} coins<br>
            Profit: +${profit.toLocaleString()} coins
            `
                ;
            } else {
                result.innerHTML = `
            Total Value: ${totalValue.toLocaleString()} coins<br>
            Chest Cost: ${chestCost.toLocaleString()} coins<br>
            Loss: ${profit.toLocaleString()} coins
            `
            }
        } catch (error) {
            console.error("Calculation error:", error)
            result.textContent = "Error fetching prices. Please try again.";
        }
    })
})