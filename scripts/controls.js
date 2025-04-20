



function moveUp() {
    const sight = document.getElementById("sight");
    var currentTop = parseInt(window.getComputedStyle(sight).top) || 0;
    sight.style.position = "absolute";
    sight.style.top = (currentTop - 5) + "px";
}

function moveDown() {
    const sight = document.getElementById("sight");
    var currentTop = parseInt(window.getComputedStyle(sight).top) || 0;
    sight.style.position = "absolute";
    sight.style.top = (currentTop + 5) + "px";
}

function moveLeft() {
    const sight = document.getElementById("sight");
    var currentLeft = parseInt(window.getComputedStyle(sight).left) || 0;
    sight.style.position = "absolute";
    sight.style.left = (currentLeft - 5) + "px";
}

function moveRight() {
    const sight = document.getElementById("sight");
    var currentLeft = parseInt(window.getComputedStyle(sight).left) || 0;
    sight.style.position = "absolute";
    sight.style.left = (currentLeft + 5) + "px";
}

function trigger() {
    const sight = document.getElementById("sight");
    var center = FindCenter("sight");
    var ctrShot = NewImpact(center[0],center[1])
    var scored = ScoreShot(ctrShot);
    //alert(scored);
    UpdateScoreboard(scored);
    onWindTimerTick();
}