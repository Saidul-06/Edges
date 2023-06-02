const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => loadCountryData(data));
};

const loadCountryData = (countryData) => {
  countryData.forEach((country) => {
    const parent_div = document.getElementById("For_Country");
    // parent_div.classList.add('childClass');

    const div = document.createElement("div");
    div.classList.add("childClass");

    div.innerHTML = `
       <h4>Name: ${country.name.common}</h4>
   <h4>Capital : ${country.capital ? country.capital : "no Capital"}</h4>
   <button onclick = "DetailsFunctions('${country.cca2}')"> Details</button>
       `;
    parent_div.appendChild(div);
  });
};

const DetailsFunctions = countrys => {
  const url = `https://restcountries.com/v3.1/alpha/${countrys}`;

  fetch(url)
    .then((res) => res.json())
    .then((data2) => ShowingDetails(data2));
};

const ShowingDetails =FullDetails => {

  console.log(FullDetails[0]);

  const parent = document.getElementById("Details_of_country");
  
  parent.innerHTML = 
  `
    <h1>Name : ${FullDetails[0].name.common}</h1>
    <h3>Capital :${FullDetails[0].capital[0] ? FullDetails[0].capital[0] : "no Capital"} </h3>
    <img src="${FullDetails[0].flags.png}">
    ` 

  }

loadCountries();
