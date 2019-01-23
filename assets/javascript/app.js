//JS for Giftastic
$(document).ready(function() {


    //Original list of GIFs
    var originalGifList = ["spider", "bat", "the shining", "centipeded"]


    $("form").submit(function(event) {
        event.preventDefault();
        var inputText = $("#inputGif").val();
        newButton = $("<button>").text(inputText).addClass("btn btn-dark data-creep");
        $(".gifButtons").append(newButton);
    });

    function buildButtons() {
        $(".gifButtons").empty()
        for(var i = 0; i < originalGifList.length; i++) {
            var buttonGif = $("<button>").text(originalGifList[i])
            buttonGif.addClass("btn btn-dark mr-2 data-creep")
            $(".gifButtons").append(buttonGif);
        }
    }
    buildButtons();

    $(document).on("click", ".creep", function() {
        var creep = $(this).attr("data-creep");
        var apiKey = "api_key=Ano70sddTNMYHNQVNpgeQdCCClqQr93n"
        var queryURL = "https://api.giphy.com/v1/gifs/search?" + apiKey + "&q=" + creep + "&limit=10&offset=0&rating=G&lang=en"
        
        $.ajax({
        url: queryURL,
        method: "GET"
        })
        .then(function(response) {
            var result = $(this).attr("data-creep")
            // var newDiv = $(".gifButtons");
            // const img = $("<img>");


            for (var i = 0; i < result.length; i++) {
                console.log(result);
                var stillImage = response.data[i].images.fixed_width_still.url;
                var animateImage = response.data[i].images.fixed_width.url;
                var newImage = $("<img>");
                var gifDiv = $("<div class='gif clearfix' style='float:left'>");
                // var rating = results[i].rating;
                // var p = $("<p>").text("Rating: " + rating);
                // console.log(results[i].images.fixed_width_still.url);

                newImage.attr("src", newImage);
                newImage.attr("data-still", stillImage);
                newImage.attr("data-animate", animateImage);

                // newDiv.append(p);
                gifDiv.append(newImage);
                // newDiv.append(newImage);
                $("#gifs-here").prepend(gifDiv);

                // img.attr('src', response.data[0].images.fixed_width_still.url);
                // div.append(img);
                // console.log(response.data[i].url);
            }
        });
    })
})