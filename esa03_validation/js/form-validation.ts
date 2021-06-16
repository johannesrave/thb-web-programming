

/* Validierung */
(document.getElementById('name')).addEventListener('input', (event) => {
    console.log("Changing name.")

    const validNamePattern = /^[A-Za-z]+[A-Za-z0-9]{0,100}$/;

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
    const age = getAge(new Date(birthday.value));
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
        console.log("Age is valid.")
    }
});

function getAge(birthDate: Date) : Number {
    const currentDate = new Date();
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    if (currentDate.getMonth() < birthDate.getMonth()) {
        age--;
    } else if (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate()) {
        age--;
    }
    return age;
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

(document.getElementById('parental-consent')).addEventListener('input', (e) => {
    parentalConsentGiven = (<HTMLInputElement>e.currentTarget).checked;
});

let parentalConsentGiven: Boolean;