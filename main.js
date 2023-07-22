const submit = document.getElementById('button-submit');
const ratingCard = document.querySelector('.rating-card')
const thankYou = document.querySelector('.thank-you');
const ratingButtons = document.querySelectorAll('.btn');
let rating = 0;
const ratingSpan = document.querySelector('span');

ratingButtons.forEach((rate) => {
    rate.addEventListener('click', () => {
        rating = rate.innerHTML;
    });
});

const ratingHandler = (ratingValue) => {
    ratingSpan.innerHTML = ratingValue;
};



const thankYouHandler = () => {
    ratingCard.classList.add('invisible');
    thankYou.classList.remove('invisible');
    ratingHandler(rating);
};

submit.addEventListener('click', thankYouHandler);

