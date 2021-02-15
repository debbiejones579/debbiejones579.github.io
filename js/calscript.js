function cal(){
    let number1 = parseFloat(document.getElementById('num1').value);
    let operator = document.getElementById('operator').value;
    let number2 = parseFloat(document.getElementById('num2').value);
    let usersanswer = parseFloat(document.getElementById('ans').value);
    let realanswer = 0;

    switch(operator){
        case "+":
            realanswer = number1 + number2;
        break;

        case "-":
            realanswer = number1 - number2;
        break;

        case "*":
        realanswer = number1 * number2;
        break;

        case "/":
        realanswer = number1 / number2;
        break; }

    if(realanswer == usersanswer){
       document.getElementById('out').innerHTML = "Correct!";
    }
    else{
       document.getElementById('out').innerHTML = "Incorrect!";
    }
  }
