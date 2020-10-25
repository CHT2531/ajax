// fetch("./data/films.json").then(function(response) {
// 		return response.json();
// }).then(function(json) {
// 		console.log(json)
// });


// Q1) Open index.html in a browser. Open the console, note how the films data has been loaded from a JSON file.
// a) Modify the code so that it outputs the title of each film.

// fetch("./data/films.json").then(function(response) {
// 		return response.json();
// }).then(function(json) {
// 		console.log(json)
// 		const films = json;
// 		films.forEach(function(film){
// 			console.log(film.title);
// 		})
// });

// b) Modify the code so that the full details of the second film (Winter's Bone) are displayed in the console.

// fetch("./data/films.json").then(function(response) {
// 		return response.json();
// }).then(function(json) {
// 		console.log(json)
// 		const films = json;
// 		console.log(`${films[1].title} was made in ${films[1].year}. It is ${films[1].duration} minutes in length.`);
// });

// c) Open films.json. Have a good look at the structure of the file. Add the details for another film. Modify the code so that the new film's details are displayed in the console.




// Q2) In a text-editor open films-object.json. This contains similar data but structured in a slightly different way.
// a) Modify your Ajax code so that it loads the data in films-object.json instead. Your code should output the list of film titles to the console.

// fetch("./data/films-object.json").then(function(response) {
// 		return response.json();
// }).then(function(json) {
// 		console.log(json)
// 		const films = json.results;
// 		films.forEach(function(film){
// 		 			console.log(film.title);
// 		})
// });


// b) Modify the code so that the genres of Winter's Bone are displayed in the console.

// fetch("./data/films-object.json").then(function(response) {
// 		return response.json();
// }).then(function(json) {
// 		console.log(json)
// 		const films = json.results;
// 		console.log(`${films[1].title} was made in ${films[1].year}. It is ${films[1].duration} minutes in length.\nGenres:`);
// 		films[1].genres.forEach(function(genre){
// 		 			console.log(genre);
// 		})
// });

// b) Have a good look at the structure of films-object.json. Add the details for another film. Modify the code so that the new film's details are displayed in the console.


// Q3) Next we'll use an API instead of hard coded data

// a) Open a new tab in a web browser enter https://www.swapi.tech/api/species. See the response you get from the SWAPI site.

// b) Modify your code from the previous question so that you load data from the Star Wars API using this URL. To start with use a simple console.log to print the entire reponse. Then think about about how you can list just the species names.

// fetch("https://www.swapi.tech/api/species").then(function(response) {
// 		return response.json();
// }).then(function(json) {
// 		console.log(json)
// 		const species = json.results;
// 		species.forEach(function(singleSpecies){
// 		 			console.log(singleSpecies.name);
// 		})
// });

// c) Have a look at https://www.swapi.tech/docs and modify your code to make a request for a single species. Display some of the species details

// fetch("https://www.swapi.tech/api/species/3").then(function(response) {
// 		return response.json();
// }).then(function(json) {
// 		console.log(json)
// 		const species = json.result.properties;
// 		console.log(`Name: ${species.name}`);
// 		console.log(`Lifespan: ${species.average_lifespan}`);
// 		console.log(`Language: ${species.language}`);
// });

//Q4) Now, instead of using the console log, choose one of your examples and see if you can display Ajax data in the HTML page. Have a look at https://github.com/CHT2531/js-dom-recap/blob/master/notes.md#inserting-multiple-elements from last week for an example of using a forEach loop to insert elements into an HTML page.

// fetch("https://www.swapi.tech/api/species").then(function(response) {
// 		return response.json();
// }).then(function(json) {
// 		console.log(json)
// 		const species = json.results;
// 		const speciesFragment = document.createDocumentFragment();
// 		species.forEach(function(singleSpecies){
// 		    const newParagraph = document.createElement("p");
// 		    newParagraph.textContent = `${singleSpecies.name}`;
// 		    speciesFragment.appendChild(newParagraph);
// 		});
// 		const speciesDiv = document.querySelector("#species");
// 		speciesDiv.appendChild(speciesFragment);
// });




// Q5) Now think about how you can make the code more re-usable.
//a) Create a new function, call it ajax. Put the fetch() code in this function. The ajax function should accept two arguments, a URL to request data from and a callback that will be executed when the data is returned. Have a look on the notes (in this repository) for an example.
//b) Make multiple calls to your ajax function for the different examples we have looked at today e.g.

// function ajax(url,callback)
// {
// 	fetch(url).then(function(response) {
// 		return response.json();
// 	}).then(function(json) {
// 		callback(json)
// 	});
// } //end of doAjax
//
// const showSpecies = function(data){
// 	console.log(data)
// 	const species = data.results;
// 	species.forEach(function(singleSpecies){
// 			console.log(singleSpecies.name);
// 	})
// }
//
// const showDetails = function(data){
// 	console.log(data)
// 	const species = data.result.properties;
// 	console.log(`Name: ${species.name}`);
// 	console.log(`Lifespan: ${species.average_lifespan}`);
// 	console.log(`Language: ${species.language}`);
// }
//
// ajax("https://www.swapi.tech/api/species",showSpecies);
// ajax("https://www.swapi.tech/api/species/3",showDetails);
