

let year = new Date().getFullYear()+parseInt();
let btn = document.createElement("button");
//var result = document.getElementById("result");
btn.onclick = function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    //let year = new Date().getFullYear()+parseInt();
}
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    
}
var rangeinput = document.getElementById("rate");
rangeinput.onchange = updateRate;



document.getElementById("result").innerHTML="If you deposit"+principal+",\<br\> at an interest rate of"+rate+", \<br\> you will receive an amount of"+result+"\<br\> in the year"+Number(years)+year;