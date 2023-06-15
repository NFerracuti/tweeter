$(document).ready(function() {

  function handleTextArea() {

    const textArea = $('#tweet-text');

    //event handler:
    textArea.on('input', function() {

      // Get the length of the entered text
      let textLength = $(this).val().length;

      // Calculate remaining characters
      let remainingChars = 140 - textLength;

      // Update the character counter
      $('.counter').text(remainingChars);
    });
  }

  handleTextArea();
});