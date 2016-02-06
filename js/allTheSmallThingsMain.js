jQuery(function ($) {
  $("ul#menu-social-link-menu a, a.icon-bg, a.close-project, a.album-name-indicator, a.pin-it-btn, a.facebook-share-btn, a.menu-button").addClass("nonmover");
  $('body').fadeMover({
    'effectType': 1,
    'inSpeed': 800,
    'outSpeed': 100,
    'inDelay': '0',
    'outDelay': '0',
    'nofadeOut': 'nonmover'
  });

  $("#pageTop").click(function (e) {
      $("html,body").animate({
        scrollTop: 0
      }, "slow");
      e.preventDefault();
      return false;
    })
    .on("mouseover", function () {
      $(this).stop(true).fadeTo(500, 0.5, "swing");
      $(this).find("img").stop(true).animate({
        "height": 2.375 + "em",
        "opacity": 1
      }, 1000, "easeInExpo");
      $(this).children("#pageTopRocket").stop(true).animate({
        "top": "-10000px"
      }, 2800, "easeInExpo", function () {
        $(this).find("span.fa-rocket").stop(true).fadeOut(100);
        $(this).find("img").stop(true).animate({
          "opacity": 0
        }, 100);
      });
    })
    .on("mouseout", function () {
      $(this).stop(true).fadeTo(500, 1, "swing");
      $(this).find("img").stop(true).animate({
        "height": 0
      });
      $(this).children("#pageTopRocket").stop(true).animate({
        "top": "0px"
      }, function () {
        $(this).find("span.fa-rocket").stop(true).fadeIn(1000, "swing");
      });
    });
});