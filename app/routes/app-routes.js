// import controllers
const fileController = require('../controllers/fileController');
const defaultRouteController = require('../controllers/defaultRouteController');

// set routes with middlewares and contollers. 
let setRouter = (app) => {
    app.get('/read', fileController.readFile);
    app.post('/write/:data', fileController.writeFile); // execute POST call to write from tools like postman
    app.get('/write/:data', fileController.writeFile); // execute GET call to write from browser for demo - idealy it should be POST call.
    app.get('/copy', fileController.copyFile);
    app.get('*', defaultRouteController.generateMessage);
    app.post('*', defaultRouteController.generateMessage);
}

// export routes
module.exports = {
    setRouter: setRouter
}