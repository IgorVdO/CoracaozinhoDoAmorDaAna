document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário
  
    // Obter valores do formulário
    var username = document.getElementById('nome').value;
    var password = document.getElementById('senha').value;
  
    // Verificar as credenciais
    if (username === 'Ana Júlia Fabrin' && password === '28032210') {
      window.location.href = './loginCorreto.html';
    } else {
      window.location.href = './loginErrado.html';
    }
  });