// Write Javascript code!
function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

$('document').ready(function() {
  /*for (var i = 0; i < 25; i++) {
    var width = getRandomSize(200, 400);
    var height =  getRandomSize(200, 400);
    $.ajax({
      url: 'https://dog.ceo/api/breeds/image/random',
      type: 'get',
      dataType: 'json',
      success: function(data) {
        $('#photos').append('<img src="' + data.message + '" style="width:' + width + '; height:' + height + '">');
      console.log(data.message);
      },
      error: function() {
        console.log(':(')
      }
    });
  }*/
  $.ajax({
    url: 'https://dog.ceo/api/breeds/image/random/3',
    type: 'get',
    dataType: 'json',
    success: function(data) {
      data.message.forEach(function(value, index) => {
        $('#photos').append('<img src="' + value + '" style="width:' + width + '; height:' + height + '">');
      });
    }
  })
})
