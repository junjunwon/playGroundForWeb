const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');
//END SECTION
const section = document.querySelector('section');
const end = document.querySelector('h1');

//SCROLL MAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
    duration : 10000,
    triggerElement : intro,
    triggerHook : 0
})
.addIndicators()
.setPin(intro)
.addTo(controller);
//Text Animation
const textAnim = TweenMax.fromTo(text, 3, {opacity : 1}, {opacity : 0});

let scene2 = new ScrollMagic.Scene({
    duration : 3000,
    triggerElement : intro,
    triggerHook : 0
})
    .setTween(textAnim)
    .addTo(controller);


// Video animation
let accelAmount = 0.1; // change the current frame for current video, remainging video frame will catch up after finishing scroll
let scrollPos = 0;
let delay = 0;

scene.on("update", e => {
    scrollPos = e.scrollPos / 1000;
    // console.log(e);
});

setInterval(() => { 
    delay += (scrollPos - delay) * accelAmount;
    console.log(scrollPos, delay);
    video.currentTime = delay;
}, 40.3);
