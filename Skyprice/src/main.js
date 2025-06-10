let API_Key;
let api_Key_Valid = false;

document.getElementById("api-form").onsubmit = async function(event) {
  event.preventDefault();
  API_Key = document.getElementById("api-input").value.trim();
  try {
    const response = await fetch(`https://api.hypixel.net/status?key=${API_Key}&uuid=7474f749-4898-4941-a50d-e6836ad4616e`);
    const data = await response.json();
    if (data.success) {
      document.getElementById("greet-input").textContent = 'API key valid! You may proceed.';
      api_Key_Valid = true;
      localStorage.setItem('APIKey', API_Key);
    }
    else {
      document.getElementById("greet-input").textContent = 'Invalid API key. Please try again.';
      api_Key_Valid = false;
    }
  }
  catch(error) {
    document.getElementById("greet-input").textContent = 'Error occurred. Please try again.';
    api_Key_Valid = false;
  }
}

document.getElementById('proceedBtn').addEventListener('click', function() {
  if (api_Key_Valid) {
    window.location.href = 'homePage.html';
  }
  else {
    document.getElementById('greet-input').textContent = 'You cannot proceed without a valid API key!';
  }
})