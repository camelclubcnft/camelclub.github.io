'use strict';
$(document).ready(function () {
  $(window).scroll(function() {
    if($(this).scrollTop() <= $('#scroller').offset().top + $('#scroller').outerHeight(true)){
      $(".scrolling").css("-webkit-animation-play-state", "running");
    } else{
      $(".scrolling").css("-webkit-animation-play-state", "paused");
    }
  });

  $("#scroller").hover(function () {
      $(".scrolling").css("-webkit-animation-play-state", "paused");
    }, function () {
      $(".scrolling").css("-webkit-animation-play-state", "running");
  });

  $(".var-season").click(function () {
    const elmId = $(this).attr("id");
    $("#season-img").attr("src", "Media/" + elmId + ".png");
    $("#season-img").attr("alt", "Sample " + elmId + " Camel");
    $(".var-season").removeClass("chosen-season");
    $(this).addClass("chosen-season");
  });

  $(".var-buy").hover(function () {
      $(this).css("background", "white");
    },function () {
      $(this).css("background", "#c8a36f");
  });

  $(".var-copy").click(function () {
    const elm = $(this).find("input");
    const v = elm.val();

    elm.select();
    document.execCommand("copy", false);
    elm.val('Copied ✓');

    setTimeout(function(){
    elm.val(v);
    },750); 
  });

  $("#jstore").click(() => {
    window.open(
    "https://www.jpg.store/collection/camelclub", "_blank");
  });

  $("#ghouse").click(() => {
    window.open(
    "https://www.genesishouse.io/collections/336", "_blank");
  });

  $("#cnft").click(() => {
    window.open(
    "https://cnft.io/project/camel-club", "_blank");
  });
  });