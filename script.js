const adminPassword = "X2k9#mP$vL5@nQ7";
let users = {};
let questions = [];

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        alert("Заповніть всі поля!");
        return;
    }

    if (!users[username]) {
        users[username] = { password, balance: 0 };
    } else if (users[username].password !== password) {
        alert("Неправильний пароль!");
        return;
    }
    
    document.getElementById("auth-container").style.display = "none";
    document.getElementById("main-container").style.display = "block";
    document.getElementById("user-info").innerText = `${username} | Баланс: ${users[username].balance}`;
}

function showAdminPanel() {
    const adminPass = prompt("Введіть пароль адміністратора:");
    if (adminPass === adminPassword) {
        document.getElementById("admin-panel").style.display = "block";
        updateUsersList();
    } else {
        alert("Невірний пароль!");
    }
}

function updateUsersList() {
    const list = document.getElementById("users-list");
    list.innerHTML = "<h3>Користувачі</h3>";
    Object.keys(users).forEach(username => {
        list.innerHTML += `<p>${username} - Баланс: ${users[username].balance}</p>`;
    });
}

function addQuestion() {
    const questionText = document.getElementById("new-question").value;
    if (!questionText) {
        alert("Введіть питання!");
        return;
    }
    questions.push({ question: questionText, answers: [] });
    document.getElementById("new-question").value = "";
    alert("Питання додано!");
}
