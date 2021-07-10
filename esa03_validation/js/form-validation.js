/* Johannes Rave, 20216942, Webprogrammierung SoSe 2021 */
// Anhängen alle Event-Listener per ID an die Elemente des Formulars
(document.getElementById('name')).addEventListener('input', validateName);
(document.getElementById('email')).addEventListener('input', validateEmail);
(document.getElementById('bio')).addEventListener('input', validateBio);
(document.getElementById('birthday')).addEventListener('input', validateBirthday);
(document.getElementById('password')).addEventListener('input', validatePassword);
(document.getElementById('password-conf')).addEventListener('input', validatePassword);
(document.getElementById('parental-consent')).addEventListener('input', updateParentalConsent);
// Validieren des eingegebenen Namens durch Vergleich mit regulärem Ausdruck.
// Erlaubt sind Namen die mit einem Groß- oder Kleinbuchstaben beginnen,
// worauf bis zu 99 alphanumerische Zeichen folgen.
function validateName(event) {
    var validNamePattern = /^[A-Za-z]+[A-Za-z0-9]{0,100}$/;
    var name = event.currentTarget;
    // Falls der Name nicht dem Pattern entspricht, setze CustomValidity auf Erklärtext.
    if (!name.value.match(validNamePattern)) {
        name.setCustomValidity('Name can\'t be empty, must start with a letter, consist of letters and numbers and be under 100 characters long.');
        name.reportValidity();
    }
    // Andernfalls entferne CustomValidity
    else {
        name.setCustomValidity('');
        console.log("Name is valid.");
    }
}
// Validieren der eingegebenen Email durch Vergleich mit "eingebauter" Validierung.
function validateEmail(event) {
    var email = event.currentTarget;
    // Falls die Email nicht gültig ist, setze CustomValidity auf Erklärtext.
    if (!email.checkValidity()) {
        email.setCustomValidity('Please enter a valid email address.');
        email.reportValidity();
    }
    // Andernfalls entferne CustomValidity
    else {
        email.setCustomValidity('');
        console.log("Email is valid.");
    }
}
// Validieren der eingegebenen Bio durch Prüfen der Länge.
function validateBio(event) {
    var bio = event.currentTarget;
    // Falls die Biografie länger als 140 Zeichen ist, setze CustomValidity auf Erklärtext.
    if (bio.value.length > 140) {
        bio.setCustomValidity('Please keep your bio to 140 characters or less.');
        bio.reportValidity();
    }
    // Andernfalls entferne CustomValidity
    else {
        bio.setCustomValidity('');
        console.log("Bio is valid.");
    }
}
// Validieren des Geburtsdatums durch Errechnen des Alters und ggf.
// Einblenden und Einfordern der Zustimmung eines Elternteils
function validateBirthday(event) {
    var birthday = event.currentTarget;
    var consentContainer = (document.getElementById('consent-container'));
    var age = getAge(new Date(birthday.value));
    console.log("age: " + age);
    // Falls das Alter unter 18 Jahren beträgt und der parentalConsent-Check nicht gesetzt wurde,
    //  setze CustomValidity auf Erklärtext und blende consentContainer ein.
    if (age < 18 && !parentalConsentGiven) {
        birthday.setCustomValidity('Please have your parents consent to your application.');
        birthday.reportValidity();
        consentContainer.classList.remove('hide');
    }
    // Andernfalls entferne CustomValidity und verstecke den consentContainer mit CSS, falls sichtbar.
    else {
        birthday.setCustomValidity('');
        birthday.reportValidity();
        consentContainer.classList.add('hide');
        console.log("Age is valid.");
    }
}
// Errechne an Hand des Geburtsdatums das Alter des neuen Mitglieds.
function getAge(birthDate) {
    var currentDate = new Date();
    // Die unkorrigierte Jahreszahl wird zunächst durch Abziehen des Geburtsjahres vom aktuellen Jahr errechnet.
    var age = currentDate.getFullYear() - birthDate.getFullYear();
    // Falls der Geburtsmonat im Jahr nach dem aktuellen Monat liegt
    // muss ein Jahr abgezogen werden.
    if (currentDate.getMonth() < birthDate.getMonth()) {
        age--;
    }
    // Oder falls der aktuelle Monat der Geburtsmonat ist UND
    // der Geburtstag aber nach dem aktuellen Tag im Monat liegt,
    // muss ebenfalls ein Jahr abgezogen werden
    else if (currentDate.getMonth() === birthDate.getMonth() && currentDate.getDate() < birthDate.getDate()) {
        age--;
    }
    return age;
}
// Prüfe eingegebenes Passwort auf Länge und Gleichheit zum zweiten Passwort-Feld
function validatePassword() {
    var password = document.getElementById('password');
    var password2 = document.getElementById('password-conf');
    if (password.value !== password2.value) {
        password2.setCustomValidity('Password and confirmation must match.');
    }
    else if (password.value.length < 8 || password2.value.length < 8) {
        password2.setCustomValidity('Password must be at least 8 characters long.');
    }
    else {
        password2.setCustomValidity('');
        console.log("Password valid");
    }
}
// Globale Deklaration der elterlichen Zustimmung
var parentalConsentGiven;
// Update der elterlichen Zustimmung bei Setzen der Checkbox
function updateParentalConsent(e) {
    parentalConsentGiven = e.currentTarget.checked;
}
//# sourceMappingURL=form-validation.js.map