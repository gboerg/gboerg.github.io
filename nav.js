/*let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('body header nav .container ul li a i span');

window.onscroll = () => {

    section.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
            
            if (top >= offset && top < offset + height) {
               navlinks.forEach(links => {
                links.classList.add('active');
                document.querySelector('nav .container ul li a i span[href*=' + id + ']').classList.add
                ('active');

            }); 
            };

            

    });
};

*/

const section = document.querySelectorAll('section');
const link = document.querySelectorAll('nav-mitem');

section.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    if(top >= offset && top < offset + height){
        link.forEach(link => {
            link.classList.remove('active');
        })

    }
})

