// For Changing colors of ratings when hovered or clicked
document.body.addEventListener("click", function(event) {
  if (event.target.classList.contains("rating")) {
    var elements = document.getElementsByClassName("rating");
    for (var j = 0; j < elements.length; j++) {
      elements[j].classList.remove("clicked");
    }
    event.target.classList.add("clicked");
  }
});

// Storing the selected rating and displaying it on the next page after submitting
const container = document.querySelector('.container');
const ratings = document.querySelectorAll('.rating');
const submitBtn = document.querySelector('#submit-button');
const activeState = document.querySelector('.state-container');
const selectedRating = document.querySelector('.state-rating');

let number

const submit = () => {
  if(number >= 0) {
    selectedRating.textContent = `You selected ${number} out of 5`;
    container.style.display = 'none';
    activeState.style.display = 'block';
  } else {
    container.style.display = 'block';
    activeState.style.display = 'none';
  }
}

ratings.forEach(e1 => {
  e1.addEventListener('click', e => {
    number = e.target.textContent
  })
})
  
submitBtn.addEventListener('click', submit)   