const form = document.getElementById("formulario");
const cep = document.getElementById("cep");
const logradouro = document.getElementById("logradouro");
const numero = document.getElementById("numero");
const uf = document.getElementById("uf");
const complemento = document.getElementById("complemento");


// MÁSCARA DO CEP
cep.addEventListener("input", e => {
    let valor = e.target.value.replace(/\D/g, "");

    // Limita o CEP a 8 números
    valor = valor.slice(0, 8);

    // Aplica a máscara usando grupos de captura
    valor = valor.replace(/(\d{5})(\d{0,3})/, "$1-$2");

    e.target.value = valor;
});