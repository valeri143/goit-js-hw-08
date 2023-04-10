
import throttle from "lodash.throttle";
const form = document.querySelector(".feedback-form");
const DATA_KEY = "feedback-form-state";
const data = {};
form.addEventListener('input', throttle(saveOnLocaleStorage, 500));
form.addEventListener('submit', clearLocaleStorage);

function saveOnLocaleStorage (evt){
   data[evt.target.name] = evt.target.value;
   localStorage.setItem("DATA_KEY", JSON.stringify(data))
}

function clearLocaleStorage (evt){
    evt.preventDefault();
    evt.currentTarget.reset();
    console.log(JSON.parse(localStorage.getItem("DATA_KEY")))
    localStorage.removeItem("DATA_KEY")
}

function currentValueForm(){
    const savedMessageEmail = JSON.parse(localStorage.getItem("DATA_KEY")).email;
     const savedMessageMessage = JSON.parse(localStorage.getItem("DATA_KEY")).message;
     if(savedMessageEmail || savedMessageMessage){
    form.email.value = savedMessageEmail;
    form.message.value = savedMessageMessage;
    return;
} 
}
currentValueForm()
