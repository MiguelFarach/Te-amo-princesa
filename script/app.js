// Agregar un evento al botón para revelar el mensaje
document.getElementById('revealMessageButton').addEventListener('click', function() {
    const message = document.getElementById('message');
    message.innerHTML = `Te amo mucho mi niña, eres la persona mas especial para mi, te amo tanto que el universo le da pena ser tan pequeño al compararse al amor que le tengo, gracias por estar en mi vida preciosa, agradezco todos los momentos que pasamos juntos, agradezco estar contigo y con nadie mas, solo te quiero a ti, a mi niña perfecta, te amo Julieth💕`;
    message.style.color = '#ff69b4'; // Cambiar el color del mensaje
    document.getElementById('revealMessageButton').style.display = 'none'; // Ocultar el botón
});
