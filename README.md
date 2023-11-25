# Country Search

## Introduction
This project is a comprehensive web application that utilizes Node.js and Express for the backend, coupled with React for the front-end, to deliver a seamless and interactive user experience. The core functionality of the application revolves around providing detailed information about countries worldwide, catering to the needs of users interested in geographical and demographic data.

## Technologies:
- React
- Node JS
- Express
- Bootstrap
## File Structure

The project is organized into a clear and modular file structure. Below is an overview of the key directories and files:

```
├── client
│   ├── public
│   ├── src
│   │   ├── components/
│   │   ├── theme/
│   │   ├── page/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.css
│   │   └── index.js
│   └── package.json 
│
├── server
│   ├── routes/ 
│   ├── tests.js
│   ├── app.js
│   └── package.json 
│
├── docker-compose.yml 
└── README.md 
```

The explaination for key part of this project
### Client
- **`src/`**: Source code for the React frontend.
  - **`components/`**: Reusable UI components for the app.
  - **`theme/`**: Styling and theming information for consistent design.
  - **`page/`**: Pages for the home and details
  - **`App.js`**: The root React component.
  - **`App.css`**: Styles for `App.js`.
  - **`index.css`**: Global styles for the application.
  - **`index.js`**: Entry point that renders the app to the DOM.


### Server
- **`routes/`**: Express routes for directing HTTP requests.
- **`tests.js`**: Tests for the server-side logic.
- **`index.js`**: Sets up the Express server, middleware, and routes.

## Key Features

### Country Search Functionality
- Users can input a country name, triggering a search through backend API by requesting the restcountries API.
- The backend, built with Node.js and Express, efficiently handles the search queries.

### Display Country Information
- Upon searching, the application displays detailed information about the country based on user selection.
- Information includes the country's flag, population, region, capital, and official language and the link to the google Map.

### List All Countries
- A feature to browse a list of all countries.
- This comprehensive view allows users to select any country from the list to view more details.

### Theme Switching Capability
- The application includes a theme switcher, allowing users to toggle between light and dark modes.
- This feature is designed to enhance usability and cater to individual user preferences.

## Setup

This application is containerized, making the setup process straightforward and efficient. Follow these simple steps to get started:

1. **Starting the Application**:
   - Navigate to the root directory of the project where the `docker-compose.yml` file is located.
   - Run the following command:
     ```
     docker-compose up
     ```
   - This command will build and start the containers for both the frontend and backend services.

2. **Accessing the Application**:
   - Once the containers are up and running, you can access the application by opening your web browser and navigating to [http://localhost:3000](http://localhost:3000).
   - You should now be able to interact with the application and explore its features.

Enjoy exploring the application! If you encounter any issues, please refer to the troubleshooting section or contact the support team.

## Testing

This project includes tests for the backend routes using Jest. To run these tests, follow the steps below:

2. **Run the Tests**:
   - Once you are in the `server` directory, execute the following command to run the tests:
     ```
     npm test
     ```
   - This command will initiate the Jest test runner and execute the tests written for your backend routes.



