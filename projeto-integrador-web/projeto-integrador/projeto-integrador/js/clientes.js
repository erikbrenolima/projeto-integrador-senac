

function cadastrarPF(){
let clientePF = JSON.parse(localStorage.getItem('clientesPF') || '[]')
let nomeCompleto = document.querySelector('#nome');
let cpf = document.querySelector('#cpf');
let rg = document.querySelector('#rg');
let telefone = document.querySelector('#telefone');
let email = document.querySelector('#email');
let endereco = document.querySelector('#endereco');
let cep = document.querySelector('#cep');
let estado = document.querySelector("#UF");
let cidade = document.querySelector('#cidade');
let obs = document.querySelector('#obs');



clientePF.push(
{
    clientePF_nomeCompleto: nomeCompleto.value,
    clientePF_cpf: cpf.value,
    clientePF_rg: rg.value,
    clientePF_telefone: telefone.value,
    clientePF_email: email.value,
    clientePF_endereco: endereco.value,
    clientePF_cep: cep.value,
    clientePF_estado: estado.value,
    clientePF_cidade: cidade.value,
    clientePF_observacao: obs.value
}
)
    
localStorage.setItem('clientePF', JSON.stringify(clientePF));
}