SUPERHERO APP

This application allows users to search superhero which fetches superhero from Superhero API and they can either add or remove to or from their favorites superheroes. This application is built using full PERN (Postgres, Express, React, NodeJS) stacks and deployed onto heroku.

Link for demo: https://superhero-pern.herokuapp.com/

INSTALLATION AND SETUP INSTRUCTIONS FOR LOCAL MACHINE

Clone this repository onto your local machine. You are require to install nodejs and npm globally on to your machine prior.

1. go to the main project folder.
   `cd superhero-app`

2. Set up and install your server dependencies
   `npm install`

3. Set up and install your client (React) dependencies and files (frontend)
   `npm run client-install`

4. Create a .env file that contains all your postgres connections and Superhero api variable as follows:
   `PG_USER=YOUR POSTGRES USERNAME <br/> PG_PASSWORD=YOUR POSTGRES PASSWORD <br/> PG_HOST=localhost <br/> PG_DB=YOUR POSTGRES DB <br/> BASE_URL=https://superheroapi.com/api/SUPERHERO_API_ACCESS_KEY`

5. To run only your server (api) which runs on port 5000 (http://localhost:5000/) for testing in REST client tool such as postman
   `npm run server`

6. To start complete app which runs on port 3000 (http://localhost:3000)
   `npm run dev`

ASSUMPTIONS:
Once the user has searched for the existing superhero, they can add particular super hero to their favorites list by clicking on add to favourtie button. They are also able to view more information of that particular superhero such as power stats by clicking on more button. However, they wont be able to update power stats of the searched result of the superhero unless they are added to their favorites. They are only able to edit the power stats of their saved superheroes.
Users also have ability to remove superhero from their favorites list.

Challenges faced:
I took this project as an opportunity to learn about React-query library which allows you to fetch, update and cache asynchronous data in react. That being said, with react-query now you do not need to manage all the global states , responsible for managing asynchronous data using either state management library or context-api. React-query hooks library does it all for you. It certainly took some time to grasp basics of react-query and how to apply it in this project and had to face few challenges on my path to learn more about this fantastic react hooks library.
