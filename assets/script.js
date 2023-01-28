var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}


function selectTopic() {
  if (randomTopic === 'HTML') {
  console.log("Let's study HTML!");
  } 
  else if (randomTopic === 'CSS') {
  console.log("Let's study CSS!");
  } 
  else if (randomTopic === 'Git') {
  console.log("Let's study Git!");
  } 
  else if (randomTopic === 'JavaScript') {
  console.log("Let's study JavaScript!");
  } 
  else {
  console.log('Please try again!');
  }
}

console.log('Here are the topics we learned through Prework:');
listTopics()
console.log('Which topic should we study first?');
selectTopic()

/*

//ARRAY EXAMPLE
var shapes = ["triangle", "square", "pentagon", "circle"];
            //use open square brackets to indicate array

for(var x = 0; x < shapes.length; x++) {
    // code block below
    console.log(shapes[x]);
   }


function helloWorld() {

  console.log("Hello, world, I am a function!")

}


//console.log - output a message to web console


//CONDITIONAL STATEMENTS & LOOPS//

/*

IF & ELSE IF STATEMENT EXAMPLES
if (condition) {
 // block of code to be executed if condition is truthy (more info on truthy: https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
}

if (first condition) {
   // block of code to be executed if first condition is truthy
} else if (second condition) {
   // block of code to be executed if second condition is truthy
}

*/

/*
FOR LOOP STATEMENT EX.

1. first statement determines the starting point for our loop
    var x = 0;

2. second statement is the condition
    x < shapes.length;
                ^ length is array property to allow loop to execute one time for each item in array

3. final statement is what allows the array to iterate over each item
    x++ (shortcut of writing x+1)

*/