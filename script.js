function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    
    if (principal.value == "") {
        alert("Please enter the principal.");
        fp.focus();
        return false;
    }
    if (rate.value == "") {
        alert("Please select the rate.");
        fr.focus();
        return false;
    }
    if (years.value == "") {
        alert("Please enter the number of years.");
        ft.focus();
        return false;
    }

    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
}

function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;    
}

var rangeinput = document.getElementById("rate");
rangeinput.onchange = updateRate;
        