// jquery
$(document).ready(function(){
 $('.slider_1').slick(
  {arrows:true,
    dots:true,
    adaptiveHeight:true,

    variableWidth: false,

    centerMode: true,

    slidesToShow: 2,
    slidesToScroll:2,
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
          slidesToScroll: 1
        }
      }
    ]


  }
 );



});



// function outputElementHeight() {
//   var element = document.querySelector('.listOfWorks_interior');
//   var height = element.offsetHeight;
//   console.log('Висота елемента listOfWorks_interior: ' + height + 'px');



//   var sliderItem = document.querySelector('.slider_item');


//   if (sliderItem) {
//     var imgElement = sliderItem.querySelector('img');
//     var tHeight = height+ 'px'
//     console.log('Висота елемента imgElement до зміни = : ' + imgElement.height + 'px');
//     console.log('tHeight = : ' + tHeight);

//     sliderItem.style.maxHeight=  tHeight; // Задайте нове значення max тут
//     imgElement.height =  tHeight;
//     console.log('Висота елемента imgElement після зміни = : ' + imgElement.height + 'px');
//   }


 
  
// }

// document.addEventListener('DOMContentLoaded', function() {
//   outputElementHeight();
//   window.addEventListener('resize', outputElementHeight);
// });
