const $circle = document.querySelectorAll(".circle")
const $c1 = document.querySelector(".c1")
const $c2 = document.querySelector(".c2")
const $c3 = document.querySelector(".c3")
const $c4 = document.querySelector(".c4")
const $c5 = document.querySelector(".c5")
const $container_circle = document.querySelector(".container_circles")
const $section_circle = document.querySelector(".section_circles")
let scrollPos = 0 

window.addEventListener("scroll" , (e)=>{
   let c1Radio = $c1.getAttribute("r")
   let c2Radio = $c2.getAttribute("r")
   let c3Radio = $c3.getAttribute("r")
   let c4Radio = $c4.getAttribute("r")
   let c5Radio = $c5.getAttribute("r")
  // console.log(window.scrollY)
   //console.log($section_circle.getBoundingClientRect())

//console.log($section_circle.getBoundingClientRect().bottom , $section_circle.getBoundingClientRect().top )
if($section_circle.getBoundingClientRect().bottom > 0 &&  $section_circle.getBoundingClientRect().top < 0){
    if ($section_circle.getBoundingClientRect().bottom < scrollPos){

        c1Radio++ 
        $c1.setAttribute("r" , c1Radio)
    
        if(c1Radio > "10"){
            c2Radio++
            $c2.setAttribute("r" , c2Radio)
          
            if(c2Radio > "20"){
                c3Radio++
                $c3.setAttribute("r" , c3Radio)
                if(c3Radio > "30"){
                    c4Radio++
                    $c4.setAttribute("r" , c4Radio)
                    if(c4Radio > "5"){
                        c5Radio++
                        $c5.setAttribute("r" , c5Radio)
                    }
                }
            }
        }
        scrollPos = $section_circle.getBoundingClientRect().bottom;
    
    }
    
   

     else{
       
       
       
     
       
        
        c1Radio != 0 ? c1Radio-- : null
        // c1Radio--
        $c1.setAttribute("r" , c1Radio)
        c2Radio != 0 ? c2Radio-- : null
        // c2Radio--
        $c2.setAttribute("r" , c2Radio)
        c3Radio != 0 ? c3Radio-- : null
        // c3Radio--
        $c3.setAttribute("r" , c3Radio)
        c4Radio != 0 ? c4Radio-- : null
        // c3Radio--
        $c4.setAttribute("r" , c4Radio)
        c5Radio != 0 ? c5Radio-- : null
        // c3Radio--
        $c5.setAttribute("r" , c5Radio)
        scrollPos = $section_circle.getBoundingClientRect().bottom;
    }
     
}   


   

})