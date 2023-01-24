const animado = document.querySelectorAll(".animado")
const subir = document.querySelector(".subir")
function mostrarScroll(){
    let scrollTop = document.documentElement.scrollTop;

    for (let i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 200 < scrollTop){
            animado[i].style.opacity = 1;
        } 

        
        
    }
}

window.addEventListener("scroll" , mostrarScroll)