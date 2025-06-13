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
document.getElementById("kuudra-key-checker").addEventListener("click", async () => {
    window.location.href = 'kuudra-key-checker.html';
})

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

calculate.addEventListener("click", () => {
    result.innerHTML = "";

    const balance = parseFloat(balanceInput.value);
    const museumMilestone = parseInt(museumMilestoneInput.value);
    const balanceGoal = parseFloat(balanceGoalInput.value);
    let x = false;

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

    if (balanceGoalInput.value.trim() !== '') {
        x = true;
    }

    let interest = 0;

    if (selectedTier === "Starter") {
        if (balance > 0) {
            let firstBracket = Math.min(balance, 10000000);
            interest += firstBracket * 0.02;
        }
        if (balance > 10000000) {
            let secondBracket = Math.min(balance - 10000000, 5000000);
            interest += secondBracket * 0.01;
        }
        interest *= (1 + (museumMilestone * .02));
        const time = ((balanceGoal - balance)/ interest) * 31;
        if (x) {
            result.innerHTML = `Every 31 real-life hours, you will earn ${interest.toLocaleString()} coins in interest!
            It will take ${time} real-life hours to achieve the balance of ${balanceGoal.toLocaleString()} coins.`;
        }
        else {
            result.innerHTML = `Every 31 real-life hours, you will earn ${interest.toLocaleString()} coins in interest!`;
        }
    }
    else if (selectedTier === "Gold") {
        if (balance > 0) {
            let firstBracket = Math.min(balance, 10000000);
            interest += firstBracket * 0.02;
        }
        if (balance > 10000000) {
            let secondBracket = Math.min(balance - 10000000, 10000000);
            interest += secondBracket * 0.01;
        }
        interest *= (1 + (museumMilestone * .02));
        const time = ((balanceGoal - balance)/ interest) * 31;
        if (x) {
            result.innerHTML = `Every 31 real-life hours, you will earn ${interest.toLocaleString()} coins in interest!
            It will take ${time} real-life hours to achieve the balance of ${balanceGoal.toLocaleString()} coins.`;
        }
        else {
            result.innerHTML = `Every 31 real-life hours, you will earn ${interest.toLocaleString()} coins in interest!`;
        }
    }
    else if (selectedTier === "Deluxe") {
        if (balance > 0) {
            let firstBracket = Math.min(balance, 10000000);
            interest += firstBracket * 0.02;
        }
        if (balance > 10000000) {
            let secondBracket = Math.min(balance - 10000000, 10000000);
            interest += secondBracket * 0.01;
        }
        if (balance > 20000000) {
            let thirdBracket = Math.min(balance - 20000000, 10000000);
            interest += thirdBracket * 0.005;
        }
        interest *= (1 + (museumMilestone * .02));
        const time = ((balanceGoal - balance)/ interest) * 31;
        if (x) {
            result.innerHTML = `Every 31 real-life hours, you will earn ${interest.toLocaleString()} coins in interest!
            It will take ${time} real-life hours to achieve the balance of ${balanceGoal.toLocaleString()} coins.`;
        }
        else {
            result.innerHTML = `Every 31 real-life hours, you will earn ${interest.toLocaleString()} coins in interest!`;
        }
    }
    else if (selectedTier === "Super Deluxe") {
        if (balance > 0) {
            let firstBracket = Math.min(balance, 10000000);
            interest += firstBracket * 0.02;
        }
        if (balance > 10000000) {
            let secondBracket = Math.min(balance - 10000000, 10000000);
            interest += secondBracket * 0.01;
        }
        if (balance > 20000000) {
            let thirdBracket = Math.min(balance - 20000000, 10000000);
            interest += thirdBracket * 0.005;
        }
        if (balance > 30000000) {
            let fourthBracket = Math.min(balance - 30000000, 20000000);
            interest += fourthBracket * 0.002;
        }
        interest *= (1 + (museumMilestone * .02));
        const time = ((balanceGoal - balance)/ interest) * 31;
        if (x) {
            result.innerHTML = `Every 31 real-life hours, you will earn ${interest.toLocaleString()} coins in interest!
            It will take ${time} real-life hours to achieve the balance of ${balanceGoal.toLocaleString()} coins.`;
        }
        else {
            result.innerHTML = `Every 31 real-life hours, you will earn ${interest.toLocaleString()} coins in interest!`;
        }
    }
    else if (selectedTier === "Premier") {
        if (balance > 0) {
            let firstBracket = Math.min(balance, 10000000);
            interest += firstBracket * 0.02;
        }
        if (balance > 10000000) {
            let secondBracket = Math.min(balance - 10000000, 10000000);
            interest += secondBracket * 0.01;
        }
        if (balance > 20000000) {
            let thirdBracket = Math.min(balance - 20000000, 10000000);
            interest += thirdBracket * 0.005;
        }
        if (balance > 30000000) {
            let fourthBracket = Math.min(balance - 30000000, 20000000);
            interest += fourthBracket * 0.002;
        }
        if (balance > 50000000) {
            let fifthBracket = Math.min(balance - 50000000, 110000000);
            interest += fifthBracket * 0.001;
        }
        interest *= (1 + (museumMilestone * .02));
        const time = ((balanceGoal - balance)/ interest) * 31;
        if (x) {
            result.innerHTML = `Every 31 real-life hours, you will earn ${interest.toLocaleString()} coins in interest!
            It will take ${time} real-life hours to achieve the balance of ${balanceGoal.toLocaleString()} coins.`;
        }
        else {
            result.innerHTML = `Every 31 real-life hours, you will earn ${interest.toLocaleString()} coins in interest!`;
        }
    }
    else if (selectedTier === "Luxurious") {
        if (balance > 0) {
            let firstBracket = Math.min(balance, 10000000);
            interest += firstBracket * 0.02;
        }
        if (balance > 10000000) {
            let secondBracket = Math.min(balance - 10000000, 10000000);
            interest += secondBracket * 0.01;
        }
        if (balance > 20000000) {
            let thirdBracket = Math.min(balance - 20000000, 10000000);
            interest += thirdBracket * 0.005;
        }
        if (balance > 30000000) {
            let fourthBracket = Math.min(balance - 30000000, 20000000);
            interest += fourthBracket * 0.002;
        }
        if (balance > 50000000) {
            let fifthBracket = Math.min(balance - 50000000, 110000000);
            interest += fifthBracket * 0.001;
        }
        if (balance > 160000000) {
            let sixthBracket = Math.min(balance - 160000000, 5000000000);
            interest += sixthBracket * 0.0001;
        }
        interest *= (1 + (museumMilestone * .02));
        const time = ((balanceGoal - balance)/ interest) * 31;
        if (x) {
            result.innerHTML = `Every 31 real-life hours, you will earn ${interest.toLocaleString()} coins in interest!
            It will take ${time} real-life hours to achieve the balance of ${balanceGoal.toLocaleString()} coins.`;
        }
        else {
            result.innerHTML = `Every 31 real-life hours, you will earn ${interest.toLocaleString()} coins in interest!`;
        }
    }
    else {
        if (balance > 0) {
            let firstBracket = Math.min(balance, 10000000);
            interest += firstBracket * 0.02;
        }
        if (balance > 10000000) {
            let secondBracket = Math.min(balance - 10000000, 10000000);
            interest += secondBracket * 0.01;
        }
        if (balance > 20000000) {
            let thirdBracket = Math.min(balance - 20000000, 10000000);
            interest += thirdBracket * 0.005;
        }
        if (balance > 30000000) {
            let fourthBracket = Math.min(balance - 30000000, 20000000);
            interest += fourthBracket * 0.002;
        }
        if (balance > 50000000) {
            let fifthBracket = Math.min(balance - 50000000, 110000000);
            interest += fifthBracket * 0.001;
        }
        if (balance > 160000000) {
            let sixthBracket = Math.min(balance - 160000000, 5000000000);
            interest += sixthBracket * 0.0001;
        }
        if (balance > 5160000000) {
            let seventhBracket = Math.min(balance - 5160000000, 50000000000);
            interest += seventhBracket * 0.00001;
        }
        interest *= (1 + (museumMilestone * .02));
        const time = ((balanceGoal - balance)/ interest) * 31;
        if (x) {
            result.innerHTML = `Every 31 real-life hours, you will earn ${interest.toLocaleString()} coins in interest!
            It will take ${time} real-life hours to achieve the balance of ${balanceGoal.toLocaleString()} coins.`;
        }
        else {
            result.innerHTML = `Every 31 real-life hours, you will earn ${interest.toLocaleString()} coins in interest!`;
        }
    }
})

