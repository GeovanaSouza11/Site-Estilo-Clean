window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

window.addEventListener("scroll", () => {
    console.log("scrollando...");
});

function enviarContato() {
    const nome = document.getElementById("nome").value;
    const mensagem = document.getElementById("mensagem").value;

    const texto = `Olá! Me chamo ${nome}. ${mensagem}`;

    const url = `https://wa.me/5516981453220?text=${encodeURIComponent(texto)}`;

    window.open(url, '_blank');

    alert("Mensagem enviada com sucesso! 🚀");

    return true; // permite envio do email também
}