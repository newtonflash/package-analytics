(function($){

    $("#search_project").on("submit", function(){
        $.ajax();
    });

    $("#search_technology").on("submit", function(){
        var keywords = ("#tech_keys").val();
        $.ajax();
    });

})(jQuery);