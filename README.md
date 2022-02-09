# FleetInternInterviewProject

A web application built with React and Django. I used the React-Bootstrap component library.

# Installation and Setup

First, go to the root of the project and run these commands to install the required packages for the React portion (make sure you have npm package manager installed):

```bash
cd my-app
npm install
```

Go back to the root of the project and install all required python packages using:

```bash
pip install -r requirements.txt
```

To run the application open two seperate terminals and start the frontend and backend seperately.

First Terminal:

```bash
cd fleet
python manage.py runserver
```

Second Terminal:

```bash
cd my-app
npm start
```

If both run succesfully, go to ```http:\\localhost:3000``` to view the application.

# Missing Features

Unfortunately, I did not have time to do the bonus or complete the search bar icon design. For the bonus, I would've created a database and stored the given response data as entries in a table. I would've then created a PUT endpoint for the frontend to be able to update the database with the new information.

