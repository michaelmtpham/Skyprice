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
})