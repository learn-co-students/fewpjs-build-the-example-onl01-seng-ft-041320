// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const main = document.querySelector('body')
const errorModal = document.getElementById('modal')

function addLikes(e){
  //since event listener is on main, checking to make sure they clicked the like li
  if (e.target.className = "like" ){
    // the heart icon is in a span, which can be accessed this way
    let heart = e.target.firstElementChild
    // fake fetch()
    mimicServerCall('url')
    // after fake fetch fake sends data to fake server
    .then(function(){
      // if the heart is empty
      if (heart.innerText == EMPTY_HEART){
        // make it full
        heart.innerText = FULL_HEART
        // this is to make it red, does similar to comment below
        heart.className = "activated-heart"
        // heart.style.color = 'red'
      } else {
        // otherwise the heart must be full already, make it empty
        heart.innerText = EMPTY_HEART
        // get rid of the activated-heart class name to remove styling
        heart.className = ""
        // heart.style.color = e.target.style.color
      }
    })
    // fake catch
    .catch(function(errors){
      // make errorModal visible by removing hidden class name
      errorModal.className = ""
      // make p tag inside errorModal display fake errors
      errorModal.querySelector('p').innerText = errors
      // 5 seconds later, hide error modal again
      setTimeout(function hideModal(modal) {
        modal = errorModal
        modal.className = "hidden"
      }, 5000)
    })
  }

};

// One event listener to rule them all?
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
