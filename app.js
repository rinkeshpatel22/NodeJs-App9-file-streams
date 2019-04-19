const express = require('express');
const app = express();
const appConfig = require('./config/appConfig');

//import routes
let route = require('./app/routes/app-routes');
// set routes 
route.setRouter(app);

app.listen(appConfig.port, () => { 
    console.log('Server running at "http://127.0.0.1:3000/read": to read app/files/read.txt file & "http://127.0.0.1:3000/write/[your data to write]: to write into app/files/write.txt file') 
});