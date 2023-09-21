$(document).ready(() => {
  const width = $(window).width();

  let marqueeSpeed;
  if (width < 640) {
    marqueeSpeed = 8000
  } else if (width < 768) {
    marqueeSpeed = 10000
  } else if (width < 1024) {
    marqueeSpeed = 12000
  } else {
    marqueeSpeed = 15000
  }

  const headerWidth = $(".header").width();
  console.log(headerWidth);
  $(".marquee").width(headerWidth);

  const today = new Date();
  today.setFullYear(1997);

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  const message = `hello web surfer! today is ${today.toLocaleDateString("en-us", options).toLowerCase()}`
  $('.marquee').html(message)
  $('.marquee').marquee({
    duration: marqueeSpeed,
  });
});