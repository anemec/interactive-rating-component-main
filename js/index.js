const submitted = document.getElementById('submitted-card');
const rating = document.getElementById('rating-card');
const submitBtn = document.getElementById('submit');
const target = document.getElementById('target');
let ratingNumber = 0;

submitBtn.addEventListener('click', () => {
  submitted.classList.remove('hidden');
  rating.classList.add('hidden');
  target.innerText = `You selected ${ratingNumber} out of 5`;
});

function setRating(event, rating) {
  //   event.classList.add('');
  ratingNumber = rating;
  console.log(ratingNumber);
}
