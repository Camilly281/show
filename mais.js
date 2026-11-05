const formulario = document.getElementById("formulario")

formulario.addEventListener("submit", function (event) {

    event.preventDefault()

    const nome = document.getElementById("nome").value
    const email = document.getElementById("email").value
    const telefone = document.getElementById("telefone").value
    const regiao = document.getElementById("regiao").value
    const mensagem = document.getElementById("mensagem").value

    if(telefone.trim() === "") {
        alert("Digite seu nome")
        return
    }

    const textoWhatsapp = `
Olá! Gostaria de comprar o ingresso para o show da Nandatsunami
Nome:${nome}
E-mail:${email}
Telefone:${telefone}
região:${regiao}
mensagem:${mensagem}
`
    const mensagemCodificada = encodeURIComponent(textoWhatsapp)

    const numeroWhatsapp = "5511909045490"

    const link = "https://wa.me/" + numeroWhatsapp + "?text" + mensagemCodificada

    window.location.href = link















})