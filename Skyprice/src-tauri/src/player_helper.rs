use serde_json::Value;

#[tauri::command]
async fn getPlayerInfo() -> Result<String, String> {
    Ok("json[collections].to_string().clone()".parse().unwrap())
}