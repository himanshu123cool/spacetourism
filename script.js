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

