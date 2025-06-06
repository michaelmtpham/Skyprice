#[tauri::command]
fn my_custom_command(invoke_message: String) {
    println!("I was invoked from JavaScript, with this message: {}", invoke_message);
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![my_custom_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}