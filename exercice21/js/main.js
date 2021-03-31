$(function () {
  $('.btn-success').click(function () {
    $('#square').animate(
      {
        width: '+=300px',
      },
      2000,
      function () {
        console.log('heu..on arrête maintenant !');
      }
    );
  });
});
