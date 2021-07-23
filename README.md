# TMC Interview Skeleton

> This is a skeleton app for the purpose of the TMC live coding interview. It is intentionally unpolished and unfinished. That's where you come in!

# App Overview
To start the app fork this repo and clone it to your local machine.

Install dependencies
```
npm install
```

Start the app (the app will be served on port 3000)
```
npm start
```

You can view the app's data at `localhost:3000/api/:resource`. Available resources are `provinces` and `cities`

# Task Outline
1. Implement API route
    * Implement a route for `/api/cities/:province` that returns all the cities for the requested province.
    * **Stretch:** Sort cities by population in the response.
2. Make API request and render data
    * When a user selects a province, make a request to the new API route and display a list of the province's cities.
    * **Stretch:** Display the city name in one column and the 2016 population in another column.
3. Implement design styling
    * Implement styling for the wireframe below as best you can in the remaining time.

![](/public/images/wireframe.jpg)
