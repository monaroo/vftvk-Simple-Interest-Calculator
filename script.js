

//let year = new Date().getFullYear()+parseInt();
let btn = document.getElementById("compute");
//var result = document.getElementById("result");
btn.onclick = function ()
{
    var principal = document.getElementById("principal").value;
        if (principal < 1 || principal == "")
        {
            alert("Please enter a positive number.");
            document.getElementById("principal").focus();
        }
    var rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    var interest = (principal * years * rate / 100).toFixed(2);
    let year = new Date().getFullYear();

    //debugValue("years", years);
    //debugValue("year", year);
    //debugValue("Number(years)", Number(years));
    //debugValue("Number(years)+year", Number(years)+year);


    document.getElementById("result").innerHTML = "If you deposit <span class=output>$"+principal+
        "</span>\<br\> at an interest rate of <span class=output>"+rate+
        "% </span>, \<br\> you will receive an amount of <span class=output>$"+interest+
        "</span>\<br\> in the year <span class=output>"+(Number(years)+year)+"</span>";
}

function debugValue(name, value) {
    console.log(name, value, typeof(value));
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    
}
var rangeinput = document.getElementById("rate");
rangeinput.onchange = updateRate;



//document.getElementById("result").innerHTML="If you deposit"+principal+",\<br\> at an interest rate of"+rate+", \<br\> you will receive an amount of"+result+"\<br\> in the year"+Number(years)+year;