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

const search = document.getElementById("search");
const apiKey = localStorage.getItem("APIKey")
const result = document.getElementById("result");

search.addEventListener("click", async () => {
    const username = document.getElementById("username").value;
    result.textContent = "Loading...";
    result.textContent = apiKey

    if (!(username)) {
        result.innerHTML = "Please enter a valid username.";
        return;
    }

    try {
        const UUID = await window.__TAURI__.core.invoke('get_uuid_from_username', {username: username})

        const response = await window.__TAURI__.core.invoke('get_player_info', {
            api_key : apiKey,
            player_uuid : UUID
        });

        if (!response.profiles || response.profiles.length === 0) {
            result.innerHTML = "No Skyblock profiles found.";
            return;
        }

        console.log("Player profiles:", profilesJson);
    }
    catch (error) {
        result.textContent = `Error: ${error}}`;
    }
})