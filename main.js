$(function(){
    $("#section").css("display", "none");
    $("#button").click(function() {
      $("#section:not(:animated)").slideToggle('slow')
    });
});