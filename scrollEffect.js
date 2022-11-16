const $circle = document.querySelectorAll(".circle")
const $c1 = document.querySelector(".c1")
const $c2 = document.querySelector(".c2")
const $c3 = document.querySelector(".c3")
const $container_circle = document.querySelector(".container_circles")
let scrollPos = 0;
window.addEventListener("scroll" , (e)=>{
   let c1Radio = $c1.getAttribute("r")
   let c2Radio = $c2.getAttribute("r")
   let c3Radio = $c3.getAttribute("r")


   if ((document.body.getBoundingClientRect()).top > scrollPos){

    c1Radio != 0 ? c1Radio-- : null
    // c1Radio--
    $c1.setAttribute("r" , c1Radio)
    c2Radio != 0 ? c2Radio-- : null
    // c2Radio--
    $c2.setAttribute("r" , c2Radio)
    c3Radio != 0 ? c3Radio-- : null
    // c3Radio--
    $c3.setAttribute("r" , c3Radio)
   

}
   // ARRIBA
 else{
   
   
   
    c1Radio++ 
    $c1.setAttribute("r" , c1Radio)

    if(c1Radio > "10"){
        c2Radio++
        $c2.setAttribute("r" , c2Radio)
      
        if(c2Radio > "20"){
            c3Radio++
            $c3.setAttribute("r" , c3Radio)
        }
    }
    console.log(scrollPos)
    scrollPos = (document.body.getBoundingClientRect()).top;
}

   

})