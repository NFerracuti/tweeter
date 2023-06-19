/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

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
          ${obj.content.text}
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
      $('#tweets').append(createTweetElement(tweet))
    }
  }

  $("#new-tweet-form").submit((event) => {
    event.preventDefault();
    const newTweetBody = {text: event.target.text.value};
    const tweetText = newTweetBody.text;
    if (tweetText.length > 140) {
      return alert("tweet too long");
    } else if (tweetText.length <= 0) {
      return alert("tweet too short");
    } else {
      $.post( "/tweets", newTweetBody, function() {
        console.log("post request made");
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
