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
document.getElementById("player-search").addEventListener("click", async () => {
    window.location.href = 'player-search.html';
})

//--------------------------------------------------------------------------------------------------



const calculate = document.getElementById("calculate");
const result = document.getElementById("result");

calculate.addEventListener("click", async () => {
    try{
        result.textContent = await window.__TAURI__.core.invoke('get_player_info', {apiKey: localStorage.getItem("APIKey"),
                                                                                        playerUuid: "1ab30a61-2b67-40ae-bf1a-69d41be8a593"})
    }
    catch (error) {
        console.error("Calculation error:", error)
        result.textContent = "Error fetching collections. Please try again." + error;
    }
})

