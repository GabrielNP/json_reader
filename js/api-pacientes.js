var botaoIntegrar = document.querySelector("#integrar-pacientes");

botaoIntegrar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest(); // objeto do JS responsável por fazer requisiçÕes HTTP

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // método que especifica o tipo de requição e para onde

    xhr.addEventListener("load", function(){  // evento load diz quando a resposta da requisição já foi carregada
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);

        pacientes.forEach(function(paciente){
            adicionaPacienteNaTabela(paciente);
        });

    });

    xhr.send(); // método que envia a requisição
});