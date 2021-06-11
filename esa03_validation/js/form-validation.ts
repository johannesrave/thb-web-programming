const validNamePattern = /^[A-Za-z]+[A-Za-z0-9]{0,100}$/;

(document.getElementById('name')).addEventListener('input', (event) => {
    console.log("Changing name.")
    const name = event.currentTarget as HTMLInputElement;
    if (!name.value.match(validNamePattern)) {
        name.setCustomValidity('Name can\'t be empty, must start with a letter, consist of letters and numbers and be under 100 characters long.');
        name.reportValidity();
    } else {
        name.setCustomValidity('');
        console.log("Name is valid.")
    }
});

(document.getElementById('email')).addEventListener('input', (event) => {
    console.log("Changing email.")
    const email = event.currentTarget as HTMLInputElement;
    if (!email.checkValidity()) {
        email.setCustomValidity('Please enter a valid email address.');
        email.reportValidity();
    } else {
        email.setCustomValidity('');
        console.log("Email is valid.")
    }
});

(document.getElementById('bio')).addEventListener('input', (event) => {
    const bio = event.currentTarget as HTMLInputElement;
    if (bio.value.length > 140) {
        bio.setCustomValidity('Please keep your bio to 140 characters or less.');
        bio.reportValidity();
    } else {
        bio.setCustomValidity('');
        console.log("Bio is valid.")
    }
});


(document.getElementById('birthday')).addEventListener('input', (event) => {
    console.log("Changing birthday.")
    const birthday = event.currentTarget as HTMLInputElement;
    const consentContainer = (document.getElementById('consent-container'))
    const parentalConsent = (document.getElementById('parental-consent') as HTMLInputElement);

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
    const date = birthday.value.split('-');
    const yearOfBirth = Number(date[0]);
    const monthOfBirth = Number(date[1]);
    const dayOfBirth = Number(date[2]);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();

    console.log("Is old enough: " +
        !(currentDay < dayOfBirth &&
        currentMonth < monthOfBirth &&
        currentYear - yearOfBirth <= 18))

    return !(currentDay < dayOfBirth &&
        currentMonth < monthOfBirth &&
        currentYear - yearOfBirth <= 18);
}

(document.getElementById('password') as HTMLInputElement)
    .addEventListener('input', checkPasswordValidity);
(document.getElementById('password-conf') as HTMLInputElement)
    .addEventListener('input', checkPasswordValidity);

function checkPasswordValidity() {
    const password = (document.getElementById('password') as HTMLInputElement);
    const password2 = (document.getElementById('password-conf') as HTMLInputElement);

    if (password.value !== password2.value) {
        password2.setCustomValidity('Password and confirmation must match.');
    } else {
        password2.setCustomValidity('');
        console.log("Password valid")
    }
}
