# NATURAL WINES FINDER

This is my final project at the Technigo Bootcamp made during four weeks (half time) in January-February 2021.
I did this project on my own entirely, buliding on the knowledge I gained during the Bootcamp.

It is a natural wines page. Any user can search for wines and sort the wines according to some criterias.
If the user register/logs in they can add wines to favorites and see favorite wines on it's user page.

This project is a work in progress. My main goal right now is to also add a ratings-functionality so that the user can rate wines and see the rated wines on it's user page. Right now the star rating component is visible but the functionality to rate is not in place yet.

## Tech used
This is a fullstack-project. I have made and added my own data and API and saved the data to a Mongo DB.

For the backend I used Node, Express, Mongo DB, mongoose, Mongo Compass.
I also used Postman to test endpoints.

The frontend is made using React, Redux, JSX and Styled components. 
When the user adds/removes favorites the database is updated accordingly and I use Redux store to track changes made.
I have used some Material UI-components as well. For example Popover login, Heart icon and form-elements (searchbar). I have also used a Material UI star ratings-component.

## View it live:

https://natural-wines-finder.netlify.app/


The available endpoints of the API can be found here: 
https://natural-wines-api.herokuapp.com/

