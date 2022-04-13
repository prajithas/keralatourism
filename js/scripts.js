const form=document.getElementById('login_validate');

form.addEventListener('submit',function(event){
    if(!validate()){
event.preventDefault();
}
})
function validate(){
    let email= document.getElementById('exampleInputEmail1');
    let password = document.getElementById('exampleInputPassword1');
    let regexp= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    let pswlen = password.value.length;
    let passregexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$!%&])[A-Za-z\d$!%&]{8,}$/
    if(regexp.test(email.value) && passregexp.test(password.value)){
       return true;
    }
    else{
        error.innerHTML='<p><i class="bi bi-exclamation-triangle"></i>  You entered an incorrect username or password. Please try again.</p>';
        error.style.color='black';
        error.style.backgroundColor='#fadcd9';
        error.style.padding='20px';
        return false;
    }
    
}