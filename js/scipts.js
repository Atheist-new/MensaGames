
let game_zone = document.getElementById('game_zone');
let market_zone = document.getElementById('market_zone');
let info_zone = document.getElementById('info_zone');
/*--------------------------------*/

game_zone.onclick = function(){  
window.scrollTo({ 
    top: 0, 
    behavior: 'smooth'
    });
}

market_zone.onclick = function(){
    window.scrollTo({
        top:window.innerHeight - 70,
        behavior: 'smooth'
    })
}

info_zone.onclick = function(){  
window.scrollTo({ 
    top: 2 * (window.innerHeight - 70),
    behavior: 'smooth'
    });
}

document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal-login"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal-login').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal-login').style.marginLeft = '0px';
  });
});

document.addEventListener("DOMContentLoaded", function(){
  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
  console.log(scrollbar);
  document.querySelector('[href="#openModal-help"]').addEventListener('click',function(){
    document.body.style.overflow = 'hidden';
    document.querySelector('#openModal-help').style.marginLeft = scrollbar;
  });
  document.querySelector('[href="#close-help"]').addEventListener('click',function(){
    document.body.style.overflow = 'visible';
    document.querySelector('#openModal-help').style.marginLeft = '0px';
  });
});

document.addEventListener("DOMContentLoaded", function(){
    var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal-potter"]').addEventListener('click',function(){
      document.body.style.overflow = 'hidden';
      document.querySelector('#openModal-potter').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close-potter"]').addEventListener('click',function(){
      document.body.style.overflow = 'visible';
      document.querySelector('#openModal-potter').style.marginLeft = '0px';
    });
  });