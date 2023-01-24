const container_info_person = document.querySelector(".container_persons")
const getDataPerson  = async ()=>{
    fetch("info_person.json")
    .then((response)=> response.json())
    .then((data)=> {
        data.forEach(element => {
            container_info_person.innerHTML += `
            <a href="about-me.html?name=${element.Nombre}"  class="card_person" style="background-image: url(${element.img_perfil})"></a>
            `
        });

     

      
    }).catch((error) =>{
        console.log("Hay un error " + error)
    })

}




getDataPerson()
