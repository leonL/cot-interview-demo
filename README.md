# Canadian Cities Demo App

A simple Express web application listing the 2016 populations of _some_ Candian cities by province. Note that the data it draws on is incomplete and for some provinces there are no cities listed at all.

For population counts from previous years (2011, 2006, 2001, 1996) as well as other facts about the cities accounted for, access the raw data as JSON via the api `/api/cities`. You can also filter the JSON data to province/territory by using the route `/api/cities/:province` where `:province` is a variable. Some facts about the provinces/territories can be found at `/api/provinces`.

# Starting the app locally 
To start the app on your local machine first install the project dependencies...
```
npm install
```

Start up the web server...
```
npm start
```

And point your browser of choice to  `localhost:3000`