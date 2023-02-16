import sheet from './../scss/styles.css' assert { type: 'css' };
document.adoptedStyleSheets = [sheet];

const wrapper = document.querySelector('.cards');
const cards = document.querySelectorAll('.card');

wrapper.addEventListener('mousemove', function ($event) {
    cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = $event.clientX - rect.left
        const y = $event.clientY - rect.top



        card.style.setProperty('--xPos', `${x} px`);
        card.style.setProperty('--yPos', `${y} px`);
    });
    
});

