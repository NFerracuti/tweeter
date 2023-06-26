$(document).ready(function() {

  function handleTextArea() {

    const textArea = $('#tweet-text');

    //event handler:
    textArea.on('input', function() {

      // Get the length of the entered text
      let textLength = $(this).val().length;

      // Calculate remaining characters
      let remainingChars = 140 - textLength;

      //change colour to red when chars run out (class added in new-tweet.css)
      if (remainingChars <= 0) {
        $('.counter').addClass("red-text");
      } else {
        $('.counter').removeClass("red-text");
      }

      // Update the character counter
      $('.counter').text(remainingChars);
    });
  }

  handleTextArea();
});