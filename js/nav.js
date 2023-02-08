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

  (function() {
    'use strict';
  
    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = 0;
  
    Array.prototype.forEach.call(section, function(e) {
      sections[e.id] = e.offsetTop;
    });
  
    window.onscroll = function() {
      var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
      for (i in sections) {
        if (sections[i] <= scrollPosition) {
          document.querySelector('.active').setAttribute('class', ' ');
          document.querySelector('a[href*=' + i + ']').setAttribute('class', 'active');
        }

      }
    };
  })();