$( document ).ready(function() {
	
  $( "#big-small" ).addClass( "big" );
	setTimeout(function() {
  $( "#big-small" ).addClass( "rotate" );
  }, 2000);
  setTimeout(function() {
  
  $( "#big-small" ).addClass( "small" );
  }, 3000);
});
