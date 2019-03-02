# eventonica-api

Build a REST API

## Build the tiniest server you can with Express.js

1. Fork and clone this repo, which is mostly empty. (or will be after judy cherry-picks the readme commites and merges to master)
  - or zero starting code? pros of bo starting code: have them do the steps themselves;  teach some node / npm concepts
2. Initialize your new project as a node project.
   1. Create a new package.json file with npm's defaults by typing: `npm init -y`
3. Add Express to your project by typing: `npm i --save express`
   1. Note: `i` is short for install =) `npm i` is equivalent to writing `npm install`.
   2. If you had just typed `npm i express`, you'd have just downloaded the Express library (and its dependencies) to your project's node_modules folder.
   3. However, since you used the `--save` flag, `npm i --save express` not only downloaded the Express library and saved it to your project's node_modules folder, it also adds it to your package.json under "dependencies".
4. Let's have the entry point be app.js by following these steps:
   1. Make a new empty file called app.js: `touch app.js`
   2. In package.json, change the line `"main": "index.js",` to `"main": "app.js",`
5. Do the bare minimum to set up your first route in `app.js`:
   1. Require the Express module.
   2. Make a new instance of Express called `app`.
   3. Tell this Express app to listen for traffic.
   4. Add a single route for making a GET request to the path `/` that returns a tiny bit of json that says "hello world!" or something. We're using `res.json` for this because right now we want this API to only return json.
6. Run your server:
   1. Install `nodemon` globally with the `-g` flag like this: `npm i -g nodemon` (note: since you used the `-g` flag, it will not install it into your project's node_modules directory).
   2. type `nodemon` to begin your server! Now every time you save a file in this project, `nodemon` will automatically restart your server for you.
7. Manually test your brand-new server:
   1. In a web browser, hit `localhost:3000` and see what happens! You should see a JSON string with quotes!!
   2. In Postman, perform a GET request to `localhost:3000` and see what happens! You should see... that JSON string! Yes, we just did the same thing in two different ways. We'll be doing a lot of that.
8. Use git to save your work so far, and push it to your fork on GitHub!

### Discussion Questions

1. What's the difference between `nodemon` and `node app.js`? Why would we use `nodemon`?
2. What's the difference betweeen `npm install package-name` and `npm install --save package-name`?
3. For the URL `http://localhost:3000/`, identify these parts of the URL:
   1. protocol
   2. host or hostname
   3. port
   4. path
4. What's the difference between the term "route" and the term "path" ?

## RESTful routes, but no data persistence

1. Add routes for your new `events` resource! Just have them return hard-coded content-free strings for now. What are the five routes you wrote down that make a RESTful API for `events`? You'll create a new route for each one!
   1. List all events: `GET /events`
   2. Just one event: `GET /events/:id`
   3. Make a new event: `POST /events`
   4. Modify an existing event: `PUT /events/:id`
   5. ``
2. Manually test your new routes!
   1. For the two GET requests, use your browser to see what happens. Then do them again in Postman! Use whatever fake numbers you want for your "id"s in your path for "get a single event" for now, because we have no data so it's all fake anyway.
   2. For the POST, PUT, and DELETE requests, use Postman!
3.  Use git to save your work so far, and push it to your fork on GitHub!

Your API has no ability to persist data yet, but you have all the routes that make up a RESTful API endpoint for a single resource, and you can prove to yourself that they exist by hitting the routes with Postman or `curl`. You're on your way!

### Discussion Questions

1. What happens if you `GET` the route `/events/4923847`?
2. What happens if you `GET` the route `/events/banana`?
3. What error shows up if you `PUT` the route `/events` with no id? Where is this error coming from (JavaScript, node, Express, something else?)
4. For the URL `http://localhost:3000/events/4923847`, identify these parts of the URL:
   1. protocol
   2. host or hostname
   3. port
   4. path
5. What is a resource?
6. Why do some of the routes have `:id` on the end? How do you think we'll we use this `:id` in the future?

## Keeping some data, but no database

Instead of a database, we'll start by representing some events as "plain old JavaScript objects" and store them in an array!

1. Add a new variable called `data` to your server file. `data` should be an object that contains an empty `events` array. Like this:

```javascript
const data = {
  events: []
};
```

2. Come up with a few event attributes you'd like to save. I'm going to use `title` and `city`, which will both be strings. Ignore `id` for now.
3. Make up some small JavaScript objects that represent events and put them in our events array. For example, one of my JavaScript objects looks like this: `{ title: "Dance Performance", city: "Pawtucket" }` (note: there's no id here! We're going to cheat for this part of the project and use the array index as the "id"! This is not normal, but we're doing it here just to demo one way to save data temporarily.)
4. Implement functionality for one route at a time! Between working on each route, use git to save your work so far, and push it to your fork on GitHub!
   1. Start with `GET /events`. Have the action for that route interact with your new `data` javascript object. Hint: what JavaScript do you type to get the events array in your data object? How can you get this route to respond to the GET request with just that events array? To test it, use your browser, then do it again in Postman.
   2. Next do `GET /events/:id`. We are doing a crazy thing where instead of creating an attribute named `id` on our object that represents an event, we're just going to pretend its "id" is whatever array index it happens to be in. To get the id out of the route, figure out how Express keeps track of request parameters. I'll give you a hint: try `console.log(req.params)` and see what happens in your server logs. After you figure out how to get the id out of the request, ask yourself: how do you get just one thing out of your events array where the index is that "id" number? To test this new route, use your browser, then do it again in Postman.
   3. For `POST /events`, you'll need to tell Express that you want to be able to call `.body` on a request, which Express calls `req`. Add the `body-parser` middleware (you don't have to npm install it, because it comes with Express... but you do have to `require` it) and tell your Express app that you're using it. See [req.body](https://expressjs.com/en/4x/api.html#req.body) for an example. To test your new POST route, you'll need to use Postman to define a request body (select the "body" tab, then "raw", then in the dropdown on the left, change the data type to "application/json".) What should your request body look like? Finally, what json should this return? It's sufficient to say "new event created!" or something; bonus if you also include what it's new "id" (aka array index) is.
   4. `PUT /events/:id` - just write over the "event" at array index "id" with whatever was sent in the request body! Don't worry about error handling yet. We'll come back to it later.
   5. `DELETE /events/:id` - delete whatever was at array index "id" ... but will this change the indices of the other items in the array? Why or why not? It doesn't matter either way, just do the fast an easy thing for now (which will probably be something like "change this item in the array to be an empty object" for now).

### Discussion Questions

1. Where is the data currently stored?
2. What happens to any new or modified data when you restart your server?
3. What happens if you try to GET an event that doesn't exist? Right now, nothing happens. In the future, we'll return an error. Let's do that later.
4. What happens if you POST or PUT with a request body that is malformed? Find out by trying it via Postman and then using Postman to get all events!
5. When you're writing server code, where does the output from a console.log show up? Why?

## Save data in Postgres

1. Create a new database in your local Postgress.app installation named `eventonica`. Set it up with an auto-incrementing id column (using SERIAL), and whatever other columns you want.
2. Install the PostgreSQL node library: `npm i --save pg`
3. Postgres.app is very permissive--its defaults are set to allow incoming database connections from any "user" on the same machine as itself. So we don't have to worry about creating a db username and db password. Skip down to "Connecting to the database from Node.js" in this article: [LogRocket | Setting up a RESTful API with Node.js and PostgreSQL(https://blog.logrocket.com/setting-up-a-restful-api-with-node-js-and-postgresql-d96d6fc892d8)
4. Follow the tutorial! Rewrite your route actions!! Don't forget to use git to save your work and push to GitHub often!
5. The tutorial teaches you to use `curl`, which is awesome. You can also continue to use Postman.

### Discussion Questions

1. Now, is our data persisted between server restarts? Why?
2. What are some other differences between the "just put it in a JavaScript object" method and the Postgres method of saving data?
3. What's the difference between using `curl` and Postman to hit your routes?
