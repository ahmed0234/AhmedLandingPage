const scroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
});

function firstpageanim() {
        let tl=gsap.timeline({
            
        })

        tl.from("nav",{
                y:-30,
                opacity:0,
                duration:1,
                ease: Expo.easeInOut
        }).to(".boundingelem",{
            y:0,
            opacity:1,
            duration:2,
            delay:-1,
            ease: Expo.easeInOut,
            stagger:0.2
    }).from(".hero_footer",{
        y:-10,
        opacity:0,
        duration:1.5,  
        ease: Expo.easeInOut,
        delay:-1.4,
        
});



}



Shery.mouseFollower();  


 





firstpageanim()

document.querySelectorAll(".elem").forEach((e)=>{


    var rotate=0
    var diff=0

        e.addEventListener("mousemove",(dets)=>{

             var diffy= (dets.clientY - e.getBoundingClientRect().top);
             diff=dets.clientX-rotate;
             rotate=dets.clientX

          
             gsap.to(e.querySelector("img"), {
                    opacity:1,
                    ease: Power3,
                    top:diffy,
                    left:dets.clientX,
                    rotate:   gsap.utils.clamp(-20, 20, diff*0.8)
                  



                })
                    
        })  
        e.addEventListener("mouseleave",()=>{

   

         
            gsap.to(e.querySelector("img"), {
                   opacity:0,
                   ease: Power3,
                   duration:0.5,
               
                 



               })
                   
       })  
       
})


Shery.hoverWithMediaCircle(".tip", {
    images: ["/images/roundpicmine.jpeg", "/images/sippings.JPG"] /*OR*/,
    
  });

