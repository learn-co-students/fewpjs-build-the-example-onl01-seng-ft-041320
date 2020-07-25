const EMPTY_HEART = "♡"
const FULL_HEART = "♥"
const hearts = document.getElementsByClassName("like-glyph")

function heartLiker(e) {
  let h = e.target
  mimicServerCall("fakeurl")
  .then(function() {
    if (h.innerText == EMPTY_HEART) {
      h.innerText = FULL_HEART
      h.style.color = "red"
      h.previousSibling.textContent = "Unlike "
    } else if (h.innerText == FULL_HEART){
      h.innerText = EMPTY_HEART
      h.style.color = ""
      h.previousSibling.textContent = "Like! "
    }
  })
    .catch (function(error) {
    document.getElementById("modal").className = ""
  })
}

for (heart of hearts) {
  heart.addEventListener("click", heartLiker)
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
