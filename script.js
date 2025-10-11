document.addEventListener('DOMContentLoaded', () => {

   const buscadorInput = document.getElementById('buscador'); 

    buscadorInput.addEventListener('input', () => {
        const libros = document.querySelectorAll('.libro-card'); 
        
        const busqueda = buscadorInput.value.toLowerCase();

        libros.forEach(libro => {
            const titulo = libro.querySelector('h3').textContent.toLowerCase();
            const autor = libro.querySelector('p').textContent.toLowerCase();

            if (titulo.includes(busqueda) || autor.includes(busqueda)) {
                libro.style.display = 'block'; 
            } else {
                libro.style.display = 'none'; 
            }
        });
    });
});