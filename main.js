// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const main = document.querySelector('body')
const errorModal = document.getElementById('modal')

function addLikes(e){
  if (e.target.className = 'like'){
    let heart = e.target.firstElementChild
    mimicServerCall('url')
    .then(function(){
      if (heart.innerText == EMPTY_HEART) {
        heart.innerText = FULL_HEART
        heart.classname = "activated-heart"
      } else {
        heart.innerTEXT = EMPTY_HEART
        heart.className= ""
      }
    })
    .catch(function(errors){
      errorModal.className = ""
      errorModal.querySelector('p').innerTEXT = errors
      setTimeout(function hideModal(modal) {
        modal = errorModal
        modal.className="hidden"
      }, 5000)
    })
  }

};
main.addEventListener('click', addLikes)




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
