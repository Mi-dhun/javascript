function Neymar(){
alert ('Button Click Here')
}
var head=document.getElementById('head1');
head.addEventListener('mouseover',()=>{
    head.style.color='red';
})
function leave(){
    head.style.color='black';
}
function display(event){
    console.log (event.target.value);
}
var text=document.getElementById('text');
function changeColor(){
    text.style.backgroundColor='pink'

}
var text=document.getElementById('text');
function resetColor() {
    text.style.backgroundColor = 'white';
}
function submitted(){
    alert('form submitted successfully')
}
// regular expression
let email=document.getElementById('email');
let error=document.getElementById('error');
let regex=/^([a-zA-Z0-9\.-_#]+)@ ([a-zA-Z0-9]+).([a-z]{2,3})(.[a-z]{2,3})?$/
function validate(){
if (regex.test(email.value)){
    error.textContent='Email is valid';
    error.style.color='green';
    return true;

}
else{
    error.textContent='Email is invalid';
    error.style.color='red';
    return false;
}

}
function verify(){
    let number=document.getElementById('number');
    let errormsg=document.getElementById('errormsg');
    try{
        let x=number.value; 
        if(x<5)throw 'number is low'  
        if(x>10)throw'number is high' 
    }catch(error){
        //console.log(`the error is ${error}`);
        errormsg.textContent=`The error is ${error}`;
    }


}