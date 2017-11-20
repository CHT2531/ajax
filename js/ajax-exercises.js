
//Q1) make sure you have a web server up and running. Look at the following code. It runs a basic Ajax request. Open the HTML page in a browser and make sure it works i.e. you can see the console message. 


var ajaxRequest = new XMLHttpRequest(); 
var handleResponse=function()
{
	if(ajaxRequest.readyState===4){
    	if(ajaxRequest.status===200){	
			console.log(ajaxRequest.responseText)
		}
	}
}
ajaxRequest.onreadystatechange=handleResponse; 
ajaxRequest.open('GET', "data/data.txt", true);
ajaxRequest.send(null);


//Q2) At the moment the function loads a simple text file. From the data folder, from the data folder open students.json. Modify your ajax function so that it loads the student data instead. Output the name of the first student in the console.



//Q3)Modify this so that you use a loop to display the names of all the students and their marks in the console. 



/*
Q4)Modify this so that the names of all the students and their marks are displayed in the <ul> element in the HTML page i.e. the output when loading students.json will be


<ul id="result">
<li>Jane 67</li>
<li>Imran 42</li>
<li>Zofia 72</li>
</ul>

*/


//Q5) Instead of working with a hard coded JSON file, have a look at the itunes search API https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api/ see if you can make a request and display the result in the console e.g.  https://itunes.apple.com/search?term=jaws&entity=movie should return films with jaws in their title. To start with simply display the result in the console. Once you've got this to work, output the results to the HTML page like you did in the previous example. 



//Q6) Modify the request so that you get some different data back e.g. about a music artist. 



//Q7) Wrap your code in a function. Call the function 'ajax'. Uncomment the following code to test it still works. 

//ajax();


//Q3)  At the moment the URL that is requested is hard-coded into the application. Modify ajax() so that it accepts a single argument, the URL of the resource we want to request. e.g. 

//ajax("https://itunes.apple.com/search?term=jaws&entity=movie"); 


//Q6) Add an additional parameter to your ajax function, this parameter should be assigned a callback function when ajax is called. The callback function should be run when the ajax request is complete. This callback function should accept a single argument, the parsed responseText. Again here's an example of how we'd call the ajax() function. 

// ajax("data/students.json",function(results){
// 	results.forEach(function(student){
// 		console.log(student.name)
// 	})
// }); 


//Q7) To test this works make a second call to  ajax(). This time request a different URL and pass a different function to process the result. 



//Q8) Add another parameter to your ajax() function (you will now have three parameters). This parameter should be also be assigned a function. If there is an error e.g. if we don't get a status code of 200 this failure function should be called. again, here's an example:

// ajax("https://itunes.apple.com/search?term=jaws&entity=movie",function(results){
// 	results.forEach(function(film){
// 		console.log(film.trackName)
// 	})
// },function(error){
// 	console.log("Error")
// });

//Q9) Finally can you use a Promise object instead of passing callbacks to the ajax function.

