document.getElementById("banking-interest-calculator").addEventListener("click", async () => {
    window.location.href = 'banking-interest-calculator.html';
});
document.getElementById("minion-profit-calculator").addEventListener("click", async () => {
    window.location.href = 'minion-profit-calculator.html';
});
document.getElementById("flip-profit-calculator").addEventListener("click", async () => {
    window.location.href = 'flip-profit-calculator.html';
});
document.getElementById("skytasks").addEventListener("click", async () => {
    window.location.href = 'skytasks.html';
});
document.getElementById("rngesus-drop-simulator").addEventListener("click", async () => {
    window.location.href = 'rngesus-drop-simulator.html';
})
document.getElementById("dungeon-chest-comparator").addEventListener("click", async () => {
    window.location.href = 'dungeon-chest-comparator.html';
})
document.getElementById("player-search").addEventListener("click", async () => {
    window.location.href = 'player-search.html';
})

const sidebar = document.getElementById("sidebar");

sidebar.addEventListener("mouseenter", () => {
    sidebar.classList.add("expanded");
});

sidebar.addEventListener("mouseleave", () => {
    sidebar.classList.remove("expanded");
});
//---------------------------------------------------------------------------------------------------------

const tasks = [
    'Go outside',
    'Give people carries in lower floors; pay it forward',
    'BUILD YOUR ISLAND BRO"',
    'Troll a scammer',
    'Gamble',
    'bed wars',
    'Uninstall',
    'Chat with random people',
    'potato',
    'lowball (is this really fun tho?)',
    'explore!',
    'Visit random islands',
    'Finally get those fairy souls...',
    'parkour!',
    'Join random skyblock discord servers',
    'grind more skill levels!',
    'do a f7 run',
    'crystal hollows run',
    'stop playing minecraft!',
    'watch shrek',
    'go watch shrek!',
    'donate to a poor player',
    'buy a non a rank',
    'make a shrine to Technoblade',
    'host a simon says game',
    'do the dirt to hyperion challenge',
    'enchant every type of fish',
    'fish at 3AM and contemplate your life choices',
    'find every easter egg in the game',
    'spend coins till ur at 0',
    'sell your entire inventory and start fresh',
    'roleplay as an npc',
    'write your will in the chat',
    'do 20 pushups',
    'do 20 pushups every time you die',
    'make shrek your wallpaper for motivation',
    'take a cold shower and rethink your life lmao',
    'bake a potato in real life',
    'put your hypixel rank on your resume',
    'say gg after brushing your teeth',
    'look for fairy souls irl',
    'explain skyblock to your grandparents',
    "pretend you're jerry and narate your life",
    "maybe do that homework you've been putting off",
    "uninstall...then reinstall",
    "go ding dong ditching",
    "enjoy your life and stop playing this game lol",
    "enjoy your summer"
]

const button = document.getElementById('generate-task');
const result = document.getElementById('task-result');

button.addEventListener("click", () => {
    const randomThing = Math.floor(Math.random() * tasks.length);
    result.textContent = tasks[randomThing];
})

