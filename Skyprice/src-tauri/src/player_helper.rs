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
        .query(&[("uuid", uuid.unwrap())]) //note to self: fix this for if uuid value is None
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

pub async fn transcribe_player_info(raw_input: String) -> Result<Value, String> {
    let data: Value = serde_json::from_str(&raw_input)
        .map_err(|e| format!("Failed to parse JSON: {}", e))?;

    let profiles = data
        .as_array()
        .ok_or("Expected data to be an array")?;

    let first_profile = profiles
        .get(0)
        .ok_or("No profile found.")?;

    Ok(first_profile.clone())
}

#[tauri::command(rename_all = "snake_case")]
pub async fn get_basic_info(raw_input: String, username: String) -> Result<String, String> {
    let first_profile = transcribe_player_info(raw_input).await?;

    let cute_name = &first_profile["cute_name"];
    let profile_id = &first_profile["profile_id"];

    let result = format!(
        "Username: {} | UUID: {} | Profile Name: {}",
        username, profile_id, cute_name,
    );
    
    Ok(result)
}

#[tauri::command(rename_all = "snake_case")]
pub async fn get_accessory_bag_storage(raw_input: String, trimmed_uuid: String) -> Result<String, String> {
    let first_profile = transcribe_player_info(raw_input).await?;

    let accessory_bag_storage = &first_profile["members"][&trimmed_uuid]["accessory_bag_storage"];

    let highest_magical_power = &accessory_bag_storage["highest_magical_power"];
    let selected_power = &accessory_bag_storage["selected_power"];

    let result = format!(
        "Highest Magical Power: {} | Selected Power: {}",
        highest_magical_power, selected_power
    );

    Ok(result)
}

#[tauri::command(rename_all = "snake_case")]
pub async fn get_currencies(raw_input: String, trimmed_uuid: String) -> Result<String, String> {
    let first_profile = transcribe_player_info(raw_input).await?;

    let currencies = &first_profile["members"][&trimmed_uuid]["currencies"];
    let coins = &currencies["coin_purse"];
    let bank_account_balance = &first_profile["members"][&trimmed_uuid]["profile"]["bank_account"];
    let essences = &currencies["essence"];

    let diamond_essence = &essences["DIAMOND"];
    let dragon_essence = &essences["DRAGON"];
    let gold_essence = &essences["GOLD"];
    let spider_essence = &essences["SPIDER"];
    let undead_essence = &essences["UNDEAD"];
    let wither_essence =  &essences["WITHER"];

    let result = format!(
        "Purse: {} | Bank Account Balance: {} | Diamond Essence: {} | Dragon Essence: {} | Gold Essence: {} | Spider Essence: {} | Undead Essence: {} | Wither Essence: {}",
        coins, bank_account_balance, diamond_essence, dragon_essence, gold_essence, spider_essence, undead_essence, wither_essence
    );

    Ok(result)
}

#[tauri::command(rename_all = "snake_case")]
pub async fn get_easter(raw_input: String, trimmed_uuid: String) -> Result<String, String> {
    let first_profile = transcribe_player_info(raw_input).await?;

    let easter_data = &first_profile["members"][&trimmed_uuid]["events"]["easter"];

    let chocolate = &easter_data["chocolate"];
    let chocolate_level = &easter_data["chocolate_level"];
    let chocolate_multiplier_upgrades = &easter_data["chocolate_multiplier_upgrades"];
    let chocolate_since_prestige = &easter_data["chocolate_since_prestige"];

    let result = format!(
        "Chocolate: {} | Chocolate Level: {} | Chocolate Multiplier Upgrades: {} | Chocolate Since Prestige: {}",
        chocolate, chocolate_level, chocolate_multiplier_upgrades, chocolate_since_prestige
    );

    Ok(result)
}

#[tauri::command(rename_all = "snake_case")]
pub async fn get_fairy_souls(raw_input: String, trimmed_uuid: String) -> Result<String, String> {
    let first_profile = transcribe_player_info(raw_input).await?;

    let fairy_soul_data = &first_profile["members"][&trimmed_uuid]["fairy_soul"];

    let total_collected = &fairy_soul_data["total_collected"];
    let unspent_souls = &fairy_soul_data["unspent_souls"];

    let result = format!(
        "Total Collected Fairy Souls: {} | Unspent Souls: {}",
        total_collected, unspent_souls
    );

    Ok(result)
}

#[tauri::command(rename_all = "snake_case")]
pub async fn get_copper(raw_input: String, trimmed_uuid: String) -> Result<String, String> {
    let first_profile = transcribe_player_info(raw_input).await?;

    let copper = &first_profile["members"][&trimmed_uuid]["garden_player_data"]["copper"];

    let result = format!(
        "Copper: {}", copper
    );

    Ok(result)
}

#[tauri::command(rename_all = "snake_case")]
pub async fn get_player_auction_history(raw_input: String, trimmed_uuid: String) -> Result<String, String> {
    let first_profile = transcribe_player_info(raw_input).await?;

    let auction_history = &first_profile["members"][&trimmed_uuid]["player_stats"]["auctions"];
    let bids = &auction_history["bids"];
    let completed_auctions = &auction_history["completed"];
    let created_auctions = &auction_history["created"];
    let auction_fees_paid = &auction_history["fees"];
    let gold_earned = &auction_history["gold_earned"];
    let gold_spent = &auction_history["gold_spent"];
    let highest_bid = &auction_history["highest_bid"];

    let result = format!(
        "Bids: {} | Completed Auctions: {} | Created Auctions: {} | Auction Fees Paid: {} | Gold Earned: {} | Gold Spent: {} | Highest Bid: {}",
        bids, completed_auctions, created_auctions, auction_fees_paid, gold_earned, gold_spent, highest_bid
    );
    Ok(result)
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

