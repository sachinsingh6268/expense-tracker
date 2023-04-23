
const addExpense = () => {
    const list = document.getElementById("list");
    const desc = document.getElementById("description").value;
    const debitCredit = document.getElementById("debitCredit").value;
    let amount = document.getElementById("amount").value;

    let currentTotal = document.getElementById("totalCurrentAmount");

    let updatedTotal = Number(currentTotal.innerHTML.slice(4,));

    const listItem = document.createElement("li");

    if (debitCredit === "debit") {
        updatedTotal -= Number(amount);
        amount = "-" + amount;
        listItem.className = "debit";
    } else {
        updatedTotal += Number(amount);
        amount = "+" + amount;
        listItem.className = "credit";
    }

    console.log(updatedTotal, debitCredit);

    if (updatedTotal < 0) {
        currentTotal.className = "negative";
    } else if (updatedTotal > 0) {
        currentTotal.className = "positive";
    } else {
        currentTotal.className = "";
    }

    listItem.innerHTML = `<span>${desc}</span> <span>${amount}</span>`

    list.appendChild(listItem);


    currentTotal.innerHTML = `Rs. ${updatedTotal}`



};