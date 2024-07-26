jQuery(function () {
    if ($(".business-contain,.travel,.groups, .about-us-body").length > 0) {
        $("body").addClass('contain-black');
    }
    /*config source banner*/
    var src_banner = {
        home: [{src: "images/banner1.jpg", cover: true, overlaytext: "ALWAYS 15% - 50% OFF EVERY HOTEL"}],
        groups: [{src: "images/banner-groups.jpg", cover: true, overlaytext: ""}],
        bussiness: [{src: "images/banner-buss.jpg", cover: true, overlaytext: ""}],
        travel: [{src: "images/banner-travel.jpg", cover: true, overlaytext: ""}],
        about: [{src: "images/banner.jpg", cover: true, overlaytext: ""}]
    };
    var src_banner_child = [], active_control = false;
    if($('.home').length > 0) {
        src_banner_child = src_banner.home;
        active_control = true;
    }else if($('.groups').length > 0) {
        src_banner_child = src_banner.groups;
    }else if($('.business-contain').length > 0) {
        src_banner_child = src_banner.bussiness;
    }else if($('.travel').length > 0) {
        src_banner_child = src_banner.travel;
    }else {
        src_banner_child = src_banner.about;
    }

    $(".banner-slideshow").vegas({
        cover: false,
        align: 'top',
        delay: 10000,
        slides: src_banner_child

    });
    $('.icon-next-vagas').on('click', function (e) {
        if(active_control == true) {
            $(".banner-slideshow").vegas('next');
        }
        // $(".banner-slideshow").vegas('next');
        e.preventDefault();
    });
    $('.icon-prev-vagas').on('click', function (e) {
        if(active_control == true) {
            $(".banner-slideshow").vegas('previous');
        }
        // $(".banner-slideshow").vegas('previous');
        e.preventDefault();
    });

    $('#checkin-date').bootstrapMaterialDatePicker
    ({
        time: false,
        format: 'DD/MM/YYYY',
        minDate: new Date(),
        container: '#calendar-checkin'
    }).on('open', function () {
        $('#calendar-checkin').toggleClass('active');
        $('#calendar-checkout').removeClass('active');
    }).on('dateSelected', function (e, date) {
        $('#calendar-checkin').toggleClass('active');
        $('#calendar-checkin .btn-flat.dtp-btn-ok').click();
        $('#checkin-date').next('.text-after-change').addClass('active');
    }).on('close', function () {
        $('#calendar-checkin').removeClass('active');
    });

    $('#checkout-date').bootstrapMaterialDatePicker
    ({
        time: false,
        format: 'DD/MM/YYYY',
        minDate: new Date(),
        container: '#calendar-checkout'
    }).on('open', function () {
        $('#calendar-checkout').toggleClass('active');
        $('#calendar-checkin').removeClass('active');
    }).on('dateSelected', function (e, date) {
        $('#calendar-checkout').toggleClass('active');
        $('#calendar-checkout .btn-flat.dtp-btn-ok').click();
        $('#checkout-date').next('.text-after-change').addClass('active');
    }).on('close', function () {
        $('#calendar-checkout').removeClass('active');
    });

    $(document).on('click', function (e) {
        if ($(e.target).is('.input-date, .input-date *')) {

        } else {
            if ($('.calendar-show').hasClass('active')) {
                $('.calendar-show').removeClass('active');

            }
        }
    })

    $('.btn-flat').on('click', function (e) {
        return false;
    });

    /*tabs*/
    $('.list-tab li a').on('click', function (e) {
        var id_tab = $(this).attr('href');
        console.log(id_tab);
        $('.list-tab li, .tab-item').removeClass('active');
        $(this).parent('li').addClass('active');
        $(id_tab).addClass('active');
        console.log($(id_tab));
        return false;

    });
    $('.drop-mobile-menu').on('click', function(e) {
       $('.header-menu').toggleClass('open');
       e.preventDefault();
    });

    // match-Height
    $("[data-mh=my-ord]").matchHeight({
        property: 'height',
        byRow: true
    });
    $(window).on("orientationchange resize", function () {
        // $.fn.matchHeight._update();

    });

});