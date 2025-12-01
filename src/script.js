let i = document.getElementById("inputDiscount");
let p = document.getElementById("inputPrice");
let b = document.getElementById("buttonCalculate");
let r = document.getElementById("title");
let d = document.getElementsByClassName("label");
let o = document.getElementById("app_calculator");
let z;
let t;

function Calcular() {
    r.textContent = "Precio Del producto con descuento";
    o.style.width = "100vh";
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
    t.addEventListener("click", Volver);
    z.appendChild(t);
    o.appendChild(z);
}
function Volver() {
    r.textContent = "Calculadora De Descuentos";
    o.style.width = "50vh";
    p.style.display = "inline";
    i.style.display = "inline";
    b.style.display = "inline";
    z.remove();
    t.remove();
    for (items of d) {
        items.style.display = "inline";
    }
}