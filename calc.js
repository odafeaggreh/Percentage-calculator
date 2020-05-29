var numField1 = document.getElementById('nunField1');
var nunField2 = document.getElementById('nunField2');
var resultField = document.getElementById('resultField');
var form = document.getElementById('xIsWhatPercentOfY');

form.addEventListener('submit', function(event) {
    
    if (!numField1.value || !nunField2.value) {
        alert("Please enter values");
    }else {
        var x = parseFloat(numField1.value);
        var y = parseFloat(nunField2.value);

        var result = x / y;
        var percentage = result * 100;
    
        resultField.innerText = "Answer: " + percentage + " %";
        event.preventDefault();
    }
    
    
    
    
   
})