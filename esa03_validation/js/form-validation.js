var validNamePattern = /^[A-Za-z]+[A-Za-z0-9]{0,100}$/;
(document.getElementById('name')).addEventListener('input', function (event) {
    console.log("Changing name.");
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
    var parentalConsent = document.getElementById('parental-consent');
    if (!birthday.checkValidity()) {
        birthday.setCustomValidity('Please enter your date of birth.');
    }
    else if (!isOldEnough(birthday) && !parentalConsent.value) {
        consentContainer.classList.remove('hide');
        parentalConsent.required = true;
        parentalConsent.setCustomValidity('Please have your parents consent to your application.');
        parentalConsent.reportValidity();
    }
    else if (isOldEnough(birthday)) {
        consentContainer.classList.add('hide');
        birthday.setCustomValidity('');
        parentalConsent.required = false;
        parentalConsent.setCustomValidity('');
    }
});
function isOldEnough(birthday) {
    var date = birthday.value.split('-');
    var yearOfBirth = Number(date[0]);
    var monthOfBirth = Number(date[1]);
    var dayOfBirth = Number(date[2]);
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();
    console.log("Is old enough: " +
        !(currentDay < dayOfBirth &&
            currentMonth < monthOfBirth &&
            currentYear - yearOfBirth <= 18));
    return !(currentDay < dayOfBirth &&
        currentMonth < monthOfBirth &&
        currentYear - yearOfBirth <= 18);
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
//# sourceMappingURL=form-validation.js.map