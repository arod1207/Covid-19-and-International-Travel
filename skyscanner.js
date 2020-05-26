var query = "Dallas" // user input
var country = "us"; // default for simplicity right now
var locale = "en-US"; // default for simplicity right now
var currency = "usd"; // default for simplicity right now
var flightOutBoundDate = "2020-05-26"; // user input
var flightInBoundDate = "2020-06-02"; // user input
var origin = "SATA-sky" // user input
var destination = "DFWA-sky" // user input


var settings = {
	"async": true,
	"crossDomain": true,
	"url": `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/${country}/${currency}/en-US/?query=${query}`,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "0b8bdf6765msh3a834de431554e9p1feb19jsn74c4481a7c10"
	}
}

$.ajax(settings).done(function (response) {

	for (var i = 0; i < response.Places[0].PlaceName.length; i ++)
	console.log(response.Places[i]);
	

});


var settings = {
	"async": true,
	"crossDomain": true,
	"url": `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/${country}/${currency}/${locale}/${origin}/${destination}/${flightOutBoundDate}?inboundpartialdate=${flightOutBoundDate}`,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "0b8bdf6765msh3a834de431554e9p1feb19jsn74c4481a7c10"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});




