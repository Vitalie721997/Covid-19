function transmite() {
    let text = document.getElementById("intrebare").value;
    window.open("mailto:vitalielupascu88@gmail.com?subject=Intrebari&body=" + text);
}