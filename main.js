// tady je místo pro náš program
//úkol na lekci
function ztucnit(){
    let odstavec = document.querySelector ('#odstavec');
      console.log (odstavec);
      odstavec.style.fontWeight = 'bold';}
      
  //dú 1
  function zmenaBarvy(){
      let odstavec = document.querySelector('#odstavec');
  
      odstavec.classList.toggle ('odstaveczmenabarvy')
  }
  
  //dú 2
  function zvetsit(){
      odstavec.classList.add ('zmenapisma');
  }
  

let mujPrehravac = document.querySelector ('.mujPrehravac');

function spustAudio(){
    mujPrehravac.play();
}

//dú 3  
function pauseAudio(){
    mujPrehravac.pause();
}

function resetAudio(){
    mujPrehravac.currentTime=0;
}
//du 3
function volumeAudio1(){
    mujPrehravac.volume = 0;
}

function volumeAudio2(){
    mujPrehravac.volume = 0.5;
}

function volumeAudio3(){
    mujPrehravac.volume = 1;
}



