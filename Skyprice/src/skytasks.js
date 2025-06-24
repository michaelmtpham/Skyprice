window.addEventListener("DOMContentLoaded", () => {
    const skyblockTasks = [
        'Go outside',
        'Give people carries in lower floors; pay it forward',
        'BUILD YOUR ISLAND BRO"',
        'Troll a scammer',
        'Gamble',
        'bed wars',
        'Chat with random people',
        'lowball (is this really fun tho?)',
        'explore!',
        'Visit random islands',
        'Finally get those fairy souls...',
        'parkour!',
        'Join random skyblock discord servers',
        'grind more skill levels!',
        'do a f7 run',
        'crystal hollows run',
        'donate to a poor player',
        'buy a non a rank',
        'make a shrine to Technoblade',
        'host a simon says game',
        'do the dirt to hyperion challenge',
        'enchant every type of fish',
        'find every easter egg in the game',
        'spend coins till ur at 0',
        'sell your entire inventory and start fresh',
        'roleplay as an npc',
        'write your will in the chat',
        "pretend you're jerry and narrate your life",
        "start a fake cult on your island",
        "interview people in the hub",
        "start recording videos and try to go famous",
        "recreate a famous building on your island",
        "no",
        "free me",
        "make your island a hub copy"
    ];

    const irlTasks = [
        'Uninstall',
        'stop playing minecraft!',
        'watch shrek',
        'go watch shrek!',
        'fish at 3AM and contemplate your life choices',
        'do 20 pushups',
        'do 20 pushups every time you die',
        'make shrek your wallpaper for motivation',
        'take a cold shower and rethink your life lmao',
        'bake a potato in real life',
        'put your hypixel rank on your resume',
        'say gg after brushing your teeth',
        'look for fairy souls irl',
        'explain skyblock to your grandparents',
        "maybe do that homework you've been putting off",
        "uninstall...then reinstall",
        "go ding dong ditching",
        "enjoy your life and stop playing this game lol",
        "enjoy your summer",
        'potato',
        'WATCH SEASON 3 OF SQUID GAME',
        'drink some water',
        'find a job',
        'maybe update your OS (probably don\'t need to do this if you\'re windows)',
        "trade with someone irl"
    ];

    const button = document.getElementById('generate-task');
    const result = document.getElementById('task-result');

    button.addEventListener("click", () => {
        const category = document.getElementById("category-select");

        if (category.value === "") {
            result.textContent = "Please select a category first...";
            return;
        }
        if (category.value === "skyblock") {
            const randomThing = Math.floor(Math.random() * skyblockTasks.length);
            result.textContent = skyblockTasks[randomThing];
        }
        else {
            const randomThing = Math.floor(Math.random() * irlTasks.length);
            result.textContent = irlTasks[randomThing];
        }
    })
})

