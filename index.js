$('document').ready(function() {
  for (var i = 0; i < 3; i++) {
    $.ajax({
      url: 'https://api.thecatapi.com/v1/images/search',
      type: 'get',
      dataType: 'json',
      success: function(data) {
        $('#photos').append('<img src="' + data.message + '">');
        console.log(data);
      },
      error: function() {
        console.log(':(')
      }
    });
  }
})
