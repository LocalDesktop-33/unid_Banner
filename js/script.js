        document.addEventListener('DOMContentLoaded', () => {
            const loginForm = document.getElementById('loginForm');

            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                
                const userId = document.getElementById('userId').value.trim();
                const password = document.getElementById('password').value.trim();

                if (!userId || !password) {
                    alert('Por favor, completa todos los campos.');
                    return;
                }

                // Lógica dummy de acceso
                console.log('Intento de inicio de sesión:', { userId, password });
                alert('Acceso correcto. Redirigiendo al portal...');
                goToDashboard();
                document.getElementById('loginForm').reset();

            });
        });

    function goToDashboard() {
        // Redirigir al portal principal
        window.location.href = 'pages/dashboard.html';
    }