$(function () {
  var newUrl = $('input').val();
  console.log(newUrl);

  $('.btn-success').click(function () {
    var newUrl = $('input').val();
    // console.log(newUrl);

    $.ajax({
      url: 'https://restcountries.eu/rest/v2/name/' + newUrl,
      success: function (data, status, res) {
        $('#country').html(data[0].name);
        $('#capital').html(data[0].capital);
      },
    });
  });
});
