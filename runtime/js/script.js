var dataset = function()
{
	this.data = [];
}

dataset.prototype.a = function()
{
	
}

var global_data;
var el = $("#datavis_main");

$( "input#datasource" ).val( project.sources[ 'source1' ].key );

function loaddata()
{
	userlog( "loading data" );
	getdata ( project.sources['source1'].key, project.sources['source1'].wid, function( data ){
		global_data = data;
	});
}

function init()
{
	
}

function end()
{
	
}

$("button#loaddata")       .click( loaddata );

$("button#datatotable")    .click( function(){ init(); datatotable(     global_data, $( "div#datavis_main" ) ); end(); });
$("button#datatobarchart") .click( function(){ init(); datatotbarchart(  global_data, $( "div#datavis_main" ) ); end(); });
$("button#datatotjava") .click( function(){ init(); datatotjava(  global_data, $( "div#datavis_main" ) ); end(); });
$("button#datatogbarchart").click( function(){ init(); datatogbarchart( global_data, $( "div#datavis_main" ) ); end(); });
$("button#datatogscatter") .click( function(){ init(); datatogscatter(  global_data, $( "div#datavis_main" ) ); end(); });
