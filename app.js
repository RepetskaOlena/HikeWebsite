const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


let next = document.querySelector('.next');
let prev = document.querySelector('.prev');
let slide = document.querySelector('.slide');
let isAnimating = false;

function moveSlide(direction) {
    if (isAnimating) return;
    isAnimating = true;

    let items = document.querySelectorAll('.item');

    if (direction === 'next') {
        slide.appendChild(items[0]); // Move first item to the end
    } else if (direction === 'prev') {
        slide.prepend(items[items.length - 1]); // Move last item to the front
    }

    setTimeout(() => {
        isAnimating = false;
    }, 500); // Match this with your CSS transition duration
}

next.addEventListener('click', function () {
    moveSlide('next');
});

prev.addEventListener('click', function () {
    moveSlide('prev');
});
