import * as express from "express";
import * as bodyParser from "body-parser";
import * as routes from './routes/index';

export class Server {

  public app: express.Application;
  public server: any = null;
  public PORT: number = process.env.PORT || 3000;

  constructor() {
    this.app = express();
    this.config();
  }

  /**
   * Configure the express app.
   */
  private config(): void {
    this.app.use( bodyParser.urlencoded( { extended: false } ) );
    this.app.use( bodyParser.json( { limit: "1mb" } ) );
    this.initRoutes();

  }

  /**
   * Initialize routes and set default behaviors
   */
  private initRoutes(): void {
    this.app.use( "/", routes );
  }

  /**
   * Start the server
   * @returns {Promise<any>}
   */
  public start(): Promise<any> {

    return new Promise<any>( ( resolve, reject ) => {
      this.server = this.app.listen( this.PORT, ( err: any ) => {
        if ( err ) {
          return reject( err );
        }
        console.log( `Listening to http://${this.server.address().address}:${this.server.address().port}` );
        return resolve();
      } );
    } );

  }

  /**
   * Stop the server (if running).
   * @returns {Promise<boolean>}
   */
  public stop(): Promise<boolean> {
    return new Promise<boolean>( ( resolve, reject ) => {
      if ( this.server ) {
        this.server.close( () => {
          return resolve( true );
        } );
      } else {
        return resolve( true );
      }
    } );
  }

}
