const pantalla = document.querySelector(".numero-pantalla");
const resultado = document.querySelector(".numero-resultado");
const botones = document.querySelectorAll(".boton");
const igual = document.querySelector(".resultado");

let operacion = "";
let seUsoResultado = false;

botones.forEach(boton => {
    boton.onclick = () => {
        let valor = boton.textContent;

        if (valor === "AC") {
            operacion = "";
            pantalla.textContent = "";
            resultado.textContent = "";
            return;
        }

        if (valor === "x") {
            valor = "*";
        }

        if (seUsoResultado && (valor === "+" || valor === "-" || valor === "*" || valor === "/")) {
            operacion = resultado.textContent + valor;
            pantalla.textContent = resultado.textContent + boton.textContent;
            seUsoResultado = false;
        } else if (seUsoResultado) {
            operacion = valor;
            pantalla.textContent = valor;
            resultado.textContent = "";
            seUsoResultado = false;
        } else {
            operacion += valor;
            pantalla.textContent += boton.textContent;
        }
    };
});

igual.onclick = () => {
    try {
        let r = eval(operacion);
        resultado.textContent = r;
        seUsoResultado = true;
    } catch {
        resultado.textContent = "Error";
    }
};
