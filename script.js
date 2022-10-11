const virus = document.querySelector('.virus');
let vivo = document.getElementById('vivo');
let morte = document.getElementById('morte');

const pulo = () => {
    vivo.classList.add('pulo');

    setTimeout(() => {
    vivo.classList.remove('pulo')
    }, 500);
}

const loop = setInterval(()=>{

    const virusPosition = virus.offsetLeft;
    const roboPosition = +window.getComputedStyle(vivo).bottom.replace("px","");

    if (virusPosition <= 90 && virusPosition > 0 && roboPosition < 90){ // tamanho de quando bate ele para
        
      virus.style.animation = 'none';  
      virus.style.left = `${virusPosition}px`;

      vivo.style.animation = 'none';
      vivo.style.bottom = `${roboPosition}px`;
      
      morte.style.display = "block";
      morte.style.bottom = `${roboPosition}px`;
      vivo.style.display = "none";

      clearInterval(loop);
    }

}, 10);


document.addEventListener('keydown', pulo);

//jump = pulo-animation