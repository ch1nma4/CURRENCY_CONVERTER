const api = "https://api.exchangerate-api.com/v4/latest/USD"; 

var search = document.querySelector(".searchBox");
var fromCurrency = document.querySelector(".from");
var toCurrency = document.querySelector(".to");
var convert = document.querySelector(".convert");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");

var resultFrom;
var resultTo;
var searchValue;

fromCurrency.addEventListener('change' , (event) => {
    resultFrom = `${event.target.value}`;
});

toCurrency.addEventListener('change' , (event) => {
    resultTo = `${event.target.value}`;
});

search.addEventListener('input' , updateValue);

function updateValue(e){
    searchValue = e.target.value;
}
convert.addEventListener('click' , getResults);

//fuction getResults
function getResults() {
    fetch(`https://api.exchangerate-api.com/v4/latest/${resultFrom}`)
        .then(currenc => {
            return currenc.json();
        }).then(displayResult);
}

//display results after conversion
function displayResult(currency) {
    let toRate = currency.rates[resultTo];
    
    finalValue.innerHTML = (toRate * searchValue).toFixed(2);
    // document.write( (toRate * searchValue).tofixed(2));
    finalAmount.style.display = "block";
}

//when user click on reset button
function clearVal() {
    window.location.reload();
    document.getElementsByClassName("finalValue").innerHTML = "";
};