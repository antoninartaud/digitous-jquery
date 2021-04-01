$(function () {
  $('.btn-success').click(function () {
    $.ajax(' https://restcountries.eu/rest/v2/name/france', {
      success: function (data, status, response) {
        let country = data[0].name;
        let capital = data[0].capital;
        $('#country').text(country);
        $('#capital').text(capital);
      },
    });
  });
});
