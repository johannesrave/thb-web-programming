let colorSwitched = (document.getElementsByClassName("alert alert-success")[0]);

colorSwitched.onclick = () => {
    colorSwitched.style.backgroundImage = "linear-gradient(70deg, orange, red)";
    colorSwitched.innerHTML = "Dieser Button brennt auf Klick"
}
