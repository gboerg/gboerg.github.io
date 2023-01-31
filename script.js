const section = document.querySelectorAll(".section");
const navitem = document.querySelectorAll(".nav-item1", "nav-item2", "nav-item3", "nav-item4", "nav-item5");





const observer = new IntersectionObserver(entries=> {
    entries.forEach(entry => {
        entry.target.classList.toggle("active", entry.isIntersecting);
    })
    //console.log(entries);
},
    {
        threshold: 1
    }
)

const navitemobserver = new IntersectionObserver(entries1=>{
    entries1.forEach(entry1 => {
        entry1.target.classList.toggle("active", entry1.isIntersecting);
    })
    console.log(entries1);

},{})


section.forEach(section => {
    observer.observe(section);
})

/*navitem.forEach(navitem => {
    observer.observe(navitem);
})

*/


