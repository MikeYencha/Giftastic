$(document).ready(function() { // start of jquery

// create variable holding button information
var bears = ['polar_bears','panda_bears','black_bears','brown_bears','grizzley_bears'];
  // create static buttons
  function createButtons() {
    // iterate through list of bears
    for(var i=0;i<bears.length;i++) {
      // create a variable to hold button
      var btn = $('<button>');
      // add classes to bear btn
      btn.addClass('bear btn btn-outline-primary mr-2');
      // add attribute to btn
      btn.val(bears[i]);
      // add btn text
      btn.text(bears[i]);
      // add btns to div container
      $('#animal-btns').append(btn)
    }
  }
  createButtons();

  $('#animal-btns .bear').on("click",function() {
      $('#animal-gifs').empty();
      // capture search by button value
      var bearSearch = this.value;
      console.log(this.value);
      // create query search based on search
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        bearSearch + "&api_key=dc6zaTOxFJmzC&limit=10";
        // my ajax call to giphy
        $.ajax({
          url: queryURL,
          method: 'GET'
        }).done(function(response) {
          // access response data from giphy
          var results = response.data;
          console.log(results);
          // iterate through response data
          for(var i=0;i<results.length;i++) {
            // create div to hold bear gif and rating
            var bearDiv = $('<div class="left ml-2 mb-2">')
            // create img tag for animated gif
            var bearImg = $('<img>');
            // create p tag for rating
            var p = $('<p>').text(results[i].rating);
            console.log(results[i].rating);
            // create src attribute for giphy results
            bearImg.attr('src', results[i].images.fixed_height_small_still.url).attr('bear-still',results[i].images.fixed_height_small_still.url).attr('bear-animate', results[i].images.fixed_height_small.url).attr('data-state','still').addClass('gif').addClass('pointer');
            // append bear div with rating results
            bearDiv.append(p);
            // append bear div with bear gif
            bearDiv.append(bearImg);
            console.log(results[i].images.fixed_height_small.url);
            console.log(bearDiv);
            // append container in index file with bear div and all contents
            $('#animal-gifs').append(bearDiv);
          }
          // add click function for pause and animate
          $('.gif').on('click', function() {
            // create state of animation
            var state = $(this).attr('data-state');
            console.log(state);
            // create pause/animate function
            if(state === "still") {
              $(this).attr('src',$(this).attr('bear-animate'));
              $(this).attr('data-state', 'animate');
            } else {
              $(this).attr('src',$(this).attr('bear-still'));
              $(this).attr('data-state', 'still');
            }
          })
        });
      });

}); // end of jquey
