function datatotable( data, el )
{
	userlog( "loading table..." );
	var mat = data.mat;
	var t = "<table>";
	for( var i in mat )
	{
		if( i != 1 )
		{
			var r = "<tr>";
				for( var j in mat[ i ] )
					r += "<td>" + mat[ i ][ j ].$t + "</td>";
			t += r + "</tr>";
		}
	}
	t += "</table>";
	userlog( t );
	el.width("").height("");
	el.html( t );
	userlog( "table shown" );
}
