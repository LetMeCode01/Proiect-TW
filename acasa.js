function displayText(message,className) {
    var elements = document.getElementsByClassName(className); // Obținem toate elementele cu clasa 'jucator1'
  
      var element = elements[elements.length-1];
      var textNode = document.createElement('h2'); // Creem un element <h2>
      textNode.innerText = message; // Setam textul pentru elementul <h2>
      element.appendChild(textNode); // Adaugam elementul <h2> la fiecare element cu clasa 'jucator1'
    
  }
  function removeText(className) {
    var elements = document.getElementsByClassName(className);
    for (var i = 0; i < elements.length; i++) {
      var element = elements[i];
      var textNodes = element.getElementsByTagName('h2');
      while (textNodes[0]) {
        element.removeChild(textNodes[0]);
      }
    }
  }
  window.onload = function() {
    
  };

document.addEventListener('keyup', function(event) {
    if (event.key === 'm' || event.key === 'M') {
        removeText('jucator');
        document.querySelector('.jucator').classList.add('zoom');
        document.querySelector('.jucator1').classList.add('invizibil')
        document.querySelector('.jucator1').classList.remove('zoom')
        document.querySelector('.jucator').classList.remove('invizibil')
        displayText('I am more worried about being a good person than being the best football player in the world.','jucator'); 
        removeText('jucator1');

  
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'c' || event.key === 'C') {
        document.querySelector('.jucator').classList.remove('zoom');
        document.querySelector('.jucator1').classList.remove('invizibil');
        removeText('jucator');
    
    }
});
document.addEventListener('keyup', function(event) {
    if (event.key === 'r' || event.key === 'R') {
        removeText('jucator1');
        document.querySelector('.jucator1').classList.add('zoom');
        document.querySelector('.jucator').classList.add('invizibil')
        document.querySelector('.jucator').classList.remove('zoom')
        document.querySelector('.jucator1').classList.remove('invizibil');
        displayText('Siu','jucator1'); 
        removeText('jucator');
          
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'c' || event.key === 'C') {
        document.querySelector('.jucator1').classList.remove('zoom');
        document.querySelector('.jucator').classList.remove('invizibil');
        removeText('jucator1');
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === '`' || event.key === '~') {
        document.querySelector('.jucator').classList.remove('zoom','invizibil');
        document.querySelector('.jucator1').classList.remove('zoom','invizibil');
        removeText('jucator');
        removeText('jucator1');
    }
});
