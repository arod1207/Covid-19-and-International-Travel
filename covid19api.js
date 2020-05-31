//variables
var destination = ""

//event listener for submit button
$('.submitBtn').on("click",function(e){
    e.preventDefault();


//ajax call for covid summary 
var settings = {
    "url": "https://api.covid19api.com/summary",
    "method": "GET",
    "timeout": 0,
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });
  //function dozachstuff (countryCode) = $.ajax(url, countryCode)





});