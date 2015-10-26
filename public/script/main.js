/*$(function () {
    $('.tabs').tabslet({
        active: 2
    });
});*/


$(function () {
    $('.district').click(function () {
        var addressValue = $(this).attr("name");

        $('.district').removeClass('active');
        $(this).addClass('active');

        $('.screen_toggle').removeClass('active');
        $(addressValue).addClass('active');

        var addresstext = $(this).text();
        console.log(addresstext);
        $('#districttext').text(addresstext);
    });

    $('.time').click(function () {
        var addressValue = $(this).attr("name");

        $('.time').removeClass('active');
        $(this).addClass('active');
    });

    $('.tablist').click(function () {
        var nameValue = $(this).attr("name");
        console.log('you choice : '+nameValue);

        var relValue = $(this).attr("rel");
        var revValue = $(this).attr("rev");
        $('.screenB').removeClass('active');
        $(nameValue).addClass('active');
        $('.date').removeClass('active');
        $(relValue).addClass('active');
        $('.screen-r').removeClass('active');
        $(revValue).addClass('active');
    });

    $('.row').click(function () {
        $('.row').removeClass('active');
        $(this).addClass('active');
    });
});


