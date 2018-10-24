;
(function ($) {
  $.entwine('color-picker', function ($) {
    $(document).on('click', function (e) {
      if (!$(e.target).is('.js-color-picker, .iris-picker, .iris-picker-inner')) {
        $('.js-color-picker').iris('hide');
      }
    });
    $('.js-color-picker').entwine({
      onmatch: function () {
        var palettes = $('.js-color-picker').data('palette');
        $('.js-color-picker').iris({
          palettes: palettes,
          change: function (event, ui) {
            var $c, $r, $g, $b, $mid;
            $(this).css('backgroundColor', ui.color.toString());
            $(this).parent().css('backgroundColor', ui.color.toString());
          }
        });
        this.on('click', function (e) {
          $('.js-color-picker').iris('hide');
          $(this).iris('show');
        });
        this._super();
      },
      onunmatch: function () {
        this._super();
      }
    });
  });
})(jQuery);
