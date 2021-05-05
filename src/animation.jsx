import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

window.onload = (event) => {
    document.getElementById("catAnimate").style.bottom = 0;
};

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    document.getElementById("box").style.marginLeft = value+"px";
})

Aos.init({
    offset: 200,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100,
  });

function Animate(){
    return(
        <div class="animate">
            <img class="catAnimate" id="catAnimate" src="images/cat.svg" alt="cat img"></img>
            <h1 data-aos="fade-up" class="rotext">HELLO</h1>
            <h3 data-aos="zoom-in" data-aos-delay="1000" class="rotext-b">I am Nekko Chan <br/> I have a favour to ask!</h3>
            <div data-aos="fade-up" class="box" id="box" >
                <div class="message">
                    <p data-aos="fade-up" class="catfly-text">"Please adopt us kitties instead of buying. It will help us to survive against other bad humans. Many of us has been already adopted and are happily living with their owners while some of us are waiting for people like you to show up and adopt us. So please do us a wholesome favour to take care of us and we promise we'll love you more than anyone."<br/><br/>THANK YOU!</p>
                </div>
                <img class="catfly" src="images/catfly.png" alt="catfly"/>
            </div>
        </div>
    );
}

export default Animate;