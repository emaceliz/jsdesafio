function porfolioHash() {
    $('.portfolio').click(function (e) {
        location.hash = '/portfolio'
        e.preventDefault();

    });
}
porfolioHash()


export function portfolio() {
    $('#app').empty();
    $('#app').append(`<div class="portfolio">
    <div class="portfolio_image"><img class="portfolioImg" src ="./assets/img/eme.png"></img></div>
    <div class="portfolio_texto"></div>
</div>`);
    

    $.ajax({
        type: "GET",
        url: "./assets/json/porfolio.json",
        success: function (response) {
            //for of para iterar "response"
            for (const job of response) {
                //for in para iterar dentro de "response"
                for (const i in job) {
                    if (job.hasOwnProperty.call(job, i)) {
                        const element = job[i];
                        $('.portfolio_texto').append(`<a href = ${element.url} class = ${element.class} target="_blank"> ${element.name}</a> `);

                        // hover para cambiar el atributo "src" en la imagen
                        $(`.${element.class}`).hover(function () {
                            $('.portfolioImg').attr('src', `${element.img}`);
                            ;  // over
                        }, function () {
                            $('.portfolioImg').attr('src', '');
                            // out
                        }
                        );
                    }
                }
            }
        }
    });

    $.ajax({
        type: "GET",
        url: "./assets/json/redes.json",
        success: function (response) {
            
            $('.text').empty();
             for (const red of response) {
                for (const key in red) {
                    if (Object.hasOwnProperty.call(red, key)) {
                        const element = red[key];
                        $('.text').append(`<a href = ${element.url} target="_blank"><img src= ${element.img}></img></a>`);
                        console.log('wipu');


                    }
                }

            }
        }
    }
    )
}
export function portfolioAnimate(){
    $('.frame').css({
        position: "absolute",
        right: "10px",
        top: "10px",
        borderRadius: "50%",
        width: "50px",
        height:"50px",
        border: "none",
        transition: "all 500ms linear",
        backgroundColor: "transparent",
        opacity: "0",
    })
    $('.text').css({
        color:"#FFF",
        position: "absolute",
        top: "2.5vh",
        right: "0",
        fontWeight: "normal",
        fontSize: "2.5rem",
        transition: "all 500ms linear",

    })
    $('.main__header').css({
        height: "12vh",
        width: "100%",
        backgroundImage: "url(./assets/img/polygon.svg)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
        transition: "all 500ms linear",
    })

}