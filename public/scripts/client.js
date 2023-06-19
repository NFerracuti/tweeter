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
            <<i class="fa-solid fa-user-graduate fa-2xl"></i>>${obj.user.name}
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
            ${obj.created_at}
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

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  renderTweets(data)

  $("#new-tweet-form").submit((event) => {
    event.preventDefault();
    const newTweetBody = {text: event.target.text.value};
    $.post( "/tweets", newTweetBody, function() {
      console.log("post request made");
    });
  })
});
