A rapidly-made github repo explorer using v3 of the [github API](https://developer.github.com/v3/).


## Available Scripts

In the project directory, run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.



## Things that still need to be done...

- Use customized useEffect hook to update instantly when 'next' button clicked
- Change 'Next' to 'Back' when nr of pages has been reached
- Memoize the API call so that it doesn't needlessly remake same calls
- Build & put on Express Server (currently just running on port 8080)