use reqwest::Response;
use serde_json::Value;
use crate::uuid::untrimmed_uuid;

const HYPIXEL_BASEURL: &str = "https://api.hypixel.net/v2";


#[tauri::command]
pub async fn get_player_info(api_key: String, player_username: String) -> Result<String, String> {
    let full_url = format!("{}/skyblock/profiles", HYPIXEL_BASEURL);
    
    
    let result: Result<String, String> = untrimmed_uuid(player_username).await;
    let uuid: Option<&str> = match &result {
        Ok(s) => Some(s.as_str()),
        Err(_) => None,
    };

    let client = reqwest::Client::new();
    let response = client.get(full_url)
        .query(&[("uuid", uuid.unwrap())])
        .header("API-Key", api_key)
        .send()
        .await
        .map_err(|e| format!("Network error: {}", e))?;


    validate_response(response, String::from("profiles")).await
}

#[tauri::command]
pub async fn get_current_news(api_key: String) -> Result<String, String> {
    let full_url = format!("{}/skyblock/news", HYPIXEL_BASEURL);

    let client = reqwest::Client::new();
    let response = client.get(full_url)
        .header("API-Key", api_key)
        .send()
        .await
        .map_err(|e| format!("Network error: {}", e))?;

    validate_response(response, String::from("profiles")).await

}


pub async fn validate_response(response: Response, json_category: String) -> Result<String, String> {
    if !response.status().is_success() {
        return Err(format!("API error: {}, error is {:?}", response.status(), response.text().await ));
    }

    let json: Value = response.json()
        .await
        .map_err(|e| format!("JSON error: {}", e))?;

    if json["success"] != Value::Bool(true) {
        return Err("Hypixel API returned failure".into());
    }

    Ok(json[json_category].to_string().clone())
}