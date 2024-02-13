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
    images: ["/images/roundpicmine_2_11zon.jpeg", "/images/sippings_4_11zon.jpg"] /*OR*/,
    
  });



  Shery.imageEffect(".about .about_image_wrapper", {
    style: 5,
   
    config:{"a":{"value":2.52,"range":[0,30]},"b":{"value":-0.89,"range":[-1,1]},"zindex":{"value":"2","range":[-9999999,9999999]},"aspect":{"value":1.304072665267576},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":true},"growSize":{"value":10.51,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.31,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":0.61,"range":[0,10]},"metaball":{"value":0.81,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.96,"range":[0,1]},
    "antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.26,"range":[0,2]},"noise_scale":{"value":6.87,"range":[0,100]}},
    gooey:true
})
