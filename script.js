function calculate(){
    let activityLevel = getActivityLevel();
    
}

function getActivityLevel() {
    const activitySelect = document.getElementById("activity");
    const selectedValue = activitySelect.value;

    let multiplier = 1.2; // default to sedentary

    switch (selectedValue) {
        case "sedentary":
            multiplier = 1.2;
            break;
        case "light":
            multiplier = 1.375;
            break;
        case "moderate":
            multiplier = 1.55;
            break;
        case "very":
            multiplier = 1.725;
            break;
        case "extra":
            multiplier = 1.9;
            break;
        default:
            multiplier = 1.2; // fallback
    }

    return multiplier;
}
