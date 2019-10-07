var botaoIntegrar = document.querySelector("#integrar-pacientes");

botaoIntegrar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest(); // objeto do JS responsável por fazer requisiçÕes HTTP

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes"); // método que especifica o tipo de requição e para onde

    xhr.addEventListener("load", function(){  // evento load diz quando a resposta da requisição já foi carregada
    var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){
            var resposta = xhr.responseText;
            //console.log(resposta);
            var pacientes = JSON.parse(resposta);
            
            var count = Object.keys(pacientes).length;
            //console.log(count);            
            erroAjax.classList.add("invisivel");

            /*for (x=0;count;x++) {
                console.log(pacientes[x]['peso']);
            }

            for (key in pacientes) {
                if (pacientes.hasOwnProperty(key)) {
                    var value = pacientes[key];
                    console.log(value);
                }
            }*/

            var buz = {
                firstName: "John",
                lastName: "Smith",
                isAlive: true,
                age: 27,
                address: {
                  streetAddress: "21 2nd Street",
                  city: "New York",
                  state: "NY",
                  postalCode: "10021-3100"
                }}
            ;
              console.log(buz['address']['streetAddress']);
              for (var name in buz) {
                if (buz.hasOwnProperty(name)) {
                  console.log( name + ": \t" + buz[name]);

                  if (name == "address") {
                      for (var obj in name) {
                          if(name.hasOwnProperty(obj))
                            console.log(obj + "\t" + name[obj]);
                      }
                  }
                }
                else {
                  console.log(name); // toString or something else
                }
              }

          /*  pacientes.forEach(function(paciente){
                var nome = (paciente['nome']);
                var peso = (paciente['peso']);
                var altura = (paciente['altura']);
                var gordura = (paciente['gordura']);
                var imc = (paciente['imc']);
                
                adicionaPacienteNaTabela(nome,peso,altura,gordura,imc);
            });*/
        }else{
            console.log("Erro",xhr.status);
            console.log(xhr.response);
            erroAjax.classList.remove("invisivel");
            erroAjax.classList.add("paciente-invalido");
        }
        
    });

    xhr.send(); // método que envia a requisição
});