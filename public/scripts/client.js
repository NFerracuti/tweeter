/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  //Escape function to re-encode text into a safe "encoded" text//
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

 const createTweetElement = function (obj) {
    return `
      <article>
        <header>
          <div>
            <i>${obj.user.avatars}</i>${obj.user.name}
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

  const renderTweets = (tweets) => {
    for (const tweet of tweets) {
      $('#tweets').prepend(createTweetElement(tweet))
    }
  }

  $("#new-tweet-form").submit((event) => {
    event.preventDefault();

    const newTweetBody = {text: event.target.text.value};
    const tweetText = newTweetBody.text;
    if (tweetText.length > 140) {
      return alert("tweet too long, reduce to under 140 chars");
    } else if (tweetText.length <= 0) {
      return alert("tweet must have content");
    } else {
      $.post( "/tweets", newTweetBody, function() {
        console.log("tweet submitted successfully");
        loadTweets();
      });
    }
  })

  const loadTweets = function() {
    $.get("/tweets", (response) => {
      renderTweets(response);
      console.log("tweets loaded successfully", response);
    })
  }
  loadTweets();
});
