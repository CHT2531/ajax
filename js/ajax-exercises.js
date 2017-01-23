/*
These exercises ask you to create and then modify a single function. This means previous tests will fail as you complete later exercises 
*/

/*
Q1) Look at the following it is the code needed for a basic Ajax request. Run the code in a browser and note the console message. No tests, just make sure it works.
*/

	var ajaxRequest = new XMLHttpRequest(); 
	var handleResponse=function()
	{
		if(ajaxRequest.status===200)
		{
		    if(ajaxRequest.readyState===4)
		    {
		    	console.log(ajaxRequest.responseText)
			}
		}
	}

	ajaxRequest.onreadystatechange=handleResponse; 
	ajaxRequest.open('GET', "data/data.txt", true);
	ajaxRequest.send(null);



/*
Q2) Wrap this code in a function. Call the function 'ajax'.
*/

/*
Q3)  At the moment the URL that is requested is hard-coded into the application. Modify ajax() so that it accepts a single argument, the URL of the resource we want to request. Please note, the previous tests will now fail, this is to be expected. 
*/



/*
Q4) At the moment the function loads a simple text file. From the data folder, open students.json, it contains a JSON file made up of student data. Modify your ajax function so that it when it loads student data like this it will output the name of the first student in the console.

*/

/*
Q5) Modify this so that the names of all the students and their marks are displayed in the <ul> element in the HTML page i.e. the output when loading students.json will be


<ul id="result">
<li>Jane 67</li>
<li>Imran 42</li>
<li>Zofia 72</li>
</ul>

*/



/*
Q6) Add an additional parameter to your ajax function, this parameter should be assigned a callback function when ajax is called. The callback function should be run when the ajax request is complete. This callback function should accept a single argument, the parsed responseText. 

Again, the previous tests will now fail, this is to be expected.
*/

/*
Q7) Add another parameter to your ajax() function (you will now have three parameters). This parameter should be also be assigned a function. This function should be called if there is an error e.g. if we don't get a status code of 200. This function should accept a single argument, a string that describes the error.
*/

/*
Q8) Finally can you use a Promise object instead of passing callbacks to the ajax function. No unit test for this exercise.
*/