var scoreboard = 0;

function FindCenter(id){
    const element = document.getElementById(id);
    const cssObj = window.getComputedStyle(element);
    
    var top = parseInt(cssObj.top) || 0;
    var height = parseInt(cssObj.height) || 0;
    var left = parseInt(cssObj.left) || 0;
    var width = parseInt(cssObj.width) || 0;
    
    var x = (width/2) + left;
    var y = (height/2) + top;
    
    return [x, y];
}

function NewImpact(x, y){
    //alert("shot");
    const sight = document.getElementById('sight');
    const newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'bulletHole');
    const parentDiv = document.getElementById('bkground');
    parentDiv.insertBefore(newDiv,sight);
    newDiv.style.position = "absolute";
    var dy = getRandomInt(5) + getWindComponents()[1];
    var dx = getRandomInt(5) + getWindComponents()[0];
    var ctrx = x + dx;
    var ctry = y + dy;
    
    newDiv.style.top = y - 7 + dy + "px";
    newDiv.style.left = x - 7 + dx + "px";
    //alert("rounds complete");
    return [ctrx, ctry];
}
  
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ScoreShot(center){
    var xtgt = 180;
    var ytgt = 240;
    var widthRing = 20;
    var dist = Distance2D(center[0], center[1], xtgt, ytgt);
    if(dist > 6){
        dist = dist - 6;
    }
    var score = 10 - Math.floor(dist/10);
    if(score < 7){
        score = 0;
    }
    return score
}

function Distance2D(x1,y1,x2,y2){
    const d = Math.hypot(x2 - x1, y2 - y1);
    return d;
}

function UpdateScoreboard(score){
    scoreboard = scoreboard + score;
    const e = document.getElementById('score');
    e.innerText = "Score: " + scoreboard.toString();
}