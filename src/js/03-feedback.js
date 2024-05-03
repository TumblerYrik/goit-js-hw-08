import throttle from 'lodash.throttle';

const STORAGE__KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const saveFormDataThrottled = throttle(() => {
    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };
    localStorage.setItem(STORAGE__KEY, JSON.stringify(formData));
}, 500);

form.addEventListener('input', saveFormDataThrottled);

window.addEventListener('load', () => {
    const savedFormData = localStorage.getItem(STORAGE__KEY);
    if (savedFormData) {
        const formData = JSON.parse(savedFormData);
        emailInput.value = formData.email;
        messageInput.value = formData.message;
    }
});

form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = {
        email: emailInput.value,
        message: messageInput.value,
    };

    console.log(formData);

    localStorage.removeItem(STORAGE__KEY);
    emailInput.value = '';
    messageInput.value = '';
});
