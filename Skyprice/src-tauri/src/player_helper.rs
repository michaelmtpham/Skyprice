use reqwest::Response;
use serde_json::Value;

const HYPIXEL_BASEURL: &str = "https://api.hypixel.net/v2";


#[tauri::command]
async fn _get_player_info(api_key: String, player_name: String) -> Result<String, String> {
    let full_url = format!("{}/skyblock/profiles", HYPIXEL_BASEURL);

    println!("{}", api_key);
    let client = reqwest::Client::new();
    let response = client.get(full_url)
        .header("API-Key", api_key)
        .send()
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


#[tauri::command]
pub async fn get_current_news(api_key: String) -> Result<String, String> {
    let full_url = format!("{}/skyblock/news", HYPIXEL_BASEURL);
    
    println!("{}", api_key);
    let client = reqwest::Client::new();
    let response = client.get(full_url)
        .header("API-Key", api_key)
        .send()
        .await
        .map_err(|e| format!("Network error: {}", e))?;
    
    
    println!("Full API response:\n{}", serde_json::to_string_pretty(&json).unwrap());
    
    validate_response(response, "items".parse().unwrap()).await
    
}


async fn validate_response(response: Response, json_category: String) -> Result<String, String> {
    if !response.status().is_success() {
        return Err(format!("API error: {}", response.status()));
    }

    let json: Value = response.json()
        .await
        .map_err(|e| format!("JSON error: {}", e))?;

    if json["success"] != Value::Bool(true) {
        return Err("Hypixel API returned failure".into());
    }
    
    Ok(json[json_category].to_string().clone())
}