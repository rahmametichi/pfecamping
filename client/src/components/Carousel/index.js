import React from "react";
import "./style.css"

function Carousel(props) {
  return (
    <div id="carouselWrapperFade" className="carousel slide carousel-fade" data-ride="carousel" {...props}>
      {props.children}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="d-block w-100 img1" />
          <div className="carousel-caption">
            <h1><a href="https://www.nps.gov/grca/index.htm"></a></h1>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100 img2" />
          <div className="carousel-caption">
            <h1><a href="https://www.indonesia.travel/us/en/destinations/java/bromo-tengger-semeru-national-park/mount-bromo"></a></h1>
          </div>
        </div>
        <div className="carousel-item">
          <div className="d-block w-100 img3" />
          <div className="carousel-caption">
            <h1><a href="https://ranchosantana.com/"></a></h1>
          </div>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselWrapperFade" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselWrapperFade" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Carousel;
