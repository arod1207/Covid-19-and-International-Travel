var country = "US"; // default for simplicity right now
var locale = "en-US"; // default for simplicity right now
var currency = "USD"; // default for simplicity right now




$('.submitBtn').on("click",function(e){
    e.preventDefault();

    var origin = $('#origin').val();
    var destination = $('#destination').val();
    var departurDate = $('#depart').val()
    var returnDate = $('#return').val();


// AJAX call to get origin PlaceID //
var settings = {
	"async": true,
	"crossDomain": true,
	"url": `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/${country}/${currency}/en-US/?query=${origin}`,
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "0b8bdf6765msh3a834de431554e9p1feb19jsn74c4481a7c10"
	}
}

$.ajax(settings).done(function (responsePlaceID) {
    var originID = responsePlaceID.Places[0].PlaceId
    console.log(originID);
// AJAX call to get destinationID
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/${country}/${currency}/en-US/?query=${destination}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "0b8bdf6765msh3a834de431554e9p1feb19jsn74c4481a7c10"
        }
    }
    
    $.ajax(settings).done(function (responsePlaceID) {
        var destinationID = responsePlaceID.Places[0].PlaceId
        console.log(destinationID);   

// AJAX call to get Quotes //
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/${country}/${currency}/${locale}/${originID}/${destinationID}/${departurDate}/?inboundpartialdate=${returnDate}`,
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
            "x-rapidapi-key": "0b8bdf6765msh3a834de431554e9p1feb19jsn74c4481a7c10"
        }
    }
    
    
    $.ajax(settings).done(function (response) {
        console.log(response);

    // var airline = response.Quotes[0].OutboundLeg.CarrierIds
    var airline = response.Quotes.length;
    for (var i = 0; i < airline; i++) {
        var airlineID = response.Quotes[i].OutboundLeg.CarrierIds;
       console.log(airlineID);
    }



// Price Range //
     var quotes = response.Quotes.length;
     for (var i = 0; i < quotes; i++){
         var prices = response.Quotes[i].MinPrice;
         var priceLi = $("<li>")
         $('#flight-details').append(priceLi);
         priceLi.text(`Prices range from ${prices}`);
         
     }

     


       

       
    });
   
});

})
});
