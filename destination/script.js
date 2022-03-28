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



const _tabLink = document.querySelectorAll('.tab_links li');
const _tabItem = document.getElementsByClassName('tab-item');
const _leftMain = document.querySelector('.left-main img');
const _heading = document.querySelector('.heading');
const _para = document.querySelector('.para');
const _distance = document.querySelector('#distance span');
const _day = document.querySelector('#day span');

_tabLink.item(0).onclick = function(){
    _heading.textContent='MOON'
    _para.textContent = "See our planet as you have never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you are there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."
    _distance.textContent = '384,400 KM'
    _day.textContent = '3 DAYS'
    _leftMain.src = '../image/destination/image-moon.png'
    _tabItem.item(0).classList.add('active');
    _tabItem.item(1).classList.remove('active');
    _tabItem.item(2).classList.remove('active');
    _tabItem.item(3).classList.remove('active');
}  

_tabLink.item(1).onclick = function(){
    _heading.textContent='MARS'
    _para.textContent = "Do not forget to pack your hiking boots. You will need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It is two and a half times the size of Everest!"
    _distance.textContent = '225 MIL. KM'
    _day.textContent = '9 MONTHS'
    _leftMain.src = '../image/destination/image-mars.png'
    _tabItem.item(1).classList.add('active');
    _tabItem.item(0).classList.remove('active');
    _tabItem.item(2).classList.remove('active');
    _tabItem.item(3).classList.remove('active');
}  

_tabLink.item(2).onclick = function(){
    _heading.textContent='EUROPA'
    _para.textContent = "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover dream. With an icy surface, it is perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin."
    _distance.textContent = '628 MIL. KM'
    _day.textContent = '3 YEARS'
    _leftMain.src = '../image/destination/image-europa.png'
    _tabItem.item(2).classList.add('active');
    _tabItem.item(1).classList.remove('active');
    _tabItem.item(0).classList.remove('active');
    _tabItem.item(3).classList.remove('active');
}  

_tabLink.item(3).onclick = function(){
    _heading.textContent='TITAN'
    _para.textContent = "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn."
    _distance.textContent = '1.6 BIL. KM'
    _day.textContent = '7 YEARS'
    _leftMain.src = '../image/destination/image-titan.png'
    _tabItem.item(3).classList.add('active');
    _tabItem.item(1).classList.remove('active');
    _tabItem.item(2).classList.remove('active');
    _tabItem.item(0).classList.remove('active');
}  



