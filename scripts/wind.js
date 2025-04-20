//setInterval(onWindTimerTick, 10000); // 33 milliseconds = ~ 30 frames per sec
var windVal = 0
var windDir = 0

function onWindTimerTick() {
    windVal = getRandomIntInclusive(0,10);
    windDir = getRandomIntInclusive(0,359);
    
    const e = document.getElementById('wind');
    e.innerText = "Wind: " + windVal.toString() + " Heading: " + windDir.toString();
}

function getWindComponents(){
    var x = Math.sin(windDir * (Math.PI / 180)) * windVal * 5;
    var y = Math.cos(windDir * (Math.PI / 180)) * windVal * -5;
    return [x,y];
}

