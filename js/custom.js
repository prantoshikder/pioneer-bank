// login button event handler

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login_area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction_area");
    transactionArea.style.display = "block";
})


// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function() {
    // const depositAmount = document.getElementById("depositAmount").value;
    // const depositNumber = parseFloat(depositAmount);

    const depositNumber = getInputNumber("depositAmount");

    // add deposit amount

    // const currentDeposit = document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit = depositNumber + currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    // add and total deposit amount

    // const currentBalance = document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentBalance);
    // const totalBalance = depositNumber + currentBalanceNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);

    document.getElementById("depositAmount").value = "";
})

// withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function() {

    // const withdrawAmount = document.getElementById("withdrawAmount").value;
    // const withdrawNumber = parseFloat(withdrawAmount);
    const withdrawNumber = getInputNumber("withdrawAmount");
    console.log(withdrawNumber);
})

function getInputNumber(id) {
    const Amount = document.getElementById(id).value;
    const amountNumber = parseFloat(Amount);
    return amountNumber;
}


function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = depositNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}