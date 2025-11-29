document.getElementById("loginForm").addEventListener("submit", async function (e) {
    e.preventDefault(); // impede o reload da página

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:3000/auth/login", {  // <- corrigido aqui
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            alert("Login bem sucedido!");
            localStorage.setItem("token", data.token); // guarda o token
            window.location.href = "../home/index.html"; // redireciona
        } else {
            alert(data.error);
        }
    } catch (err) {
        console.error(err);
        alert("Erro ao conectar ao servidor");
    }
});
