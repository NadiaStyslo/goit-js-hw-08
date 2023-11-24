import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const formData = {};
const STORAGE_KEY = 'feedback-form-state';

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFeedbackSubmit);

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onFeedbackPopulate() {
  const savedMess = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedMess) {
    form.email.value = savedMess.email || '';
    form.message.value = savedMess.message || '';
  }
}
onFeedbackPopulate();
function onFeedbackSubmit(evt) {
  evt.preventDefault();
  if (!form.email.value || !form.message.value) {
    console.log('Error! Заповніть всі поля форми!');
  } else {
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
    localStorage.removeItem(STORAGE_KEY);
    formData.email = '';
    formData.message = '';
    evt.currentTarget.reset();
  }
}
