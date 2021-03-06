# Twitch Clip Manager

General Information:
---

authors: Bill Odell, Rima Hiraoka, Joe Waine, Richard Montgomery

github repo: https://github.com/twitch-clip-manager

version: 1.0.0

Twitch Clip Manager is a video manager that allows user searches through Twitch TV's API for relatable content and renders video clips in a continuous manner. The functionality "stitches" clips together for the viewer.

---
---

Table of Contents
---

[Prerequisites](#prerequisites)

[How to Use](#how-to-use)

[Dependencies](#dependencies)

[Deployment](#deployment)

[Build](#built-with)

[Authors](#authors)

[License](#license)

[Acknowledgements](#acknowledgements)

---
---

### Prerequisites

Fork front-end Repository from: https://github.com/twitch-clip-manager/front-end

Git clone front-end and "npm i" dependencies. 

Set up .dev.env file. To get your Twitch Client ID, you'll need to register with Twitch tv at: https://dev.twitch.tv/twitch-login?returnUrl=https://dev.twitch.tv/


```
API_URL="http://localhost:3000"
NODE_ENV="dev"
CDN_URL="/"
TWITCH_CLIENT_ID=<insert your twitch client ID>
```

"npm run watch" to build webpack

---
### How to Use

https://twitch-clip-manager.herokuapp.com/

Use Twitch Clip Manager's input fields to customize a Twitch tv search. The site will return and render up to 10 "stitched" clips for the viewer, and the design allows a user to functionally navigate the video. To search for the most viewed clips on Twitch, simply leave both input fields blank.

---
### Dependencies

    "babel-core": "^6.26.0",
    "babel-loader": "^7.1.2",
    "babel-plugin-transform-object-rest-spread": "^6.26.0",
    "babel-preset-env": "^1.6.1",
    "babel-preset-react": "^6.24.1",
    "clean-webpack-plugin": "^0.1.18",
    "css-loader": "^0.28.10",
    "dotenv": "^5.0.0",
    "enzyme": "^3.3.0",
    "enzyme-adapter-react-16": "^1.1.1",
    "eslint": "^4.19.0",
    "eslint-plugin-react": "^7.7.0",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^1.1.9",
    "html-webpack-plugin": "^2.30.1",
    "jest": "^22.4.2",
    "node-sass": "^4.7.2",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-redux": "^5.0.7",
    "react-router-dom": "^4.2.2",
    "redux": "^3.7.2",
    "sass-loader": "^6.0.6",
    "superagent": "^3.8.2",
    "uglifyjs-webpack-plugin": "^1.2.1",
    "url-loader": "^0.6.2",
    "uuid": "^3.2.1",
    "webpack": "^3.11.0",
    "webpack-dev-server": "^2.11.1",
    "react-autocomplete": "^1.8.1",
    "redux-devtools-extension": "^2.13.2"

---
### Deployment

- [Heroku](https://twitch-clip-manager.herokuapp.com/)
- Travis CI

---
### Built with 
- JavaScript
- React/Redux

---
### Authors
- [Bill Odell](https://www.linkedin.com/in/bill-odell-b99a0052/)
- [Rima Hiraoka](https://www.github/sobacha/)
- [Richard Montgomery](https://www.linkedin.com/in/montgomeryrd/)
- [Joe Waine](https://www.linkedin.com/in/joe-waine/)

---
### License
- This project is licensed under [MIT license.](https://github.com/twitch-clip-manager/front-end/blob/master/LICENSE)

---
### Acknowledgements

- [Code Fellows Faculty](https://www.codefellows.org/)
- [Twitch TV](https://dev.twitch.tv/)