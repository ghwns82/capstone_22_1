const email = document.getElementById("email");
const password = document.getElementById("password");
const sneakers = document.getElementById("sneakers");
const sign_up = document.getElementById("sign_up");

function change_color() {
    if (email.value != '' && password.value != '' && sneakers.value != 'defalut') {
        sign_up.style.backgroundColor = "rgba(13, 13, 14, 0.733)";
        sign_up.disabled = false;
    }
    if (email.value === '' || password.value === '' || sneakers.value === 'defalut') {
        sign_up.style.backgroundColor = "hsl(108, 8%, 77%)";
        sign_up.disabled = true;
    }
}