function cal(){ //program to do simple calculation
    let number1 = parseFloat(document.getElementById('num1').value);//user adds 1st number
    let operator = document.getElementById('operator').value; //user selects operation
    let number2 = parseFloat(document.getElementById('num2').value); // user select next number
    let usersanswer = parseFloat(document.getElementById('ans').value); // user selects answer
    let realanswer = 0;

    switch(operator){
        case "+":
            realanswer = number1 + number2; // if the numbers are correct on this line the out pu is correct addition
        break;

        case "-":
            realanswer = number1 - number2;  // if the numbers are correct on this line the out pu is correct subtract
        break;

        case "*":
        realanswer = number1 * number2; // if the numbers are correct on this line the out pu is correct multiply
        break;

        case "/":
        realanswer = number1 / number2; // if the numbers are correct on this line the out pu is correct divide
        break; }

    if(realanswer == usersanswer){
       document.getElementById('out').innerHTML = "Correct!"; // if user is correct
    }
    else{
       document.getElementById('out').innerHTML = "Incorrect!";// if user is wrong
    }
  }
