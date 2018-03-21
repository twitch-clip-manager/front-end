# front-end

General Information:
---

authors: Bill Odell, Rima Hiraoka, Joe Waine, Richard Montgomery

github repo: https://github.com/twitch-clip-manager

version: 1.0.0

Twitch Clip Manager is a video manager that searches through Twitch TV's API for relatable content and plays video clips in a continuous manner. Such functionality will allow someone to view highlight clips unimpeded, for example.

---

Table of Contents
---

[Prerequisites](#prerequisites)

[How to Use](#how-to-use)

[Dependencies](#dependencies)

[Endpoints](#endpoints)

[Deployment](#deployment)

[Build](#build)

[User Stories](#user-stories)

---

### Prerequisites
---

Fork Repository

Git clone Frontend and Backend to local machine

"npm i" dependencies on both front-end and back-end

Set up .env files on front and back end

Front-end .env

```
API_URL="http://localhost:3000"
NODE_ENV="dev"
CDN_URL="/"
```

Back-end .env

```
PORT=3000
TWITCH_CLIENT_ID=<Twitch Client ID>
MONGODB_URI=mongodb://localhost/twitch
NODE_ENV=twitch
CLIENT_URL=http://localhost:8080
API_URL=http://localhost:3000
```

"mongo" to enter mongo shell

"nodemon" to run server

"npm run watch" to build webpack

---

### How to Use
---

<address link>

Log in to Twitch Clip Manager and use input fields to customize a Twitch tv search. The site will return up to 10 "stitched" clips for the viewer. TCM also has input fields to save favorite Games and Favorite Channels for quick access to content.

---

### Dependencies

---

### Endpoints
---

### Deployment
---

### Build
---

---

### User Stories:
---
As a User,
 I want fast access to my favorite stream's content and highlight reels.

As a User,
 I want to view related content in a continuous manner rather than individually searching through videos.

As a User,
 I want to be able to dign in and have my preferences and favorite content saved.

---

As a Developer,
 I want to create a single page application with user friendly UX design.

As a Developer,
 I want to provide quick access to user content and "stitch" content together so that a user can see a reel of related content.

As a Developer,
 I want to have secure authentication that users can save their preferences.

---

As a Marketer,
 I want the experience of viewing content to be stream-lined.

As a Marketer,
 I want the user to feel our product gives them easy access and control of their viewing content.

As a Marketer,
 I want the user to value the application in the way that it fulfills a need.
 
 ---
