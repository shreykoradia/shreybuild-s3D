// Selecction Of card section for movment 

            const card = document.querySelector('.card');
            const parentdiv = document.querySelector('.parentdiv');
            const header = document.querySelector('.title');
            const anime = document.querySelector('.anime img');
// movement form th mouse via parent div 

parentdiv.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 10;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  });
       
// animate in 

    parentdiv.addEventListener("mouseenter" ,(e) =>{
        card.style.transition = "none";

        //pop out
        header.style.transform = `translateZ(150px)`;
        anime.style.transform = `translateZ(200px) rotateZ(20deg)`;

    });
    

   


// animate out 

parentdiv.addEventListener("mouseleave", (e) =>{
    card.style.transition = " all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)` ;
//pop in

    header.style.transform = `translateZ(0px)`;
    anime.style.transform = `translateZ(0px) rotateZ(0deg)`;
});