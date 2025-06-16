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
    const fullUUID = await window.__TAURI__.core.invoke("untrimmed_uuid", {
        username: username
    });
    const trimmedUUID = await window.__TAURI__.core.invoke("trimmed_uuid", {
        username: username
    })

    try {
        const playerInfo = await window.__TAURI__.core.invoke("get_player_info", {
            apiKey: APIKey,
            playerUsername: username
        });

        result.innerHTML = (await window.__TAURI__.core.invoke("transcribe_player_info", {
            username: username,
            raw_input: playerInfo,
            full_uuid: fullUUID,
            trimmed_uuid: trimmedUUID
        })).replace(/\n/g, "<br>");

    }
    catch(error) {
        console.error(error);
        result.innerHTML = error;
    }
})


//const data = JSON.parse(playerInfo);
//
//         const firstProfile = Object.values(data)[0];
//
//         result.innerHTML = `Username: ${username}<br>`
//
//         result.innerHTML += `Profile Name: ${firstProfile.cute_name}<br>`;
//
//         result.innerHTML += `UUID: ${fullUUID}<br>`;
//
//         result.innerHTML += `${JSON.stringify(firstProfile["members"][trimmedUUID]["currencies"]["coin_purse"])}`;

