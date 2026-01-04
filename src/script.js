let i = document.getElementById("inputDiscount");
let p = document.getElementById("inputPrice");
let b = document.getElementById("buttonCalculate");
let r = document.getElementById("title");
let d = document.getElementsByClassName("label");
let o = document.getElementById("app_calculator");
let z;
let t;

function Calcular() {
    p.style.display = "none";
    i.style.display = "none";
    b.style.display = "none";
    for (items of d) {
        items.style.display = "none";
    }
    let result = p.value * (1 - i.value / 100)
    z = document.createElement("h2");
    t = document.createElement("button");
    z.textContent = result + "$";
    t.textContent = "Volver";
    t.setAttribute('class', 'button_special');
    o.classList.add = "o_a";    
    t.addEventListener("click", Volver);
    z.appendChild(t);
    o.appendChild(z);
}
function Volver() {
    r.textContent = "Calculadora De Descuentos";
    o.style.width = "50vh";
    p.style.display = "";
    i.style.display = "";
    b.style.display = "";       
    z.remove();
    t.remove();
    for (items of d) {
        items.style.display = "inline";
    }
}