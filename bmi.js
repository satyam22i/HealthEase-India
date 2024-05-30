const calculateBtn = document.getElementById('calculate-btn');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', function () {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

  if (!isNaN(weight) && !isNaN(height)) {
    const bmi = weight / (height * height);
    let message;

    if (bmi < 18.5) {
      message = 'Underweight';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      message = 'Normal Weight';
    } else if (bmi >= 25 && bmi <= 29.9) {
      message = 'Overweight';
    } else {
      message = 'Obese';
    }

    resultDiv.innerHTML = `Your BMI: ${bmi.toFixed(2)} - ${message}`;
  } else {
    resultDiv.innerHTML = 'Please enter valid numbers for weight and height.';
  }
});



