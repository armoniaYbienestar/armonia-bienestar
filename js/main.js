window.addEventListener('scroll', function(){
    var cabezal = document.querySelector('nav');
    cabezal.classList.toggle('sticky', window.scrollY > 0); 
 });

 $('.menu-navegacion__boton').click(function(){
     $('.menu-navegacion .menu-navegacion__menu').toggleClass("active");
    
     $('.menu-navegacion__boton i').toggleClass("active");
 });