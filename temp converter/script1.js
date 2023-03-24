document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm ;

function tempConvert() {

    var fahrenheit = document.getElementById("fahrenheit").value;
    var fahrenheit = document.getElementById("celsius").value;

    if (fahrenheit != '') {
        celsius = (parseFloat(fahrenheit) -32) /1.8;
        
        
    }
    else{
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;

    }

    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).topFixed(1);
    document.getElementById('celsius').value = parseFloat(celsius).topFixed(1);



}

function clearForm(){
    document.getElementById('fahrenheit').value = '';
    document.getElementById('celsius').value = '';
}
