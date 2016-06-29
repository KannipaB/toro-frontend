/**
 * Created by Ciphtech on 6/28/2016.
 */
jQuery(document).ready(function($) {
    $(".clickable-row").click(function() {
        window.document.location = $(this).data("href");
    });
});
