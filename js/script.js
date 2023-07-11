let openmenu = document.querySelector('.header__openmenu');
let headermenu = document.querySelector('.header__menu'); 
openmenu.addEventListener('click', ()=> {

    headermenu.style.display = "flex";
    openmenu.style.display = "none"; 
    
    closemenu.style.display = "block";
}); 


closemenu =  document.querySelector('.header__closemenu');
 

closemenu.addEventListener('click', ()=> {
    headermenu.style.display = "none"; 
    closemenu.style.display = "none";
    
    openmenu.style.display = "block"; 
}); 

