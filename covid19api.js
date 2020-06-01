 //function dozachstuff (countryCode) = $.ajax(url, countryCode)
function covidCountry(CountryCode){
var settings = {
    "url": `https://api.covid19api.com/live/country/${CountryCode}`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  
//event listener for submit button
$('.submitBtn').on("click",function(e){
    e.preventDefault();
})

}; 
covidCountry();

//new li to append data to flight details
var covidLi = $("<li>");
$("#flight-details").append(covidLi);
