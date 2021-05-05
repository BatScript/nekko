import React from "react";
import Header from "./header";
import Animate from "./animation";
import Gallery from "./gallery";
import Footer from "./footer";

function App(){
    return(
        <div>
            <Header/>
            <Animate/>
            <Gallery/>
            <Footer/>
        </div>
    );
}

export default App;