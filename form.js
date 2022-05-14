//animaciok
const tl = gsap.timeline({defaults: {duration: 0.75, ease: "power1.out"}});

tl.fromTo('.container', {scale: 0}, {scale: 1, ease: "elastic.out(1.2, 1)", duration: 3.5});
tl.fromTo('.pizzalogo', {opacity: 0, x:-250, rotation: '-45deg'}, {opacity: 1, x:0, rotation: '0deg'},'<10%');
tl.fromTo('.text', {x:60, opacity: 0}, {x: 0, opacity: 1}, '<');

tl.fromTo('.pizzalogo', {y:0, rotation: '0deg'}, {y:-20, rotation:'-10deg', yoyo: true, repeat:4},'<10%');

const button = document.querySelector('button');
button.addEventListener('click', () => {
    gsap.to('.container', {opacity: 0, y: 100, duration: 2, ease: 'power1.out'});
})


//a mezok zold es pirossa tetele ha hianyzik info
document.getElementById("login").addEventListener("click", function(){

    var username = document.querySelector("#username");
    var password = document.querySelector("#password");

    if (username.value == "" && password.value == ""){

        username.classList.remove("border-success");
        password.classList.remove("border-success");
        username.classList.add("border-danger");
        password.classList.add("border-danger");
    }
    else if (username.value == ""){

        username.classList.remove("border-success");
        username.classList.add("border-danger");
        password.classList.remove("border-danger");
        password.classList.add("border-success");

    }
    else if (password.value == ""){

        username.classList.remove("border-danger");
        username.classList.add("border-success");
        password.classList.remove("border-success");
        password.classList.add("border-danger");
    }
    else {

        username.classList.remove("border-danger");
        password.classList.remove("border-danger");
        username.classList.add("border-success");
        username.classList.add("border-success");
    }

    location.href="pizza.html";

})
