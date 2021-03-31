$(function () {
  $('.btn-success').click(function () {
    $(this).animate(
      {
      font-size: 50px,
  }, 2000, function () {
    console.log('Stop !!');
  });
  });
});