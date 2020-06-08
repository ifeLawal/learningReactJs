# Learning ReactJs

There are 2 beginner modules.

Module 1 - create react app
```
npx create-react-app my-app
```
This creates a full directory with node modules imported, a github repo initiated, and your regular JS development directories (src, public) set up for a single page react webpage. You can get a better understanding by reading the [documentation](https://reactjs.org/docs/create-a-new-react-app.html). Create react app allows you to get easily up and running with react development.  You simply
```
cd my-app
npm start
```
and you see the react webpage up and running. All you have to do is edit the src/js and src/css files. You can follow the [react webpage tutorial](https://reactjs.org/tutorial/tutorial.html) to get started, which I did, and start developing from there. However it comes with a lot more dependencies than you might need, especially as a beginner. Those dependencies build out to directory file size of 162.7mb.

Along with [create new react app webpage](https://reactjs.org/docs/create-a-new-react-app.html#gatsby) also has a list of other builds for [server-side websites](https://reactjs.org/docs/create-a-new-react-app.html#nextjs), [static](https://reactjs.org/docs/create-a-new-react-app.html#gatsby), and [more flexible environments](https://reactjs.org/docs/create-a-new-react-app.html#more-flexible-toolchains).

Module 2 - ground up webpack and babel setup

This takes a longer approached for getting someone up and running, but gives you a better understanding of the node module structure and the development environment that supports react such as live reloading, tree shaking, lazy loading, and so much more.

This [tutorial](https://www.sitepoint.com/beginners-guide-webpack-module-bundling/) by Mark Brown is a great resource for setting this up and getting an overview of how each node module functions together to setup the development environment. You have a lot less dependencies installed and your directory is 64.1mb.

Both modules give you small builds for delivery so there is no need to worry on that end.

