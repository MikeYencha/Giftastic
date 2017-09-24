$(document).ready(function() {

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=bears&limit=1&rating=pg&api_key=dc6zaTOxFJmzC";
  var base = '//api.giphy.com/v1/gifs/';
  var endpoint = 'search?q=';
  var bears = ['polar_bears','panda_bears','black_bears','brown_bears','grizzley_bears'];
  var limit = '&limit=10';
  var rating = '&rating=pg';
  var key = '&api_key=dc6zaTOxFJmzC';

  // $("button").on("click", function()
  // my ajax call to giphy
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).done(function(response) {
    console.log(response);
  });


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
  $('this.btn').val();



  // const PUBLIC_KEY = 'dc6zaTOxFJmzC';
  // const BASE_URL = '//api.giphy.com/v1/gifs/search?q=polar_bears&limit=1&rating=pg&api_key=dc6zaTOxFJmzC';
  // const ENDPOINT = 'search';
  // const LIMIT = 1;
  // const RATING = 'pg';
  //
  // let $queryInput = $('.query');
  // let $resultWrapper = $('.result');
  // let $loader = $('.loader');
  // let $inputWrapper = $('.input-wrapper');
  // let $clear = $('.clear');
  // let $button = $('.random');
  // let currentTimeout;
  //
  // let query = {
  //   text: null,
  //   offset: 0,
  //   request() {
  //     return `${BASE_URL}${ENDPOINT}?q=${this.text}&limit=${LIMIT}&rating=${RATING}&offset=${this.offset}&api_key=${PUBLIC_KEY}`;
  //   },

});
