
function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    // document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
    document.getElementById("inputCelcius").value=(valNum-32)/1.8;
  }
function temperatureConverterr(valnum) {
    valnum = parseFloat(valnum);
    // document.getElementById("outputFahrenheit").innerHTML=(valnum*1.8)+32;
    document.getElementById("inputFahrenheit").value=(valnum*1.8)+32;
  }

function darkmode(){
    
    var element = document.body;
    element.classList.toggle("dark-mode");
}
  
  