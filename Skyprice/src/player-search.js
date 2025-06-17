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
    if (!username) {
        result.innerHTML = "No username found.";
    }

    try {
        const trimmedUUID = await window.__TAURI__.core.invoke("trimmed_uuid", {
            username: username
        })
        const playerInfo = await window.__TAURI__.core.invoke("get_player_info", {
            apiKey: APIKey,
            playerUsername: username
        });

        let raw = await window.__TAURI__.core.invoke("get_currencies", {
            raw_input: playerInfo,
            trimmed_uuid: trimmedUUID
        });

        let profiles = (playerInfo.match(/cute_name/g) || []).length.toString();

        result.innerHTML = profiles;

    }
    catch(error) {
        console.error(error);
        result.innerHTML = error;
    }
})

async function populateProfileDropdown(rawData, profiles) {
     const dropdown = document.getElementById("profile-dropdown");
     dropdown.innerHTML = "";
     let cuteNames = [];

     for (let i = 0; i < rawData; i++) {
        cuteNames[i] =
    }

}





//.replace(/\d{4,}(?:\.\d+)?/g, (match) => {
//                 return Number(match).toLocaleString();
//             }); //NOTE TO SELF: DO NOT USE THIS FOR GET BASIC INFO

//raw
//             .replace(/\s*\|\s*/g, "<br>")
//             .replace(/"/g, "")
//             .replace(/\{current:/g, "")
//             .replace(/}/g, "")

