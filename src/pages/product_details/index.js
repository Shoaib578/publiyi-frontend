import React from 'react'
import Product from '../../components/product'

export default class ProductDetails extends React.Component {
    render(){
        return(
            <div>
            {/* Shop Detail Start */}
            <div className="container-fluid pb-5">
              <div className="row px-xl-5">
                <div className="col-lg-5 mb-30">
                  <div id="product-carousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner bg-light">
                      <div className="carousel-item active">
                        <img className="w-100 h-100" src="img/product-1.jpg" alt="Image" />
                      </div>
                      <div className="carousel-item">
                        <img className="w-100 h-100" src="img/product-2.jpg" alt="Image" />
                      </div>
                      <div className="carousel-item">
                        <img className="w-100 h-100" src="img/product-3.jpg" alt="Image" />
                      </div>
                      <div className="carousel-item">
                        <img className="w-100 h-100" src="img/product-4.jpg" alt="Image" />
                      </div>
                    </div>
                    <a className="carousel-control-prev" href="#product-carousel" data-slide="prev">
                      <i className="fa fa-2x fa-angle-left text-dark" />
                    </a>
                    <a className="carousel-control-next" href="#product-carousel" data-slide="next">
                      <i className="fa fa-2x fa-angle-right text-dark" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-7 h-auto mb-30">
                  <div className="h-100 bg-light p-30">
                    <h3>Product Name Goes Here</h3>
                    
                    <h3 className="font-weight-semi-bold mb-4">$150.00</h3>
                    <p className="mb-4">Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit
                      clita ea. Sanc ipsum et, labore clita lorem magna duo dolor no sea
                      Nonumy</p>
                    <div className="d-flex mb-3">
                      <strong className="text-dark mr-3">Sizes:</strong>
                     
                        <div className="custom-control custom-radio custom-control-inline">
                         
                          <label >XS</label>
                        </div>
                        

                        <div className="custom-control custom-radio custom-control-inline">
                         
                          <label  >X</label>
                        </div>

                        <div className="custom-control custom-radio custom-control-inline">
                         
                          <label  >XS</label>
                        </div>
                      
                    </div>
                    <div className="d-flex mb-4">
                      <strong className="text-dark mr-3">Colors:</strong>
                     
                        <div className="custom-control custom-radio custom-control-inline">
                        
                          <label >Black</label>
                        </div>


                        <div className="custom-control custom-radio custom-control-inline">
                        
                        <label >red</label>
                      </div>



                      <div className="custom-control custom-radio custom-control-inline">
                        
                        <label >blue</label>
                      </div>


                      <div className="custom-control custom-radio custom-control-inline">
                        
                        <label >green</label>
                      </div>
                      
                      
                    </div>

                    <a className="btn btn-primary py-2 px-4" href='#'>
                    <i className="fa fa-comment" /> &nbsp;Send Message</a>


                    <a className="btn btn-primary py-2 px-4 ml-5" href='#'>
                    <i className="fa fa-phone" /> &nbsp;Get phone number</a>

                    
                    <div className="d-flex pt-2 mt-3">
                      <strong className="text-dark mr-2">Share on:</strong>
                      <div className="d-inline-flex">
                        <a className="text-dark px-2" href>
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a className="text-dark px-2" href>
                          <i className="fab fa-twitter" />
                        </a>
                        <a className="text-dark px-2" href>
                          <i className="fab fa-linkedin-in" />
                        </a>
                        <a className="text-dark px-2" href>
                          <i className="fab fa-pinterest" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row px-xl-5">
                <div className="col">
                  <div className="bg-light p-30">
                    <div className="nav nav-tabs mb-4">
                      <a className="nav-item nav-link text-dark active" data-toggle="tab" href="#tab-pane-1">Description</a>
                      <a className="nav-item nav-link text-dark" data-toggle="tab" href="#tab-pane-2">Information</a>
                     
                    </div>
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="tab-pane-1">
                        <h4 className="mb-3">Product Description</h4>
                        <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                        <p>Dolore magna est eirmod sanctus dolor, amet diam et eirmod et ipsum. Amet dolore tempor consetetur sed lorem dolor sit lorem tempor. Gubergren amet amet labore sadipscing clita clita diam clita. Sea amet et sed ipsum lorem elitr et, amet et labore voluptua sit rebum. Ea erat sed et diam takimata sed justo. Magna takimata justo et amet magna et.</p>
                      </div>
                      <div className="tab-pane fade" id="tab-pane-2">
                        <h4 className="mb-3">Additional Information</h4>
                        <p>Eos no lorem eirmod diam diam, eos elitr et gubergren diam sea. Consetetur vero aliquyam invidunt duo dolores et duo sit. Vero diam ea vero et dolore rebum, dolor rebum eirmod consetetur invidunt sed sed et, lorem duo et eos elitr, sadipscing kasd ipsum rebum diam. Dolore diam stet rebum sed tempor kasd eirmod. Takimata kasd ipsum accusam sadipscing, eos dolores sit no ut diam consetetur duo justo est, sit sanctus diam tempor aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd eos consetetur at sit rebum, diam kasd invidunt tempor lorem, ipsum lorem elitr sanctus eirmod takimata dolor ea invidunt.</p>
                        <div className="row">
                          <div className="col-md-6">
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item px-0">
                                Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                              </li>
                              <li className="list-group-item px-0">
                                Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                              </li>
                              <li className="list-group-item px-0">
                                Duo amet accusam eirmod nonumy stet et et stet eirmod.
                              </li>
                              <li className="list-group-item px-0">
                                Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                              </li>
                            </ul> 
                          </div>
                          <div className="col-md-6">
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item px-0">
                                Sit erat duo lorem duo ea consetetur, et eirmod takimata.
                              </li>
                              <li className="list-group-item px-0">
                                Amet kasd gubergren sit sanctus et lorem eos sadipscing at.
                              </li>
                              <li className="list-group-item px-0">
                                Duo amet accusam eirmod nonumy stet et et stet eirmod.
                              </li>
                              <li className="list-group-item px-0">
                                Takimata ea clita labore amet ipsum erat justo voluptua. Nonumy.
                              </li>
                            </ul> 
                          </div>
                        </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Shop Detail End */}
            {/* Products Start */}
      <div className="container-fluid py-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">You May Also Like</span></h2>
       
          <div className="col">
            <div className="row related-carousel">
             <Product />
             <Product />
             <Product />
             <Product />
             <Product />
             <Product />


            </div>
          </div>
        </div>
     
      {/* Products End */}
          </div>
        )
    }
}