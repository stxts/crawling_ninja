// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap-sprockets
//= require bootstrap
//= require_tree .



  
function getDeviceScale() {
    var deviceWidth, landscape = Math.abs(window.orientation) == 90;
    if (landscape) {
      deviceWidth = Math.max(480, screen.height);
    } else {
      deviceWidth = screen.width;
    }
    return window.innerWidth / deviceWidth;
}

if (navigator.userAgent.match(/Mobi/)) {
    $(window).on('load scroll', function() {
        var ds = getDeviceScale();
        $('.device-fixed-height').css('transform','scale(1,' + ds + ')')
            .css('transform-origin', '0 0');
        $('.device-fixed-width').css('transform', 'scale(' + ds + ',1)')
            .css('transform-origin', '0 0');
        })
}

$(window).on('load scroll') function: $('.device-fixed-height').css({'left':$('body').scrollLeft()‌​+'px','width':window‌​.innerWidth+'px'});

$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, .jumbotron a, footer a[href='#myPage']").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top -53
      }, 900, function(){
   
      });
    } // End if
  });
  
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });
  });

  $('.nav a').on('click', function(){
      $(".navbar-collapse").stop().animate({'height': 0},300, function () {
          $('.navbar-collapse').removeClass('in').addClass("collapse");
        });
        $(".navbar-toggle").stop().removeClass('collapsed');
});

  $("#contactFormAjax").submit(function(){
    var dataSet = $(this).serialize();
    $(document).ajaxStart(function() {
          $("#contactFormAjax").hide()
          $("#submitBtnForm").hide()
          $("#loadingRing").show();
        })
        .ajaxStop(function() {
          $("#loadingRing").hide();
        });
    $.ajax({
        type: "POST",
        url: $(this).attr("action"),
        data: dataSet,
        success: function(){
            $("#submitSuccess").show();
        },
        error: function(){
            $("#loadingRing").hide();
            $("#contactFormAjax").show()
            $("#submitBtnForm").show()
            alert("Failed to send message. Please try again!");
        }
    });

    return false;
})
})
