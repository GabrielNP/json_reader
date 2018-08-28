var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); // previne o comportamento padrão
    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        var mensagemErro = document.querySelector("#mensagem-erro");
        mensagemErro.textContent = erros;
        return;
    }

    if(erro.length >0){
        return;
    }

    if (!validaPaciente(paciente)) {
        console.log("Paciente inválido");
        return;
    }
      
    var tabela = document.querySelector("#tabela-pacientes");

    tabela.appendChild(pacienteTr);

    form.reset();
    
});

function obtemPacienteDoFormulario(form){
    // Captura as informações do paciente no form
    // objeto paciente
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value,form.altura.value)
    }

    return paciente;
}

function montaTr(paciente){
    /*Criar TR e TD*/
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    /*Colocar o TD do paciente na tabela*/
    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));
    
    return pacienteTr;
}

function montaTd(dado, classe){
    /*Montar e colocar os valores capturados dentro do TD*/
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}

function validaPaciente(paciente){

    var erros = [];

    if (!validaPeso(paciente.peso))erros.push("O peso é inválido");

    if(!validaAltura(paciente.altura)) erros.push("A altura é inválida");
}