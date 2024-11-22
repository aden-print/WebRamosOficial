// Initialization for ES Users
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const formulario = document.querySelector('#loginForm');

formulario.addEventListener('submit', (event) => {
    // Evita el envío del formulario  
    event.preventDefault();
    
    if (email.value.trim() === 'admin@admin.com' && password.value.trim() === 'admin123') {
        window.location.href = '../admin/datos.html';
        return;
    } 
    
    else if (email.value.trim() === 'arn@admin.com' && password.value.trim() === 'arn123') {
        window.location.href = '../pruebaadmin/admin.html';
        return;
    }
    else {
      window.location.href = '../index.html';

    }
    
    // Si no coinciden las credenciales, redirige a la página principal
    
});
