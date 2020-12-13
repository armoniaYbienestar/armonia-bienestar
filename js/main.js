const hamburguesa = document.querySelector('.hamburguesa');
const menunavegacionmenu = document.querySelector('.menu-navegacion__menu');

window.addEventListener('scroll', function(){
    var cabezal = document.querySelector('nav');
    cabezal.classList.toggle('sticky', window.scrollY > 0); 
 });

 $('.menu-navegacion__boton').click(function(){
     $('.menu-navegacion__menu').toggleClass("active");
    
     $('.hamburguesa').toggleClass("active");
 });

 window.addEventListener('click', e=>{
    if(menunavegacionmenu.classList.contains('active'))
    {
        $('.hamburguesa').toggleClass(".menu-navegacion-menu__ocultar");
    }
 });