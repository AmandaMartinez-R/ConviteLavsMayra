function abrirMapa() {
    window.open("https://www.google.com/maps?q=Rua+MMDC,+80,+Butantã", "_blank");
}

function adicionarCalendario() {
    const link = 
        "https://calendar.google.com/calendar/render?action=TEMPLATE" +
        "&text=Aniversário+da+Lavínia+e+Mayra+✨" +
        "&dates=20251125T194000/20251125T230000" +
        "&location=Rua+MMDC,+80,+São+Paulo" +
        "&details=Festa+no+Share+Butantã";

    window.open(link, "_blank");
}

function confirmarPresenca() {
    window.open("https://wa.me/5512991812103/?text=Confirmo+minha+presença+no+aniversário+:)", "_blank");
}
