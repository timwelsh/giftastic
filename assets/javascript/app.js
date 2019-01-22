//JS for Giftastic

//Original list of GIFs
// var originalGifList = ['spider', 'snake','bats', 'the shining'];
// var inputText = "";

// for(var i = 0; i < originalGifList.length; i++) {
//     buttonGif = $("<button>").text(originalGifList[i]).addClass("btn btn-dark mr-2 data-creep")
//     $(".gifButtons").append(buttonGif);
// }

$("form").submit(function(event) {
    event.preventDefault();
    var inputText = $("#inputGif").val();
    newButton = $("<button>").text(inputText).addClass("btn btn-dark data-creep");
    $(".gifButtons").append(newButton);
    // console.log(inputText + " here ");
});

$(document).on("click", ".data-creep", function() {
    var creep = $(this).attr("data-creep");
    character = $(this).text();
    var apiKey = "api_key=Ano70sddTNMYHNQVNpgeQdCCClqQr93n"
    var queryURL = "https://api.giphy.com/v1/gifs/search?" + apiKey + "&q=" + creep + "&limit=20&offset=0&rating=G&lang=en"
    console.log(' api ' + queryURL);
    $.ajax({
    url: queryURL,
    method: "GET"
    })
    .then(function(response) {
        var results = response.data;
        console.log(response);
        var div = $(".gifButtons");
        const img = $("<img>");
        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div>");
            var rating = results[i].rating;
            var p = $("<p>").text("Rating: " + rating);
            var gifImage = $("<img>");
            // console.log(results[i].images.fixed_width_still.url);
            gifImage.attr("src", results[i].images.fixed_width_still.url);
            gifDiv.append(p);
            gifDiv.append(gifImage);
            $("#gifs-here").prepend(gifDiv);
            // img.attr('src', response.data[0].images.fixed_width_still.url);
            // div.append(img);
            // console.log(response.data[i].url);
        }
    });
})