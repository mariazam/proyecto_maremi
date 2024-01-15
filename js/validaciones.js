
function submitForm() {// Función para validar y enviar el formulario de inicio de sesión
  
    var form = document.getElementById('formularioLogin');  // Obtener el formulario de inicio de sesión
    
      if (form.checkValidity()) {  // Validar el formulario utilizando las funciones proporcionadas por Bootstrap
          
          $('#successModal').modal('show');// Si el formulario es válido, mostrar el modal de éxito
      }
    
    
      form.classList.add('was-validated');// Esto permitirá que Bootstrap maneje ambas validaciones y muestre mensajes de error si es necesario
    }
    // Fin de la validación de inicio de sesión
    
    
    
    
    function submitForm2() {// Función para validar y enviar el formulario de contacto
    
      var form = document.getElementById('formularioContacto');  // Obtener el formulario de contacto
    
    
      if (form.checkValidity()) {  // Validar el formulario utilizando las funciones proporcionadas por Bootstrap
     
          $('#successModal').modal('show');// Si el formulario es válido, mostrar el modal de éxito
      }
    
      form.classList.add('was-validated');  // Esto permitirá que Bootstrap maneje las validaciones y muestre mensajes de error si es necesario
    
    }
    
    
    
    
    function redirigirAIndex() {// Función para redirigir a la página de inicio
      window.location.href = 'index.html';//pagina de login
    }
    
    function limpiarFormulario() {  // Función para limpiar el formulario y recargar la página
    
    
      window.location.reload();  // Limpiar los elementos del formulario y recargar la página
    }