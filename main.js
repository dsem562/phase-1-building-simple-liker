// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const init = () => {

  const like = document.querySelectorAll("span.like-glyph");
  const modal = document.getElementById("modal");
  const errorMsg = document.querySelector("#modal h2");
  
  like.forEach(element => element.addEventListener("click", ifLiked));
  
  function ifLiked(e) { 
    
    if (e.target.innerHTML === EMPTY_HEART) {
      
      mimicServerCall()
      .then(function () {  
        e.target.innerHTML = FULL_HEART;
        e.target.classList.add("activated-heart");
      })
      .catch(function (error) {      
        modal.classList.remove("hidden");
        errorMsg.innerHTML = error;
        setTimeout(() => { modal.classList.add("hidden") }, 3000)
      });
    
    } else {     
      
      e.target.innerHTML = EMPTY_HEART
      e.target.classList.remove("activated-heart");
    
    }
  };
};

document.addEventListener('DOMContentLoaded', init);


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
