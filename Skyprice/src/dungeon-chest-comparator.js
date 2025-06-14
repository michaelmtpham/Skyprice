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
document.getElementById("dungeon-chest-comparator").addEventListener("click", async () => {
    window.location.href = 'dungeon-chest-comparator.html';
})

//--------------------------------------------------------------------------------------------------

const chestCost = parseFloat(document.getElementById("chest-cost").value);
const input1 = parseFloat(document.getElementById("input-1").value);
const input2 = parseFloat(document.getElementById("input-2").value);
const input3 = parseFloat(document.getElementById("input-3").value);
const input4 = parseFloat(document.getElementById("input-4").value);
const input5 = parseFloat(document.getElementById("input-5").value);
const resultDiv = document.getElementById("result");

