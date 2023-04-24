let hr = document.querySelector("#hr")
let sec = document.querySelector("#sec")
let min = document.querySelector("#min")


setInterval(()=>{
    let day = new Date();
    let hh = day.getHours() * 30; //360deg
    let mn = day.getMinutes() * 6;
    let sc = day.getSeconds()* 6;

    hr.style.transform = `rotateZ(${hh+(mn/12)}deg)`;
    min.style.transform= `rotateZ(${mn}deg)`;
    sec.style.transform =`rotateZ(${sc}deg)`;

    // Digital

    let hours = document.querySelector("#hours");
    let minutes = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds");
    let amPm = document.querySelector("#ampm");

    let h = day.getHours();
    let m = day.getMinutes();
    let s = day.getSeconds();
    let apm = h > 12 ? "PM" : "AM" ;

    if(h>12){       //Always 12's show
        h = h - 12;
    }


    h = (h<10) ? "0" + h : h; // Add zero before single numbers
    m = (m<10) ? "0" + m : m;
    s = (s<10) ? "0" + s : s;

    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;
    amPm.innerHTML = apm ;

})