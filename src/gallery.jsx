import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";

Aos.init({
    offset: 100,
    duration: 500,
    easing: 'ease-in-sine',
    delay: 100,
  });

function Gallery(){
    return(
        <div class="gallery">
        <h1 class="text-center">GALLERY</h1>
        <div class="grid-container" id="gallery">
            <img data-aos="fade-right" class="cat-1" src="images/missy.jpg" alt="cat"/>
            <img data-aos="fade-left" class="cat-2" src="images/george.jpg" alt="cat"/>
            <img data-aos="fade-left" class="cat-3" src="images/Nekko.jpg" alt="cat"/>
        </div>
        </div>
    );
}

export default Gallery;