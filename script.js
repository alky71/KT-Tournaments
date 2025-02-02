document.addEventListener("DOMContentLoaded", () => {
    const adminPassword = "S3cuR3P@ssw0rd!";
    const adminPanel = document.getElementById("admin-panel");
    const adminLoginBtn = document.getElementById("admin-login");
    const adminPasswordInput = document.getElementById("admin-password");
    const adminContent = document.getElementById("admin-content");
    const userInfo = document.getElementById("user-info");
    const userBalanceDisplay = document.getElementById("user-balance");
    const cupButton = document.getElementById("cup-button");
    
    let userBalance = 0;
    
    function updateBalance() {
        userBalanceDisplay.textContent = `Баланс: ${userBalance}`;
    }
    
    adminLoginBtn.addEventListener("click", () => {
        if (adminPasswordInput.value === adminPassword) {
            adminContent.style.display = "block";
        } else {
            alert("Невірний пароль!");
        }
    });
    
    userInfo.addEventListener("click", () => {
        const username = prompt("Введіть ваше ім'я у Telegram:");
        if (username) {
            userInfo.textContent = `Ласкаво просимо, ${username}`;
        }
    });
    
    cupButton.addEventListener("click", () => {
        userBalance += 10;
        updateBalance();
    });
    
    updateBalance();
});
