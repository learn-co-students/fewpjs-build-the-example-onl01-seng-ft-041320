// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const like_glyphs = document.querySelectorAll('.like-glyph')
const modal = document.getElementById('modal')
const modalMessage = document.getElementById('modal-message')
let currentLike

const updateLike = like => {
  if (like.innerHTML === EMPTY_HEART) {
    like.innerHTML = FULL_HEART
    like.className = 'activated-heart'
  } else {
    like.innerHTML = EMPTY_HEART
    like.className = ''
  }
}

like_glyphs.forEach(like => {
  like.addEventListener('click', (e) => {
    currentLike = e.target
    mimicServerCall()
      .then((resp) => {
        updateLike(currentLike)
      })
      .catch((err) => {
        modalMessage.innerHTML = err
        modal.className = ''
        setTimeout(() => {
          modal.className = 'hidden'
        }, 5000)
      })
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