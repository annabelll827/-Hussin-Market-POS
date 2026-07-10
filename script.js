function showPassword() {
    const pass = document.getElementById("password");

    if (pass.type === "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}

function darkMode() {
    document.body.classList.toggle("dark");
}

function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username === "admin" && password === "123456") {
        message.style.color = "green";
        message.innerHTML = "✅ Welcome to Hussin Market";

        setTimeout(function () {
            window.location.href = "dashboard.html";
        }, 1000);

    } else {
        message.style.color = "red";
        message.innerHTML = "❌ Username or Password is incorrect";
    }
}
