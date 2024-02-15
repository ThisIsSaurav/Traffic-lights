//Ye project mene initial phases me bnaya tha

let red = document.getElementById("red");
let yellow = document.getElementById("yellow");
let green = document.getElementById("green");

let start_btn = document.getElementById("start-btn");
let stop_btn = document.getElementById("stop-btn");
let count = document.getElementById("counting")

let a;

start_btn.addEventListener("click", function () {
    a = 11;
    start_btn.setAttribute("hidden", true);
    stop_btn.removeAttribute("hidden");
    
    red.classList.toggle("red-on");
    count.classList.add("btn-bg-red");


    setInterval(() => {
        count.innerHTML = --a;
        if (count.innerHTML == 0 && count.classList.contains("btn-bg-red")) {
            a = 11;
            count.classList.remove("btn-bg-red");
            count.classList.add("btn-bg-green");
            red.classList.remove("red-on");
            green.classList.add("green-on");
            yellow.classList.remove("yellow-on");

        }
        else if(count.innerHTML == 3 && count.classList.contains("btn-bg-red")){
            red.classList.remove("red-on");
            yellow.classList.add("yellow-on");
        }
        else if(count.innerHTML == 0 && count.classList.contains("btn-bg-green")){
            count.classList.remove("btn-bg-green");
            count.classList.add("btn-bg-red");
            green.classList.remove("green-on");
            red.classList.add("red-on");
            a=11;
        }

    }, 1000);

})

stop_btn.addEventListener("click",function () {
    count.innerHTML = "";
    red.classList.remove("red-on");
    yellow.classList.remove("yellow-on");
    green.classList.remove("green-on");
    count.classList.remove("btn-bg-red");
    count.classList.remove("btn-bg-green");
    clearInterval(1);

    start_btn.removeAttribute("hidden");
    stop_btn.setAttribute("hidden",true);

})