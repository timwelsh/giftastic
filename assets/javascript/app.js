//JS for Giftastic

//Original list of GIFs

// for(var i = 0; i < originalGifList.length; i++) {
//     buttonGif = $("<button>").text(originalGifList[i]).addClass("btn btn-dark mr-2 data-creep")
//     $(".gifButtons").append(buttonGif);
// }

$("form").submit(function(event) {
    event.preventDefault();
    var inputText = $("#inputGif").val();
    newButton = $("<button>").text(inputText).addClass("btn btn-dark data-creep");
    $(".gifButtons").append(newButton);
});

$("button").on("click", function() {
    var creep = $(this).attr("data-creep");
    console.log(creep + " creeper ");
    var apiKey = "api_key=Ano70sddTNMYHNQVNpgeQdCCClqQr93n"
    var queryURL = "https://api.giphy.com/v1/gifs/search?" + apiKey + "&q=" + creep + "&limit=20&offset=0&rating=G&lang=en"
    $.ajax({
    url: queryURL,
    method: "GET"
    })
    .then(function(response) {
        var results = response.data;

        var newDiv = $(".gifButtons");
        const img = $("<img>");
        for (var i = 0; i < results.length; i++) {
            console.log(results[i].images.fixed_width_still.url);
            var newDiv = $("<div>");
            // var rating = results[i].rating;
            // var p = $("<p>").text("Rating: " + rating);
            var newImage = $("<img>");
            // console.log(results[i].images.fixed_width_still.url);
            newImage.attr("src", results[i].images.fixed_width_still.url);
            // newDiv.append(p);
            newDiv.append(newImage);
            $("#gifs-here").prepend(newDiv);

            // img.attr('src', response.data[0].images.fixed_width_still.url);
            // div.append(img);
            // console.log(response.data[i].url);
        }
    });
})