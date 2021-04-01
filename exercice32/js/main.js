$(function () {
  $('.btn-success').click(function () {
    $.ajax('https://restcountries.eu/rest/v2/name/france', {
      success: function (data, status, res) {
        console.log(data[0].name);
      },
    });
  });
});
