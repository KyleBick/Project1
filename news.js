var APIkey = "85e3326d774b48709fa1cfca9da1f9f9"
var queryURL = "https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=" + APIkey;



$.ajax({
  url: queryURL,
  method: "GET"
}).then(function(response) {
  console.log(response);
})

.then(function(response) {

  // Log the queryURL
  console.log(queryURL);

  // Log the resulting object
  console.log(response);

  // Transfer content to HTML
  $(".content").html("article:" + response.name);
  $(".description").text("description: " + response.wind.speed);
  $(".source").text("source: " + response.main.humidity);

  // Log the data in the console as well
  console.log("article: " + response.wind.speed);
  console.log("description: " + response.main.humidity);
  console.log("source: " + response.main.temp);
});