
//http://localhost:333/vps/lang/python/pattern.py?d={result:[2,3,2,1,1,2,2,1,3,3,2,1,2,3,2,1,2,3,2,1,1]}


function datatobarchart( data, el )
{
	var mat = data.mat;
	var a = [];
	for( var i in mat )
		if( i != 1 )
			a.push( mat[ i ][ 2 ].$t.replace( ',', '.' ) );
	var d = a.join(',');
	userlog(d);
	el.load( "/vps/lang/python/pattern.py?d={result:["+d+"]}" );//" + d + "]}&t=barchart
	el.append( d );
	el.width( "600px" );
	el.height( "500px" );
	userlog("barchart loaded");
}
