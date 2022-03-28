const _open = document.getElementById('open');
const _close = document.getElementById('close');
const _hamburgerNavbar = document.querySelector('.hamburger-navbar');

_open.onclick = function(){
    var _width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if(_width>=481 && _width<=768){
        _hamburgerNavbar.style.width='75vw';
        _hamburgerNavbar.style.visibility='visible';
    }
    if(_width>=320 && _width<=480){
        _hamburgerNavbar.style.width='75vw';
        _hamburgerNavbar.style.visibility='visible';
    }
    if(_width>=0 && _width<=319){
        _hamburgerNavbar.style.width='75vw';
        _hamburgerNavbar.style.visibility='visible';
    }
}

_close.onclick = function(){
    _hamburgerNavbar.style.width ='0';
    _hamburgerNavbar.style.visibility = 'hidden';
}








const _indicator = document.querySelectorAll('.indicator button');
const _btn = document.getElementsByClassName('btn');
const _heading = document.querySelector('.heading');
const _characterName = document.querySelector('.character_name');
const _para = document.querySelector('.para');
const _rightMain = document.querySelector('.right-main img');

_indicator.item(0).onclick = function(){
    _heading.textContent = 'COMMANDER'
    _characterName.textContent = 'DOUGLAS HURLEY'
    _para.textContent='Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
    _rightMain.src='../image/crew/image-douglas-hurley.png'
    _btn.item(0).classList.add('btn-active');
    _btn.item(1).classList.remove('btn-active');
    _btn.item(2).classList.remove('btn-active');
    _btn.item(3).classList.remove('btn-active');
 }

_indicator.item(1).onclick = function(){
   _heading.textContent = 'MISSION SPECIALIST'
   _characterName.textContent = 'MARK SHUTTLEWORTH'
   _para.textContent='Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
   _rightMain.src='../image/crew/image-mark-shuttleworth.png'
   _btn.item(1).classList.add('btn-active');
   _btn.item(0).classList.remove('btn-active');
   _btn.item(2).classList.remove('btn-active');
   _btn.item(3).classList.remove('btn-active');
}

_indicator.item(2).onclick = function(){
    _heading.textContent = 'PILOT'
    _characterName.textContent = 'VICTOR GLOVER'
    _para.textContent='Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
    _rightMain.src='../image/crew/image-victor-glover.png'
    _btn.item(2).classList.add('btn-active');
    _btn.item(0).classList.remove('btn-active');
    _btn.item(1).classList.remove('btn-active');
    _btn.item(3).classList.remove('btn-active');
 }

 _indicator.item(3).onclick = function(){
    _heading.textContent = 'FLIGHT ENGINEER'
    _characterName.textContent = 'ANOUSHEH ANSARI'
    _para.textContent='Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space'
    _rightMain.src='../image/crew/image-anousheh-ansari.png'
    _btn.item(3).classList.add('btn-active');
    _btn.item(0).classList.remove('btn-active');
    _btn.item(2).classList.remove('btn-active');
    _btn.item(1).classList.remove('btn-active');
 }