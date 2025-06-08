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
        if (isNaN(balanceGoal) || balanceGoal <0) {
            result.innerHTML = "Please enter a valid balance goal!";
            return;
        }
    }

    result.innerHTML = "All entries are valid!";

})

