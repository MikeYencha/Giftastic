$(document).ready(function() {

  // var queryURL = "https://api.giphy.com/v1/gifs/random?q=polar_bears&&rating=pg&api_key=dc6zaTOxFJmzC";
  // var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    // animal + "&api_key=dc6zaTOxFJmzC&limit=10";

  var base = '//api.giphy.com/v1/gifs/';
  var endpoint = 'search?q=';
  var bears = ['polar_bears','panda_bears','black_bears','brown_bears','grizzley_bears'];
  var limit = '&limit=10';
  var rating = '&rating=pg';
  var key = '&api_key=dc6zaTOxFJmzC';
  var bearImg = $('<img>');

  // $("button").on("click", function()
  // // my ajax call to giphy
  // $.ajax({
  //   url: queryURL,
  //   method: 'GET'
  // }).done(function(response) {
  //   console.log(response);
  // });

  // create static buttons
  function createButtons() {
    // iterate through list of bears
    for(var i=0;i<bears.length;i++) {
      // create a variable to hold button
      var btn = $('<button>');
      // add classes to bear btn
      btn.addClass('bear btn btn-success mr-2');
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
      var bearSearch = this.value;
      // var x = this.value;
      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        bearSearch + "&api_key=dc6zaTOxFJmzC&limit=10";
        // my ajax call to giphy
        $.ajax({
          url: queryURL,
          method: 'GET'
        }).done(function(response) {
          // console.log(response);
          var results = response.data;
          console.log(results);
          for(var i=0;i<results.length;i++) {
            console.log(response.data[i]);
          }
        });
      });

      // $('#animal-gifs').append('<br /><div class="images">');
  // });

});
