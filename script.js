//fucntion to compute the interest
function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years= document.getElementById("years").value;
    var interest = principal * rate * years /100;
    var year = new Date().getFullYear() + parseInt(years);
    document.getElementById("result").innerHTML = "\<br\>If you deposit \<mark\>" + principal +
     "\<\/mark\>, \<br\>at an interest rate of \<mark\>" + rate + "%\<\/mark\>. \<br\>You will receive an amount of \<mark\>" + 
     interest + "\<\/mark\>, \<br\>" + "in the year \<mark\>" + year + "\<\/mark\>. \<br\>"
}
//function to update the rate slider value and print it 
function updateRate()
{
    var rateval = document. getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval + "%";
}

//Function to validate the Principal value
function checkPrincipal()
{
    var principal = document.getElementById("principal").value;
    if(principal != undefined){
        if(principal <= 0){
            alert("Enter a positive number");
            principal.focus()
            return false; 
        }
    }
    return true;
}
