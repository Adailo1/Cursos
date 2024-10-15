const ePaisagem = (altura, largura) => (largura - altura) >= 180;
//Arrow function que retorna true ou false 
console.log(ePaisagem(100, 101));
console.log(ePaisagem(100, 150));
console.log(ePaisagem(720, 1080));
