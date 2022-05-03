

//let year = new Date().getFullYear()+parseInt();
let btn = document.getElementById("compute");
//var result = document.getElementById("result");
btn.onclick = function ()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    let years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    let year = new Date().getFullYear();

    //debugValue("years", years);
    //debugValue("year", year);
    //debugValue("Number(years)", Number(years));
    //debugValue("Number(years)+year", Number(years)+year);


    document.getElementById("result").innerHTML = "If you deposit $"+principal+
        "\<br\> at an interest rate of "+rate+
        "% , \<br\> you will receive an amount of $"+interest+
        "\<br\> in the year "+(Number(years)+year);
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