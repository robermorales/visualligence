function datatotjava( data, el )
{
	var mat = data.mat;
	var a = [];
	for( var i in mat )
		if( i != 1 )
			a.push( mat[ i ][ 2 ].$t.replace( ',', '.' ) );
	var d = a.join(' ');
	userlog( d );
	$.post( "../vps/lang/java/eclipse/com.visualligence.tests.jar", d,
		function( res ){
			datatotjavafromres( res );
		}
	);
	el.width( "600px" );
	el.height( "500px" );
	userlog( "java invoked" );
}

function datatotjavafromres( res )
{
	var r = eval( res );
	var result = "<svg>";
	for( var i in r )
		result += "<rect x='"+r[i].x+"%' y='"+r[i].y+"%' width='1%' height='1%'  style='fill:black;' />\n";
	result += "</svg>";
	el.append( result );
}
