document.addEventListener('DOMContentLoaded', function() {
    // Elementos del perfil
    const estadoImg = document.getElementById('estadoImg');
    const estadoText = document.querySelector('.SideBar_Perfil_txt p');

    // Estado del perfil
    estadoImg.addEventListener('click', function() {
        const currentSrc = estadoImg.getAttribute('src');
        const estadoActivo = '/assets/icons/estado_Activo.png';
        const estadoInactivo = '/assets/icons/estado_Inactivo.png';
        
        if (currentSrc === estadoActivo) {
            estadoImg.setAttribute('src', estadoInactivo);
            estadoText.textContent = 'Inactivo';
        } else {
            estadoImg.setAttribute('src', estadoActivo);
            estadoText.textContent = 'Conectado';
        }
    });

    // Nuevos chats
    const newChatButton = document.getElementById('newChat');
    const chatsContainer = document.querySelector('.SideBar_Chats');
    const chatContent = document.getElementById('chatContent');
    const images = [
        'HenryCavill.jpeg',
        'BruceWayne.jpeg',
        'Isabel_II.jpeg',
        'Antoni_Psicologo.jpeg',
        'Billie.jpeg',
        'Hande.jpeg'
    ];
    const names = [
        'Bruce',
        'Abuela',
        'Antonio Abogado',
        'Billie',
        'Marti',
        'Nuevo Usuario'
    ];

    // Función para actualizar el header del chat
    function updateChatHeader(imageSrc, name) {
        chatImage.src = `/assets/images/${imageSrc}`;
        chatName.textContent = name;
    }

    // Evento para iniciar un nuevo chat
    newChatButton.addEventListener('click', function() {
        const chatTemplate = document.querySelector('#ChatTemplate').cloneNode(true);
        const randomIndex = Math.floor(Math.random() * images.length);
        
        chatTemplate.querySelector('img').src = `/assets/images/${images[randomIndex]}`;
        chatTemplate.querySelector('.Elementos_chat nombre').textContent = names[randomIndex];
        
        chatsContainer.appendChild(chatTemplate);
        
        chatTemplate.addEventListener('click', function() {
            const imageSrc = chatTemplate.querySelector('img').src.split('/').pop();
            const name = chatTemplate.querySelector('.Elementos_chat nombre').textContent;
            
            updateChatHeader(imageSrc, name);
        });
    });

    // Enviar mensajes
    const btnEnviar = document.querySelector('.btnEnviar');
    const txtMensaje = document.querySelector('.TXTmensaje');
    
    function enviarMensaje() {
        const mensaje = txtMensaje.value;
        
        if (mensaje.trim() !== '') {
            const date = new Date();
            const hora = date.getHours();
            const minutos = date.getMinutes();
            
            const horaFormateada = `${hora.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
            
            const nuevoMensaje = document.createElement('p');
            nuevoMensaje.textContent = `${horaFormateada} - ${mensaje}`;
            
            chatContent.appendChild(nuevoMensaje);
            txtMensaje.value = '';
        }
    }

    btnEnviar.addEventListener('click', enviarMensaje);

    // Seleccionar chat para mostrar en el header
    const chatItems = document.querySelectorAll('.SideBar_Chats_Chat');
    const chatImage = document.getElementById('chatImage');
    const chatName = document.getElementById('chatName');
    
    chatItems.forEach(item => {
        item.addEventListener('click', function() {
            const imageSrc = item.querySelector('img').src;
            const name = item.querySelector('.Elementos_chat nombre').textContent;

            chatImage.src = imageSrc;
            chatName.textContent = name;
        });
    });
});


//Le da funcion al icono de tres puntos en el header del chat

document.addEventListener('DOMContentLoaded', function() {
    const eliminarChat = document.getElementById('eliminarChat');
    const vaciarChat = document.getElementById('vaciarChat');
    const cambiarFondo = document.getElementById('cambiarFondo');

    eliminarChat.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Chat eliminado');
        // Aquí puedes implementar la lógica para eliminar el chat
    });

    vaciarChat.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Chat vaciado');
        // Aquí puedes implementar la lógica para vaciar el chat
    });

    cambiarFondo.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Fondo cambiado');
        // Aquí puedes implementar la lógica para cambiar el fondo del chat
    });
});

