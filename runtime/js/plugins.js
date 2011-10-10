(function($){

})(this.jQuery);

window.log = function(){
  log.history = log.history || [];   
  log.history.push(arguments);
  if(this.console){
    console.log( Array.prototype.slice.call(arguments) );
  }
};
(function(doc){
  var write = doc.write;
  doc.write = function(q){ 
    //log('document.write(): ',arguments); 
    if (/.*visualization.*|/.test(q)) write.apply(doc,arguments);  
  };
})(document);

window.userlog = function( text ){
	console.log( 'userlog: ' +  text );
	$( "span#userlog" ).text( text );
};
