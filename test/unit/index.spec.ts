import { Server } from './../../src/server';
import { expect } from 'chai';

describe( 'AppServer', () => {
  let appServer = new Server();

  before( 'start', () => {
    return appServer.start();
  } );
  after( 'close', () => {
    return appServer.stop();
  } );

  it( 'is of type server', () => {
    expect( appServer ).to.exist;
    expect( appServer ).to.have.property( 'start' );
    expect( appServer ).to.have.property( 'stop' );
  } );
} );
