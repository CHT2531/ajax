# Ajax

## A Simple Ajax Request

As an example, imagine we have a simple text file *data.txt* that contains the following text:

```
Hello from Ajax
```

Using Ajax we can load the text in this file and use it in our applications. Here's the JavaScript code for a simple Ajax request. There's quite a lot to take in but the code is more or less the same everytime we want to make an Ajax request.

```javascript

//declare a function
var handleResponse=function()
{
    //have we got a response from the server
    if(ajaxRequest.readyState===4){
        //did we find the requested resource?
        if(ajaxRequest.status===200){
            console.log(ajaxRequest.responseText); //outputs Hello from Ajax
        }
    }
    
}
//I want to 'talk' to the web server
var ajaxRequest = new XMLHttpRequest(); 

//I want to request the file 'data.txt', but don't send the request yet.
ajaxRequest.open('GET', 'data.txt', true);

//when the server responds call the function handleResponse() 
ajaxRequest.onreadystatechange=handleResponse; 

//Everything is set up, now send off the request to the server
ajaxRequest.send(null);
```

## Response States
The function handleResponse will be called several times. This is because browser fires update messages to keep us informed about what is happening with our request. Browsers use numbers to represent different states of a request
* Unitialised (0). An XMLHttpRequest object has been created
* Loading (1). Open has been called on an XMLHttpRequest object but send hasn't been called
* Loaded (2) . Send has been called but no data has been received yet.
* Interactive (3) . We've started receiving data from the server.
* Complete (4) . All the data has been received, you can use it. 

We can find out the 'ready state' as it is a property of XMLHttpRequest object.We are only interested in ready state 4, so we test for this in our code 
:
```javascript
if(ajaxRequest.readyState===4)
{
    console.log(ajaxRequest.responseText); //outputs Hello from Ajax
}
```

### What if there's a problem
When we request resources from web servers, things can go wrong. For example, a 404 error means the resource couldn't be found. There are lots of these *response* codes. A response code of 200 that means the request was successful. So that's why we check for a response code of 200
```javascript
 
    //have we got a response from the server
    if(ajaxRequest.readyState===4)
    {
       //successful response?
        if(ajaxRequest.status===200)
        {
            console.log(ajaxRequest.responseText); //outputs Hello from Ajax
        }
    }

```

## Working with JSON data
Usually we don't send unstructured text like the previous example. Instead, the most popular format for structuring data that is sent from the server is JavaScript Object Notation (JSON). Here's an example of structuring film data as JSON.

```javascript

[
    {
        "title":"Jaws",
        "year":"1975",
        "director":"Steven Spielberg"
    },
    {
        "title":"Winter's Bone",
        "year":"2010",
        "director":"Debra Granik"
    },
    {
        "title":"Back to the Future",
        "year":"1985",
        "director":"Robert Zemeckis"
    }
]


```

This looks similar to the way which we would structure object literals but there are some key differences, for example, property names are enclosed in quotes, and we can't declare functions, only data. 

See http://stackoverflow.com/questions/2904131/what-is-the-difference-between-json-and-object-literal-notation for a good discussion of the differences.

## Converting JSON data
If we load a JSON file, the browser will treat this as text, as a single string. Usually we want to convert this JSON data into JavaScript data structures, arrays and objects. To do this we use the **JSON.parse()** function. In this example it converts the JSON string into an array of JavaScript objects. 

```javascript
var handleResponse=function()
{
    if(ajaxRequest.readyState===4){
        if(ajaxRequest.status===200){
            var films=JSON.parse(ajaxRequest.responseText);
            console.log(films[1].director); //outputs Debra Granik
        }
    }
}
```

## Making Several Requests
Often we want to make lots of Ajax requests. For example, I might want a list of films and then also in the same page display a list of actors. We might end up with code like this
```javascript
function loadFilms()
{
    var ajaxRequest = new XMLHttpRequest(); 
    var handleResponse=function()
    {
        if(ajaxRequest.readyState===4){
            if(ajaxRequest.status===200){
                var films=JSON.parse(ajaxRequest.responseText);
                console.log(films[0].title);
            }
        }
    }
    ajaxRequest.addEventListener("readystatechange",handleResponse,false); 
    ajaxRequest.open('GET', 'films.json', true);
    ajaxRequest.send(null);
}

function loadActors()
{
    var ajaxRequest = new XMLHttpRequest(); 
    var handleResponse=function()
    {
        if(ajaxRequest.readyState===4){
            if(ajaxRequest.status===200){
                var actors=JSON.parse(ajaxRequest.responseText);
                console.log(actors[0].title);
            }
        }
    }
    ajaxRequest.addEventListener("readystatechange",handleResponse,false); 
    ajaxRequest.open('GET', 'actors.json', true);
    ajaxRequest.send(null);
}
loadFilms();
loadActors();

```
Clearly this isn't a good idea (remember the DRY principle). We have huge amounts of duplicate code. 

### Using an argument to specify the URL
One way to make this more efficient would be to use an argument that specifies the URL of the resource we want to request. Now when we call *makeRequest* we pass the url of the resource we are requesting. 

```javascript
makeRequest("films.json");
```

And in the *makeRequest* function we use this value for the *open* method
```javascript
ajaxRequest.open('GET', url, true);
```
Here's the complete code.
```javascript

function makeRequest(url)
{
    var ajaxRequest = new XMLHttpRequest(); 
    var handleResponse=function()
    {
        if(ajaxRequest.readyState===4){
            if(ajaxRequest.status===200){
                var films=JSON.parse(ajaxRequest.responseText);
                console.log(films[0].title);
            }
        }
    }
    ajaxRequest.addEventListener("readystatechange",handleResponse,false); 
    ajaxRequest.open('GET', url, true);
    ajaxRequest.send(null);
}
makeRequest("films.json");
makeRequest("actors.json");

```
Unfortunately, we still have a problem. Once we receive a response we are expecting to get film objects with title properties. This won't work for actors. 
```javascript

 if(ajaxRequest.status===200){
    var films=JSON.parse(ajaxRequest.responseText);
    console.log(films[0].title); //actors don't have titles!
}

```

What we need is a callback. 

## Callbacks
A callback is a function that we pass as an argument to another function. At a later point in the program execution, this other function, the host function,  runs the callback function. Callbacks can be used whenever we have asynchronous code, code that isn't called immediately. In this case the code is asynchronous because we have to wait for the response from the server before we can run the code to display the output. In the following example we run *makeRequest* with the following call. 

We pass two arguments, the url of the resource (films.json), and the callback function 

```javascript

function makeRequest(url,callback)
{
    var ajaxRequest = new XMLHttpRequest(); 
    var handleResponse=function()
    {
        if(ajaxRequest.readyState===4){
            if(ajaxRequest.status===200){
                var data=JSON.parse(ajaxRequest.responseText);
                callback(data);
            }
        }
    }
    ajaxRequest.addEventListener("readystatechange",handleResponse,false); 
    ajaxRequest.open('GET', url, true);
    ajaxRequest.send(null);
}

makeRequest("films.json",function showFilms(films){
    console.log(films[0].title);
}); 
makeRequest("actors.json", function showActors(actors){
    console.log(actors[0].name);
});

```

## Promises
One problem we can run into with callbacks is lots of nested calls. For example, if in my *showFilms* function I made further Ajax requests, we end up with callbacks within callbacks and the code becomes untidy and difficult to maintain. 

A new feature in the latest version of JavaScript(ES2015), is the idea of promises (see http://caniuse.com/#feat=promises for support info). Promises offer a different way of dealing with asynchronous code. 

Here's a really simple (and pointless example)

```javascript
var doStuff=function()
{
     return new Promise(function(resolve,reject)
    {
        //some code to do something asynchronously
        //just mocking this for a simple example
        var success=true;
        if(success){
            resolve()
        }else{
            reject();
        }
    })
}
var successFnc=function(){
    console.log("success");
}
var errorFnc=function(){
    console.log("failure")
}
var simplePromise=doStuff();

simplePromise.then(successFnc,errorFnc); // outputs success

```

When you first see them, promises are confusing. The idea is that when we call a function it returns a promise object. The promise object runs some asynchronous code. Depending on the result of this code the Promise object either calls *resolve* or *reject*. The way in which we assign the *resolve* and *reject* function is through the Promise object's *then* method. Here's an Ajax example

```javascript


var makeRequest=function(url)
{
    return new Promise(function(resolve,reject){
        //I want to 'talk' to the web server
        var ajaxRequest = new XMLHttpRequest(); 
        //declare a function
        var handleResponse=function()
        {
            //has all the data loaded?
            if(ajaxRequest.readyState===4){
                //successful response?
                if(ajaxRequest.status===200){
                    //convert from a string into js objects
                    var data=JSON.parse(ajaxRequest.responseText);
                    resolve(data);
                }else{
                    reject("Failed to get a successful response");
                }
            }
        }
        //when the server responds call the function handleResponse() 
        ajaxRequest.addEventListener("readystatechange",handleResponse,false); 
        //I want to request the file 'films.json', but don't send the request yet.
        ajaxRequest.open('GET', url, true);
        //Now send off the request to the server
        ajaxRequest.send(null);
    })
}

var displayFilmsResults=function(films)
{
    films.forEach(function(film){
        console.log(film.title);
    })
}
var displayActorsResults=function(actors)
{
    actors.forEach(function(actor){
        console.log(actor.name);
    })
}
var ajaxError=function(errMsg)
{
    console.log(errMsg);
}
var myPromise=makeRequest("films.json");
myPromise.then(displayFilmsResults,ajaxError);

var anotherPromise=makeRequest("actors.json");
anotherPromise.then(displayActorsResults,ajaxError);
```

## Reading/References
* https://developer.mozilla.org/en-US/docs/AJAX/Getting_Started
* Professional JavaScript for Web Developers by  Nicholas C. Zakas Chapter 21 AJAX
* https://msdn.microsoft.com/en-us/library/ms534361%28en-us,VS.85%29.aspx 
* http://jamesknelson.com/grokking-es6-promises-the-four-functions-you-need-to-avoid-callback-hell/ 


