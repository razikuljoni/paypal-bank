////login area
var loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transitionArea = document.getElementById('transition');
    transitionArea.style.display = 'block';
})

////diposite area
var dipositeArea = document.getElementById('diposite');
dipositeArea.addEventListener('click', function () {
    const dipositeAmount = document.getElementById('dipositeAmount').value;
    const dipositeNumber = parseFloat(dipositeAmount);
})