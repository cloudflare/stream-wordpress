/**
 * External Dependencies
 */
 const path = require( 'path' );
 
const { resolve } = require( 'path' );

 /**
  * WordPress Dependencies
  */
 const defaultConfig = require( '@wordpress/scripts/config/webpack.config.js' );
const { BlockList } = require('net');
 
 module.exports = {
     ...defaultConfig,
     ...{
            entry: {
                entry: './src/blocks.js'
            },
            output: {
            filename: '[name].build.js',
            path: resolve( process.cwd(), 'dist' ),
        },
        mode: 'development'
    }
 }