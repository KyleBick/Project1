var APIkey = "85e3326d774b48709fa1cfca9da1f9f9"
var APIresponse;


function startArticles () {

  var queryURL = "https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=" + APIkey;
  
  $.ajax({
    url: queryURL,
    method: "GET"
  }) .then(function(response) {

     APIresponse = response;

     writeArticlestoPage ();
    
    // for(var i =0; i < 9; i++) {
      
    //   console.log(response.articles[i]);
    //   var content = $("<p>").html("<span class='bold'>TITLE:</span> " + response.articles[i].title);
    //   var description = $("<p>").html("<span class='bold'>DESCRIPTION: </span> " + response.articles[i].description);
    //   var url = $("<p>");
    //   var link = $("<a>").text("click here to read more").attr("href", response.articles[i].url).attr("target", "_blank")
    //   url.append(link)
    //   $('#article-section').append(content, description, url)
    // }
    
    
  });
}

startArticles()
  
function searchArticles(searchTerm){
  for(var i =0; i < 9; i++) {
    console.log(APIresponse.articles[i].title)

    var title = APIresponse.articles[i].title;

    var ArticleHasBeenSearched = title.search(searchTerm);
    console.log(ArticleHasBeenSearched);


  }
    // string.search(searchvalue)

 
}

///create event listener from search button in input
// searchArticles($("#input").val())
$("#run-search").on("click", function (){
  var answer = $("#search-term").val()
  console.log(answer);

  searchArticles(answer);
})

function writeArticlestoPage (searchTerm) {
  for(var i =0; i < 9; i++) {
      
    console.log(APIresponse.articles[i]);
    var content = $("<p>").html("<span class='bold'>TITLE:</span> " + APIresponse.articles[i].title);
    var description = $("<p>").html("<span class='bold'>DESCRIPTION: </span> " + APIresponse.articles[i].description);
    var url = $("<p>");
    var link = $("<a>").text("click here to read more").attr("href", APIresponse.articles[i].url).attr("target", "_blank")
    url.append(link)
    $('#article-section').append(content, description, url)
  }
  
}





