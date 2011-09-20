var dataset = function()
{
	this.data = [];
}

dataset.prototype.a = function()
{
	
}

userlog( "loading data" );

$( "input#datasource" ).val( project.sources[ 'source1' ].key );

getdata ( project.sources['source1'].key, project.sources['source1'].wid, function( data ){
	datatotable( data, $( "div#datavis_main" ) );
//	datatoscatter( data, $( "div#datavis_main" ) );
//	datatobarchart( data, $( "div#datavis_main" ) );
})
