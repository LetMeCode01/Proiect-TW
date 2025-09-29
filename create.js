document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        // Previne comportamentul implicit de trimitere a formularului
        event.preventDefault();
        // Preia valoarea introdusă de utilizator din câmpul "Nume Complet"
        const nume = document.getElementById('nume').value;
        // Preia valoarea introdusă de utilizator din câmpul "Parola"
        const parola = document.getElementById('parola').value;
        const parola1=document.getElementById('parola1').value
        //faci orice cu datele introduse de utilizator
        fetch('user.json')
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData);
                
                const userExists = jsonData.users.some(user => user.user === nume);
                    //Ma folosesc de local storage
                if (userExists) {
                    alert("Acest cont mai exista aici ");
                    
                } else {
                    if(parola1===parola){
                        const newObject = { "user": nume, "parola": parola };
                        // Adaugă noul utilizator la array-ul existent de utilizatori
                        jsonData.users.push(newObject);
                        
                        window.open('Comunitate.html', '_self');
                    
                    }
                    else{
                        alert("Parola a fost introdusa de 2 ori gresit");
                    }
                }
                // Aici poți face orice dorești cu datele introduse de utilizator
                console.log('Nume Complet:', nume);
                console.log('Parola:', parola);

                // Poți trimite datele către un server pentru verificare sau pentru a le procesa
                // Exemplu: sendDataToServer(nume, parola);
            })
            .catch(error => {
                console.error('Eroare la încărcarea JSON-ului:', error);
            });
    });
});

