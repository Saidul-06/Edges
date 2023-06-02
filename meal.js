const loadData = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=fish")
    .then((res) => res.json())
    .then((data) => ContainValues(data.meals));
}


const ContainValues = values =>{
    
console.log(values
    );
    values.forEach(x => {
    console.log(x);
    
})
    
}




loadData();