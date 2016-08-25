# React, Redux and ExpressJS starter boiler plate


Simple React, Redux + ExpressJS starter boilerplate to get you started quickly building ReactJS client app with an ExpressJS backend.

### Dependencies

* Node v5.4.1+
* NPM v3.3.12+
* Gulp CLI v3.9.1+

### Installation

First clone the project

```bash
$ git clone https://github.com/freemanvt/react-redux-express-starter-boilerplate.git
```

Then rename the folder to your project name and cd into it

```bash
$ mv react-redux-express-starter-boilerplate <project-name>
$ cd <project-name>
```

Install dependencies

```bash
$ npm install
```

### Running

The project can be run locally so that ExpressJS serves the backend API and also the client app. This can be done in development mode or production mode.

To run in development mode, use

```bash
$ gulp
```

This will run the project with several debugging components on as default such as Redux Logger and Redux Devtools.

To run and simulate production mode, use

```bash
$ gulp --prod
```

When in production mode the Javascript and CSS assets will be concatenated and minified.

### Build Only Client

If you only want to build the client in development mode, you can use

```bash
$ gulp build
```

To build the client in production mode

```bash
$ gulp build --prod
```

### Run only backend without serving client

To run the backend API only without serving the client app

```bash
$ gulp --api
```

By default this will run ExpressJS in development mode, you can add the --prod flag to run it in production mode

```bash
$ gulp --api --prod
```

### Project layout

The project is split mainly into four folders.

* client : The client app code which is structured as a typical REACT app
* server : The backend API code which uses ExpressJS
* .build : The client app build folder
* tools  : Folder which has all the scripts for the gulp task and webpack config
 
### Help

If you think I can improve on this boilerplate in anyway or I have done something wrong, please email me at freemanvt@gmail.com or do a pull request.

