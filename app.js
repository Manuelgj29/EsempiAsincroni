function fetchUser(){
    fetch('user.json')
    .then(response => response.json())
    .then(user => {
        console.log(user);
    })
    .catch(error => {
        console.error("Errore nel recupero del file JSON", error);
    })

}