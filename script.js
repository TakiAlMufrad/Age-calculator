function calculateAge(birthdate) {
  const today = new Date();
  const birthdateObj = new Date(birthdate);
  let age = today.getFullYear() - birthdateObj.getFullYear();
  const month = today.getMonth() - birthdateObj.getMonth();

  if (today.getMonth() < birthdateObj.getMonth() || (today.getMonth() === birthdateObj.getMonth() && today.getDate() < birthdateObj.getDate())) {
    age--;
  } else if (!birthdate) {
    age = "Please input a date";
  }

  return age;
}

const calculateButton = document.getElementById("calculate-age");
const birthdateInput = document.getElementById("birthdate");
const resultDiv = document.getElementById("result");

calculateButton.addEventListener("click", function() {
  const age = calculateAge(birthdateInput.value);

  if (typeof age === "number") {
    resultDiv.innerHTML = `You are ${age} years old.`;
  } else {
    resultDiv.innerHTML = age;
  }
});
