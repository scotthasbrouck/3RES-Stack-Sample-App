# 3RES-Stack-Sample-App

A sample app demonstrating a 3RES stack (React, Redux, RethinkDB, Express, Socket.IO), based on the post on [WebAppLog](http://webapplog.com/reactive-web-stack/).

##Frontend Only Libraries
###React
React is a declarative way of building user interfaces, which heavily leans on its XML-like syntax extension, called JSX. Your application is built up from "components" - each of which encapsulate small, often reusable parts of your UI. These components each have their own immutable state, which contains information about how the components should render. The state has a pure setter function (no side effects), and should not be changed directly. This overview of the proposed 3RES stack will only require basic knowledge of React. Of course, you want to become a React master! Be sure to learn more about React at [SurviveJS](http://survivejs.com/) - one of the best comprehensive React books with a free version.

###Redux
If React encapsulates all of your UI components, Redux encapsulates all of your data represented as a JavaScript object. This state object is immutable and should not be modified directly, but only by dispatching an action. In this way, React/Redux combined can automatically *react* to state changes, and update the relevant DOM elements to reflect the new values. Redux has [some awesome documentation](http://redux.js.org/docs/introduction/index.html) - probably some of the best for any open source library I've used. To top it off, Redux also has [30 free videos on egghead](https://egghead.io/series/getting-started-with-redux).

---

##Frontend and Backend Libraries
###Socket.IO
Most likely, your web apps to date have relied on AJAX to communicate with the server - which is built on a Microsoft introduced JavaScript API called XMLHttpRequest. For many one-time user induced actions, such as logging in, AJAX makes a lot of sense. However, it is extremely wasteful to rely on it for data that updates continuously, and for multiple clients. The only real way to handle this is by regularly polling the backend at short intervals, asking for new data. WebSockets are a relatively new technology that was not even standardized until 2011. A WebSocket opens a continuously pending TCP connection, and allows for *frames* of data to be sent by either the server or the client. It is initiated with an HTTP "handshake" as an upgrade request. However, just like we typically don't use vanilla XMLHttpRequest (trust me, I've had to do it, you don't want to implement this yourself and support every browser), we also typically don't use the JavaScript WebSocket API directly. Socket.io is the most widely accepted library for both client and server-side WebSocket communications, and even implements an XMLHttpRequest/polling fallback for when WebSockets fail. We'll be using this library in conjunction with RethinkDB changefeeds (described below), and Redux, to continually keep all of our clients' states up-to-date with our database!

---

##Backend Libraries and Technologies
###RethinkDB
RethinkDB is an open-source NoSQL data store that stores JSON documents. It's often compared to MongoDB, but vastly superior in many key ways that are relevant to making our 3RES stack work. Primarily, RethinkDB comes out of the box with query *changefeeds* - the ability to attach an event listener to a query which will receive real-time updates anytime a document selected by that query is added, updated, or removed! As mentioned above, we'll be emiting Socket.io events from our RethinkDB changefeeds. In addition, RethinkDB is amazingly simple to scale via sharding, and implement redundancy with replication. It has an amazing developer outreach program and crystal clear documentation, and is constantly improving with feedback from engineers like us.

###Express
Lastly, our application will still need to accept HTTP requests as routes. Express is the accepted minimalistic Node.js framework for building HTTP routes. We will use this for everything that requires a one-time event that is outside the scope of Socket.io: initial page load, logging in, signing up, loggin out, etc.

##Building the Server Code
Our sample application will be a simple Todo Checklist with no authentication. One of my big pet peves is when the sample app for a simple tutorial has a huge code base - it just makes it way too time consuming to pick out the relevant parts of the app. So this sample app will be very minimal, but will show exactly one example of every required piece of this stack for end-to-end reactivity. The only folder is a `/public` folder with all of our built JavaScript. One important point that this app leaves out in that spirit is authentication and sessions - anyone on the internet can read and edit Todo's! If you're interested in how to add authentication to this app with both Socket.io and Express, I've got a [complete tutorial on how to do this on my website](http://www.scotthasbrouck.com/blog/2016/3/18/passportjs-express-session-with-sockeio)!

#How to Run
First, run `npm install`, and install RethinkDB.

Once RethinkDB is installed (this app uses version 2.3.1), open a BASH terminal and run
```
$ rethinkdb
```

Navigate to `http://localhost:8080` in your favorite web browser, and use the RethinkDB interface to create a Database called `3RES_Todo`, with a single table named `Todo`.

This app builds with Webpack, and can be build with:
```
$ webpack --progress --colors --watch
```

Finally, run
```
$ node index
```

Navigate to http://localhost:9000 and viola!
