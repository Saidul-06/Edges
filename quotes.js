function fetchg(){

    fetch ('https://api.kanye.rest')
.then(Response => Response.json())
.then(data => StoreValue(data) )

}

function StoreValue(quotes){

 
    const div = document.getElementById('quotes_para');
    div.innerText = quotes.quote;



}
