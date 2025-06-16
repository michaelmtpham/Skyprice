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
    result.innerHTML = "Calculating...";
    const username = document.getElementById("username").value;
    const uuid = await window.__TAURI__.core.invoke("untrimmed_uuid", {
        username: username
    });

    try {
        const playerInfo = await window.__TAURI__.core.invoke("get_player_info", {
            apiKey: APIKey,
            playerUsername: username
        });

        const data = JSON.parse(playerInfo);

        const firstProfile = Object.values(data)[0];

        result.innerHTML = `Username: ${username}<br>`

        if (firstProfile && firstProfile.cute_name) {
            result.innerHTML += `Profile Name: ${firstProfile.cute_name}<br>`;
        }
        else {
            result.innerHTML = "No profiles found for this user.<br>";
        }

        result.innerHTML += `UUID: ${uuid}<br>`;

        result.innerHTML += `Highest Magical Power: ${uuid.highest_magical_power}<br>`;

        result.innerHTML += `Selected Power: ${uuid.selected_power}<br>`;

        result.innerHTML += `Coin Purse: ${uuid.currencies.coin_purse}<br>`;

        result.innerHTML += `   
            Diamond: ${uuid.currencies.essence.DIAMOND}<br>
            Dragon: ${uuid.currencies.essence.DRAGON}<br>
            Gold: ${uuid.currencies.essence.GOLD}<br>
            Spider: ${uuid.currencies.essence.SPIDER}<br>
            Undead: ${uuid.currencies.essence.UNDEAD}<br>
            Wither: ${uuid.currencies.essence.WITHER}<br>
        `



    }
    catch(error) {
        console.error(error);
        result.innerHTML = "error occurred"+ error;
    }
})


