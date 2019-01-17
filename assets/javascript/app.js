//JS for Giftastic

//Original list of GIFs
var originalGifList = ['spider', 'snake','bats', 'the shining'];

for(var i = 0; i < originalGifList.length; i++) {
    buttonGif = $("<button>").text(originalGifList[i]).addClass("btn btn-dark mr-2 char")
    $(".gifButtons").append(buttonGif);
}

$("form").submit(function(event) {
    event.preventDefault();
    var inputText = $("#inputGif").val();
    newButton = $("<button>").text(inputText).addClass("btn btn-dark char");
    $("#gif-list").append(newButton);
    console.log(inputText + " here ");
});

$(document).on("click", ".char", function() {
    character = $(this).text();
    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=Ano70sddTNMYHNQVNpgeQdCCClqQr93n";
    console.log(character + " char ");

    $.ajax({
    url: queryURL,
    method: "GET"
    })
    .then(function(response) {
        for (var i = 0; i < 25; i++) {
            console.log(response.data[i].url);
            // HTMLContent = '<div><img src="' + data.image + ' title="' + data.subTitle + ' alt="Photo"></div>';
            // I do not want to append the DOM here
            // return HTMLContent doesn't work
        }
    
    });
})