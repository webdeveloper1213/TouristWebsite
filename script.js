Array.from(document.querySelectorAll('.navigation-button')).
forEach(item => {
    item.onclick = () => {
        // Moving up 2 times towards card from back-side and frontside in the node using .parentElement
        item.parentElement.parentElement.classList.toggle('change');
    };
});

/**** sidebar show/hide */

const menuIcon = document.querySelector('.hamburger-menu');
const container = document.querySelector('.container')
menuIcon.addEventListener('click' , () => {
container.classList.toggle('change');
});

