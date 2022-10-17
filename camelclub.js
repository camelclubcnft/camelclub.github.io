'use strict';
$(document).ready(function () {
  $(window).scroll(function() {
    if($(this).scrollTop() <= $('#scroller').offset().top + $('#scroller').outerHeight(true)){
      $(".scrolling").css("-webkit-animation-play-state", "running");
    } else{
      $(".scrolling").css("-webkit-animation-play-state", "paused");
    }

    if($(document).scrollTop() > 10){
      $('.arrows').css({'display': 'none'});
    } else{
      $('.arrows').css({'display': 'block'});
    }

  });

  $("#scroller").hover(function () {
      $(".scrolling").css("-webkit-animation-play-state", "paused");
    }, function () {
      $(".scrolling").css("-webkit-animation-play-state", "running");
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add("show");
      } else{
        entry.target.classList.remove("show");
      }
    });
  });

  const hiddenElements = document.querySelectorAll(".hidden1");
  hiddenElements.forEach((el) => observer.observe(el));

  $(".var-season").click(function () {
    const elmID = $(this).attr("id");
    $("#season-img").attr("src", "Media/" + elmID + ".png");
    $("#season-img").attr("alt", "Sample " + elmID + " Camel");
    $(".var-season").removeClass("active-OG active-WOF active-3D");
    
    $(this).addClass("active-" + elmID);
  });

  $(".var-buy").hover(function () {
      $(this).css("background", "white");
    },function () {
      $(this).css("background", "#bc873c");
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