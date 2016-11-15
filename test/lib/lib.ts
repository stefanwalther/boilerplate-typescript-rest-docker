import * as supertest from "supertest-as-promised";
const promiseRetry: any = require( "promise-retry" );


export function connect( opts: any ): Promise<Object> {

  return new Promise( ( resolve /*, reject*/ ) => {
    resolve( supertest.agent( opts.url ) );
  } );
}

/**
 * Pings the server until a 200 is returned at the endpoint `health`
 * @param server
 * @returns {*}
 */
export function healthCheck( server: any ): Promise<void> {

  const check: any = () => {

    return server
      .get( "/health" )
      .expect( 200 )
  };

  let retryOpts = {
    retries: 200,
    factor: 1,
    minTimeout: 250
  };

  return promiseRetry( ( retry: any, attempts: number ) => {

    if ( attempts > 1 ) {
      console.log( `Health-check failed, retry (${attempts - 1})` );
    }

    return check()
      .catch( retry );

  }, retryOpts )
}


