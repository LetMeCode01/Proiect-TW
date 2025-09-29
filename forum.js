function name() {
    let user = localStorage.getItem('loggedInUser');
    return user;
}

window.onload = function() {
    const h2 = document.createElement('h2');

    // Adaugă text în elementul h2
    h2.textContent = 'Salutare! Bine ai venit pe casa Fotbalului! Aici vei putea contribui direct la bunastarea comunitatii!';

    

    // Adaugă elementul h2 în div-ul cu id-ul 'content'
    document.getElementById('content').appendChild(h2);
};