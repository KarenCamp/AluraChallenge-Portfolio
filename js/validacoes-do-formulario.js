var inputs = document.querySelectorAll('.input-padrao');
var formSubmit = document.querySelector(".enviar");
var formComoUmTodo = document.querySelector("form");
var regexp = /[0-9]/;
var modalIntro = document.querySelector('.intro-descontraida');
var modalTitle = document.querySelector('.modal-title');
var ulErrorContent = document.querySelector('.error-content');
var redefinirModalBody = document.querySelector('.redefine-modal-body');
var btnCloseModal = document.querySelector('.close');


    for(let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focusout', function() {
        
            if (this.value.length == 0) {
                formSubmit.disabled = true;
                this.previousElementSibling.dataset.content = " X";
                this.classList.remove('campo-validado');
                this.classList.add('campo-invalido');
                showModalError();
            }

            else if (this.name == "nome" && this.value.match(regexp)) {
                formSubmit.disabled = true;
                this.previousElementSibling.dataset.content = " X";
                this.classList.remove('campo-validado');
                this.classList.add('campo-invalido');
                showModalError();
            }
        
            else if (this.name == "nome" && this.value.length > 50 || this.name == "nome" && this.value.length < 2 || this.name == "assunto" && this.value.length > 50 || this.name == "assunto" && this.value.length < 2) {
                formSubmit.disabled = true;
                this.previousElementSibling.dataset.content = " X";
                this.classList.remove('campo-validado');
                this.classList.add('campo-invalido');
                showModalError();
            }

            else if (this.name == "e-mail" && this.value.indexOf("@") == -1 || this.name == "e-mail" && this.value.indexOf(".") == -1) {
                formSubmit.disabled = true;
                this.previousElementSibling.dataset.content = " X";
                this.classList.remove('campo-validado');
                this.classList.add('campo-invalido');
                showModalError();
            }

            else if (this.name == "mensagem" && this.value.length < 2 || this.name == "mensagem" && this.value.length > 300) {
                formSubmit.disabled = true;
                this.previousElementSibling.dataset.content = " X";
                this.classList.remove('campo-validado');
                this.classList.add('campo-invalido');
                showModalError();
            }
        
            else {
                this.classList.remove('campo-invalido');
                this.classList.add('campo-validado');
                this.previousElementSibling.dataset.content = " ✔";
            } 

            
            var tdsOsCamposValidados = document.querySelectorAll(".campo-validado");
            if (tdsOsCamposValidados.length === 4) {
                showModalSuccess();
                formSubmit.disabled = false;
         }
    });
}

   function showModalError() {
        modalIntro.innerHTML = "Ops...";
        modalTitle.innerHTML = "Regras de validações:"
        ulErrorContent.style.display = "block";
        redefinirModalBody.style.display = "none";
        $('#meuPrimeiroModal').modal('show');
}

   function showModalSuccess() {
        modalIntro.innerHTML = "Ôba =)";
        modalTitle.innerHTML = "Sucesso!";
        ulErrorContent.style.display = "none";
        redefinirModalBody.style.display = "block";
        $('#meuPrimeiroModal').modal('show');
} 

    btnCloseModal.addEventListener('click', function() {
        $('#meuPrimeiroModal').modal('hide');
    });

    
    function resetarForm() {
        formComoUmTodo.reset();
        formSubmit.disabled = true;
}


