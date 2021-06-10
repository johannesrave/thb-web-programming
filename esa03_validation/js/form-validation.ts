/* Initialisieren aller beteiligten DOM-Elemente */
const name = document.getElementById('name') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const bio = document.getElementById('bio') as HTMLInputElement;
const birthday = document.getElementById('birthday') as HTMLInputElement;
const parentalConsent = document.getElementById('parents-consent') as HTMLInputElement;
const consentContainer = document.getElementById('consent-container') as HTMLInputElement;
const password = document.getElementById('password') as HTMLInputElement;
const password2 = document.getElementById('password2') as HTMLInputElement;
const register = document.getElementById('register') as HTMLInputElement;

/* Definition aller nötigen Regex-Patterns
*  Inspiriert und teils modifiziert von
*  https://www.w3resource.com/javascript/form/javascript-sample-registration-form-validation.php  */
const alphanumeric = /^[A-Za-z]+[A-Za-z0-9]*$/;
const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;


const checkNameValidity = () => {
    if (!name.value.match(alphanumeric)){
        name.setCustomValidity('Name can\'t be empty, must start with a letter and be alphanumeric.');
        return false;
    }
    else {
        name.setCustomValidity('');
        console.log("Name valid")
        return true;
    }
};

const checkEmailValidity = () => {
    if (!email.value.match(validEmail)){
        email.setCustomValidity('Please enter a valid email-address.');
        return false;
    }
    else {
        email.setCustomValidity('');
        console.log("Email valid")
        return true;
    }
};

const checkPasswordValidity = () => {
    if (password.value !== password2.value) {
        password2.setCustomValidity('Password and confirmation must match.');
        return false;
    }
    else {
        password2.setCustomValidity('');
        console.log("Password valid")
        return true;
    }
};

const checkBioValidity = () => {
    if (bio.value.length > 140){
        bio.setCustomValidity('Please keep your bio to 140 characters or less.');
        return false;
    }
    console.log("Bio valid")
    return true;
};


const checkBirthdayValidity = () => {
    let validity = '';

    if (birthday.value === ''){
        validity = 'Please enter your date of birth.';
    }
    else if (!isOldEnough) {
        if(!parentalConsentGiven){
            validity = 'Please have your parents consent to your application.'
        }
        consentContainer.classList.remove('hide');
    }
    else {
        consentContainer.classList.add('hide');
    }

    birthday.setCustomValidity(validity);
    console.log("Birthday: " + (validity === ''))
    return (validity === '');
};



const isOldEnough = () => {
    const date = birthday.value.split('-');
    const yearOfBirth = Number(date[0]);
    const monthOfBirth = Number(date[1]);
    const dayOfBirth = Number(date[2]);

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth()+1;
    const currentDay = currentDate.getDate();

    return !(currentDay < dayOfBirth &&
        currentMonth < monthOfBirth &&
        currentYear - yearOfBirth <= 18);
};

const parentalConsentGiven = () => parentalConsent.value;

const checkAllValidity = () =>
{
    if(checkNameValidity && checkEmailValidity && checkPasswordValidity &&
        checkBioValidity && checkBirthdayValidity) {
        alert("All checks passed!")
    }
}

name.addEventListener('change', checkPasswordValidity);
password.addEventListener('change', checkPasswordValidity);
password2.addEventListener('change', checkPasswordValidity);
bio.addEventListener('change', checkBioValidity);
birthday.addEventListener('change', checkBirthdayValidity);

register.addEventListener('click', checkAllValidity)


export{}