
   $(document).ready(function () {
    //Here I will create an array of comedians who have appeared on SNL.
    var comedians = ["Melissa Villase\u00f1or", "Aidy Bryant", "Cecily Strong", "Ego Nwodim", "Heidi Gardner", "Leslie Jones", "Kate Mckinnon","Kenan Thompson","Adam Sandler","Andy Sandberg","Chris Farley","Tina Fey","Amy Poler","Eddie Murphy","Bill Hader"];
    console.log(comedians);
   
 
    for (var i = 0; i < comedians.length; i++) {
        var p = $("<button>").text(comedians[i]);
        p.addClass("comedian");
        p.attr("data-person",comedians[i]);
       
        $("#buttonContainer").append(p);
        console.log(comedians[i]);
    }
    $("button").on("click", function () {
        $("#gifs-appear-here").empty();
        var comedian = $(this).attr("data-person");
        var queryURL = ("https://api.giphy.com/v1/gifs/search?q=" +
            comedian + "&api_key=BM5Y61aE6OZ0S59DtYFfZ06Bw9cgyrwH&limit=10");
        queryURL=encodeURI(queryURL);
 
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            console.log(response);
       
          
            var results = response.data;
 
            for (var i = 0; i < results.length; i++) {
                var gifDiv = $("#gifs-appear-here");
                //var rating = results[i].rating;
                //var p = $("<p>").text("Rating: " + rating);
                var personImage = $("<img>");
                personImage.attr("src", results[i].images.fixed_height.url);
                gifDiv.prepend(personImage);
                $("#gifs-appear-here").prepend(gifDiv);
            }
         });
 
         });
 });
   
 
    /*  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        comedians + "&api_key=BM5Y61aE6OZ0S59DtYFfZ06Bw9cgyrwH&limit=10";
        console.log(queryURL);
  
     
 
 
        // This portion will add new buttons to the array with a new comedian
        function renderButtons() {
            $("#comedianButtons").empty();
            for (i = 0; i < comedians.length; i++) {
                $("#comedianButtons").append("<button class='btn btn-success' data-comedian='" + comedians[i] + "'>" + comedians[i] + "</button>");
            }
  };
 });
 
 
   
 
     /*
    
        renderButtons();
 
        // Adding a button for comedian entered
        $("#addComedian").on("click", function () {
            event.preventDefault();
            var comedian = $("#comedian-input").val().trim();
            comedians.push(comedian);
            renderButtons();
            return;
        });
 
    });
 
 
        /*
   $.ajax({
       url: queryURL,
       method: "GET"
   })
       .then(function (response) {
           var results = response.data;
 
           for (var i = 0; i < results.length; i++) {
               var gifDiv = $("<div>");
 
               var rating = results[i].rating;
 
               var p = $("<p>").text("Rating: " + rating);
 
               var personImage = $("<img>");
               personImage.attr("src", results[i].images.fixed_height.url);
 
               
               gifDiv.prepend(personImage);
 
               $("#gifs-appear-here").prepend(gifDiv);
           }
       });
 
 */
 
 
 
 