function cal () {
    let subtotal = parseFloat(document.getElementById("subtotal").value);// need subtotal and day of the week
         let dayOfWeek = new Date().getDay();
         let total;

        if (subtotal > 50 && (dayOfWeek == 2 || dayOfWeek == 3)) { //if the purchase is more than 50 and its on weds or thurs there is a 10% discount
        total =  subtotal - subtotal * .10 }
       
        else  total = subtotal; // any other day there is no discount


            //output: the total amount with or without discount and adding tax
        totalAfterTax = total * 1.06
        document.getElementById('output').innerHTML = '$' + totalAfterTax.toFixed(2)

        }