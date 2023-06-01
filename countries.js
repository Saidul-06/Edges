const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => loadCountryData(data));
}


 const  loadCountryData = (countryData) =>{
    



//     console.log(countryData[0].name.nativeName.ara);
// }

// function loadCountryData(countrys){
    
     for (const country of countryData){

        console.log(country.capitalInfo.latlng
            );
         

    
    
const parent_div = document.getElementById('For_Country');

const div = document.createElement('div')


div.innerHTML = 
    `
    <h4>Name: ${country.capitalInfo.latlng}</h4>
<h4>Capital : </h4>
<h4>ara</h4>
    `;

   parent_div.appendChild(div);
}

    }



loadCountries();