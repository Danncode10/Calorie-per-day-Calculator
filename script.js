function calculate() {
     event.preventDefault(); // ✅ Prevent form from submitting and reloading the page
     
    const genderSelect = document.getElementById("gender");

    const activityLevel = getActivityLevel(); // step 1: get multiplier

    const form_weight = document.getElementById("weight");
    const form_height = document.getElementById("height");
    const form_age = document.getElementById("age");

    const weight = parseFloat(form_weight.value);
    const height = parseFloat(form_height.value);
    const age = parseInt(form_age.value);

    let bmr = 0;

    // step 2: calculate BMR
    if (genderSelect.value === "male") {
        bmr = male_formula(weight, height, age);
    } else {
        bmr = female_formula(weight, height, age);
    }

    // step 3: multiply BMR by activity level to get total daily calories
    const totalCalories = bmr * activityLevel;

    // step 4: display or return result
    console.log(`BMR: ${bmr.toFixed(2)} kcal/day`);
    console.log(`Total Calories (with activity): ${totalCalories.toFixed(2)} kcal/day`);

    
    document.getElementById("cal_per_day").textContent = totalCalories.toFixed(2) + " kcal/day";
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

function male_formula(weight, height, age) {
    return 10 * weight + 6.25 * height - 5 * age + 5;
}

function female_formula(weight, height, age) {
    return 10 * weight + 6.25 * height - 5 * age - 161;
}

