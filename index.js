setInterval(() => {
    d = new Date();
   let htime= d.getHours();
   let mtime = d.getMinutes();
   let stime= d.getSeconds();
   let hrotation = 30*htime + mtime/2;
   let mrotation = 6*mtime;
   let srotation = 6*stime;

    let hourclock= document.getElementById("hour");
    let minuteclock = document.getElementById("minute");
    let secondclock = document.getElementById("second");

    hourclock.style.transform=`rotate(${hrotation}deg)`;
    minuteclock.style.transform=`rotate(${mrotation}deg)`;
    secondclock.style.transform=`rotate(${srotation}deg)`;

},1000)
setInterval(()=>{
d= new Date();
let htime= d.getHours();
let mtime = d.getMinutes();
let stime= d.getSeconds();
let digitalTime= document.getElementById('digitalTime');
let amPm;
if(htime>=12){
     amPm= "PM";
}else{
     amPm="AM";
}
if(stime<=9){
    stime= "0"+stime;
}else{
    stime=stime;
}
if(htime>12){
    htime=htime-12;
}
if(htime<=9){
    htime= "0"+htime;
}else{
    htime=htime;
}
if(mtime<=9){
    mtime= "0"+mtime;
}else{
    mtime=mtime;
}

digitalTime.innerHTML= "Digital Time- "+ htime+":"+mtime+":"+stime+" "+ amPm;


},1000)


