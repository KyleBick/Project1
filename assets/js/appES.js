function cryptoTable(currency) {
  if (!currency) {
    currency = "USD"
  }
  $("tbody").empty();

  var queryURL = "https://api.coinmarketcap.com/v2/ticker/?start=1&limit=100&sort=rank&structure=array&convert=" + currency;

 $.ajax({
   url: queryURL,
   method: "GET"
 }) .then(function(response) {
   var tableRowData = [];
  //  console.log(response.data);
    // rewrite table header to reflect currency selcted
    $(".currency-header").text(currency)
   for(var i =0; i < 100; i++) {

     console.log(response.data[i]);

     var tr = $('<tr>');
    //  var rank = $('<td>').html(i);
    var rank = $('<td>').html(response.data[i].rank);
     var content = $("<td>").html("<span class='bold'></span> " + response.data[i].name);
     var symbol = $('<td>').html(response.data[i].symbol);
     //////--FOR Quotes-currency-price -///////////
     var price = $('<td>').html(response.data[i].quotes[currency].price);
     var volume = $('<td>').html(response.data[i].quotes[currency].volume_24h);
     var priceChange = response.data[i].quotes[currency].percent_change_24h;
     var marketCap = $('<td>').html(response.data[i].quotes[currency].market_cap);



     if (priceChange > 0){
      priceChange = $('<td>').html('<span style="color:green">' + priceChange + "%</span>")
     } else {
       priceChange = $('<td>').html('<span style="color:red">' + priceChange + "%</span>")
     }
    
     tr.append(rank, content, symbol, price, volume, priceChange, marketCap )
     
    tableRowData.push(tr);
   }
   ////////Pagination ///////
   $(".pager").pagination({
     dataSource: tableRowData,
     pageSize: 10,
     pageRange: 1,
     ulClassName: "pagination pagination-lg justify-content-center",
     activeClassName: "active",
     callback: function(data, pagination) {
       $("tbody").html(data);
     }
   });
 });
}
///////Select Currency///////
cryptoTable();

// add event for price toggle
$(document).on("click",".price-toggle", function(e) {
  e.preventDefault();
  console.log(this);

  var currencyPicked = $(this).text().toUpperCase();

  cryptoTable(currencyPicked);
})




$(document).ready(function() {
  
 });