const btn = document.querySelector('.submit-btn');
const numbers = document.querySelectorAll('.rating__number');
const ratingState = document.querySelector('.rating-state');
const thx = document.querySelector('.thx-state')
const span = document.querySelector('.your-select__span')
let rate;

const selectRate = (e) => {
    rate = e.target.dataset.key;
    numbers.forEach(number => {
        number.style.backgroundColor = ""
    })
    e.target.style.backgroundColor = 'hsl(217, 12%, 63%)'
   
}

numbers.forEach(item => {
    item.addEventListener('click', selectRate)
})

const sendRate = () => {
   console.log( rate)
    ratingState.classList.add("rating-state--hide");
    thx.classList.remove('thx-state--hide')
    span.textContent = rate;
}

btn.addEventListener('click', sendRate);