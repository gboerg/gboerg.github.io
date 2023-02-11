import './../scss/styles.scss';

const wrapper = document.querySelector('.cards');

wrapper.addEventListener('mousemove', function ($event) {
    console.log($event.clientX);
    console.log($event.clientY);
    
});

