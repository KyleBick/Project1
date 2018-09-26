var APIkey = "85e3326d774b48709fa1cfca9da1f9f9"
var APIresponse;
var searchTerm = 'bitcoin';
var queryURL = "https://newsapi.org/v2/everything?sources=crypto-coins-news&apiKey=" + APIkey + "&q=";

  
function searchArticles(searchTerm){

  $.ajax({
    url: queryURL + searchTerm,
    method: "GET"
  }) .then(function(response) {

     APIresponse = response;

     writeArticlestoPage ();
    
  })

  .fail(function(res){
    console.log(res)
    $("#article-section").append("No results found!")
  })

  }


function writeArticlestoPage() {

  // console.log(searchTerm+ '\n\n\n\n\n\n');
  console.log(APIresponse.articles[0]);
  for(var i =0; i < 9; i++) {
    
    var t = highlight(APIresponse.articles[i].title);
    
    var title = $("<p>").html("<span class='bold'>TITLE:</span> "  + t );

    var d = highlight(APIresponse.articles[i].description);
    var description = $("<p>").html("<span class='bold'>DESCRIPTION: </span> " + d);

    var url = $("<p>");
    var link = $("<a>").text("click here to read more").attr("href", APIresponse.articles[i].url).attr("target", "_blank")
    url.append(link)
    $('#article-section').append(title, description, url)

  }
  
}

function highlight(text){

  var t = text;
  var tLower = t.toLowerCase();
  var searchLen = searchTerm.length;
  if (tLower.indexOf(searchTerm.toLowerCase()) > 0) {
    var termLoc = tLower.indexOf(searchTerm.toLowerCase());
    var termFound = t.substr(termLoc, searchLen);
    var fin = t.replace(termFound, '<mark>' + termFound + '</mark>');

  } else {
    var fin = t;
  }
  return fin
}

///create event listener from search button in input
// searchArticles($("#input").val())
$("#run-search").on("click", function (event)
{
  event.preventDefault();
  $("#article-section").empty();
  var answer = $("#search-term").val().trim();
  console.log(answer);
  searchTerm = answer;
  $("#search-term").val("");
  searchArticles(searchTerm);
})

$("#clear-button").on("click", function(event){
  event.preventDefault();
  
  $("#article-section").empty();
  
  })
  
searchArticles(searchTerm);
