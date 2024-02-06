const form = document.getElementById('form-numbers');

function validaNumero(campoA, campoB) {
    return campoB > campoA;
}
    
form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const campoA = document.getElementById('campo-a');
    const campoB = document.getElementById('campo-b');
    const campo1 = Number(document.getElementById('campo-a').value);
    const campo2 = Number(document.getElementById('campo-b').value);
    const mensagemSucesso = `O valor do Campo B: <b>${campo2}</b> é MAIOR que o valor do Campo A: <b>${campo1}</b>`
    
    formEValido = validaNumero(campo1, campo2)
    if (formEValido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        document.querySelector('.error-message').style.display = 'none';
        campoB.classList = 'none'

        campoA.value = '';
        campoB.value = '';

    } else {
        campoB.classList.add('error')
        document.querySelector('.error-message').style.display = 'block';
        campoB.value = '';
    }
})