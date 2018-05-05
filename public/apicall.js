(function($){

    $("#search_project").on("submit", function(){
        $.ajax();
    });

    $("#search_technology").on("submit", (ev) => {
        ev.stopPropagation();
        ev.preventDefault();
        var keywords = $("#tech_keys").val();
        $.ajax({
            url: '/stats/packageCount',
            type: 'GET',
            data: {
                keywords: keywords
            },
            success: (res) => {
                alert(res.count);
            },
            error: (err) => {
                console.error(err);
            }
        });
    });

})(jQuery);