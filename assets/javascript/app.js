//JS for Giftastic
$(document).ready(function() {


    //Original list of GIFs
    var originalGifList = ["spider", "bat", "the shining", "centipeded"]

    //create new button - working!
    $("form").submit(function(event) {
        event.preventDefault();
        var inputText = $("#inputGif").val();
        newButton = $("<button>").text(inputText).addClass("btn btn-dark");
        newButton.attr("data-creep", inputText);
        $(".gifButtons").append(newButton);
    });

    // build buttons to display from the array above - working!
    function buildButtons() {
        $(".gifButtons").empty()
        for(var i = 0; i < originalGifList.length; i++) {
            var buttonGif = $("<button>").text(originalGifList[i])
            buttonGif.addClass("btn btn-dark mr-2")
            $(".gifButtons").append(buttonGif);
        }
    }
    buildButtons();

    $(document).on("click", function() {
        var creep = $(this).attr("data-creep");
        var apiKey = "api_key=Ano70sddTNMYHNQVNpgeQdCCClqQr93n"
        var queryURL = "https://api.giphy.com/v1/gifs/search?" + apiKey + "&q=" + creep + "&limit=10&rating=G"
        
        $.ajax({
        url: queryURL,
        method: "GET"
        })
        .then(function(response) {
            console.log(queryURL);

            for (var i = 0; i < 10; i++) {
                var newDiv = $("<div class='newDiv'>");
                var p = $("<p>").text("Rating: " + response.data[i].rating);
                var newImage = $("<img>");
                p.attr("class", "gif")
                newImage.attr("src", response.data[i].images.downsized_still.url);
				newImage.attr("data-still", response.data[i].images.fixed_width_still.url);
                newImage.attr("data-animate", response.data[i].images.original.url);
				newImage.attr("data-state", "still"); 
				newImage.attr("class", "gif");
                // prepend in new div
                newDiv.prepend(p);
                newDiv.prepend(newImage);
                $(".gifs-here").prepend(newDiv);

            }
        });
    })
})