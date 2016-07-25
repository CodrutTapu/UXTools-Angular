$( ".sortable" ).sortable({
    handle: ".grid-block-control",
    connectWith: '.sortable',
    create: function( event, ui ) {
        var order = [];
        $('.sortable .grid-block').each( function(e) {
            order.push( $(this).attr('id'));
        });
        localStorage.setItem("gridElementsOrder", JSON.stringify(order));
    },
    update: function(event, ui) {
        var order = [];
        $('.sortable .grid-block').each( function(e) {
            order.push( $(this).attr('id'));
        });
        localStorage.setItem("gridElementsOrder", JSON.stringify(order));
    }
});
