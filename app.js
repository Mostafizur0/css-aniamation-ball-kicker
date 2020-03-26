(function () {
    console.log('doc ready')
    console.log(document.getElementById("counterbutton"))
}) ();

let counter = 0
var id1;

function myFunction() {
    counter++;
    document.getElementById("countervalue").innerText = counter

    var ball = document.getElementById("ball");

    const element = document.querySelector('#ball');
    const style = getComputedStyle(element);
    const posi = style.top;
    var dest = parseInt(posi.replace("px", "")) - 100;
    var pos = dest + 100;
    var fin = pos;
    var transition = "up";

    const minHight = document.getElementById("ball-window").clientHeight - 180;

    if(id1 != null) {
        clearInterval(id1);
    }

    id1 = setInterval(frame, 10);
    function frame() {
        if (transition == "down" && pos == minHight) {
            clearInterval(id1);
            id1 = null;
        } else {
            if(transition == "up") {
                pos-=1;
                ball.style.top = pos+"px";

                if(pos == dest) {
                    transition = "down";
                }
            } else {
                if(dest < 102) {
                    clearInterval(id1);
                    id1 = null;
                } else {
                    pos+=1;
                    ball.style.top = pos+"px";
                }
            }
        }
    }

    if(dest < 102) {
        document.getElementById("increasebutton").style.visibility='hidden';
    }
}
