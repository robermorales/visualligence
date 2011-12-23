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
			//var result = datatopointsfromres( res );
			var result = datatopathfromres( res );
			el.html( result );
			el.width( "500px" );
			el.height( "500px" );
		}
	);
	userlog( "java invoked" );
}

function datatopointsfromres( res )
{
	var r = eval( res );
	var result = "<svg>";
	for( var i in r )
		result += "<rect x='"+r[i].x+"%' y='"+r[i].y+"%' width='1%' height='1%'  style='fill:black;' />\n";
	result += "</svg>";
	return result;
}

function datatopathfromres( res )
{
	var r = eval( res );
	var result = "<svg>";
	//bg
	result += "<rect x='0%' y='0%' width='100%' height='100%' style='fill:white;'/>";
	//x axis
	result += "<rect x='1%' y='99%' width='98%' height='0.5px' style='fill:black;' />";
	//y axis
	result += "<rect x='1%' y='1%' width='0.5px' height='98%'  style='fill:black;' />";
	result += "<path style='fill:none;stroke:#000000;stroke-width:0.1px;stroke-linecap:round;stroke-linejoin:round;stroke-opacity:1;opacity:1' transform='matrix(5,0,0,-5,0,500)' d='m ";
	var oy = 0;
	var ox = 0;
	for( var i in r )
	{
		result += " " + (r[i].x - ox) + "," + (r[i].y - oy) + " ";
		oy = r[i].y;
		ox = r[i].x;
	}
	result += " ' />";
	result += "</svg>";
	return result;
}

