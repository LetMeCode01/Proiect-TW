document.getElementById("login-form").addEventListener("submit", function(e) {
    e.preventDefault(); // prevenim reincarcarea paginii

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Te rog completează atât username-ul cât și parola!");
        return;
    }

    fetch("users.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Nu s-a putut prelua fișierul users.json");
            }
            return response.json();
        })
        .then(users => {
            // verificam daca exista utilizator cu username si password corect
            const userExists = users.some(
                user => user.username === username && user.password === password
            );

            if (userExists) {
                // salvam username-ul in sessionStorage-stocheaza temporar in browser
                sessionStorage.setItem("username", username);
                alert("Autentificare reușită!");
                // redirectionare dupa 100ms
                setTimeout(() => {
                    window.location.href = "/forum.html";
                }, 100);
            } else {
                alert("Username sau parola incorectă!");
            }
        })
        .catch(error => {
            console.error("Eroare la preluarea listei de utilizatori:", error);
            alert("A apărut o eroare. Încearcă din nou mai târziu.");
        });
});
