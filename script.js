const robo = document.querySelector('.robo');
const virus = document.querySelector('.virus');

const pulo = () => {
    robo.classList.add('pulo');

    setTimeout(() => {
    robo.classList.remove('pulo')
    }, 500);
}

const loop = setInterval(()=>{

    const virusPosition = virus.offsetLeft;
    const roboPosition = +window.getComputedStyle(robo).botton.replace('px', '');

    console.log(roboPosition);

    if (virusPosition <= 80 && virusPosition > 0 && roboPosition < 75){ // tamanho de quando bate ele para
        
      virus.style.animation = 'none';  
      virus.style.left = `${virusPosition}px`;

    }

}, 10);


document.addEventListener('keydown', pulo);

//jump = pulo-animation