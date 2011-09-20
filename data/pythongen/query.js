$(document).ready(
function(){
	
	q = {
		o:["oid","source"],
		d:["oid"],
		w:{op:">",l:"country",r:50},
		limit: 30
	};
	
//	$("#doquery").click(function(){
		$.ajax({
			type: 'POST',
			url: 'data.py',
			data: { q: JSON.stringify( q ) },
			success: function( d, x )
				{
					$("#result").html( d );
				}
		});
//	});
	
});
