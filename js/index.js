window.addEventListener("load", ready);

function ready() {
    $(".show-title-2").hide();
}

var animationTrigger = $('.show-content');

var triggerLeft = $('.content-icon-bar.left');
var triggerRight = $('.content-icon-bar.right');
var cover = $('.cover');
var coverImage = $('.cover-bg');
var contentOverlay = $('.content-overlay');

var contentIcon = $('.content-icon');

var timeline = new TimelineMax({paused: true});
var timelineClick = new TimelineMax({repeat: -1});

timeline.add("start").to(cover, 1, {
  height: "-=70%",
  ease: Power4.easeOut
}, "start")
  .to(coverImage, 1, {
  y: "-20%",
  ease: Power4.easeOut
}, "start")
  .to(contentOverlay, 0.4, {
  autoAlpha: 0,
  ease: Power4.easeInOut
}, "start")
  .to(triggerLeft, 0.4, {
  x: "-=6px"
}, "start")
  .to(triggerRight, 0.4, {
  x: "+=7px"
}, "start")
  .to(contentIcon, 0.4, {marginTop: "+=10"}, "start");

animationTrigger.click(function(){
    if($(this).attr('data-toggle') === 'closed') {
        $(this).attr('data-toggle', 'opened');
        timeline.play();
        timelineClick.pause(0, true);
        $(".show-title").hide(1000);
        $(".show-title-2").show(1000);
    }
    else if($(this).attr('data-toggle', 'opened')) {
        $(this).attr('data-toggle', 'closed');
       timeline.reverse();
      timelineClick.restart();
        $(".show-title").show(1000);
        $(".show-title-2").hide(1000);
    }
});

timelineClick.to(contentIcon, 0.6, {opacity: 0, y: 10}, {opacity: 1, y: 0}).to(contentIcon, 0.6, {opacity: 0, y: 10});