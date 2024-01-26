function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.getElementById("res")

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert("[ERRO] Verifique os dados e tente novamente !")
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var gênero = ""
        var img = document.createElement("img")
        img.setAttribute("id", "foto")
        if (fsex[0].checked) {
            gênero = "Homem"
            checkedIdade(gênero, idade)
        } else if (fsex[1].checked) {
            gênero = "Mulher"
            checkedIdade(gênero, idade)
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
        img.style.fill
    }
    
    function checkedIdade(gênero, idade) {
        if (idade >= 0 && idade < 10) {
            if (gênero === 'Mulher') {
                img.setAttribute("src", "bebezinha.png")
                document.body.style.background = "#dacec0"
            } else {
                img.setAttribute("src", "bebezinho.png")
                document.body.style.background = "#227ec2"
            }
        } else if (idade < 21) {
            if (gênero === 'Mulher') {
                img.setAttribute("src", "jovemm.png")
                document.body.style.background = "#5d5956"
            } else {
                img.setAttribute("src", "jovemh.png")
                document.body.style.background = "#5d5956"
            }
        } else if (idade < 50) {
            if (gênero === 'Mulher') {
                img.setAttribute("src", "adulta.png")
                document.body.style.background = "#793a21"
            } else {
                img.setAttribute("src", "adulto.png")
                document.body.style.background = "#070b0c"
            }
        } else {
            if (gênero === 'Mulher') {
                img.setAttribute("src", "mulher.png")
                document.body.style.background = "#a089b5"
            } else {
                img.setAttribute("src", "homem.png")
                document.body.style.background = "#b44c54"
            }
        }
    }
}
