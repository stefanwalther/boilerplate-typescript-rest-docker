import * as express from "express";

let routes: express.Router = express.Router();

routes.get( "/*", ( req, res, next ) => {
  console.log( "url", req.originalUrl );
  next();
} );

routes.get( "/health", ( req, res ) => {
  res.setHeader( "Content-Type", "application/json" );
  res.send( { ts: new Date().toJSON() } );
} );

export = routes;
