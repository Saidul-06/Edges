const Fetching = () =>{
    fetch ('https://randomuser.me/api/?gender=female')
.then(res => res.json())
.then(data => storedData(data))
}

const storedData = datas =>{
    
const Name = document.getElementById("quotes_para");
Name.innerText = datas.results[0].name.first;

const states = document.getElementById("state").src
document.getElementById("staat").src = data.results[0].picture.large

console.log(datas.results[0].picture.large);

} 
Fetching()


