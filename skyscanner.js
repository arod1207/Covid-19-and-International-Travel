var query = "dallas"
var country = "us";
var locale = "en-US";
var currency = "usd";
var flightOutBoundDate = "2020-07-01";
var flightInBoundDate = "2020-07-10";
var origin = "DFWA-sky"
var destination = "IAH-sky"




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
	var place1 = response.Places[0].PlaceId;
	var place2 = response.Places[1].PlaceId;
	var place3 = response.Places[2].PlaceId;

	console.log(place1, place2, place3);





	var settings = {
		"async": true,
		"crossDomain": true,
		"url": `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/${country}/${currency}/${locale}/${origin}/${place1}/${flightOutBoundDate}?inboundpartialdate=${flightOutBoundDate}`,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
			"x-rapidapi-key": "0b8bdf6765msh3a834de431554e9p1feb19jsn74c4481a7c10"
		}
	}
	
	$.ajax(settings).done(function (response) {
		console.log(response);
	});
});



