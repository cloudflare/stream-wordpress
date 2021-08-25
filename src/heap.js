/* global ajaxurl */
/* global cloudflareStream */

class CloudflareStreamHeapAnalytics {
	constructor( ) {
		jQuery( '#submit' ).on( 'click', function() {
			cloudflareStream.analytics.logEvent( 'Stream WP Plugin - Settings Saved' );
		} );
	}

	logEvent( event ) {
		if ( cloudflareStream.options.heap ) {
			return;
		}

		console.error( 'Event: ' + event );

		jQuery.ajax( {
			url: ajaxurl + '?action=cloudflare-stream-analytics',
			method: 'POST',
			data: {
				nonce: cloudflareStream.nonce,
				event: event,
			},
			error: function( jqXHR, textStatus ) {
				console.error( 'Error: ' + textStatus );
			},
		} );
	}
}
cloudflareStream.analytics = new CloudflareStreamHeapAnalytics();
