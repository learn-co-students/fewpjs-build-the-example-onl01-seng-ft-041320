// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorMessage = document.querySelector("#modal");
let hearts = document.querySelectorAll(".like-glyph");

for (heart of hearts) {
  heart.addEventListener("click", toggleHeart);
}

function toggleHeart(e) {
  let heart = e.target;

  mimicServerCall()
  .then(function(serverMessage){
    if (heart.innerText == EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.className = "activated-heart";
    } else {
      heart.innerText = EMPTY_HEART;
      heart.className = "";
    }
  })
  .catch(function(error) {
    errorMessage.setAttribute("class", "hidden");
  });
}
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
