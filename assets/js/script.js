function clicou1() {
    let sliders = document.querySelector(".sliders");
    let botao1 = document.querySelector(".pointer1");
    let botao2 = document.querySelector(".pointer2");
    let botao3 = document.querySelector(".pointer3");


    sliders.style.marginLeft = "-0vw";
    botao2.classList.remove("activedpointer");
    botao3.classList.remove("activedpointer");
    botao1.classList.add("activedpointer");
}
function clicou2() {
    let sliders = document.querySelector(".sliders");
    let botao1 = document.querySelector(".pointer1");
    let botao2 = document.querySelector(".pointer2");
    let botao3 = document.querySelector(".pointer3");


    sliders.style.marginLeft = "-100vw";
    botao1.classList.remove("activedpointer");
    botao3.classList.remove("activedpointer");
    botao2.classList.add("activedpointer");
}
function clicou3() {
    let sliders = document.querySelector(".sliders");
    let botao1 = document.querySelector(".pointer1");
    let botao2 = document.querySelector(".pointer2");
    let botao3 = document.querySelector(".pointer3");


    sliders.style.marginLeft = "-200vw";
    botao1.classList.remove("activedpointer");
    botao2.classList.remove("activedpointer");
    botao3.classList.add("activedpointer");
}