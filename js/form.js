var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); // previne o comportamento padrão
    var form = document.querySelector("#form-adiciona");
    
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);
      
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

    

    /*Validar altura
    if (altura <= 0 || altura >= 3.00){            
        alturaEhValida = false;
        tdImc.textContent = "Altura inválida";
        paciente.peso.classList.add("paciente-invalido");
    }*/

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
    
    /*Validar peso*/
    if (paciente.peso <= 0 || paciente.peso >= 200){            
        tdImc.textContent = "Peso inválido";
        paciente.classList.add("paciente-invalido");       
    }else{
        pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));
    }

    return pacienteTr;
}

function montaTd(dado, classe){
    /*Montar e colocar os valores capturados dentro do TD*/
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}