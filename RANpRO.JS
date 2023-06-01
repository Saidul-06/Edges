const loadUsers = () => {
    fetch ('https://randomuser.me/api/?gender=female')
    .then(Response => Response.json())
    .then(data => ValuesPassing(data))
}

const ValuesPassing = (data) =>{
    console.log(data.results[0].gender);
    
}



loadUsers();