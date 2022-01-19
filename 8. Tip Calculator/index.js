window.onload = () => {
    document.getElementById("calc").onclick = calculate;
}

function calculate() {
    let amount = document.getElementById("number").value;
    let person = document.getElementById("person").value;
    let tip = document.querySelector("#Select").value;

    if (amount == '') {
        alert("Please enter the valid values");
        return;
    }
    if (person == '1') {
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";

    }
    let totalTip = parseFloat(amount) * parseFloat(tip) / 100;
    let totalBill = parseFloat(totalTip) + parseFloat(amount);
    let eachBill = totalBill / parseFloat(person);

    document.getElementById("amount").style.display = "block";
    document.getElementById("amount").innerHTML = "  Total  bill = $" + totalBill;
    document.getElementById("tip").style.display = "block";
    document.getElementById("tip").innerHTML = " Tip for  bill = $" + totalTip;

    document.getElementById("each").innerHTML = "  Each will pay = $" + eachBill;
}