import * as lib from "./../lib/lib";
import { TestConfig } from "./../test-config";

describe( "GET /health", () => {
  let server: any;
  before( () => {
    lib.connect( { url: TestConfig.URL } )
      .then( ( serverInst ) => {
        server = serverInst;
      } );
  } );

  beforeEach( () => {
    return lib.healthCheck( server );
  } );

  it( "is available", done => {
    server
      .get( "/health" )
      .expect( 200 )
      .end( ( err: any, res: any ) => {

        done();
      } );
  } );

} );


