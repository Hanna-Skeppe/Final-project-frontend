# NATURAL WINES FINDER

This is my final project at the Technigo Bootcamp made during four weeks (half time) in January-February 2021.
I did this project on my own entirely, buliding on the knowledge I gained during the Bootcamp.

It is a natural wines page. Any user can search for wines and sort the wines according to some criterias.
If the user register/logs in they can:

- Add wines to favorites and see favorite wines on it's user page.
- Rate wines (1-5 stars) and see their star-rated wines. The user can also update or remove an existing rating on a wine.

This project is a work in progress. My main goals right now are to:

- Further improve the implemented ratings-functionality so that the user see all their rated wines on it's user page (by clicking on tabs: 'favorite wines' and 'rated wines').

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
