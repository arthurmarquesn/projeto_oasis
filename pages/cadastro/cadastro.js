document.getElementById("registerForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const weight = document.getElementById("weight").value;
    const gender = document.getElementById("gender").value;
    const belt = document.getElementById("belt").value;
    const password = document.getElementById("password").value;

    const data = { name, email, age, weight, gender, belt, password };

   const response = await fetch("http://localhost:3000/user/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
});


    const result = await response.json();

    if (response.ok) {
        alert("Cadastro realizado com sucesso!");
        window.location.href = "../login/index.html";
    } else {
        alert(result.error);
    }
});
