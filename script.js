// const section1 = document.querySelector('#section--1');

// document.querySelector('.nav__links').addEventListener('click', function (e) {
//     e.preventDefault();

//     btnScrollTo.addEventListener('click', function (e) {
//         const s1coords = section1.getBoundingClientRect();
//         console.log(s1coords);
      
//         console.log(e.target.getBoundingClientRect());
      
//         console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
      
//         console.log(
//           'height/width viewport',
//           document.documentElement.clientHeight,
//           document.documentElement.clientWidth
//         );
//         section1.scrollIntoView({ behavior: 'smooth' });
//     });
//     // Matching strategy
//     if (e.target.classList.contains('nav__link')) {
//       const id = e.target.getAttribute('href');
//       document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//     }
//   });