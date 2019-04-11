# Coligo Technologies - Frontend Challenge
This repo contains the task requested from [Coligo Technologies](https://web.coligotech.com/) , as a part of the hiring process for the position of React/Front-End Developer


#live Demo

You can find the live demo of the deployed app on [Heroku](https://frontend-challenge-coligo.herokuapp.com/).

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```React/Frontend Developer
React/Frontend Developer

Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running

Say what the step will be

```
npm install && npm start:dev
```



End with an example of getting some data out of the system or using it for a little demo

## Running the tests
TODO: Explain how to run the automated tests for this system

### Break down into end to end tests

TODO:Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment
This project is currently set to automatically deploy to heroku on every git push.

## Built With
* [create-react-app](https://github.com/facebook/create-react-app) - For generating the initial project structure
* [IntelliJ IDEA](https://www.jetbrains.com/idea/) - as IDE
* [BabelEdit](https://www.codeandweb.com/babeledit) - For managing translation files.

##Packages
* [react-redux](https://github.com/reduxjs/react-redux) For using redux with react.
* <del>[redux-polyglot](https://github.com/Tiqa/redux-polyglot) For managing translation.</del>
* [react-intl](https://github.com/yahoo/react-intl) For managing translation.
* [react-intl-redux](https://github.com/ratson/react-intl-redux) For managing react-intl translation with redux.
* [redux-saga](https://github.com/redux-saga/redux-saga) A middleware that handles async callbacks.
* [axios](https://github.com/axios/axios) for handling HTTP requests.
* [node-sass](https://github.com/sass/node-sass) For compiling SCSS files
* [concurrently](https://github.com/kimmobrunfeldt/concurrently) For running node scripts in parallel (Used for combining scss:watch, with npm:start).

## Suggested for future use
* [babel-plugin-react-intl](https://github.com/yahoo/babel-plugin-react-intl) 


## Authors

* **[Meena Bassem](https://www.linkedin.com/in/meenabassem/)**

## Time progress in task

| Task |Time | Description|
|----|----|---|
|Initial setup| ~1H |Initial environment setup, IDE, Empty project, Initial git repo, initial heroku deployment.|
|Initalizing SCSS| ~1H | Initializing SCSS server side pre-processing, node-sass, pre-compiling on build, sass_lint in the IDE, ...|
|Deciding localization library | ~1H | Doing some research about localization library to use (Decided redux-polyglot), based on syntax simplicity|
|Deciding a middleware library| ~2H | Choosing between redux-thunk and redux-saga, learning about es6 generators. redux-saga was chosen based on some reviews, and it's easier in testing.|
|redux-saga working POC| ~4H| Learning and understanding the basics of saga, to make it work with redux, and building a working proof of concept containing a basic calling of actions|
|Trying localization POC| ~5H | A lot of time was spent trying to get [redux-polylgot](https://github.com/Tiqa/redux-polyglot) to work, after suffering from poor documentation, and checking [comparison on npmtrends](https://www.npmtrends.com/redux-polyglot-vs-react-localize-vs-react-intl-vs-react-redux-i18n-vs-react-i18next-vs-i18n-react), it was decided to try  [react-intl](https://github.com/yahoo/react-intl)|
|Trying react-intl| ~4H |Trying the new library as POC, adding [react-intl-redux](https://github.com/ratson/react-intl-redux), cleaning the code, trying [babelEdit](https://www.codeandweb.com/babeledit) for managing translations|
|Networking abstraction layer| ~6H | Abstraction layer for using [axios](https://github.com/axios/axios), to make it easy in case it was required to use a different library|

## Acknowledgments
* Readme template from [PurpleBooth](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)
