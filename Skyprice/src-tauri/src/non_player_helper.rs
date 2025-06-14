


const HYPIXEL_BASEURL: &str = "https://api.hypixel.net/v2/resources/skyblock";


#[tauri::command]
pub async fn get_collections() -> Result<String, String> {
    let full_url = format!("{}/collections", HYPIXEL_BASEURL);
    
    let response = reqwest::get(full_url)
        .await
        .map_err(|e| format!("Network error: {}", e))?;

    crate::player_helper::validate_response(response, String::from("collections")).await
}

#[tauri::command]
pub async fn get_skills() -> Result<String, String> {
    let full_url = format!("{}/skills", HYPIXEL_BASEURL);

    let response = reqwest::get(full_url)
        .await
        .map_err(|e| format!("Network error: {}", e))?;

    crate::player_helper::validate_response(response, String::from("skills")).await
}

pub async fn get_items() -> Result<String, String> {
    let full_url = format!("{}/items", HYPIXEL_BASEURL);

    let response = reqwest::get(full_url)
        .await
        .map_err(|e| format!("Network error: {}", e))?;

    crate::player_helper::validate_response(response, String::from("items")).await
}

pub async fn get_election_mayor() -> Result<String, String> {
    let full_url = format!("{}/election", HYPIXEL_BASEURL);

    let response = reqwest::get(full_url)
        .await
        .map_err(|e| format!("Network error: {}", e))?;

    crate::player_helper::validate_response(response, String::from("mayor")).await
}

pub async fn get_bingo() -> Result<String, String> {
    let full_url = format!("{}/bingo", HYPIXEL_BASEURL);

    let response = reqwest::get(full_url)
        .await
        .map_err(|e| format!("Network error: {}", e))?;

    crate::player_helper::validate_response(response, String::from("goals")).await
}
