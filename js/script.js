// jquery
$(document).ready(function(){
 $('.slider_1').slick(
  {
      arrows:true,
      dots:true,
    // adaptiveHeight:true,
    // variableWidth: false,
    variableWidth: true,
    centerMode: false,

    slidesToShow: 3,
    slidesToScroll:3,
    speed: 800,
    // autoplay: true,
    autoplaySpeed:3000,

    waitForAnimate:false,

    mobileFirst: true,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false

          // settings: "unslick"
        }
      }
      ,
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          arrows: false
          // settings: "unslick"
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]


  }
 );

});

$(document).ready(function(){
  $('.slider_2').slick(
   {
      arrows:true,
      dots:true,
     // adaptiveHeight:true,
     // variableWidth: false,
     variableWidth: true,
     centerMode: false,
 
     slidesToShow: 3,
     slidesToScroll:3,
     speed: 800,
    //  autoplay: true,
     autoplaySpeed:3000,
 
     waitForAnimate:false,
 
     mobileFirst: true,
   
     responsive: [
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3,
           infinite: true,
           dots: true
         }
       },
       {
         breakpoint: 600,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           centerMode: false,
           arrows: false
 
           // settings: "unslick"
         }
       }
       ,
       {
         breakpoint: 200,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           centerMode: false,
           arrows: false
           // settings: "unslick"
         }
       }
       // You can unslick at a given breakpoint now by adding:
       // settings: "unslick"
       // instead of a settings object
     ]
 
 
   }
  );
 
 
 
 });




// function outputElementHeight() {
//   var element = document.querySelector('.listOfWorks_interior');
//   var height = element.offsetHeight;
//   console.log('Висота елемента listOfWorks_interior: ' + height + 'px');



//   var slider = document.getElementsByClassName('slider_1')[0];


//   if (slider) {
//     // var imgElement = sliderItem.querySelector('img');
//     var tHeight = height+ 'px'
//     console.log('tHeight = : ' + tHeight);

//     console.log('Висота елемента slider до зміни = : ' + slider.style.maxHeight + 'px');

//     slider.style.maxHeight=  tHeight; // Задайте нове значення max тут
//     // imgElement.height =  tHeight;
//     console.log('Висота елемента slider після зміни = : ' + slider.style.maxHeight + 'px');
//   }
// }

// document.addEventListener('DOMContentLoaded', function() {
//   outputElementHeight();
//   window.addEventListener('resize', outputElementHeight);
// });
