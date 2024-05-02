document.getElementById('bmiCalculator').addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);

    const bmi = weight / (height * height);

    document.getElementById('bmiValue').textContent = bmi.toFixed(2);
});