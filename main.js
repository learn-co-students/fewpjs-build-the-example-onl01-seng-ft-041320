// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// window.addEventListener("DOMContentLoaded", event => {hideModal()});

function updateHeart(event) {
  if (event.innerHTML === EMPTY_HEART) {
    event.parentElement.innerHTML = `Like! <span class='activated-heart like-glypth'>${FULL_HEART}</span>`;
  }
  else {
    event.parentElement.innerHTML = `Like! <span class='like-glypth'>${EMPTY_HEART}</span>`;
  }
}

function handleError() {
  document.getElementById('modal').className = '';
  setTimeout(hideModal, 5000)
};

function hideModal() {
  document.getElementById('modal').className = 'hidden';
}

document.addEventListener('click', event => {
  console.log(event.target)
  if (event.target.parentElement.className === 'like') {
    mimicServerCall().then(response => updateHeart(event.target)).catch(error => handleError())
  }
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
