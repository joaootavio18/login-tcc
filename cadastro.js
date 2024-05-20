$(function() {
    $("#input").keypress(function(event) {
        if (event.which != 8 && event.which != 0 && (event.which < 48 || event.which > 57)) {
            $(".alert").html("Enter only digits!").show().fadeOut(2000);
            return false;
        }
    });
});