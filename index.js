// $(".wrapperBody").mousemove(function(event) {
//     const xPos = event.offsetX;
//     const yPos = event.offsetY;
//     var randSize = Math.random()*25+26;
//     var $heartElement = $("<div/>").addClass("heart").css({"left": xPos+"px","top": yPos + "px","height": randSize+"px", "width": randSize + "px"});
//     $(".wrapperBody").append($heartElement);
//     setTimeout(function() {
//         $($heartElement).remove();
//     }, 5000);
// });


setInterval(() => {
    var vW = $(window).width();
    var randSizeBlue = Math.random()*25+26;
    var randPosX = Math.random()*vW+1;
    var $blueHeartElement = $("<div/>").addClass("blueheart").css({"left": randPosX+"px","height": randSizeBlue+"px", "width": randSizeBlue + "px"});    
    $(".wrapperBody").append($blueHeartElement);
    setTimeout(function() {
                $($blueHeartElement).remove();
            }, 10000);
}, 150);

