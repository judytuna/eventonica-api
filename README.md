# eventonica-api
Build a REST API

1. Fork and clone this repo, which is mostly empty.
2. Initialize your new project as a node project.
   1. Create a new package.json file with npm's defaults by typing: `npm init -y`
3. Add express to your project by typing: `npm i --save express`
   1. Note: `i` is short for install =) `npm i` is equivalent to writing `npm install`.
   2. If you had just typed `npm i express`, you'd have just downloaded the express library (and its dependencies) to your project's node_modules folder.
   3. However, since you used the `--save` flag, `npm i --save express` not only downloaded the express library and saved it to your project's node_modules folder, it also adds it to your package.json under "dependencies".
4. Let's have the entry point be app.js by following these steps:
   1. Make a new empty file called app.js: `touch app.js`
   2. In package.json, change the line `"main": "index.js",` to `"main": "app.js",`
5. Do the bare minimum to set up your first route:
   1. Require the express module.
   2. Make a new instance of express.
   3. Tell this instance to listen for traffic.
   4. Add a single route for making a GET request to the path `/` that returns a tiny bit of json that says "hello world!" or something.
