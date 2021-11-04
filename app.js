
function openTab(tabName){
    /*    var i, x; */
        x = document.getElementsByClassName("timeline-details");
        for (i = 0; i < x.length; i++){
            x[i].style.display = "none"
        }
        document.getElementById(tabName).style.display = "block";
    }

$(document).ready(function(){
setTimeout(function(){$(".toast").addClass("show")}, 5000);
})

$(".btn-close").click(function(){
    $(".toast").removeClass("show");
    $(".whatsappIcon").css("display","initial");
    })

$(".whatsappIconImg").click(function(){
    $(".toast").addClass("show");
    $(".whatsappIcon").css("display","none");
    })

$(".btn-whatsapp").click(function(){
    $(".toast").removeClass("show");
    $(".whatsappIcon").css("display","initial");
    })


$.get("https://v2.jokeapi.dev/joke/Programming?type=single").done(function (data){
    var joke = data.joke;
    console.log (joke);
    $("p#codingJoke").append(data.joke);
})