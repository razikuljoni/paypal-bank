////login area
var loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transitionArea = document.getElementById('transition');
    transitionArea.style.display = 'block';
})

//deposit area
var depositArea = document.getElementById('deposit');
depositArea.addEventListener('click', function () {

    const depositNumber = getInputNumber('depositAmount');

    updateSpanText('cDeposit', depositNumber);
    updateSpanText('cBalance', depositNumber);
    document.getElementById("depositAmount").value = '';
})
//withdraw functionality
const withdrawButton = document.getElementById('wBtn');
withdrawButton.addEventListener('click', function () {
    const wAmountNumber = getInputNumber("wAmount");
    updateSpanText('cWithdraw', wAmountNumber);
    updateSpanText('cBalance', -1 * wAmountNumber);
    document.getElementById("wAmount").value = "";
})

function getInputNumber(id) {
    const withdrawAmount = document.getElementById(id).value;
    const wAmountNumber = parseFloat(withdrawAmount);
    return wAmountNumber;
}

function updateSpanText(id, depositNumber) {
    const currentBalance = document.getElementById(id).innerText;
    const cBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + cBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}