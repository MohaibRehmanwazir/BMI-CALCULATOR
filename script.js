document.getElementById('cal_btn').addEventListener('click', function(){
    var weight = document.getElementById('weight-input').value;
    var height = document.getElementById('height-input').value;
    var bmi = (weight / (height * height)).toFixed(2) // Use BMI formula to find bmi and allow 2 digits after the decimals
    var result = document.getElementById('result')
    result.textContent = bmi; // Put bmi values to result element
    var message = document.getElementById('message')

    if(weight == '' && height == '') {  // If the input fieds are empty so display alert and show "plz enter a valid values"
        alert('Please enter a valid values ...')
        result.textContent = ''
        message.textContent = ''
        return;
    }

    if (weight <= 0) {
        alert("Weight must be a positive number greater than 0.");
        return;
    }
    
    if (height <= 0) {
        alert("Height must be a positive number greater than 0.");
        return;
    }

    switch(true){  // Write switch case to show result messege means he/she are healthy or not
        case bmi < 18.5:
            message.textContent = 'Underweight';
            break;

        case bmi >= 18.5 && bmi <= 24.9:
            message.textContent = 'Normail Weight';
            break;

        case bmi >= 25 && bmi <= 29.9:
            message.textContent = 'Overweight';
            break;

        case bmi => 30:
            message.textContent = 'Obesity';
            break;

        default:
            message.textContent = 'Your entered invalid value';
    }
})

document.getElementById('reset_btn').addEventListener('click', function(){  // This funtion is used for to empty input fieds after we find values and want to add more values
    var weight = document.getElementById('weight-input');
    var height = document.getElementById('height-input');
    height.value = ''
    weight.value = ''
    result.textContent = ''
    message.textContent = ''
})