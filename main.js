// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let likeHearts = document.querySelectorAll('.like')
let heartGlyphs = document.querySelectorAll(".like-glyph")


function likePost(e) {
  e.preventDefault()
//  debugger
  let heartGlyph = e.target
  mimicServerCall("randomUrl")
  .then(function() {
    let heartGlyph = e.target
    if (heartGlyph.innerText == EMPTY_HEART) {
      // debugger
    heartGlyph.innerText = FULL_HEART
      heartGlyph.style.color = 'red'
      // debugger
      heartGlyph.previousElementSibling.innerText = "Unlike!"
    } else if (heartGlyph.innerText == FULL_HEART) { 
      heartGlyph.innerText = EMPTY_HEART
      heartGlyph.style.color = ''
      heartGlyph.previousElementSibling.innerText = "Like!"
    }
  })
  .catch (function(error) {
    document.getElementById("modal").className = ""
  })
}

document.addEventListener('click', likePost) 
//<li class="like>"Like!<span> class="like-glyph"
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
