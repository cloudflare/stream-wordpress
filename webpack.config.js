/**
 * External Dependencies
 */
 const path = require( 'path' );
 
 const { resolve } = require( 'path' );
 /**
  * WordPress Dependencies
  */
 const defaultConfig = require( '@wordpress/scripts/config/webpack.config.js' );

 module.exports = {
     ...defaultConfig,
     ...{
            entry: {
                blocks: './src/blocks.js'
            },
            output: {
                filename: '[name].build.js',
                path: resolve( process.cwd(), 'dist' )
            }
        }
 }