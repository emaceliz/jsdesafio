import { user, country, aboutMe, foto } from "./user.js"


//funcion para cambiar el hash a profile
function profileHash() {
    $('.profile').click(function (e) {
        location.hash = '/profile'
        e.preventDefault();

    });
}
profileHash()




const imgProfile = new foto('./assets/img/aboutPage.jpg')
const countryME = new country("Argentina", "Buenos Aires", "Bahía Blanca")

//funcion para agregar elementos y sacar clases 
export function profile() {
    $('#app').empty();
    $('#app').append(`<h1 class = "title">ABOUT ME</h1>`);
    $('#app').append(`<div class ="flex"> <ul class = "unorderList"></ul></div>`);
    $('.flex').append(`<img src = ${imgProfile.src} id ="test" class="img" </img>`)



    //funcion para hacer crear elementos de la lista 
    function list() {
        for (const entry of aboutMe) {
            $(".unorderList").append(`<li class ="itemList">${entry}</li>`)

        }
    }



    list()
    const one = document.querySelector(".unorderList")
    const img = document.querySelector(".img")


    function imageLoad(entradas, observador) {

        entradas.forEach((entrada) => {
            if(entrada.isIntersecting){
               entrada.target.classList.add("visible")
            }
            
        });
    }
    const observer = new IntersectionObserver(imageLoad, {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,

    });
    observer.observe(one)
    observer.observe(img)
}
export function profileAnimate() {
    $('.frame').css({
        position: "absolute",
        bottom: "-30px",
        left: "30px",
        height: "150px",
        width: "150px",
        border: "1px solid rgba(89, 89, 89, 0.563)",
        borderRadius: "10px",
        transition: "all 500ms linear ",
        backgroundColor: "rgb(0, 169, 160)",
        opacity: "1",
    });
    $('.text').css({
        position: "absolute",
        bottom: "0px",
        left: "15vw",
        fontWeight: "normal",
        fontSize: "2.5rem",
        transition: "all 500ms linear ",

    })
    $('.main__header').css({
        height: "35vh",
        width: "100%",
        backgroundImage: "url(./assets/img/world.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        transition: "all 500ms linear",
    })

}
