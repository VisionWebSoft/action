$( document ).ready( function() {
    $( ".btn-group button" ).click( function() {

        $( this ).children( ":first" ).toggleClass( "fa-angle-down fa-angle-up" );
        // (http://stackoverflow.com/questions/2275702/jquery-first-child-of-this))
        /*   (http://stackoverflow.com/questions/7002039/easiest-way-to-toggle-2-classes-in-jquery)
         */

    } );
} );
