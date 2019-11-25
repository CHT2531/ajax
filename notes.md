# Ajax

## A Simple Ajax Request

As an example, imagine we have a simple JSON file *countries.json* that contains the following data:

```json
[
    {"name" : "England", "capital" : "London", "continent" : "Europe", "population": 53000000},
    {"name" : "France", "capital" : "Paris", "continent" : "Europe", "population": 67000000},
    {"name" : "USA", "capital" : "Washington", "continent" : "N. America", "population": 325000000}
]
```

Using Ajax we can load the data in this file and use it in our applications. Here's the JavaScript code for a simple Ajax request. There's quite a lot to take in but the code is more or less the same every time we want to make an Ajax request.

```javascript
fetch("./data/countries.json").then(function(response) {
		return response.json();
}).then(function(json) {
		const countries = json;
		console.log(countries[1].capital); //outputs Paris
});
```

## Making Several Requests
Often we want to make lots of Ajax requests. For example, I might want a list of countries and then later on display details for a specific country. We might end up with code like this:

```javascript
//show all countries
fetch("./data/countries.json").then(function(response) {
		return response.json();
}).then(function(json) {
		const countries = json;
		countries.forEach(function(country){
			console.log(`${country.name} has a population of ${country.population} `);
		})
});

//show the capital of Paris
fetch("./data/countries.json").then(function(response) {
		return response.json();
}).then(function(json) {
		const countries = json;
		console.log(countries[1].capital); //outputs paris
});

```
Clearly this isn't a good idea (remember the DRY principle). We have huge amounts of duplicate code.

### Wrapping the fetch code in a function
We can wrap the fetch code in a function. We can then pass arguments to the function to specify a URL to load data from and a callback function to execute once the data has loaded.

```javascript

function doAjax(url,callback)
{
	fetch(url).then(function(response) {
		return response.json();
	}).then(function(json) {
		callback(json)
	});
} //end of doAjax

const showPopulations = function(data){
	const countries = data;
	countries.forEach(function(country){
		console.log(`${country.name} has a population of ${country.population} `);
	})
}

const showCapitalFrance = function(data){
	const countries = data;
	console.log(countries[1].capital); //outputs paris
}

doAjax("./data/countries.json",showPopulations);
doAjax("./data/countries.json",showCapitalFrance);
```
