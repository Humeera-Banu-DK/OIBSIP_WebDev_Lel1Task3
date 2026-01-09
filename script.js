function convertTemp() {
    const input = document.getElementById("tempInput").value;
    const result = document.getElementById("result");
    const unit = document.querySelector('input[name="unit"]:checked').value;

    if (input === "" || isNaN(input)) {
        result.textContent = "❌ Please enter a valid number";
        return;
    }

    const temp = parseFloat(input);
    let output = "";

    if (unit === "celsius") {
        output = `
        Fahrenheit: ${(temp * 9/5 + 32).toFixed(2)} °F <br>
        Kelvin: ${(temp + 273.15).toFixed(2)} K
        `;
    }
    else if (unit === "fahrenheit") {
        output = `
        Celsius: ${((temp - 32) * 5/9).toFixed(2)} °C <br>
        Kelvin: ${(((temp - 32) * 5/9) + 273.15).toFixed(2)} K
        `;
    }
    else if (unit === "kelvin") {
        output = `
        Celsius: ${(temp - 273.15).toFixed(2)} °C <br>
        Fahrenheit: ${((temp - 273.15) * 9/5 + 32).toFixed(2)} °F
        `;
    }

    result.innerHTML = `✅ ${output}`;
}
