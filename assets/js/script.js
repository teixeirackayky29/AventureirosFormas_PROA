function calculateArea() {
    const raio = parseFloat(document.getElementById("raio").value);
    const area = Math.PI * Math.pow(raio, 2);

    document.getElementById("value").textContent = area.toFixed(2);
}

function calculartriangulo() {

    const base = parseFloat(document.getElementById("base").value);
    const alt = parseFloat(document.getElementById("alt").value);

    const area = (base * alt) / 2;

    document.getElementById("value").textContent = area.toFixed(2);
}

function calcularquadrado() {
    const lado = parseFloat(document.getElementById("area_qua").value);
  
    const area = Math.pow(lado, 2);
 
    document.getElementById("value").textContent = area.toFixed(2);
}

function calcularCubo(){
    const lado = parseFloat(document.getElementById("area_cubo").value);
  
    const area = 6 * Math.pow(lado, 2);
 
    document.getElementById("value").textContent = area.toFixed(2);
}

function calcularRtngl(){
    const base = parseFloat(document.getElementById("base").value);
    const alt = parseFloat(document.getElementById("alt").value);

    const area = base * alt;

    document.getElementById("value").textContent = area.toFixed(2);
}

function calcularRomboedro() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);

    const area = 2 * (a * b + a * c + b * c);

    document.getElementById("value").textContent = area.toFixed(2);
}

function calcularTrapezio() {
    const baseMaior = parseFloat(document.getElementById("baseMaior").value);
    const baseMenor = parseFloat(document.getElementById("baseMenor").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const area = (baseMaior + baseMenor) * altura / 2;

    document.getElementById("value").textContent = area.toFixed(2);
}


function calcularPentagono(){
    const apotema = parseFloat(document.getElementById("apotema").value);
    const lado = parseFloat(document.getElementById("lado").value);

    const perimetro = 5 * lado;
    const area = (perimetro * apotema) / 2;

    document.getElementById("value").textContent = area.toFixed(2);
}

function calcularHexagono() {
    const lado = parseFloat(document.getElementById("lado").value);

    const area = (3 * Math.sqrt(3) * Math.pow(lado, 2)) / 2;

    document.getElementById("value").textContent = area.toFixed(2);
}

function calcularHeptagono(){
    const lado = parseFloat(document.getElementById("lado").value);

    const cotangente = 1 / Math.tan(Math.PI / 7);
    const area = (7 * Math.pow(lado, 2) * cotangente) / 4;

    document.getElementById("value").textContent = area.toFixed(2);

}


function calcularCuboide(){
    const comprimento = parseFloat(document.getElementById("comprimento").value);
    const largura = parseFloat(document.getElementById("largura").value);
    const altura = parseFloat(document.getElementById("altura").value);

    const area = 2 * (comprimento * largura + comprimento * altura + largura * altura);

    document.getElementById("value").textContent = area.toFixed(2);

}