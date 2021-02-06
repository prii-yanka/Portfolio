$(document).ready(function() {
  $('.slider').slick({
      centerMode: true,
      centerPadding: '100px',
      slidesToShow: 3,
      focusOnSelect: true,
      dots: true,
      arrows: true,
      infinite: true,
      responsive: [
          {
          breakpoint: 768,
          settings: {
              arrows: true,
              centerMode: true,
              variableWidth: false,
              adaptiveHeight: true,
              centerPadding: '40px',
              slidesToShow: 1,
          }
          },
          {
          breakpoint: 480,
          settings: {
              arrows: true,
              centerMode: true,
              ariableWidth: false,
              adaptiveHeight: true,
              centerPadding: '40px',
              slidesToShow: 1
          }
          }
      ]
  });
});
  
 