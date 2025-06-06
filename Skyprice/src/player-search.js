import { invoke } from '@tauri-apps/api/core';

const playerSearchForm = document.querySelector('#username-form');

playerSearchForm.addEventListener('submit', (event) => {
    event.preventDefault()
})


//document.getElementById("username-submit").onclick = async function(event) {
//     event.preventDefault();
//     document.getElementById("username-result").textContent = "test";
// };



await getUUID(document.getElementById("username").value.trim());

async function getUUID(username) {
     const API_Key = localStorage.getItem('APIKey')
     const usernameData = await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`);
     const usernameJSON = await usernameData.json();

     document.getElementById("username-result").textContent = usernameJSON.id;
 }