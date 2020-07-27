// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  likeElements = document.getElementsByClassName("like-glyph");
  for (const element of likeElements) {
    element.addEventListener("click", () => updateLikes(element));
  }
})

function updateLikes(element) {
  if (element.classList.contains("activated-heart")) {
    mimicServerCall().then(() => {
      element.classList.remove("activated-heart");
      element.innerText = EMPTY_HEART;
    }).catch((error) => showErrorMessage(error.message));
  } else {
    mimicServerCall().then(() => {
      element.classList.add("activated-heart");
      element.innerText = FULL_HEART;
    }).catch((error) => showErrorMessage(error.message));
  }
}

function showErrorMessage(message) {
  let modal = document.getElementById("modal");
  let modalMessage = document.getElementById("modal-message");
  modalMessage.innerText = message;
  modal.className = "";
  setTimeout(() => {modal.className = "hidden"}, 5000);
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
