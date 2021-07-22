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
    * **Bonus:** Sort cities by population in the response.
2. Make API request and render data
    * When a user selects a province, make a request to the new API route and display a list of the province's cities.
    * **Bonus:** Display the city in the format `<city name>, <province> (pop <2016 population>)`
3. Implement design styling
    * Implement the below design criteria as best you can in the remaining time.

## Design Criteria
1. Content should be centered horizontally and vertically
2. Province selection buttons should be displayed in a vertical list to the left of the province details
3. Province name, capital, and cities should be separated by a line break

