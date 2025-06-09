document.getElementById("banking-interest-calculator").addEventListener("click", async event => {
    window.location.href = 'banking-interest-calculator.html';
});
document.getElementById("price-calculator").addEventListener("click", async event => {
    window.location.href = 'price-calculator.html';
});

//----------------------------------------------------------------------------------------------------------------------

const calculate = document.getElementById("calculate");
const balanceInput = document.getElementById("balance");
const museumMilestoneInput = document.getElementById("museum-milestone");
const balanceGoalInput = document.getElementById("balance-goal");
const result = document.querySelector(".result");
let selectedTier = null;

document.querySelectorAll(".bank-tier").forEach(button => {
    button.addEventListener("click", () => {
        selectedTier = button.textContent.trim();
        document.querySelectorAll(".bank-tier").forEach(btn=> btn.classList.remove("selected"));
        button.classList.add("selected");
    })
})

calculate.addEventListener("click", event => {
    result.innerHTML = "";

    const balance = parseFloat(balanceInput.value);
    const museumMilestone = parseInt(museumMilestoneInput.value);
    const balanceGoal = parseFloat(balanceGoalInput.value);

    if (isNaN(balance) || balance < 0) {
        result.innerHTML = "Please enter a valid balance!";
        return;
    }
    if (!(selectedTier)) {
        result.innerHTML = "Please select a bank tier!";
        return;
    }
    if (isNaN(museumMilestone) || (museumMilestone < 0) || (museumMilestone > 30)) {
        result.innerHTML = "Please enter a valid Museum Milestone!";
        return;
    }
    if (balanceGoalInput.value.trim() !== '') {
        if (isNaN(balanceGoal) || balanceGoal < 0) {
            result.innerHTML = "Please enter a valid balance goal!";
            return;
        }
    }
    const tierLimits = {
        "Starter":          50000000,
        "Gold":            100000000,
        "Deluxe":          250000000,
        "Super Deluxe":    500000000,
        "Premier":        1000000000,
        "Luxurious":      6000000000,
        "Palatial":      60000000000
    }
    if ((selectedTier in tierLimits) && (balance > tierLimits[selectedTier])) {
        result.innerHTML = `A ${selectedTier} account cannot hold more than ${tierLimits[selectedTier].toLocaleString()} coins!`;
        return;
    }
    const tierMilestoneRequirements = {
        "Deluxe":       3,
        "Super Deluxe": 6,
        "Premier":     10,
        "Luxurious":   14,
        "Palatial":    18
    }
    if ((selectedTier in tierMilestoneRequirements) && (museumMilestone < tierMilestoneRequirements[selectedTier])) {
        result.innerHTML = `It is impossible to have a ${selectedTier} bank account with that Museum Milestone!`;
        return;
    }

    if (selectedTier === "Starter") {
        let interest = 0;

        if (balance > 0) {
            let firstBracket = Math.min(balance, 10000000);
            interest += firstBracket * 0.02;
        }
        if (balance > 10000000) {
            let secondBracket = Math.min(balance - 10000000, 5000000);
            interest += secondBracket * 0.01;
        }
        interest *= (1 + (museumMilestone * .02));
        result.innerHTML = `Every 31 real-life hours, you will earn ${interest.toLocaleString()} coins in interest!`
    }


})

