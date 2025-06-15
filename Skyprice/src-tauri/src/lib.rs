mod player_helper;
mod non_player_helper;
mod uuid;

use serde_json::Value;
use std::collections::HashMap;
use tauri::async_runtime::Mutex; 
use std::time::{Instant, Duration};
use crate::player_helper::{get_current_news, get_player_info};
use crate::non_player_helper::{get_collections, get_skills, get_hypixel_items, get_election_mayor, get_bingo};


struct BazaarCache {
    data: HashMap<String, (f64, f64)>,
    last_updated: Instant,
}

impl BazaarCache {
    fn new() -> Self {
        Self {
            data: HashMap::new(),
            last_updated: Instant::now() - Duration::from_secs(60),
        }
    }
    

    async fn update(&mut self) -> Result<(), String> {
        const BAZAAR_URL: &str = "https://api.hypixel.net/skyblock/bazaar";

        let response = reqwest::get(BAZAAR_URL)
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

        let products = json["products"].as_object()
            .ok_or("Missing products data")?;

        self.data.clear();

        for (item_id, data) in products {
            if let Some(quick_status) = data["quick_status"].as_object() {
                if let (Some(buy_price), Some(sell_price)) = (
                    quick_status["buyPrice"].as_f64(),
                    quick_status["sellPrice"].as_f64()
                ) {
                    let normalized_name = item_id.to_lowercase();
                    self.data.insert(normalized_name, (buy_price, sell_price));
                }
            }
        }

        self.last_updated = Instant::now();
        Ok(())
    }

    fn get_price(&self, item_name: &str) -> Option<(f64, f64)> {
        let normalized_name = item_name.to_lowercase().trim().replace(' ', "_");
        self.data.get(&normalized_name).copied()
    }
}

#[tauri::command]
async fn get_bazaar_price(item_name: String, state: tauri::State<'_, Mutex<BazaarCache>>) -> Result<(f64, f64), String> {
    let mut cache = state.lock().await;

    if cache.last_updated.elapsed() > Duration::from_secs(60) {
        cache.update().await.map_err(|e| format!("Cache update failed: {}", e))?;
    }

    cache.get_price(&item_name)
        .ok_or_else(|| format!("Item '{}' not found in bazaar", item_name))
}



#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    let bazaar_cache = Mutex::new(BazaarCache::new());
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .manage(bazaar_cache)
        .invoke_handler(tauri::generate_handler![get_bazaar_price, get_collections, get_current_news, get_player_info, get_hypixel_items, get_skills, get_bingo, get_election_mayor])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

