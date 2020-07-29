// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let error = document.getElementById('modal');
// error.className = 'hidden';

let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorStates = {
  "red": "",
  "": "red"
};

let hearts = document.querySelectorAll('span.like-glyph');

for (let heart of hearts) {
  heart.addEventListener('click', likeHeart)
}

function likeHeart(e){
  console.log(e)
  let heart = e.target
  mimicServerCall("url")
  .then(function(serverMessage){
    if (heart.className == 'activated-heart') {
      heart.innerText = EMPTY_HEART
      heart.className = ''
    } else{
      heart.innerText = FULL_HEART
      heart.className = 'activated-heart'
    }
    heart.style.color = colorStates[heart.style.color]
  })
  .catch(function(errorMsg) {
    console.log(error)
    // alert(error);
    error.className = "";
    error.innerText = errorMsg
    setTimeout(hideModal, 5000)
  });
  
  function hideModal(){
    error.className = 'hidden';
  }
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
