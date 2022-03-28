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





const _btnBox = document.querySelectorAll('.btn-box button');
const _btn = document.querySelectorAll('.btn');
const _sateliteName = document.querySelector('.satelite-name');
const _para = document.querySelector('.para');
const _rightMain = document.querySelector('.right-main img');

_btnBox.item(0).onclick = function(){
    _sateliteName.textContent = 'LAUNCH VEHICLE'
    _para.textContent = "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
    _rightMain.src ='../image/technology/image-launch-vehicle-portrait.jpg'
    _btn.item(0).classList.add('btn-active');
    _btn.item(1).classList.remove('btn-active');
    _btn.item(2).classList.remove('btn-active');
}

_btnBox.item(1).onclick = function(){
    _sateliteName.textContent = 'SPACEPORT'
    _para.textContent = 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
    _rightMain.src ='../image/technology/image-spaceport-portrait.jpg'
    _btn.item(1).classList.add('btn-active');
    _btn.item(0).classList.remove('btn-active');
    _btn.item(2).classList.remove('btn-active');
}

_btnBox.item(2).onclick = function(){
    _sateliteName.textContent = 'SPACE CAPSULE'
    _para.textContent = "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
    _rightMain.src ='../image/technology/image-space-capsule-portrait.jpg'
    _btn.item(2).classList.add('btn-active');
    _btn.item(1).classList.remove('btn-active');
    _btn.item(0).classList.remove('btn-active');
}