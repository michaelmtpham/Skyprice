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

const APIKey = localStorage.getItem("APIKey");
const search = document.getElementById("search");
const result = document.getElementById("result");

search.addEventListener("click", async () => {
    const username = document.getElementById("username").value;

    try {
        const playerInfo = await window.__TAURI__.core.invoke("get_player_info", {
            apiKey: APIKey,  // snake_case
            playerUsername: username  // came
        });
        result.innerHTML = playerInfo;
    }
    catch(error) {
        console.error(error);
        result.innerHTML = "error occurred"+ error;
    }
})
