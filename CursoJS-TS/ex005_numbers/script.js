let num = prompt("Digite um número");
num = Number(num);

document.body.innerHTML += `
<p>Raíz quadrada: ${num ** (1/2)}</p> 
<p>${num} é inteiro: ${Number.isInteger(num)}</p>
<p>É NaN: ${Number.isNaN(num)}</p> 
<p>Arredondando para baixo: ${Math.floor(num)}</p> 
<p>Arredondando para cima: ${Math.round(num)}</p> 
<p>Com duas casas decimais: ${num.toFixed(2)}</p> 
`;