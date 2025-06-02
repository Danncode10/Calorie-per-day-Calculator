// Mifflin-St Jeor equation: https://reference.medscape.com/calculator/846/mifflin-st-jeor-equation

/**
 * Calorie Calculator using the Mifflin-St Jeor Equation
 * ------------------------------------------------------
 * This script calculates the number of calories a person should consume daily
 * based on their Basal Metabolic Rate (BMR) and physical activity level.
 * It uses the Mifflin-St Jeor formula to compute BMR for both males and females.
 * The user provides inputs: gender, weight (kg), height (cm), age (years), and activity level.
 * The result is shown on the webpage and logged to the console.
 *
 * Reference: https://reference.medscape.com/calculator/846/mifflin-st-jeor-equation
 *
 * Functions:
 * - calculate(): Main function triggered on button click. It reads form inputs,
 *                computes BMR, applies an activity multiplier, and displays results.
 * - getActivityLevel(): Returns the correct multiplier based on user's selected activity level.
 * - male_formula(weight, height, age): Calculates BMR for males.
 * - female_formula(weight, height, age): Calculates BMR for females.
 *
 * Note:
 * - `event.preventDefault()` is used to stop the default form submission.
 * - Make sure the calculate() function is triggered by an event that passes the event object,
 *   or bind it properly via `form.onsubmit` if you want to use preventDefault().
 */


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

