var controller = new ScrollMagic.Controller(),
    scene,
    video = document.getElementsByTagName('video')[0],
    videoDuration;

// Run program on video load
video.onloadeddata = function() {
    
    // Grab the target video duration
    videoDuration = video.duration;
    console.log(video.duration);

    // Tween the video from beginning to end
    var videoTween = TweenMax.to(video, 1, {
                    currentTime: videoDuration,
                    ease: Quad.easeOut,
                    overwrite:true,
                    pause:true
    });

    // Build ScrollMagic Scene
    var scene = new ScrollMagic.Scene({triggerElement: "#container", duration: 20000})
    .setTween(videoTween) // Add tween to the scene
    .addIndicators({name: "video play"}) // Add indicators to the scrollbar							
    .addTo(controller); // Add scene to the controller
};