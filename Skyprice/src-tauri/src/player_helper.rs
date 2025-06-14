use serde_json::Value;

const HYPIXEL_BASEURL: &str = "https://api.hypixel.net/v2";


#[tauri::command]
async fn _get_player_info() -> Result<String, String> {
    Ok("placeholder".parse().unwrap())
}


#[tauri::command]
pub async fn get_current_news() -> Result<String, String> {
    let _full_url = format!("{}/skyblock/news", HYPIXEL_BASEURL);
    const HYPIXEL_BASEURL1: &str = "https://api.hypixel.net/v2/skyblock/news";

    let response = reqwest::get(HYPIXEL_BASEURL1)
        .await
        .map_err(|e| format!("Network error: {}", e))?;

    if !response.status().is_success() {
        return Err(format!("API error: {}", response.status()));
    }

    let json: Value = response.json()
        .await
        .map_err(|e| format!("JSON error: {}", e))?;

    if json["success"] != Value::Bool(true) {
        return Err("Hypixel API returned failure".into());
    }

    println!("Full API response:\n{}", serde_json::to_string_pretty(&json).unwrap());

    Ok(json["items"].to_string().clone())


}