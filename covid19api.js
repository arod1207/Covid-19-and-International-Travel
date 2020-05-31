 //function dozachstuff (countryCode) = $.ajax(url, countryCode)
function covidCountry(countryCode){
var settings = {
    "url": `https://api.covid19api.com/live/country/${countryCode}`,
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

covidCountry()