'use strict';
$(document).ready(function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting){
        entry.target.classList.add("show");
      } 
      // else{
      //   entry.target.classList.remove("show");
      // }
    });
  });

  document.addEventListener("touchstart", function(){}, true);

  const hiddenElements = document.querySelectorAll(".hidden1");
  hiddenElements.forEach((el) => observer.observe(el));

  $(window).scroll(function() {
    if($(this).scrollTop() <= $('#scroller').offset().top + $('#scroller').outerHeight(true)){
      $(".scrolling").css("-webkit-animation-play-state", "running");
    } else{
      $(".scrolling").css("-webkit-animation-play-state", "paused");
    }

    if($(document).scrollTop() > 50){
      $(".arrows").css({"display": "none"});
    } else{
      $(".arrows").css({"display": "block"});
    }

  });

  // $("#scroller").hover(function () {
  //     $(".scrolling").css("-webkit-animation-play-state", "paused");
  //   }, function () {
  //     $(".scrolling").css("-webkit-animation-play-state", "running");
  // });

  $("button.navbar-toggler.custom-toggler").click(function(){
    $(".bar").toggleClass("x");
  });

  $(".var-season").bind("keydown click", function () {
    const elmID = $(this).attr("id");
    $("#season-img").attr("src", "Media/" + elmID + ".png");
    $("#season-img").attr("alt", "Sample " + elmID + " Camel");
    $(".var-season").removeClass("active-OG active-WOF active-3D");
    $(this).addClass("active-" + elmID);
  });

  // $(".grow-button").touchstart(function () {
  //     $(this).css("background", "white");
  //   },function () {
  //     $(this).css("background", "var(--camel)");
  // });

  $(".var-copy").bind("keydown click", function () {
    const elm = $(this).find("input");
    const v = elm.val();

    elm.select();
    document.execCommand("copy", false);
    elm.val('Copied ✓');

    setTimeout(function(){
    elm.val(v);
    },750); 
  });

  // $("#jstore").bind("keydown click", () => {
  //   window.open(
  //   "https://www.jpg.store/collection/camelclub", "_blank");
  // });

  // $("#ghouse").bind("keydown click", () => {
  //   window.open(
  //   "https://www.genesishouse.io/collections/336", "_blank");
  // });

  // $("#cnft").bind("keydown click", () => {
  //   window.open(
  //   "https://cnft.io/project/camel-club", "_blank");
  // });
});