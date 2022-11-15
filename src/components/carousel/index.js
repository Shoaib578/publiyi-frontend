
import React from 'react';

export default class Carousel extends React.Component{
    render(){
        return(
          <div className="container-fluid mb-3">
          <div className="row px-xl-5">
            <div className="col-lg-8">
              <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
                <ol className="carousel-indicators">
                  <li data-target="#header-carousel" data-slide-to={0} className="active" />
                  <li data-target="#header-carousel" data-slide-to={1} />
                  <li data-target="#header-carousel" data-slide-to={2} />
                </ol>
                <div className="carousel-inner">
                  <div className="carousel-item position-relative active" style={{height: '430px'}}>
                    <img className="position-absolute w-100 h-100" src="img/carousel-1.jpg" style={{objectFit: 'cover'}} />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{maxWidth: '700px'}}>
                        <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Men Fashion</h1>
                        <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                        <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="/shop">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item position-relative" style={{height: '430px'}}>
                    <img className="position-absolute w-100 h-100" src="img/carousel-2.jpg" style={{objectFit: 'cover'}} />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{maxWidth: '700px'}}>
                        <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Women Fashion</h1>
                        <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                        <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="/shop">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item position-relative" style={{height: '430px'}}>
                    <img className="position-absolute w-100 h-100" src="img/carousel-3.jpg" style={{objectFit: 'cover'}} />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{maxWidth: '700px'}}>
                        <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Kids Fashion</h1>
                        <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Lorem rebum magna amet lorem magna erat diam stet. Sadips duo stet amet amet ndiam elitr ipsum diam</p>
                        <a className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" href="/shop">Shop Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="product-offer mb-30" >
                <div className='img-fluid'>
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6796247302325530"
     crossorigin="anonymous"></script>

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-6796247302325530"
     data-ad-slot="2166678587"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>
                </div>
             
               
              </div>
            
            </div>
          </div>
        </div>
        )
    }
}