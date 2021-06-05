for (let i = 0; i < 7; i++){
    document.querySelectorAll(".name")[i].addEventListener("click",function(){
        document.querySelectorAll(".name")[i].classList.add("glow");
    })
}