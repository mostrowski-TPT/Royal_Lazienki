define(function (require) {

    var Adapt = require('coreJS/adapt');
    var Backbone = require('backbone');
    var ThemeBlock = require('theme/TPT_one_page1_Royal/js/theme-block');
    
    // Block View
    // ==========






    Adapt.on('blockView:postRender', function (view) {
        var theme = view.model.get('_theme');

        if (theme) {
            new ThemeBlock({
                model: new Backbone.Model({
                    _themeBlockConfig: theme
                }),
                el: view.$el
            });
        }
    });
    
    //Code for animating logo added
    Adapt.on('pageView:ready', function () {
        $('.page-logo').css('opacity', 0).delay(800).animate({
            opacity: 1
        });
    });


    //scroll
    $(document).scroll(function (event) {
        var triggerAmount = $('.navigation').height() * 1.5;
        if ($(event.currentTarget).scrollTop() > triggerAmount) {
            $('.navigation').addClass('navblack');
            $('#navinfo').hide();
        } else {
            $('.navigation').removeClass('navblack');
            $('#navinfo').show();
        }
    });



});
