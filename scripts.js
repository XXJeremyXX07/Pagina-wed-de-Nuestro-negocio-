document.addEventListener('DOMContentLoaded', () => {
    // Cargar idioma por defecto
    setLanguage('es');

    // Manejar cambio de idioma
    document.getElementById('language-selector').addEventListener('change', (event) => {
        setLanguage(event.target.value);
    });

    // Inicializar carrito
    let carrito = [];

    // Función para agregar productos al carrito
    window.agregarAlCarrito = function(producto) {
        carrito.push(producto);
        actualizarCarrito();
    }

    // Función para actualizar el contenido del carrito en la página
    function actualizarCarrito() {
        const listaCarrito = document.querySelector('#carrito ul');
        listaCarrito.innerHTML = '';
        carrito.forEach((producto, index) => {
            const li = document.createElement('li');
            li.textContent = producto;
            listaCarrito.appendChild(li);
        });
    }

    // Función para vaciar el carrito
    document.querySelector('#vaciarCarrito')?.addEventListener('click', () => {
        carrito = [];
        actualizarCarrito();
    });

    // Función de validación de formulario
    document.getElementById('contact-form')?.addEventListener('submit', (event) => {
        if (!validateForm()) {
            event.preventDefault();
        }
    });

    function validateForm() {
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('email').value;
        const mensaje = document.getElementById('mensaje').value;

        if (!nombre || !email || !mensaje) {
            alert('Todos los campos son obligatorios.');
            return false;
        }

        // Aquí podrías agregar validación adicional para el email
        return true;
    }
});
