// https://chart.googleapis.com/chart?cht=s&chd=t:12,87,75,41,23,96,68,71,34,9|98,60,27,34,56,79,58,74,18,76|42,11,33,40,22,45,30,45,32,27&chs=600x500&chco=FF0000

// https://code.google.com/intl/es/apis/chart/image/docs/gallery/scatter_charts.html

function datatogscatter( data, el )
{
	var w = 600;//600
	var h = 500;//500
	var x = "";
	var y = "";
	var s = "";
	for( var i in data.mat )
	{
		if( i != 1 )
		{
			x += data.mat[ i ][ 2 ].$t.replace( ',', '.' );
			if( i != data.maxR )
				x += ',';
		}
	}
	y = x;
/*	for( var i = 0 ; i <= 20 ; i ++ )
	{
		x += Math.ceil( Math.random() * 100 ) + '';
		y += Math.ceil( Math.random() * 100 ) + '';
		s += Math.ceil( Math.random() * 100 ) + '';
		if( i != 20 )
		{
			x += ',';
			y += ',';
			s += ',';
		}
	}*/
	//&chxl=1:|a|b|3:a|b
	var src = 'https://chart.googleapis.com/chart?cht=bvg&chd=t:$x|$y|$s&chs=$wx$h&chxt=x,y'
	.replace( /\$w/, w )
	.replace( /\$h/, h )
	.replace( /\$x/, x )
	.replace( /\$y/, y )
	.replace( /\$s/, s )
	;
	el.html( "<img src='" + src + "'/>" );
}
