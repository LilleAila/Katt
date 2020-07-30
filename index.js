$('document').ready(function() {
  for (var i = 0; i < 2; i++) {
    $.ajax({
      url: 'https://dog.ceo/api/breeds/image/random',
      type: 'get',
      dataType: 'json',
      success: function(data) {
        $('#photos').append('<img src="' + data.message + '">');
      console.log(data.message);
      },
      error: function() {
        console.log(':(')
      }
    });
  }
})
