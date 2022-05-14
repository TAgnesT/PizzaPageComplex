//animaciok

const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out"}});

tl.fromTo('.container', {scale: 0}, {scale: 1, ease: "elastic.out(1.2, 1)", duration: 3.5});
tl.fromTo('.pizzalogo', {opacity: 0, x:-250, rotation: '-45deg'}, {opacity: 1, x:0, rotation: '0deg'},'<10%');
tl.fromTo('.text', {x:60, opacity: 0}, {x: 0, opacity: 1}, '<');

tl.fromTo('.pizzalogo', {y:0, rotation: '0deg'}, {y:-20, rotation:'-10deg', yoyo: true, repeat:4},'<10%');
tl.fromTo('.letsorder', {y:0, rotation: '0deg'}, {y:-20, yoyo: true, repeat:4},'<40%');



//tablazathoz adasa a bevitt ertekeknek ehhez var felvetelw

var pizzahow = document.getElementById("pizzahow");
var pizzatop = document.getElementById("pizzatop");
var pizzamuch = document.getElementById("pizzamuch");
var table = document.querySelector("table");
var form = document.querySelector("form");

//a form-hoz funkcio adasa

form.addEventListener("submit", function(e){

    e.preventDefault();

    addPizza();
})

//meghatarozom az addbook funkcio mit csinaljon, tegye be a bevitt ertekeket a tablazatba

function addPizza(){

    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerText = pizzahow.value;
    td2.innerText = pizzatop.value;
    td3.innerText = pizzamuch.value;

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    table.appendChild(tr);

    pizzahow.value = "";
    pizzatop.value = "";
    pizzamuch.value = "";

}

//bizonyos ora utan sotetre valtozik a tema

var hour = new Date().getHours();

if(hour > 18) {
    document.body.style.backgroundColor = "#111";

    table.classList.add("table-dark");
    form.classList.add("bg-dark");
    form.classList.add("text-light");

}








