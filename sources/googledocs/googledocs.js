// s/.*key=\(.*\)[\&].*$/\1/g

// $.getJSON( '//spreadsheets.google.com/feeds/cells/' + project.sources['source1'].key + '/a1/public/basic?alt=json-in-script&callback=?', function(a,b,c){console.log(a,b,c)} )

//actividad
//http://spreadsheets.google.com/feeds/cells/0Auz3ko8uUdphdE1sanBCc2pkU0syTlNDenltNzRRdXc/a1/public/basic?alt=json-in-script&callback=a
//
//test2 -- 0Auz3ko8uUdphdDFaQ2JuaVFmdnBNWkZfYUczbmtXRUE

function getdata( key, wid, f )
{
	return $.getJSON(
		'//spreadsheets.google.com/feeds/cells/' + key + '/' + wid + '/public/basic?alt=json-in-script&callback=?',
		function( data ){
			var entryidRC = /.*\/R(\d*)C(\d*)/;
			var retdata = {};
			retdata.mat = {};
			retdata.minR = 100;
			retdata.maxR = -10;
			retdata.minC = 100;
			retdata.maxC = -10;
			for( var l in data.feed.entry )
			{
				var entry = data.feed.entry[ l ];
				var id = entry.id.$t;
				m = entryidRC.exec( id );
				var R,C;
				if( m != null )
				{
					R = new Number( m[ 1 ] );
					C = new Number( m[ 2 ] );
				}
				retdata.minR = Math.min( R, retdata.minR );
				retdata.maxR = Math.max( R, retdata.maxR );
				retdata.minC = Math.min( C, retdata.minC );
				retdata.maxC = Math.max( C, retdata.maxC );
				var row = retdata.mat[ R ];
				if( typeof( row ) == 'undefined' )
					retdata.mat[ R ] = {};
				retdata.mat[ R ][ C ] = entry.content;
			}
			if( typeof( f ) != 'undefined' )
				f( retdata )
			else
				console.log( retdata );
		}
	);
}
