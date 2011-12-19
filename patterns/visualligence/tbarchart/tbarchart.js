function datatotbarchart( data, el )
{
	var mat = data.mat;
	var a = [];
	for( var i in mat )
		if( i != 1 )
			a.push( mat[ i ][ 2 ].$t.replace( ',', '.' ) );
	var d = a.join(',');
	userlog( d );
	el.load( "../vps/lang/python/pattern.py?d={result:["+d+"]}" );
	el.append( d );
	el.width( "600px" );
	el.height( "500px" );
	userlog( "barchart loaded" );
}
