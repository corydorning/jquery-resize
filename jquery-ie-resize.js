/*! jquery-resize.js
 *
 * Authored by: Cory Dorning
 *
 * Dependencies: jQuery v1.8+
 *
 * Last modified by: Cory Dorning
 * Last modified on: 10/29/2013
 *
 * The ie-resize plugin helps fix an IE8 and older
 * bug where <select> menu's with a fixed width cuts
 * off the option text that exceeds that the fixed width.
 *
 */

// include semicolon to make sure any JS before this plugin is terminated
;(function($) {
  // ECMAScript 5 strict mode
  "use strict";

  // begin plugin resize plugin
  $.fn.resize = function(options) {

        // set any defaults
    var defaults = {
          width: 'auto' // width to set on mouseover
        },

        // overwrite 'defaults' with those passed via 'options'
        settings = $.extend(defaults, options),

        mouseLeave = function(select) {
          var $select = $(select);
          $select.css('width', $select.data('origWidth'));
        },

        // original jQuery object
        $sel = this;


    return $sel
      .each(function() {
        var $select = $(this);
        $select.data('origWidth', $select.outerWidth());
      })
      .on('mouseenter', function(){
        $(this).css('width', 'auto');
      })
      .on('mouseleave', function() { mouseLeave(this); })
      .on('focus', function() {
        $(this).off('mouseleave');
      })
      .on('blur change', function(){
        $(this).on('mouseleave', function() { mouseLeave(this); }).trigger('mouseleave');
      });



  };
})(jQuery);
// end resize