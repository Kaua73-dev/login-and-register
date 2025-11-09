
let buttonCreate = document.getElementById('Create');
let buttonRegister = document.getElementById('register');

// funções registrar e logar;
if(buttonCreate){
    buttonCreate.addEventListener('click', function(e){
        e.preventDefault();

        let loginRegisterNum = document.getElementById('loginRegister').value;
        let passwordRegisterNum = document.getElementById('passwordRegister').value;

        if(loginRegisterNum === '' || passwordRegisterNum === ''){
            alert('Please, fill in all fields.');
            return; 
        }


        localStorage.setItem('loginRegistrado', loginRegisterNum);
        localStorage.setItem('senhaRegistrado', passwordRegisterNum);

        alert('account registered successfully!');

        window.location.href = 'login.html'

    });
}


let loginField = document.getElementById('login');

if(loginField){
   document.querySelector('form').addEventListener('submit', function(e){

e.preventDefault();

        let loginNum = document.getElementById('login');
        let passwordNum = document.getElementById('password');


        let localLogin = localStorage.getItem('loginRegistrado');
        let localPassword = localStorage.getItem('senhaRegistrado');


        if(loginNum.value === localLogin && passwordNum.value === localPassword){
            alert('Logged in successfully!');
           window.location.href = 'home.html'
        } else{
            alert('Incorrect password or login');
        }

   })
        



   
}


if(buttonRegister){
    buttonRegister.addEventListener('click', function(e){
        e.preventDefault();
        window.location.href = 'register.html'
    });
}