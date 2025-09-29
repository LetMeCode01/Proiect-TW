document.addEventListener("DOMContentLoaded", () => {
  const usernameDisplay = document.getElementById("user-name");
  const loggedInUser = sessionStorage.getItem("username");
  if (loggedInUser) {
    usernameDisplay.textContent = loggedInUser;
  } else {
    window.location.href = "Comunitate.html";
  }

  document.getElementById("logout-button").addEventListener("click", () => {
    sessionStorage.clear();
    window.location.href = "Acasa.html";
  });
  document.getElementById("post").addEventListener("click", () => {
  const pattern = /^[A-Za-z0-9?!.,/ ]+$/;
const input = document.getElementById('msj').value;

if (pattern.test(input)) {
  saveMessageToStorage(loggedInUser+":"+document.getElementById("msj").value)
  displayAllMessagesFromStorage();
} else {
   alert("Nu ai voie sa folosesti decat litere si cifre");
   
}  
  
  });
});
function displayText(message,className) {
  var elements = document.getElementsByClassName(className); // Obținem toate elementele cu clasa 'masina1'
  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var textNode = document.createElement('h2'); // Creăm un element <h2>
    
    textNode.innerText = message; // Setăm textul pentru elementul <h2>
    var msd=textNode;
    msd.style.color=getRandomColor();
    element.appendChild(msd); // Adăugăm elementul <h2> la fiecare element cu clasa 'masina1'
  }
}
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function displayAllMessagesFromStorage() {
  const messages = JSON.parse(localStorage.getItem('messages')) || [];
  const messagesContainer = document.getElementById('mesaje'); // Containerul pentru mesaje

  if (messages.length === 0) {
    messagesContainer.innerHTML = "<h2>Nu există mesaje stocate în storage.</h2>";
    return;
  }

  messagesContainer.innerHTML = ""; // Golim containerul de mesaje pentru a afișa mesajele noi

  messages.forEach((message, index) => {
    const messageElement = document.createElement('h2');
    messageElement.textContent =message;
    messageElement.style.color=getRandomColor();
    messagesContainer.appendChild(messageElement);
  });
}
function saveMessageToStorage(message) {
  let messages = JSON.parse(localStorage.getItem('messages')) || [];
  messages.push(message);
  localStorage.setItem('messages', JSON.stringify(messages));
}
document.getElementById('content').addEventListener('click', function(event) {
            const computedStyle = getComputedStyle(this);
            const bgColor = computedStyle.color;
            alert(`Easter Egg: Tocmai ai apasat pe text si ai aflat culoarea: ${bgColor}`);
        });