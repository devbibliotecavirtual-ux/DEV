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
const CORRECT_USER = 'Erick';
const CORRECT_PASS = '123';
function displayMessage(message, type) {
const messageBox = document.getElementById('messageBox');
messageBox.textContent = message;
            
// Limpiar clases de estado anteriores
messageBox.classList.remove('hidden', 'error', 'success');

if (type === 'success') {
    messageBox.classList.add('success');
} else if (type === 'error') {
    messageBox.classList.add('error');
}
}
function handleLogin(event) {
            event.preventDefault(); // Detiene el envío normal del formulario

            const usernameInput = document.getElementById('username').value.trim();
            const passwordInput = document.getElementById('password').value.trim();

            if (usernameInput === CORRECT_USER && passwordInput === CORRECT_PASS) {
                // Lógica de éxito
                displayMessage('¡Acceso concedido! Redirigiendo a Biblioteca.html...', 'success');

                // Simula la ejecución de biblioteca.html
                setTimeout(() => {
                    // En un entorno real, esto cargaría el nuevo archivo HTML.
                    window.location.href = 'Biblioteca.html'; 
                }, 1500); // Espera 1.5 segundos antes de "redirigir"
            } else {
                // Lógica de error
                let errorMessage = 'Usuario o contraseña incorrectos. Inténtalo de nuevo.';
                
                if (usernameInput !== CORRECT_USER && passwordInput === CORRECT_PASS) {
                    errorMessage = 'Usuario incorrecto. Verifica el nombre.';
                } else if (usernameInput === CORRECT_USER && passwordInput !== CORRECT_PASS) {
                    errorMessage = 'Contraseña incorrecta. Verifica la clave.';
                }

                displayMessage(errorMessage, 'error');
            }
        }
                
        /**
         * Alterna entre la vista de Login y la vista de Suscripción.
         * @param {boolean} showSubscription - True para mostrar suscripción, False para mostrar login.
         */
        
                function toggleSubscriptionView(showSubscription) {
            const loginView = document.getElementById('login-view');
            const subscriptionView = document.getElementById('subscription-view');
            
            if (showSubscription) {
                loginView.style.display = 'none';
                subscriptionView.style.display = 'block';
                // Resetear detalles de pago al cambiar de vista
                document.getElementById('payment-details').style.display = 'none';
                
                // Desactivar todos los botones
                document.querySelectorAll('.payment-option-button').forEach(btn => {
                    btn.classList.remove('active');
                });

            } else {
                subscriptionView.style.display = 'none';
                loginView.style.display = 'block';
                // Ocultar cualquier mensaje de error/éxito del login
                document.getElementById('messageBox').classList.add('hidden');
            }
        }
        
        /**
         * Muestra los detalles de pago para el método seleccionado.
         * @param {string} method - El método de pago.
         * @param {HTMLElement} button - El botón que fue clickeado.
         */
        function showPaymentDetails(method, button) {
            const detailsBox = document.getElementById('payment-details');
            
            // Desactivar todos los botones
            document.querySelectorAll('.payment-option-button').forEach(btn => {
                btn.classList.remove('active');
            });

            // Activar el botón clickeado
            button.classList.add('active');

            let content = '';
            
            if (method === 'nequi') {
                content = `
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                        <span class="nequi-logo-placeholder" style="font-size: 2.5rem; color: #E84562;">N</span>
                        <p style="font-weight: 700; color: #E84562; margin: 0;">¡Nequi Seleccionado!</p>
                        <p style="margin: 0; font-size: 0.85rem; color: var(--color-exito-texto);">
                            Escanea este código para completar el pago de $10.000.
                        </p>
                        <!-- Código QR se muestra AHORA aquí -->
                        <img src="CodigoQR/nequi.PNG" class="qr-image">
                    </div>
                `;
            } else {
                 content = `
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                        <span style="font-size: 2.5rem; color: #DAA520;">⏳</span>
                        <p style="font-weight: 700; color: var(--color-texto-principal); margin: 0;">Método no disponible</p>
                        <p style="margin: 0; font-size: 0.85rem; color: var(--color-texto-secundario);">
                            Estamos trabajando para agregar más opciones de pago.
                        </p>
                    </div>
                `;
            }

            detailsBox.innerHTML = content;
            detailsBox.style.display = 'block';
        }
        onclick="window.location.href = 'index.html'"