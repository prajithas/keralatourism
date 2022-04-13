const form=document.getElementById('register_validation');
let timeout;
let password = document.getElementById('validationTooltippassword');
let strengthBadge = document.getElementById('StrengthDisp');
let strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$!%&])[A-Za-z\d$!%&]{8,}$/
let mediumPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$!%&])[A-Za-z\d$!%&]{6,}$/
function StrengthChecker(PasswordParameter){
    if(strongPassword.test(PasswordParameter)) {
        strengthBadge.style.backgroundColor = "green"
        strengthBadge.textContent = 'Strong'
    } else if(mediumPassword.test(PasswordParameter)){
        strengthBadge.style.backgroundColor = 'blue'
        strengthBadge.textContent = 'Medium'
    } else{
        strengthBadge.style.backgroundColor = 'red'
        strengthBadge.textContent = 'Weak'
    }
}
password.addEventListener("input", () => {
    strengthBadge.style.display= 'block'
    clearTimeout(timeout);
    timeout = setTimeout(() => StrengthChecker(password.value), 500);
    if(password.value.length !== 0){
        strengthBadge.style.display != 'block'
    } else{
        strengthBadge.style.display = 'none'
    }
});
let conf_password = document.getElementById('validationTooltipconfpassword');
function password_check(confpassword) {

    if(password.value!=confpassword){
        matcherror.innerHTML='<p>Please enter the same password as above</p>';
        matcherror.style.color='red';
        conf_password.style.border='1px solid red';
        return false;
    }else{ matcherror.style.display='none';conf_password.style.border='1px solid green';return true;}
   
}
form.addEventListener('submit',function(event){
    if(!validate()){
event.preventDefault();
}
})
function validate(){
    let email= document.getElementById('validationTooltipUsername');
    let phone = document.getElementById('validationTooltipphone');
    let regexp= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    let phonexp = /^(?:\+?(\d{1,3}))?[-. ]*(\d{3})[-. ]*(\d{3})[-. ]*(\d{4})$/
   // let passregexp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$!%&])[A-Za-z\d$!%&]{8,}$/
    if(!regexp.test(email.value)){
        emailerror.innerHTML='<p> Please choose a unique and valid email. (e.g., username@example.com). Please try again.</p>';
        emailerror.style.color='red';
        email.style.border='1px solid red';
        return false;
    }else if(!phonexp.test(phone.value)){
        phoneerror.innerHTML='<p>   Please choose a valid phone.The expected format is like XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX </p>';
        phoneerror.style.color='red';
        phone.style.border='1px solid red';
        return false;
     }
     return true;
}
