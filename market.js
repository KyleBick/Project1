
var queryURL = "https://api.coinmarketcap.com/v2/ticker/?start=101&limit=10&sort=id&structure=array&convert&USD";
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }) .then(function(response) {
    console.log(response.data);

    for(var i =0; i < 20; i++) {
      
      console.log(response.data[i]);
      var content = $("<p>").html("<span class='bold'>TITLE:</span> " + response.data[i].name);
      var price = response.data[i].quotes.USD.percent_change_24h;
      if (price > 0){
        price = $('<span style="color:green">').html(price + "%")
      } else {
        price = $('<span style="color:red">').html(price + "%")
      }
      var priceHtml = $('<p>').html('Price Change (24h): ').append(price)
      // var description = $("<p>").html("<span class='bold'>DESCRIPTION: </span> " + response.data[i].description);
      // var url = $("<p>");
      // var link = $("<a>").text("click here to read more").attr("href", response.data[i].url).attr("target", "_blank")
      // url.append(link)
      $('body').append(content, priceHtml)
    }

  });




