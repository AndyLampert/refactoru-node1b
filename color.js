var request = require('request');
request('https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json', function (error, response, body) {

	// consoles an error is the status code spits back 200
  if (!error && response.statusCode == 200) {
    // console.log(body) // Print the google web page.
  }

  var colors = JSON.parse(body);
  for (var i = 0; i < colors.length; i++) {
  	if(colors[i].name.toLowerCase() === process.argv[2].toLowerCase()) {
  		console.log( colors[i].rgb.r, colors[i].rgb.g, colors[i].rgb.b );
  	}
  };
  // console.log( colors[0].rgb.r, colors[0].rgb.g, colors[0].rgb.b);
});

// needs to take an argument, a colorname
// returns the three rgb values


