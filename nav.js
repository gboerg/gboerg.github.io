const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav .container ul li');

window.addEventListener('scroll', ()=>{
    let current = 's1';
    console.log(pageYOffset)
    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHight = section.clientHeight;
        if(pageYOffset < sectionTop){
            current = section.getAttribute('id');
        }
    })
    navLi.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
    })
}) 
