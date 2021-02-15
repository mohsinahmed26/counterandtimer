var ms = 0, s = 0, m = 0;
var timer;


var stopwatch = document.querySelector(".stopwatch");
function start(){
    if(!timer){
        timer = setInterval(run, 10);
    }


}


function run() {
 stopwatch.textContent = (m < 10 ? "0"+ m :m) +":"+ (s< 10 ? "0"+ s :s) +":" + (ms< 10 ? "0"+ ms :ms);
 ms++;


 if(ms == 100){
     ms = 0
     s++;

 }
 if(s == 60){
     s=0
     m++;
 }
}
function pause(){
    clearInterval(timer);
    timer = false;
}
function stop(){
    clearInterval(timer);
    timer=false;
    ms = 0
    s = 0
    m = 0
    stopwatch.textContent = (m < 10 ? "0"+ m :m) +":"+ (s< 10 ? "0"+ s :s) +":" + (ms< 10 ? "0"+ ms :ms);

}
function restart(){
    stop();
    start();
}