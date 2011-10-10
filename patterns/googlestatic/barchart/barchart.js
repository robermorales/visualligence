// https://chart.googleapis.com/chart?cht=s&chd=t:12,87,75,41,23,96,68,71,34,9|98,60,27,34,56,79,58,74,18,76|42,11,33,40,22,45,30,45,32,27&chs=600x500&chco=FF0000

// https://code.google.com/intl/es/apis/chart/image/docs/gallery/scatter_charts.html

function datatogbarchart( data, el )
{
	var w = 800;//800
	var h = 300;//500
	var x = "";
	var y = "";
	var s = "";
	for( var i in data.mat )
	{
		if( i != 1 )
		{
			y += data.mat[ i ][ 2 ].$t.replace( ',', '.' );
			if( i != data.maxR )
				y += ',';
		}
	}
	var src = 'https://chart.googleapis.com/chart?cht=bvg&chd=t:$y&chs=$wx$h&chxt=y'
	.replace( /\$w/, w )
	.replace( /\$h/, h )
	.replace( /\$x/, x )
	.replace( /\$y/, y )
	;
	el.html( "<img src='" + src + "'/>" );
}
