
const MOJANG_BASEURL: &str = "https://api.mojang.com/users/profiles/minecraft/";

pub async fn get_uuid_from_username(username: String,) -> Result<String, String> {
    let full_url = format!("{}{}", MOJANG_BASEURL, username);

    let client = reqwest::Client::new();
    let response = client.get(full_url)
        .send()
        .await
        .map_err(|e| format!("Network error: {}", e))?;


    crate::player_helper::validate_response(response, String::from("id")).await
}