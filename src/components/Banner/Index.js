import React from "react";
import './Index.css'
function Banner() {
    return (<>
        <div className="container-fluid">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="https://picsum.photos/id/14/1200/400" alt="First slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>First slide</h5>
                            <p>First slide</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://picsum.photos/id/238/1200/400" alt="Second slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Second slide</h5>
                            <p>Second slide</p>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="https://picsum.photos/id/20/1200/400" alt="Third slide" />
                        <div class="carousel-caption d-none d-md-block">
                            <h5>Third slide</h5>
                            <p>Third slide</p>
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div className="jumbotron">
                <h1>Bootstrap Tutorial</h1>
                <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile-first projects on the web.</p>
            </div>
        </div>
    </>)
}

export default Banner;