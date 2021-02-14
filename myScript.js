function poundsToKilogram() {
    //INPUT - user enters pounds into text field
    let pounds = parseFloat(document.getElementById('pounds').value);
    //PROCESSING - k = p * 0.45359237
    let kilograms = pounds * 0.45359237;
    //round to one digit after decimal
    //OUTPUT - kilograms appears below the text field
    document.getElementById('output').innerHTML = `${kilograms.toFixed(1)} kg`;}
     //document.getElementById("output").innerHTML = output;/  