/*
case sensitive - reconhece letras maiusculas e minusculas

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementsByName()
por Classe: getElementsByclassName()
por Seletor:querySector()
*/
let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let assunto = document.querySelector("#assunto")
let nomeOk = false
let emailOk = false
let asssuntoOk = false
let mapa = document.querySelector("mapa")


nome.style.width = "30%"
email.style.width = "30%"

function validaNome() {
    let txt = document.querySelector("#txtNome")
    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
        


    }
}

function validaEmail() {
    let txtEmail = document.querySelector("#txtemail")

    if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
        txtEmail.innerHTML = "Email inválido"
        txtEmail.style.color = "red"
    } else {
        txtEmail.innerHTML = "Email válido"
        txtEmail.style.color = "green"


    }
    function validaAssunto() {
        let txtAssunto = document.querySelector("#txassunto")

        if (assunto.value.length >= 100) {
            txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres"
            txtAssunto.style.color = "red"
            txtAssunto.style.display = "block"
         } else {
            txtAssunto.style.display = "none"
         }
      }
      
      function enviar() {
         if (nomeOk == true && emailOk == true && assuntoOk == true) {
            alert ("Formulário enviado com sucesso!")
         } else {
            alert ("Preencha o formulário corretamente antes de enviar...")
         }
      }
      
      function mapaZoom() {
         mapa.style.width = "800px"
         mapa.style.height = "600px"
      }
      
      function mapaNormal() {
         mapa.style.width = "400px"
         mapa.style.height = "250px"
      }
      
    }


