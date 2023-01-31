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

/*const section = document.querySelectorAll('section');
const link = document.querySelectorAll('nav-link');

window.onscroll = function() {
    console.log(link);
    console.log(section);
    
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            link.forEach(lin => {
                lin.classList.remove('active');
                document.querySelector('nav-link[href*=' + id + ']').classList.add('active');

            })

        }
    })

}
*/

let s0 = document.querySelectorAll('#jang');
let s1 = document.querySelectorAll('#projects');
let s2 = document.querySelectorAll('#plannedprojects');
let s3 = document.querySelectorAll('#aboutme');
let footer = document.querySelector('#footer');

window.addEventListener('scroll', () => {
    var windo = window.pageYOffset;
    if(s1.offsettop <= windo && s2.offsettop > windo) {
        console.log("My Projects");
        document.querySelector('.nav-item2').setAttribute("class", "active");
        document.querySelector('.nav-item1', '.nav-item3', '.nav-item4', '.nav-item5').removeAttribute("class", "active");
        
    }
    else if(s2.offsettop <= windo && s3.offsettop > windo){
        console.log("My Planned Projects");
        document.querySelector('.nav-item3').setAttribute("class", "active");
        document.querySelector('.nav-item1', '.nav-item2', '.nav-item4', '.nav-item5').removeAttribute("class", "active");
    }

    else if(s3.offsettop <= windo && s4.offsettop > windo){
        console.log("About Me");
        document.querySelector('.nav-item4').setAttribute("class", "active");
        document.querySelector('.nav-item1', '.nav-item3', '.nav-item2', '.nav-item5').removeAttribute("class", "active");
    }
    else if(s0.offsettop <= windo){
        console.log("Home");
        document.querySelector('.nav-item1').setAttribute("class", "active");
        document.querySelector('.nav-item4', '.nav-item2', '.nav-item3', '.nav-item5').removeAttribute("class", "active");
    }
    else {
        console.log("footer");
        document.querySelector('.nav-ittem5').setAttribute("class", "active");
        document.querySelector('.nav-item4', '.nav-item2', '.nav-item3', '.nav-item1').removeAttribute("class", "active");

        
    }

});


/*const makeNavLinksSmooth = ( ) => {
    const navLinks = document.querySelectorAll(".nav-item1", "nav-item2", "nav-item3", "nav-item4", "nav-item5");

  
    for ( let n in navLinks ) {
      if ( navLinks.hasOwnProperty( n ) ) {
        navLinks[ n ].addEventListener( 'click', e => {
          e.preventDefault( );
          document.querySelector( navLinks[ n ].hash );
        } );
      }
    }
  }
  
  const spyScrolling = ( ) => {
    const sections = document.querySelectorAll( '.scrollsec' );
  
    window.onscroll = ( ) => {
      const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  
      for ( let s in sections )
        if ( sections.hasOwnProperty( s ) && sections[ s ].offsetTop <= scrollPos ) {
          const id = sections[ s ].id;
          document.querySelector( '.active' ).classList.remove( 'active' );
          document.querySelector( `a[href*=${ id }]` ).classList.add( 'active' );
        }
    } 
  }
  
  makeNavLinksSmooth( );
  spyScrolling( );
  */