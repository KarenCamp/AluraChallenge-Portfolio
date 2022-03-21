var inputs = document.querySelectorAll('.input-padrao');
var formSubmit = document.querySelector(".enviar");
var formComoUmTodo = document.querySelector("form");
var regexp = /[0-9]/;

    for(var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('focusout', function() {
        
            if (this.value.length == 0) {
                confirm(`O campo "${this.name}" não pode estar vazio.`);
                formSubmit.disabled = true;
                this.previousElementSibling.dataset.content = " X";
                this.classList.remove('campo-validado');
                this.classList.add('campo-invalido');
            }

            else if (this.name == "nome" && this.value.match(regexp)) {
                confirm('Há números no campo "nome".');
                formSubmit.disabled = true;
                this.previousElementSibling.dataset.content = " X";
                this.classList.remove('campo-validado');
                this.classList.add('campo-invalido');
            }
        
            else if (this.name == "nome" && this.value.length > 50 || this.name == "nome" && this.value.length < 2 || this.name == "assunto" && this.value.length > 50 || this.name == "assunto" && this.value.length < 2) {
                confirm(`O campo "${this.name}" deve conter entre 2 a 50 caracteres.`);
                formSubmit.disabled = true;
                this.previousElementSibling.dataset.content = " X";
                this.classList.remove('campo-validado');
                this.classList.add('campo-invalido');
            }

            else if (this.name == "e-mail" && this.value.indexOf("@") == -1 || this.name == "e-mail" && this.value.indexOf(".") == -1) {
                confirm('O campo "e-mail" deve estar em formato de e-mail contendo o caractere especial "@" seguido por um domínio ou provedor seguido por um ponto (.) **Exemplo: text@texto.com**.');
                formSubmit.disabled = true;
                this.previousElementSibling.dataset.content = " X";
                this.classList.remove('campo-validado');
                this.classList.add('campo-invalido');
            }

            else if (this.name == "mensagem" && this.value.length < 2 || this.name == "mensagem" && this.value.length > 300) {
                confirm('O campo "mensagem" deve conter entre 2 a 300 caracteres.');
                formSubmit.disabled = true;
                this.previousElementSibling.dataset.content = " X";
                this.classList.remove('campo-validado');
                this.classList.add('campo-invalido');
            }
        
            else {
                this.classList.remove('campo-invalido');
                this.classList.add('campo-validado');
                this.previousElementSibling.dataset.content = " ✔";
            } 

            var tdsOsCamposValidados = document.querySelectorAll(".campo-validado");
            if (tdsOsCamposValidados.length == 4){
                confirm("Todos os campos estão corretamente preenchidos, formulário pronto para envio.")
                formSubmit.disabled = false;
         }
    });
}

    function resetarForm() {
        formComoUmTodo.reset();
        formSubmit.disabled = true;
    }

    