
var second =  ['play frisbee', 
'run', 'dance in the mirror', 'watch anime', 
'play ping pong', 'play badminton', 'skateboard',
'play Pokemon Go', 'play piano', 'discover new music', 
'cook Chinese food', 'bake banana bread', 'teach', 
'code', 
'spend time with my friends'];

var j = 0;

var maxsecond = second.length - 1;

setInterval(displayHello, 2000);

function displayHello() {
    document.getElementById("ilike").innerHTML = second[j] + "!";
    if (j < maxsecond) j++; else j = 0;

  }

var x = 5; 
document.getElementById("check").innerHTML =
"The value of x is: " + x; 
 