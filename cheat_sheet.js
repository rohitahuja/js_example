// create a variable called "x"
var x = 50;

// create a string variable
var hello = "Hello";

// concatenate to a string variable -- hello is now "Hello World!"
hello = hello + " World!";

// create a list 
var sample_list = [1, 2, 3];

// append to a list -- list is now [1, 2, 3, 4]
sample_list.push(4);

// create a dictionary
var student = {
    name: "student",
    year: "senior"
}

// printing values to console -- prints "Hello World!"
console.log(hello);

// conditions


// if/else statements
if(x > y){
    
}

else if (x < y){
    
    
}

else{
    
    
}

// basic loops

// while loop that runs while x > y
while(x > y){
    
}

// for loop
for(var i = 0; i < 50; i++){
    
    
}

// jQuery

// CSS selectors

// select all elements on page with tag "div"
$('div')

// select all elements on page with class "students"
$('.students')

// select element on page with ID "teacher"
$('#teacher')

// event handling

// set an event handler to listen to a click on an element
$('#teacher').click(function(){
    
    
})

// HTTP requests

// make a get request to URL with parameters

var url = "http://google.com"
var parameters = {
    query: "cs50"
}

$.get(url, parameters)
.done(function(data, textStatus, jqXHR){
    
})
.fail(function(jqXHR, textStatus, errorThrow){

})

// make a post request
$.post(url, parameters)
.done(function(data, textStatus, jqXHR){
    
})
.fail(function(jqXHR, textStatus, errorThrow){

})