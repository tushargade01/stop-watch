const hamber = document.querySelector('.hamb');
const navBox = document.querySelector('.nav-bar');

const hour = document.querySelector('#js-hour');
const min = document.querySelector('#js-min');
const sec = document.querySelector('#js-sec');
const list = document.querySelector('.list');

const container = document.querySelector('.list-container');

const start = document.querySelector('.js-start');
const stop = document.querySelector('.js-stop');
const tap = document.querySelector('.js-tap');
const reset = document.querySelector('.js-reset');

let interval;
let hourTime = 0;
let minTime = 0;
let secTime = 0;

hamber.addEventListener("click",()=>{
  hamber.classList.toggle('active');
  navBox.classList.toggle('active');
})

function startclock(){
  if(secTime<=9){
    secTime++;
    sec.innerHTML = '0'+secTime;
  }
  if(secTime>9){
    secTime++;
    sec.innerHTML = secTime;
  }
  if(secTime >= 100){
    minTime++;
    secTime=0;
    sec.innerHTML = '0'+secTime;
    if(minTime<=9){
      min.innerHTML = '0'+minTime;
    }
    if(minTime>9){
      min.innerHTML = minTime;
    }
    if(minTime>59){
      hourTime++;
      minTime=0;
      min.innerHTML = '0'+minTime;

      if(hourTime<=9){
        hour.innerHTML = '0'+hourTime;
      }
      if(hourTime>9){
        hour.innerHTML = hourTime;
      }
  }
}
}
function settimer(){
  clearInterval(interval);
  interval = setInterval(startclock,10);
}

function clockStop(){
  clearInterval(interval);
}

function clockReset(){
  clearInterval(interval);
  hourTime = 0;
  minTime = 0;
  secTime = 0;

  hour.innerHTML = '0'+hourTime;
  min.innerHTML = '0'+minTime;
  sec.innerHTML = '0'+secTime;
  
}

function createTap(){
 
  let li = document.createElement('li');

  if(minTime<=9){
    li.innerText = "0"+hourTime+":"+"0"+minTime+":"+secTime;
  }
  if(minTime>9){
    li.innerText = "0"+hourTime+":"+minTime+":"+secTime;
  }
  if(hourTime>9){
    li.innerText = hourTime+":"+minTime+":"+secTime;
    if(minTime<=9){
      li.innerText = hourTime+":"+"0"+minTime+":"+secTime;
    }
    if(minTime>9){
      li.innerText = hourTime+":"+minTime+":"+secTime;
    }
  }

  //console.log(revrselist);
  list.appendChild(li);
}

