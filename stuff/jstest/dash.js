$(document).ready(
function(){

//	$("#result").load( "dash.py" );
	
	q = {
		o:["oid","target"],
		d:["oid"],
		w:["oid>2"]
	};
	$.ajax({
		type: 'POST',
		url: 'http://localhost/~rober/extern/data/data.py',
		data: { q: JSON.stringify( q ) },
		success: function( d, x )
		{
			$.ajax({
				type: 'POST',
				url:'http://localhost/~rober/extern/patterns/pattern.py',
				data: { d: d },
				dataType: 'html'
			})
			.success( function( d, x ){
				$("#result").html( d );
			});
		}
	});

});