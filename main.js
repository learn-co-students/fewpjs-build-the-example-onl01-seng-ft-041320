// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

let hearts = document.querySelectorAll(".like")


function like(e){
  let heart = e.target
  mimicServerCall("url")
  .then(function(serverMessage){
    if (heart.innerText === EMPTY_HEART){
      heart.innerText = FULL_HEART
    } else {
      heart.innerText = EMPTY_HEART
    }
  })
  .catch(function(error) {
    alert("Something is not right");
    document.getElementById("modal").className = "";
  });
}

for (let heart of hearts){
  heart.addEventListener("click", like);
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
