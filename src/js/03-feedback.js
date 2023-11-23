

import throttle from 'lodash.throttle';   

const form = document.querySelector(".feedback-form");
const formData = {};
const STORAGE_KEY = "feedback-form-state"; 

form.addEventListener("input", throttle(onFeedbackInput, 500)); 
form.addEventListener("submit", onFeedbackSubmit); 
onFeedbackPopulate();

function onFeedbackInput(evt) {
    formData[evt.target.name] = evt.target.value; 
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData)); 
};


function onFeedbackPopulate() {    
const savedMess = JSON.parse(localStorage.getItem(STORAGE_KEY));     
    if (savedMess) {
        form.email.value = savedMess.email || [];
        form.message.value = savedMess.message || [];               
    }
} 
 
function onFeedbackSubmit(evt) {
    evt.preventDefault(); 
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));  
    localStorage.removeItem(STORAGE_KEY); 
    evt.currentTarget.reset();          
};

