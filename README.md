## Travel App
This app is made for the completion of Udacity Frontend Nanodegree Program.

It will look for the Boarding city, Destination City, Date. It will show the expected whether of the destination on the travel date.


## APIs Used

1. Pixabay
1. GeoNames
1. WeatherBit

###  Architecture of the Project

```shell script
- Root:
  - `package.json`
  - `readme.md`
  - `babel.rc`
  - `webpack.dev.js`
  - `webpack.prod.js`
  - src folder
    - server folder
      - `server.js` 
    - client folder
        - `index.js`
        - view folder
            - `index.html`
        - js folder
            - `app.js` 
            - `handleSubmit.js` 
        - style folder
            - `global.scss` 
            - `result.scss` 
```

### Install
Install the Dependencies and then run the following install commands.

```shell script
    npm run start
    npm run build-prod
    npm run build-dev
```
### Test Function
Jest has been added.
```shell script
    npm run test


