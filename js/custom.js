// const loginBtn = document.getElementById('login');
// loginBtn.addEventListener('click', function() {
//     console.log("amk baby daw sup");
// })

const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login_area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction_area");
    transactionArea.style.display = "block";
})