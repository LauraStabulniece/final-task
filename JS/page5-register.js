function formSubmit() {
    let pass = document.getElementById('pass1').value;
    let repass = document.getElementById('pass2').value;

    if (pass !== repass) {
        alert('Passwords must match!');
        return false;
    } else {
        alert('Passwords match')
        return true;
    }
}
