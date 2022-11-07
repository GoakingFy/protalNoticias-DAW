const API_KEY = "pub_13126a25d3902e491c238f9d749f1b60f9c7e";
const $container_news = document.querySelector(".container_news")
const $country_select = document.getElementById("country")
const $inp_search = document.querySelector(".inpt_search")
const $board  = document.getElementById("board")
const ctx = $board.getContext('2d');
let  canvasPressed = false;
let initialX;
let initialY;
const $span_binary = document.querySelector(".span_binary")


$inp_search.addEventListener("keyup" , ()=>{
    if($inp_search.value != ""){
        getData($country_select.value,`&q="${$inp_search.value}"`)
    }else{
        getData()
    }
   
})

$country_select.addEventListener("change" , (e)=>{
   getData($country_select.value)
})

const getData = async (country = "es", query = "")=>{
    fetch(`https://newsdata.io/api/1/news?apikey=${API_KEY}&language=${country != "us" ? country : "en"}&country=${country}${query}`)
    .then((response)=> response.json())
    .then((data)=> {
        $container_news.innerHTML = ``
        printNews(data.results)
        console.log(data.results)
    })

}

getData()
function printNews(data){
    data.slice(-9).forEach(result => {
        $container_news.innerHTML += `
        <a href="${result.link}" target="_blank" class="news">
                <div class="container_info">
                    <header class="container_header_news">
                        <div class="container_source_id">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/66/CNN_International_logo.svg" alt="">
                            <p>${result.source_id != null ? result.source_id : "Desconocido" }</p>
                        </div>
    
                        <p class="pub_date">${result.pubDate}</p>
                    </header>
                    <main class="content_main">
                        <h2 class="title_new">${result.title}</h2>
                        <p class="desc_new">${result.description != null ? result.description : "Descripción no disponible" }</p>
    
                    </main>
                    <p class="author">${result.creator != null ? result.creator : "Autor desconocido"}</p>
                </div>
              <div class="content_img_news" style="background-image: url(${result.image_url != null ? result.image_url : "src/img/Rage.svg" });"></div>
              
        </a>
        `
    });

}



function draw(cX,cY){
    ctx.beginPath();
    ctx.moveTo(initialX ,initialY );

    ctx.lineWith = 50;
    ctx.strokeStyle = "#000"
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.lineTo(cX ,cY )
    ctx.stroke()

    initialX = cX ;
    initialY = cY ;
}


const mouseDown = (e)=>{
    console.log(e , e.offsetX , e.offsetY)
    initialX = e.offsetX ;
    
    initialY = e.offsetY ;
    console.log(initialX,initialY)
    draw(initialX,initialY)
}

$board.addEventListener("mousedown" , mouseDown)

  
