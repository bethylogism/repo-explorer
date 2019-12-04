A rapidly-made github repo explorer using v3 of the [github API](https://developer.github.com/v3/).


## To run/build use these scripts:

In the project directory, run:

### `node server.js`
Runs the Express server</br>
Navigate to [http://localhost:8080](http://localhost:8080) to view it in your browser.

### `npm start`

Runs the app code in dev mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it the app dev mode in your browser.

### `npm build`
Bundles build folder

## Things that still need to be done...

- Use customized useEffect hook to update instantly when 'next' button clicked
- Change 'Next' to 'Back' when nr of pages has been reached
- Memoize the API call so that it doesn't needlessly remake same calls
- Deploy