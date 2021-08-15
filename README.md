# Rock Tracks

This web app display the rock music tracks that are fecthed from Itunes API (https://itunes.apple.com/search?term=rock&media=musicVideo) on the landing screen.
When user click on view record button on any particular track , it  redirects to track details screen where more info related to the track are shown .
When user click on more details button on track details screen , it will be redirected to the track view url in seperate tab

## Technologies

This web app is built using React Redux for building components and state management , React Router for redirecting to different pages .

We used React Hooks like useSelector to fetch state from store to components and useEffect to perform sideeffects like calling a service on load.

We used ESlint and prettier for linting and formatting the code repos. Error boundary to show a error screen when there is an eror in web app.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

