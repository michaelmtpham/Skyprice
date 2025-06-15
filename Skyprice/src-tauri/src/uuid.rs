use serde_json::Value;

const MOJANG_BASEURL: &str = "https://api.mojang.com/users/profiles/minecraft/";

#[tauri::command]
pub async fn trimmed_uuid(username: String,) -> Result<String, String> {
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
    

    Ok(json["id"].as_str().unwrap().to_string())
}


pub async fn untrimmed_uuid(username: String) -> Result<String, String> {
     let input:String = trimmed_uuid(username).await?;
    
    let part1 = &input[0..8];
    let part2 = &input[8..12];
    let part3 = &input[12..16];
    let part4 = &input[16..20];
    let part5 = &input[20..];

    let transformed = format!("{}-{}-{}-{}-{}", part1, part2, part3, part4, part5);
    Ok(transformed)
}

