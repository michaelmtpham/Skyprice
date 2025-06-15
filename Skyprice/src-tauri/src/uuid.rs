use serde_json::Value;

const MOJANG_BASEURL: &str = "https://api.mojang.com/users/profiles/minecraft/";

#[tauri::command]
pub async fn get_uuid_from_username(username: String,) -> Result<String, String> {
    let full_url = format!("{}{}", MOJANG_BASEURL, username);

    let client = reqwest::Client::new();
    let response = client.get(full_url)
        .send()
        .await
        .map_err(|e| format!("Network error: {}", e))?;


    if !response.status().is_success() {
        return Err(format!("API error: {}, error is {:?}", response.status(), response.text().await ));
    }

    let json: Value = response.json()
        .await
        .map_err(|e| format!("JSON error: {}", e))?;

    Ok(json["id"].to_string().clone())
}