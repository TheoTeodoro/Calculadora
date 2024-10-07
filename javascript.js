function calcularSoma() {
    var num1 = parseFloat(document.getElementById("numero1").value);
    var num2 = parseFloat(document.getElementById("numero2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira dois números válidos.");
        return;
    }
    
    var soma = num1 + num2;
    
    alert("A soma é: " + soma);
}

document.getElementById("calcularBtn").addEventListener("click", calcularSoma);
