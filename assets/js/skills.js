//creando una "base de datos" para mis skills

const skillsList = [{
    'html':{
        desc:"Good knowledge of HTML sintax",
        url:"./assets/img/html.svg"
    },
    'css':{
        desc:'Long live CSS!',
        url:"./assets/img/css.svg"
    },
    'sass':{
        desc:'best preprocessor ever!',
        url:'./assets/img/sass.svg'
    },
    'js':{
        desc:"i'm lovin' it",
        url:'./assets/img/js.svg'
    },
    'git':{
        desc:'Make commit, not war',
        url:'./assets/img/git.svg'

    },
    'github':{
        desc:'github lover',
        url:'./assets/img/github.svg'
    }
}];

//for of para separar cada lenguaje 
function forSkill(){
for (const lang of skillsList) {
//For in para separar el contenido de cada lang
    for (const i in lang) {
        if (lang.hasOwnProperty.call(lang, i)) {
            const element = lang[i];
//creamos elementos por cada elemento dentro de lang
            $('.skillGrid').append(`<div class ="skillBox ${i}">
            <div class="skillBox__img ">
                <img src= ${element.url}></img>
            </div>
            <div class="skillBox__desc">
                <p>${element.desc}</p>
            </div>
            
            </div>`);
            
        }
    }
}
}




//funcion para cambiar el hash a skills
function skillsHash() {
    $(".skills").click(function (e) {
        location.hash = "/skills"
        e.preventDefault();
    });
}
skillsHash()





//funcion para agregar elementos o clases a skills
export function skills() {
    $('#app').empty();
    $('#app').append(`<div class="skillGrid"></div>`)
    forSkill()

const skillGrid = document.querySelector('.skillGrid')

    function skillLoad(entradas, observador) {

        entradas.forEach((entrada) => {
            if(entrada.isIntersecting){
               entrada.target.classList.add("visible")
            }
            
        });
    }
    const observer = new IntersectionObserver(skillLoad, {
        root: null,
        rootMargin: "0px",
        threshold: 0.8,

    });
    observer.observe(skillGrid)
}
export function skillsAnimate(){
    $('.frame').css({
        position: "absolute",
        left: "15px",
        bottom: "15px",
        height: "120px",
        width: "120px",
        borderRadius: "45%",
        border: "none",
        transition: "all 500ms linear",
        backgroundColor: "transparent",
        opacity: "1"
    });
    $('.text').css({
        fontSize: "2rem",
        bottom: "60px",
        transition: "all 500ms linear",
    })
    $('.main__header').css({
        height: "30vh",
        width: "100%",
        backgroundImage: "url(./assets/img/icon.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        transition: "all 500ms linear",
    })

}