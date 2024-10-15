function main(){
    const form = document.querySelector(".formulario")
    const res = document.querySelector(".res")

    form.onsubmit = function(evento){
        evento.preventDefault()
        
        let peso = document.querySelector("#peso").value
        let altura = document.querySelector("#altura").value
        let imc = peso / (altura ** 2)
        
        if (!Number.isNaN(imc)){
            if (imc < 18.5){
                res.classList.add("bad")
                res.innerHTML = `Seu IMC é ${imc.toFixed(2)} abaixo do peso!`;
            } else if (imc < 24.99) {
                res.classList.add("good")
                res.innerHTML = `Seu IMC é ${imc.toFixed(2)} peso normal!`;
            } else if (imc < 29.99) {
                res.classList.add("good")
                res.innerHTML = `Seu IMC é ${imc.toFixed(2)} sobrepeso!`
            } else if (imc < 34.99) {
                res.classList.add("bad")
                res.innerHTML = `Seu IMC é ${imc.toFixed(2)} obesidade grau 1!`;
            } else if (imc < 39.99) {
                res.classList.add("bad")
                res.innerHTML = `Seu IMC é ${imc.toFixed(2)} obesidade grau 2!`;
            } else {
                res.classList.add("bad")
                res.innerHTML = `Seu IMC é ${imc.toFixed(2)} obesidade grau 3!`;
            }
        } else {
            res.classList.add("bad")
            res.innerHTML = "Dados inválidos"
        }  

        form.reset();
    }
}
main()