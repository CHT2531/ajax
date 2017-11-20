# Instructions for running CHT2531 JavaScript Exercises

1. Download or clone the repository.
2. Unzip this.
3. Inside this folder there are a number of files. Here are the ones we are interested in:

* *index.html*. This is the HTML file that is used in practical exercises. This HTML file uses a JavaScript file, exercises.js
* *ajax-exercises.js*. Open this in a text editor of your choice. This is where you will write your JavaScript. It already contains some code to get you started. It also contains the exercise questions (in comments, leave these questions commented out).
* *notes.md*. View this via GitHub. These are some notes that will help you provide solutions to the exercises.

To complete the exercises this week you will need to run *index.html* from a web server. 

There are a number of ways to do this.
## Using Web Server for Chrome (easy to do)
You can add extension to the chrome browser that will run a web server for you - https://chrome.google.com/webstore/detail/web-server-for-chrome/ofhbbkphhbklhfoeikjpcbhemlocgigb 

## Using Nodejs
* Open the Nodejs command prompt. 
* Change directory to the folder containing the *index.html*.
* Enter:
```
npm install -g http-server
```
* Once it's been installed enter:
 ```
 http-server
 ```
* In a web browser open *http://localhost:8080/index.html*. 