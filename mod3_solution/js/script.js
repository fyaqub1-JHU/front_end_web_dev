$(document).ready(function() {
    // Navbar toggle is selected 
    $('.navbar-toggle').on('click', function(e) {
        e.stopPropagation();
        if ($('.navbar-collapse').hasClass('in')) {
            // Close the dropdown
            $('.navbar-collapse').removeClass('in');
            $('.containerMenu').css('margin-top', '0');
        } else {
            // Open the dropdown
            $('.navbar-collapse').addClass('in');
            $('.containerMenu').css('margin-top', '150px'); 
        }
    });

    // Close the dropdown when clicking outside of navbar
    $(document).on('click', function(e) {
        if (!$(e.target).closest('.navbar').length) {
            $('.navbar-collapse').removeClass('in');
            $('.containerMenu').css('margin-top', '0');
        }
    });

    // Clicking in the navbar won't close it
    $('.navbar-collapse').on('click', function(e) {
        e.stopPropagation();
    });

    // Close the dropdown when a menu item is selected
    $('.navbar-nav li a').on('click', function() {
        $('.navbar-collapse').removeClass('in');
        $('.containerMenu').css('margin-top', '0');
    });
});
