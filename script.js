function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "123") {
        alert("Login berhasil!");
        window.location.href = "home.html";
    } else {
        alert("Username atau password salah!");
    }
}

function logout() {
    alert("Anda telah logout");
    window.location.href = "index.html";
}
