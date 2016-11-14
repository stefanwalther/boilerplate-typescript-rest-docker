"use strict";
const express = require('express');
const bodyParser = require('body-parser');
class Server {
    constructor() {
        this.server = null;
        this.PORT = process.env.PORT || 3000;
        this.app = express();
        this.config();
    }
    config() {
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(bodyParser.json({ limit: '1mb' }));
        this.initRoutes();
    }
    initRoutes() {
        let routers = express.Router();
        routers.get('/*', (req, res, next) => {
            console.log('url', req.originalUrl);
            next();
        });
        routers.get('/health', (req, res) => {
            res.send(new Date().toJSON());
        });
        this.app.use('/', routers);
    }
    start() {
        return new Promise((resolve, reject) => {
            this.server = this.app.listen(this.PORT, (err) => {
                if (err) {
                    return reject(err);
                }
                console.log(`Listening to http://${this.server.address().address}:${this.server.address().port}`);
                return resolve();
            });
        });
    }
    stop() {
        return new Promise((resolve, reject) => {
            if (this.server) {
                this.server.close(() => {
                    return resolve(true);
                });
            }
            else {
                return resolve(true);
            }
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=server.js.map