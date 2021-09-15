function compute()
{
    //Get values and calculate
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years = parseInt(document.getElementById("years").value);
    var interest =principal * years * rate / 100;
    var yearInTheFuture = new Date().getFullYear() +years;
    
    //Create Interest text
    document.getElementById("result").innerHTML = "Interest : If you despoit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark> + rate + </mark>,<br/> +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/>" +
        "in the year <mark>" yearInTheFuture + "</mark>";
}
        
