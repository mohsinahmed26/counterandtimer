var min;

var sec;

var mm = 0;   

var minute = document.getElementById("min")

var second = document.getElementById("sec")

var countdown;



function set(){

    sec = parseInt(prompt("Enter Second",0))
    second.innerHTML=sec
    min = parseInt(prompt('Enter Minutes',0))
    minute.innerHTML=min
    pause()
    var btnStart=document.getElementById("start")
        btnStart.className="btn btn-outline-info"

}

function count(){
    mm++
    if(mm==100){

        sec--
        mm=0
        second.innerHTML=sec

    }

    else if(min > 0 && sec==0){
        min--
        sec = 60
        second.innerHTML=sec
        minute.innerHTML=min
    }

    else if (sec==0&&min==0){

        clearInterval(countdown)
        sec=0
        min=0

        sec.innerHTML=sec
        minute.innerHTML=min
    
        var btnStart=document.getElementById("start")
        btnStart.className="btn btn-outline-info"

    }


}

function start(){

    countdown=setInterval(count,10)
    var btnStart=document.getElementById("start")
    btnStart.className+=" disabled"

}


function pause(){

    clearInterval(countdown)
    var btnStart=document.getElementById("start")
        btnStart.className="btn btn-outline-info"

}


function reset(){

    min=00;
    sec=00;
    minute.innerHTML=min
    second.innerHTML=sec
    pause()

}