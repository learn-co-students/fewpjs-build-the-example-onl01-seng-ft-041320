// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorMsg = document.getElementById("modal");
function setErrorHidden() {
  errorMsg.className = "hidden"
};
setErrorHidden();

function likeComment(target) {
  mimicServerCall()
    .then(function() {
      // debugger
      if (target.innerText == EMPTY_HEART) {
        target.innerText = FULL_HEART
        target.className = "activated-heart"
      } else if (target.innerText == FULL_HEART) {
        target.innerText = EMPTY_HEART
        target.className = "like-glyph"
      };
    })
    .catch(function(error) {
      // debugger
      let errorModal = document.getElementById("modal-message");
      errorModal.innerText = error;
      errorMsg.className = null;
      setTimeout(setErrorHidden, 5000);
    })
}

document.addEventListener("DOMContentLoaded", function() {
  
  document.body.addEventListener("click", function(e) {
    // debugger
    if (e.target.className == "like-glyph") {
      likeComment(e.target);
    } else if (e.target.className == "activated-heart") {
      likeComment(e.target);
    }
  })
})


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
