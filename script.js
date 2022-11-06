let userInput = document.getElementById("userAge");
let year = document.getElementById("years");
let months = document.getElementById("months");
let day = document.getElementById("days");
let hour = document.getElementById("hours");
let min = document.getElementById("min");
let seconds = document.getElementById("seconds")
let result = document.getElementById("result");

const submit = document.getElementById("submit");

let currentDate = new Date();
let date = currentDate.getFullYear()

submit.addEventListener("click", () => {
    if (year.checked) {
        let age = userInput.value;
        age = Number(age);
        let userAgeInYears = date - age;
        result.textContent = `${userAgeInYears} years`;
    }
    else if (months.checked) {
        let age = userInput.value;
        age = Number(age);
        let userAgeInMonths = (date - age) * 12;
        result.textContent = ` ${userAgeInMonths} Months`;
    }
    else if (day.checked) {
        let age = userInput.value;
        age = Number(age);
        let userAgeInDays = (date - age) * 365;
        result.textContent = `${userAgeInDays} Days`;
    }
    else if (hour.checked) {
        let age = userInput.value;
        age = Number(age);
        let ageInHours = (date - age) * 8760;
        result.textContent = `${ageInHours} Hours`;
    }
    else if (min.checked) {
        let age = userInput.value;
        age = Number(age);
        let ageInMin = (date - age) * 525600;
        result.textContent = `${ageInMin} Minutes`;
    }
    else if (seconds.checked) {
        let age = userInput.value;
        age = Number(age);
        let ageInSeconds = (date - age) * 31536000;
        result.textContent = `${ageInSeconds} Seconds`
    }
    else{
        result.textContent = "Select One"
    }
})