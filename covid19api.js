 //function dozachstuff (countryCode) = $.ajax(url, countryCode)
function covidCountry(CountryCode){
var settings = {
    "url": `https://api.covid19api.com/total/country/${CountryCode}/status/confirmed`,
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    var cases = response[130].Cases
    console.log(cases);
//new li to append data to flight details
var covidLi = $("<li>");
$("#flight-details").append(covidLi);
covidLi.text(`Covid Cases: ${cases}`)
  });
  
//event listener for submit button
$('.submitBtn').on("click",function(e){
    e.preventDefault();
})

}; 
covidCountry("chile");


