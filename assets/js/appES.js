var queryURL = "https://api.coinmarketcap.com/v2/ticker/?start=1&limit=100&sort=rank&structure=array&convert&USD";


// var queryURL = "https://api.coinmarketcap.com/v2/ticker/?limit=10";

 $.ajax({
   url: queryURL,
   method: "GET"
 }) .then(function(response) {
  //  console.log(response.data);

   for(var i =0; i < 100; i++) {

     console.log(response.data[i]);

     var tr = $('<tr>');
    //  var rank = $('<td>').html(i);
    var rank = $('<td>').html(response.data[i].rank);
     var content = $("<td>").html("<span class='bold'></span> " + response.data[i].name);
     var symbol = $('<td>').html(response.data[i].symbol);
     var price = $('<td>').html(response.data[i].quotes.USD.price);
     var priceChange = response.data[i].quotes.USD.percent_change_24h;
     var marketCap = $('<td>').html(response.data[i].quotes.USD.market_cap);

     if (priceChange > 0){
      priceChange = $('<td>').html('<span style="color:green">' + priceChange + "%</span>")
     } else {
       priceChange = $('<td>').html('<span style="color:red">' + priceChange + "%</span>")
     }
    //  var priceHtml = $('<td>').html(price)
    //  priceHtml.append('<td>').html(priceChange)
     tr.append(rank, content, symbol, price, priceChange, marketCap )
     // var description = $("<p>").html("<span class='bold'>DESCRIPTION: </span> " + response.data[i].description);
     // var url = $("<p>");
     // var link = $("<a>").text("click here to read more").attr("href", response.data[i].url).attr("target", "_blank")
     // url.append(link)
     $('tbody').append(tr);
   }

 });