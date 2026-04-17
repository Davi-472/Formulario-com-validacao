// Selecionando os elementos do HTML
const form = document.getElementById("formulario");
const cep = document.getElementById("cep");
const logradouro = document.getElementById("logradouro");
const numero = document.getElementById("numero");
const uf = document.getElementById("uf");
const complemento = document.getElementById("complemento");



// VALIDAÇÃO DO FORMULÁRIO
form.addEventListener("submit", e => {
    // Impede o envio automático
    e.preventDefault();
    // ===== CEP =====
    if (cep.value.trim() === "") {
        alert("O CEP é obrigatório.");
        return;
    }
    // Remove tudo que não for número
    const cepLimpo = cep.value.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
        alert("Digite um CEP válido com 8 números.");
        return;
    }

    // Verifica formato final 00000-000
    if (!/^(\d{5})-(\d{3})$/.test(cep.value)) {
        alert("O CEP deve estar no formato 00000-000.");
        return;
    }


    // ===== LOGRADOURO =====
    if (logradouro.value.trim() === "") {
        alert("O logradouro é obrigatório.");
        return;
    }

    if (logradouro.value.trim().length < 5) {
        alert("O logradouro deve ter no mínimo 5 caracteres.");
        return;
    }


    // ===== NÚMERO =====
    if (numero.value.trim() === "") {
        alert("O número é obrigatório.");
        return;
    }

    if (!/^\d+$/.test(numero.value)) {
        alert("O número deve conter apenas dígitos.");
        return;
    }


    // ===== UF =====
    if (uf.value.trim() === "") {
        alert("A UF é obrigatória.");
        return;
    }

    if (!/^[A-Z]{2}$/.test(uf.value)) {
        alert("A UF deve conter exatamente 2 letras maiúsculas.");
        return;
    }


    // Se tudo estiver válido
    alert("Endereço cadastrado com sucesso");
});



// MÁSCARA DO CEP

cep.addEventListener("input", e => {

    // Remove tudo que não for número
    let valor = e.target.value.replace(/\D/g, "");

    // Limita a 8 números
    valor = valor.slice(0, 8);

    // Aplica a máscara 00000-000
    valor = valor.replace(/(\d{5})(\d{0,3})/, "$1-$2");

    e.target.value = valor;
});



// CAMPO NÚMERO: SOMENTE DÍGITOS
numero.addEventListener("input", e => {
    e.target.value = e.target.value.replace(/\D/g, "");
});



// CAMPO UF: MAIÚSCULO AUTOMÁTICO
uf.addEventListener("input", e => {
    //Deixa em maiúsculo automaticamente
    let valor = e.target.value.toUpperCase();

    // Remove tudo que não for letra
    valor = valor.replace(/[^A-Z]/g, "");

    // Limita a 2 letras
    valor = valor.slice(0, 2);

    e.target.value = valor;
});