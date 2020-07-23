// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// 1. Select
// 2. Listen
// heartIcon.addEventListener('click', clickerFunc)

let heartIcon = document.querySelectorAll('.like-glyph').forEach(addListener)

function addListener(item){
  item.addEventListener('click', clickerFunc)
}

// or longer version
// let heartIcon = document.querySelectorAll('.like-glyph').forEach(function(addListener) {
//   addListener.addEventListener('click', clickerFunc)
// })

// 3. Do

function clickerFunc(e) {
  let heart = e.target
  mimicServerCall("url")
  .then(function(serverError) {
    heart.innerHTML = `${FULL_HEART}`
    heart.style.color = 'red'
  })
  .catch(function (error) {
    document.getElementById('modal').className = ""
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
