document.getElementById("username-form").onsubmit = async function(event){
    event.preventDefault();
    await getUUID(document.getElementById("username").value.trim());
}

async function getUUID(username) {
    const API_Key = localStorage.getItem('APIKey')
    const usernameData = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`);
    const usernameJSON = await usernameData.json();

    document.getElementById("username-result").textContent = usernameJSON.id;
}