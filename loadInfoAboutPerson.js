const container_about = document.querySelector(".about")
let nameP = new URLSearchParams(window.location.search).get("name")

const getDataPerson  = async ()=>{
    fetch("info_person.json")
    .then((response)=> response.json())
    .then((data)=> {
        data.forEach(element => {
          if(element.Nombre == nameP){
            container_about.innerHTML = `
            <div  class="img_person" style="background-image:url(${element.img_perfil})"alt=""></div>
            <div class="container_info">
                <h1 class="namePerson">${element.Nombre}</h1>
                <h3 class="cargo">${element.Cargo}</h3>
                
                <p>Aficiones: ${element.Aficiones}</p>
                <p class="descripcion">${element.Desc}</p>
                </div>
                `
          }
        });

     

      
    }).catch((error) =>{
        console.log("Hay un error " + error)
    })

}




getDataPerson()
