function getRandomSize(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
var height, width;
$('document').ready(function() {
  $.ajax({
    url: 'https://dog.ceo/api/breeds/image/random/3',
    type: 'get',
    dataType: 'json',
    success: function(data) {
      data.message.forEach(function(value, index) => {
        width = getRandomSize(200, 400);
        height =  getRandomSize(200, 400);
        $('#photos').append('<img src="' + value + '" style="width:' + width + '; height:' + height + '">');
      });
    }
  })
})
