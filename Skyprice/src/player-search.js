window.addEventListener("DOMContentLoaded", () => {
    const APIKey = localStorage.getItem("APIKey");
    const search = document.getElementById("search");
    const result = document.getElementById("result");

    search.addEventListener("click", async () => {
        result.innerHTML = "Searching...";
        const username = document.getElementById("username").value;
        if (!username) {
            result.innerHTML = "No username found.";
        }

        try {
            const fullUUID = await window.__TAURI__.core.invoke("untrimmed_uuid", {username: username})
            const trimmedUUID = await window.__TAURI__.core.invoke("trimmed_uuid", {username: username})
            const playerInfo = await window.__TAURI__.core.invoke("get_player_info", {
                apiKey: APIKey,
                playerUsername: username
            });
            const basicInfo = await window.__TAURI__.core.invoke("get_basic_info", {
                raw_input: playerInfo,
                username: username
            });
            const currencies = await window.__TAURI__.core.invoke("get_currencies", {
                raw_input: playerInfo,
                trimmed_uuid: trimmedUUID
            });
            const accessories = await window.__TAURI__.core.invoke("get_accessory_bag_storage", {
                raw_input: playerInfo,
                trimmed_uuid: trimmedUUID
            });
            const fairySouls = await window.__TAURI__.core.invoke("get_fairy_souls", {
                raw_input: playerInfo,
                trimmed_uuid: trimmedUUID
            });
            const auctionHistory = await window.__TAURI__.core.invoke("get_player_auction_history", {
                raw_input: playerInfo,
                trimmed_uuid: trimmedUUID
            });
            const easterData = await window.__TAURI__.core.invoke("get_easter", {
                raw_input: playerInfo,
                trimmed_uuid: trimmedUUID
            });
            const copper = await window.__TAURI__.core.invoke("get_copper", {
                raw_input: playerInfo,
                trimmed_uuid: trimmedUUID
            });

            const sections = [];

            sections.push(createCard("🧑‍🎓 Basic Info️ 👔️", basicInfo, false));
            sections.push(createCard("💰 Currencies 💸", currencies));
            sections.push(createCard("🤑 Auction History 💰", auctionHistory));
            sections.push(createCard("🎩 Accessory Bag 👑", accessories));
            sections.push(createCard("🥚 Easter Data 🐇", easterData));
            sections.push(createCard("🧚‍♀️ Fairy Souls 🔮", fairySouls));
            sections.push(createCard("👨‍🌾 Garden Data 🌳", copper));

            result.innerHTML = sections.join("\n");
        } catch (error) {
            console.error(error);
            result.innerHTML = error;
        }
    })

    function createCard(title, raw, formatNumbers = true) {
        const lines = raw
            .replace(/\s*\|\s*/g, "||")
            .replace(/"/g, "")
            .replace(/\{current:/g, "")
            .replace(/}/g, "")
            .split("||");

        const formattedLines = lines.map(line => {
            let text = line.trim();
            if (formatNumbers) {
                text = text.replace(/\d{4,}(?:\.\d+)?/g, m => Number(m).toLocaleString());
            }
            return `<p>${text}</p>`;
        }).join("");

        return `
        <div class="card">
            <h2>${title}</h2>
            ${formattedLines}
        </div>
    `;
    }
})