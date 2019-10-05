
## Project Overview:

For the **Restaurant Reviews** projects, I have converted a static webpage to a mobile-ready web application. In **Stage One**, I took static design that lacks accessibility and converted  it to be responsive on different sized displays and accessible for screen reader use. I have also added a service worker to begin the process of creating a seamless offline experience for users.

### Project Starter Code
You can find the project starter code from [here](https://github.com/udacity/mws-restaurant-stage-1)

## Live Project

You can find live project and test it from this [LINK](https://hasansho.github.io/restaurant-review-app2/)
### Goals
 Our goal to make the website application:
 
 - Offline-first App: it can be accessable even when interintet connection is lost (with the available caches).
 - imporove the Accessibility for disabled users.
 - make the app responsive so it can be displayed in multible screen sizes and devices.

### How to run the application?

1. In this folder, start up a simple HTTP server to serve up the site files on your local computer. Python has some simple tools to do this, and you don't even need to know Python. For most people, it's already installed on your computer.

	* In a terminal, check the version of Python you have: `python -V`. If you have Python 2.x, spin up the server with `python -m SimpleHTTPServer 8000` (or some other port, if port 8000 is already in use.) For Python 3.x, you can use `python3 -m http.server 8000`. If you don't have Python installed, navigate to Python's [website](https://www.python.org/) to download and install the software.
	* Note -  For Windows systems, Python 3.x is installed as `python` by default. To start a Python 3.x server, you can simply enter `python -m http.server 8000`.
2. With your server running  and an internet accessed (to load the map), visit the site: `http://localhost:8000`, and look around for a bit to see what the current experience looks like.


## Leaflet.js and Mapbox:

This project uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/)
