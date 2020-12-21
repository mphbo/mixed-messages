
//prompt to capture name from user to use for personalized greeting
let name = prompt('Hello there, what is your name?');

//variables to capture various greetings
const greet1 = document.getElementById("greeting").innerHTML = (`Hey what's up ${name}? Boy do I have a joke for you!`);
const greet2 = document.getElementById("greeting").innerHTML = (`Yo ${name}, what's poppin baby? Here's a joke!`);
const greet3 = document.getElementById("greeting").innerHTML = (`Ello mate! ${name}, I have just the joke for you!`);
const greet4 = document.getElementById("greeting").innerHTML = (`${name}, If you have a sense of humour I've got a joke for you!`);
const greet5 = document.getElementById("greeting").innerHTML = (`Hey ${name}, get ready to laugh!`);
const greet6 = document.getElementById("greeting").innerHTML = (`${name}, you haven't heard anything funnier than what I've got for you!`);

//array to put greetings in a list
const greetings = [greet1, greet2, greet3, greet4, greet5, greet6];

//variable created to capture random greeting with name included
const greeting = greetings[Math.floor(Math.random() * greetings.length)];

//add greeting to page as title
document.getElementById('greeting').innerHTML = greeting;


//various jokes attached to variables
const joke1 = "After an unsuccessful harvest, why did the farmer decide to try a career in music? Because he had a ton of sick beets.";
const joke2 = "My friend was showing me his tool shed and pointed to a ladder. \“That's my stepladder,\” he said. \"I never knew my real ladder.\”";
const joke3 = "What do you call a Frenchman wearing sandals? Philippe Flop."
const joke4 = "Which days are the strongest? Saturday and Sunday. The rest are weekdays."
const joke5 = "I just found out I’m colorblind. The news came out of the purple!"
const joke6 = "What's the difference between a well-dressed man on a unicycle and a poorly-dressed man on a bicycle? Attire."
const joke7 = "I used to run a dating service for chickens. But I was struggling to make hens meet."
const joke8 = "What is a guitar player's favorite Italian food? Strum-boli."
const joke9 = "When I die, I want to be cremated. It’s my last chance to have a smokin’ hot body."
const joke10 = "I have a joke about trickle down economics. But 99% of you will never get it."
const joke11 = "What’s the best thing about living in Switzerland? I don’t know, but the flag is a big plus."
const joke12 = "What happens when frogs park illegally? They get toad."

//array to put all jokes in a list
const jokes = [joke1, joke2, joke3, joke4, joke5, joke6, joke7, joke8, joke9, joke10, joke11, joke12]

//variable created to capture random joke
const joke = jokes[Math.floor(Math.random() * jokes.length)];

//add joke to page as main content
document.getElementById('joke').innerHTML = joke;


//create variables for various endings/goodbyes to user with name included
const ending1 = `I told you so. ${name}, that's funny!`
const ending2 = `${name}, I seen you LOL!`
const ending3 = `Hey, come on. That was pretty funny, wasn't it ${name}!`
const ending4 = `Wow ${name}, tough crowd.`
const ending5 = `Right ${name}?! HILARIOUS!`
const ending6 = `Come on ${name}, that's funny, I don't care what you think!`

//create array to store variables
const endings = [ending1, ending2, ending3, ending4, ending5, ending6];

//create variable to store random ending
const ending = endings[Math.floor(Math.random() * endings.length)]

//add ending to page with name included
document.getElementById('ending').innerHTML = ending;

