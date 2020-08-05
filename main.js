// Defining text characters for the empty and full hearts for you to use later.
//variables
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
let  likesUrl = "file:///Users/macbook/Flatiron/code/fewpjs-build-the-example-onl01-seng-ft-041320/index.html";
const emptyHearts = document.querySelector(".like-glyph");
// Your JavaScript code goes here!

//function
function getLikes(){
  
  mimicServerCall(likesUrl)
  .then(resp => console.log(resp)) 
  // .then(results => {
  //   console.log(results)
  // })
};
//eventListener

emptyHearts.addEventListener("click", getLikes() );


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

//Add .hidden class to the error modal in the HTML so it does not appear when page loads[x]
//When a user clicks on an empty heart ("Recognizing events")=>
//Invoke mimicServerCall to simulate making a server request[]
// mimicServerCall randomly fails to simulate faulty network conditions[]
// When the server returns a failure status =>
// Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.[]
// Display the error modal by removing the .hidden class [] removeAttribute
// Display the server error message in the modal [] innerText = error.message
// Use setTimeout to hide the modal after 5 seconds (add the .hidden class) []
// When the server returns a success status =>
// Change the heart to a full heart =>
// Add the .activated-heart class to make the heart appear red =>
//styling setAttribute class to activated-heart[]
// When a user clicks on a full heart=>
// Change the heart back to an empty heart =>
// Remove the .activated-heart class[] removeattribute on click again
// Keep all your styling rules entirely in style.css. Do not manipulate any .style properties.
// Only manipulate the DOM once the server requests respond. 
//Do not make the heart full until you're inside a successful .then block.
//do this changing of the heart on the last part of fetch []


