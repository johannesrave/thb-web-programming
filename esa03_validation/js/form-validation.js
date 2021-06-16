/* Validierung */
(document.getElementById('name')).addEventListener('input', function (event) {
    console.log("Changing name.");
    var validNamePattern = /^[A-Za-z]+[A-Za-z0-9]{0,100}$/;
    var name = event.currentTarget;
    if (!name.value.match(validNamePattern)) {
        name.setCustomValidity('Name can\'t be empty, must start with a letter, consist of letters and numbers and be under 100 characters long.');
        name.reportValidity();
    }
    else {
        name.setCustomValidity('');
        console.log("Name is valid.");
    }
});
(document.getElementById('email')).addEventListener('input', function (event) {
    console.log("Changing email.");
    var email = event.currentTarget;
    if (!email.checkValidity()) {
        email.setCustomValidity('Please enter a valid email address.');
        email.reportValidity();
    }
    else {
        email.setCustomValidity('');
        console.log("Email is valid.");
    }
});
(document.getElementById('bio')).addEventListener('input', function (event) {
    var bio = event.currentTarget;
    if (bio.value.length > 140) {
        bio.setCustomValidity('Please keep your bio to 140 characters or less.');
        bio.reportValidity();
    }
    else {
        bio.setCustomValidity('');
        console.log("Bio is valid.");
    }
});
(document.getElementById('birthday')).addEventListener('input', function (event) {
    console.log("Changing birthday.");
    var birthday = event.currentTarget;
    var consentContainer = (document.getElementById('consent-container'));
    var age = getAge(new Date(birthday.value));
    console.log("age: " + age);
    if (age < 18 && !parentalConsentGiven) {
        birthday.setCustomValidity('Please have your parents consent to your application.');
        birthday.reportValidity();
        consentContainer.classList.remove('hide');
    }
    else {
        birthday.setCustomValidity('');
        birthday.reportValidity();
        consentContainer.classList.add('hide');
        console.log("Age is valid.");
    }
});
function getAge(birthDate) {
    var currentDate = new Date();
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    if (currentDate.getMonth() < birthDate.getMonth()) {
        age--;
    }
    else if (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate()) {
        age--;
    }
    return age;
}
document.getElementById('password')
    .addEventListener('input', checkPasswordValidity);
document.getElementById('password-conf')
    .addEventListener('input', checkPasswordValidity);
function checkPasswordValidity() {
    var password = document.getElementById('password');
    var password2 = document.getElementById('password-conf');
    if (password.value !== password2.value) {
        password2.setCustomValidity('Password and confirmation must match.');
    }
    else {
        password2.setCustomValidity('');
        console.log("Password valid");
    }
}
(document.getElementById('parental-consent')).addEventListener('input', function (e) {
    parentalConsentGiven = e.currentTarget.checked;
});
var parentalConsentGiven;
//# sourceMappingURL=form-validation.js.map