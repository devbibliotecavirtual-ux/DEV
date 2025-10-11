// Espera a que el DOM (la estructura HTML) esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {

    // --- Funcionalidad del buscador ---
    
    // Obtiene el elemento del buscador y todas las tarjetas de libros
    const buscadorInput = document.getElementById('buscador');
    const libros = document.querySelectorAll('.libro-card');

    // Agrega un "escuchador" de eventos para cuando el usuario escriba
    buscadorInput.addEventListener('input', () => {
        // Convierte el texto de búsqueda a minúsculas
        const busqueda = buscadorInput.value.toLowerCase();

        // Itera sobre cada libro para mostrar u ocultar
        libros.forEach(libro => {
            // Obtiene el título y el autor de cada libro y los convierte a minúsculas
            const titulo = libro.querySelector('h3').textContent.toLowerCase();
            const autor = libro.querySelector('p').textContent.toLowerCase();

            // Verifica si el texto de búsqueda está en el título o en el autor
            if (titulo.includes(busqueda) || autor.includes(busqueda)) {
                libro.style.display = 'block'; // Si hay coincidencia, muestra el libro
            } else {
                libro.style.display = 'none'; // Si no, lo oculta
            }
        });
    });

    // --- Funcionalidad para abrir PDFs (ya existente) ---
    
    // Obtiene todos los enlaces con la clase 'ver-pdf'
    const pdfLinks = document.querySelectorAll('.ver-pdf');

    // Itera sobre cada uno de los enlaces de PDF
    pdfLinks.forEach(link => {
        // Agrega un evento de escucha para cada clic
        link.addEventListener('click', event => {
            
            // Previene la acción por defecto del enlace (evita que la página se recargue)
            event.preventDefault();

            // Obtiene la URL del PDF del atributo 'data-pdf-url'
            const pdfUrl = link.dataset.pdfUrl;

            // Abre el archivo PDF en una nueva pestaña o ventana del navegador
            window.open(pdfUrl, '_blank');
        });
    });
});