
const  $inp_file = document.querySelector("#inp_file");
const $board = document.getElementById("board")
const $container_select_noti = document.querySelector(".container_select_noti")
const $content_main = document.querySelector(".content_main");
const $select_template_1 = document.getElementById("select_template_1");
const $select_template_2 = document.getElementById("select_template_2");
const $select_template_3 = document.getElementById("select_template_3");
const $container_info_noticia_perso = document.querySelector(".container_info_noticia_perso")

$inp_file.addEventListener("change" , (e)=>{
    let arrArchivo = $inp_file.files[0];
   let  urlArchivo = URL.createObjectURL(arrArchivo)
    $board.style.backgroundImage = `url(${urlArchivo})`
    $container_select_noti.style.display = "flex"
   // $container_info_noticia_perso.style.bottom = "0px"

})

$select_template_1.addEventListener("click" , ()=>{
  
    $container_info_noticia_perso.innerHTML = `
    <header class="container_header_news">
                        <div class="container_source_id">
                            <img  alt="">
                            <p>Noticias Joaquin</p>
                        </div>
    
                        <p class="pub_date">12:35:2</p>
                    </header>
                    <main class="content_main">
                        <h3 class="title_new">En busca y captura</h3>
                        <p class="desc_new">Este sujeto se encuentra en busca y captura. La última vez que fue visto se encontraba en Sevilla.</p>
    
                    </main>
    `
    $container_info_noticia_perso.style.bottom = "0px"
})

$select_template_2.addEventListener("click" , ()=>{
   
    $container_info_noticia_perso.innerHTML = `
    <header class="container_header_news">
                        <div class="container_source_id">
                            <img  alt="">
                            <p>noticias Joaquin</p>
                        </div>
    
                        <p class="pub_date">12:35:2</p>
                    </header>
                    <main class="content_main">
                        <h3 class="title_new">Urgencia climática</h3>
                        <p class="desc_new">Debido al cambio climático, nos encontramos con temperaturas de mas de 56 grados en Sevilla</p>
    
                    </main>
    `
    $container_info_noticia_perso.style.bottom = "0px"
})

$select_template_3.addEventListener("click" , ()=>{
   
    $container_info_noticia_perso.innerHTML = `
    <header class="container_header_news">
                        <div class="container_source_id">
                            <img alt="">
                            <p>noticias Joaquin</p>
                        </div>
    
                        <p class="pub_date">12:35:2</p>
                    </header>
                    <main class="content_main">
                        <h3 class="title_new">Crisis en Sevilla</h3>
                        <p class="desc_new">Debido a la mala gestion de la crisis sanitaria en sevilla varios hospitales ...</p>
    
                    </main>
    `
    $container_info_noticia_perso.style.bottom = "0px"
})
