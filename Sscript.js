document.getElementById("meuBotao").onclick = function(){
    var valor = document.getElementById("meuInput").value;
    if (valor === "Olá" || valor ==="Ola" || valor ==="olá" || valor ==="ola"){
        alert("Olá para você também.");
    }
    else if (valor === "Oi" || valor === "oi"){
        alert("Oi, Como vai?");
    }
    else {
        alert("Não entendi, tente novamente.")
    }
};