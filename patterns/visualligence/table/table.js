/*
	userlog( "formatting data into table" );
	var mat = data.mat;
	var t = "<table>";
	for( var i in mat )
	{
		var r = "<tr>";
		for( var j in mat[ i ] )
			r += "<td>" + mat[ i ][ j ].$t + "</td>";
		t += r + "</tr>";
	}
	t += "</table>";
	el.html( t );
	userlog( "table shown" );
*/
	
// 	el.load( "//vps/~rober/vps/old/data/data.py" );
// 	return;

function datatotable( data, el )
{
	var mat = data.mat;
	var a = [];
	for( var i in mat )
		if( i != 1 )
			a.push( mat[ i ][ 2 ].$t.replace( ',', '.' ) );
	var d = a.join(',');
	el.load( "//vps/~rober/vps/pattern.py?d={result:[" + d + "]}&t=barchart" );
	el.width( "600px" );
	el.height( "500px" );
}
