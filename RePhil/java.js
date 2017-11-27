$('#div1').mouseover(function() {
  $(this).toggleClass('pushObject');
});


$(function() {
    var rotation = 0, 
        scrollLoc = $(document).scrollTop();
    $(window).scroll(function() {
        var newLoc = $(document).scrollTop();
        var diff = scrollLoc - newLoc;
        rotation += diff, scrollLoc = newLoc;
        var rotationStr = "rotate(" + - (rotation/4) + "deg)";
        $("#sun").css({
            "transform": rotationStr,
        });
    });
})


//http://jsfiddle.net/fgzfnjgt/