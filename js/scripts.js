$(document).ready(function() {
  
  //Get Weather Form
  $('button').click( function() {
	  
	  //remove class
	  $('body').removeClass();
	  
	  // Gets and Sets Zip Code
	  var getZip = $('input').val()
 
  
	// Get the Weather
	$.simpleWeather({
	
		// Minimum properties to set
		zipcode: getZip,
		unit: 'f',
		
		// Method to display weather
		success: function(weather) {
			
			// Concatenate HTML code & weather variables.
			// Put into one big'ol collection
			//first line adds weather temp in numbers in farenheit
			html = '<h1>' + weather.temp + '&deg;' + weather.units.temp + '</h1>';
			
			//Second Line adds city and state location
			html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
			html += '<img src="img/' + weather.code + '.png" />';
			html += $('body').addClass('color' +weather.code);
			//html += '<li class="currently">'+weather.currently+'</li>';
			//html += '<li>'+weather.tempAlt+'&deg;C</li></ul>';
			
			// Write collection to page with html() method
			// Note: difference between html() method vs. html option 
			$("#weather").html(html);
		},

		// Method 
		error: function(error) {
			$("#weather").html('<p>'+error+'</p>');
		}

	});
	// end getting Weather
	
});	
 });