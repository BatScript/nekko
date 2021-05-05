import React from "react";

const date = new Date();
var year = date.getFullYear();

function Footer(){
    return(
        <footer>
            Copyright Mohit {year}<br/>
            To know more call us at +8529XXXXXX
        </footer>
    );
}

export default Footer;