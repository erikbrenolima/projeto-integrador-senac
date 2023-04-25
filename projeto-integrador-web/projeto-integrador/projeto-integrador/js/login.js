
let email = document.querySelector("#email");
let senha = document.querySelector('#senha');
let cadastros = JSON.parse(localStorage.getItem('cadastros') || '[]')
const erroModal = document.getElementById('erro')

cadastros.push(
    {
       email: 'admin@gmail.com',
       senha: 'admin',
       emailFuncionario : 'funcionario@gmail.com',
       senhaFuncionario: 'funcionario'
    }
); 
 
localStorage.setItem('cadastros', JSON.stringify(cadastros));


function logar() {

    let email = document.querySelector("#email");
    let senha = document.querySelector('#senha');
    let cadastros = []
    let validacaoUsuario = {email:'',senha:''}

    cadastros = JSON.parse(localStorage.getItem('cadastros'));

    cadastros.forEach(item => {
        if (email.value == item.email && senha.value == item.senha || email.value == item.emailFuncionario && senha.value == item.senhaFuncionario){
            validacaoUsuario = {
            email: item.email,
            senha: item.senha
            }
        }   
    });
    if(email.value == validacaoUsuario.email && senha.value == validacaoUsuario.senha){
        alert('logado com sucesso')
        window.location.href = 'inicio/inicio.html'
    }else if(email.value != validacaoUsuario.email && senha.value != validacaoUsuario.senha){ 
        email.classList.add('is-invalid');
        senha.classList.add('is-invalid');
        email.focus()
    }
}

