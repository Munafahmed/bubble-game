function makebubble() {
    var bubble = "";

    for (var i = 1; i <= 168; i++) {
        rn = Math.floor(Math.random() * 10);
        bubble += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector('#lowpannel').innerHTML = bubble;
}

var timer = 30;
function countdown() {
    // set interval is a fuction for You can see here 1000 = 1 second 
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#Timer").innerHTML = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#lowpannel").innerHTML =`<h1> Game Over </h1>`;
        }
    }, 1000)
}

var hit_inc = 0;
function hitvalue(){
    hit_inc= Math.floor(Math.random()*10);
    document.querySelector("#hitcount").textContent = hit_inc;
}

var inc_score = 0;
function score(){
    inc_score = inc_score + 10;
    document.querySelector('#score').textContent = inc_score;
};

document.querySelector("#lowpannel").addEventListener("click",function(details){
    var click_button = Number(details.target.textContent);
    if (click_button === hit_inc){
        score();
        makebubble();
        hitvalue();
    }
})


let btn = document.createElement('button');
btn.innerHTML = "Start game";

let parent = document.querySelector("#lowpannel");
parent.append(btn);

btn.setAttribute("class", "btn");

btn.addEventListener("click", function () {
    btn.remove();
    makebubble();
    countdown();
    hitvalue();

})



