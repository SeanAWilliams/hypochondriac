/**
 * Created by lisdu02 on 11/2/14.
 */
$(document).ready(function() {
    $('#example').dataTable({
        "scrollX": true,
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]
    });
} );