const nameInput = document.querySelector("#userName");
const welcomeContainer = document.querySelector("#mensaje");
const displayedName = document.querySelector("#displayedName");

document.querySelector("#submitBtn").addEventListener("click", function () {
    let user = nameInput.value;

    if (user) {
        displayedName.textContent = user;
        welcomeContainer.classList.remove("hidden");
        user = localStorage.setItem("name", user)
    }
});

function valorPositivo(valor) {

    while (isNaN(valor) || valor == null || valor == "" || valor <= 0) {
        alert("Por favor ingresa un valor válido")
        break;

    }
}

function calcularPrestamo() {
    const monto = parseFloat(document.getElementById("monto").value);
    const interes = parseFloat(document.getElementById("interes").value) / 100;
    const plazo = parseFloat(document.getElementById("plazo").value);

    const cuota = (monto * interes) / (1 - Math.pow(1 + interes, -plazo));
    const totalAPagar = cuota * plazo;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `Cuota mensual: $${cuota.toFixed(2)}<br>Total a pagar: $${totalAPagar.toFixed(2)}`;
}

function calcularInteresPf() {

    const monto = parseFloat(document.getElementById("monto").value);
    const tasaAnual = parseFloat(document.getElementById("interes").value);
    const peridoDias = parseFloat(document.getElementById("plazo").value);
    if (isNaN(monto) || isNaN(tasaAnual) || isNaN(peridoDias)) {
        alert("NO EXISTEN LOS VALORES A CALCULAR")

    } else {
        const tasaGanada = (monto * tasaAnual) / (365 / peridoDias);
        const tasaDiaria = ((tasaAnual / 360)) / 100;
        const interes = (monto * tasaDiaria) * peridoDias;
        const totalAcreditado = monto + interes;
        let comision = peridoDias < 360 ? interes * 0.02 : 0;
        let liquidoARecibir = interes - comision;

        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = `Tasa Diaria: $${tasaDiaria.toFixed(4)}<br>Intereses: $${interes.toFixed(2)}<br>Comisión: $${comision.toFixed(3)}<br><a Style="color:red">Liquido a Resivir:</a> $${liquidoARecibir.toFixed(2)}<br>Capital + intereses: $${totalAcreditado.toFixed(2)}`;

    }

}

function calcularConsumo() {
    const monto = parseFloat(document.getElementById("monto").value);
    const interes = parseFloat(document.getElementById("interes").value) / 100;
    const plazo = parseFloat(document.getElementById("plazo").value);

    const cuota = (monto * interes) / (1 - Math.pow(1 + interes, -plazo));
    const totalAPagar = cuota * plazo;

    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `Cuota mensual: $${cuota.toFixed(2)}<br>Total a pagar: $${totalAPagar.toFixed(2)}`;
}
