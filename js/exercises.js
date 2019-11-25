// // Q1
// fetch("./data/films.json").then(function(response) {
// 		return response.json();
// 	}).then(function(json) {
// 		console.log(json)
// 		const film = json[1];
// 		console.log(`${film.title} was made in ${film.year}`);
// 		const film2 = json[2];
// 		film2.genres.forEach(function(genre){
// 			console.log(genre);
// 		})
// 	});

// // Q2
// fetch("https://swapi.co/api/films").then(function(response) {
// 		return response.json();
// 	}).then(function(json) {
// 		const films = json.results
// 		films.forEach(function(film){
// 			console.log(`${film.title} was made in ${film.release_date}`)
// 		})
// 	});

// // Q3
// fetch("https://itunes.apple.com/search?term=Jaws").then(function(response) {
// 		return response.json();
// 	}).then(function(json) {
// 		console.log(json)
// 		const results = json.results
// 		const matchingResults = results.filter(function(result){
// 			if(result.kind==="feature-movie"){
// 				return true;
// 			}else{
// 				return false;
// 			}
// 		})
//
// 		matchingResults.forEach(function(film){
// 			console.log(film.longDescription)
// 		})
// 	});

// // Q4
// function ajax(url,callback)
// {
// 	fetch(url).then(function(response) {
// 		return response.json();
// 	}).then(function(json) {
// 		callback(json)
// 	});
// } //end of doAjax

/*
Q1) Open index.html in a browser. Open the console, note how the films data has been loaded from a JSON file
a) Modify the code so that it outputs "Get Out was made in 2017"
b) Open films.json. Have a good look at the structure of the file. Add the details for another film. Modify the code so that the new film's details are displayed in the console.
c) Modify the code so that is displays the genres for the film Winter's Bone. Make sure you use a forEach loop.
*/

/*
Q2) Next we'll use an API instead of hard coded data
a) Open a new tab in a web browser enter https://swapi.co/api/films. See the response you get from the SWAPI site.
b) Copy the code from Q1 and modify it so that you load  data from the Star Wars API instead (you might want to comment out your Q1 code for now). Use a forEach loop to display the title and release date of each film.
c) Have a look at https://swapi.co/documentation and modify your code to make a request for different data e.g. people or planets or vehicles. Test it works.
*/

/*
Q3) Have a go with a different API
a) Make a request to https://itunes.apple.com/search?term=Jaws. Again, copy the code from Q1 and modify it. To start with simply display the returned JSON data in the console.
b) The iTunes API returns data for music, films and tv programmes.Can you filter the results to only get films. Display the description for each film in the console.
*/

/*
Q4) There are two big problems with the above. First, we are duplicating the code every time we make a request. Second, we are mixing up the AJAX code with code that process the data.
a) Create a new function, call it ajax. Put the fetch code in the function. The ajax function should accept two arguments, a URL to request data from and a callback that will be executed when the data is returned. Have a look on the notes for an example.
b) Make multiple calls to your ajax function for the different examples we have looked at today e.g.
*/

// const showGenres=function(film){
// 	film[1].genres.forEach(function(genre){
// 		console.log(genre)
// 	})
// }
//
// const showStarWarsFilms=function(response){
// 	const films = response.results
// 	films.forEach(function(film){
// 			console.log(`${film.title} was made in ${film.release_date}`)
// 	})
// }
// ajax("./data/films.json",showGenres);
// ajax("https://swapi.co/api/films",showStarWarsFilms);
