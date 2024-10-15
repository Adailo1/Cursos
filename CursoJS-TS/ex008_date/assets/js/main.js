function main(){
    const date = new Date();
    const res = document.querySelector(".res")

    let ano = date.getFullYear();
    let mes = date.getMonth();
    let hora = date.getHours();
    let minutos = date.getMinutes();
    let dia = date.getDay();
    let data = date.getDate();

    let dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
    let meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

    if (minutos < 10){
        minutos = `0${minutos}`;
    }

    res.innerHTML = `${dias[dia]} ${data} de ${meses[mes]} de ${ano} ${hora}:${minutos}`;
}

main()