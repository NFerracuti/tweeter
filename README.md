# Tweeter Project

Tweeter is a simple, single-page Twitter clone.  
This project is Built on the [tweeter template](https://github.com/lighthouse-labs/tweeter) by [lighthouse-labs](https://github.com/lighthouse-labs).

## Final Product

![tweeter-tweet.gif](tweeter-main.gif)  
View the functionalities (with animated GIF) in [Features](#features) section.

&nbsp;

## Dependencies

- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/en/)
- [body-parser](https://github.com/expressjs/body-parser)
- [chance](https://chancejs.com/)
- [md5](https://www.npmjs.com/package/md5) (for development)
- [timeago](https://www.npmjs.com/package/timeago.js/v/4.0.0-beta.3)

&nbsp;

## Getting Started

1. Clone this repository onto your local device.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm start` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.
5. (For developtment) another option to start the web server is using the `npm run local` command. [Nodemon](https://github.com/remy/nodemon) will monitors for any changes in the source code and automatically restart the server.
6. (For developtment) the `npm run sass-watch` command enable the sass application to look in the sass directory for any scss files that are created or updated. If there is a change, the corresponding css file in the public/styles directory will be created or updated.

&nbsp;

## Features

### 1. Submit new tweet with form

![tweeter-main.gif](./documents/tweeter-main.gif)  
When a user submits a valid tweet, the new tweet is displayed.

&nbsp;

### 2. Char Counter and Display Error Message

![error-message.gif](./documents/error-message.gif)  
When a user submits an invalid tweet (empty or contains more than 140 characters), an error message is displayed.

&nbsp;

### 3. Responsive Design

![responsive-design.gif](./documents/responsive-design.gif)  
Two layouts on different screen sizes (Breakpoint: 1024px).

&nbsp;
