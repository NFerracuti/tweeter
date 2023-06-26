
$(document).ready(function () {

  //Escape function to re-encode text into a safe "encoded" text//
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //By default, error messages are hidden.
  $("#error-mess-empty").hide();
  $("#error-mess-tooLong").hide();

  //Creates a new tweet element formatted with HTML to feed to the DOM
  const createTweetElement = function (obj) {
    return `
      <article>
        <header>
          <div class="icon-name">
          <img src="${escape(obj.user.avatars)}">${obj.user.name}
          </div>
          <div>
            ${obj.user.handle}
          </div>
        </header>
        <p class="tweet-text">
          ${escape(obj.content.text)}
        </p>
        <footer>
          <p class="submission-date">
            ${timeago.format(obj.created_at)}
          </p>
          <p class="submission-icons">
            <i class="fa-solid fa-flag"></i>
            &nbsp &nbsp
            <i class="fa-solid fa-repeat"></i>
            &nbsp &nbsp
            <i class="fa-solid fa-heart"></i>
          </p>
        </footer>
      </article>
    `;
  };

  //Renders the tweet data by preending tweet html
  const renderTweets = (tweets) => {
    for (const tweet of tweets) {
      $('#tweets').prepend(createTweetElement(tweet))
    }
  }

  //event handler for when user submits new tweet
  $("#new-tweet-form").submit((event) => {
    event.preventDefault();

    const newTweetBody = {text: event.target.text.value};
    const tweetText = newTweetBody.text;
    if (tweetText.length > 140) {
      $("#error-mess-tooLong").slideDown("slow");
      $("#error-mess-empty").hide();
  
      // Hide the error message after 2 seconds
      setTimeout(function() {
        $("#error-mess-tooLong").slideUp("slow");
      }, 2000);
  
    } else if (tweetText.length <= 0) {
      $("#error-mess-empty").slideDown("slow");
      $("#error-mess-tooLong").hide();
  
      // Hide the error message after 2 seconds
      setTimeout(function() {
        $("#error-mess-empty").slideUp("slow");
      }, 2000);
    } else {
      $.post( "/tweets", newTweetBody, function() {
        console.log("tweet submitted successfully");
        loadTweets();
        //clear teh form
        event.target.reset();
      });
    }
  })

  //AJAX 'get' request to add the new tweet data to the tweets arrauy
  const loadTweets = function() {
    $.get("/tweets", (response) => {
      renderTweets(response);
      console.log("tweets loaded successfully", response);
    })
  }
  loadTweets();
});
