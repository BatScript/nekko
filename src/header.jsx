import React from "react";

function Header(){
    return(
        <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="/">Paws</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto">
      <a class="nav-item nav-link" href="/">About</a>
      <a class="nav-item nav-link" href="#gallery">Gallery</a>
      <a class="nav-item nav-link" href="/">Adopt</a>
    </div>
  </div>
</nav>
    );
}

export default Header; 