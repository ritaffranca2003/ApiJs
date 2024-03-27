const express = require("express");
const routes = require("./routes/routes");
class App {

    constructor(){
        this.server = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use('api', routes);
    }
}

module.exports = new App().server;