import React from 'react'
import Product from '../../components/product'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FacebookIcon, TwitterIcon,WhatsappIcon,LinkedinIcon, FacebookMessengerShareButton, FacebookMessengerIcon } from "react-share";
import { FacebookShareButton, TwitterShareButton,WhatsappShareButton,LinkedinShareButton } from "react-share";


export default class ProductDetails extends React.Component {

  showToastMessage = () => {
    toast.success('Success Notification !', {
        position: toast.POSITION.TOP_RIGHT
    });
};


    render(){
        return(
            <div>
            {/* Shop Detail Start */}
            <div className="container-fluid pb-5">
            <div  id="container-aa3c00a92a88c702eb3e4032e47081e4"></div>

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
                    <div className="d-flex mb-1">
                      <strong className="text-dark">Sizes:</strong>
                     
                        <div  className="ml-2">
                         
                          <label >XS</label>
                        </div>
                        

                        <div className="ml-2">
                         
                          <label  >X</label>
                        </div>

                        <div  className="ml-2">
                         
                          <label  >XS</label>
                        </div>
                      
                    </div>
                    <div className="d-flex ">
                      <strong className="text-dark">Colors:</strong>
                     
                        <div className='ml-2'>
                        
                          <label >Black</label>
                        </div>


                        <div className='ml-2'>
                        
                        <label >red</label>
                      </div>


                      <div className='ml-2'>
                        
                        <label >red</label>
                      </div>
                      
                      
                      <div className='ml-2'>
                        
                        <label >red</label>
                      </div>

                      <div className='ml-2'>
                        
                        <label >red</label>
                      </div>

                    </div>

                    <div className="d-flex mb-4">
                    <i class="fa fa-map-marker" aria-hidden="true"></i>

                     
                        <div className='ml-2'>
                        
                          <label >Pakistan</label>
                        </div>



                    </div>

                    <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"43%"}}>
                    <button  data-toggle="modal" data-target="#exampleModal" className="btn btn-primary py-2 px-4" >
                    Contact Now</button>

                      <button  data-toggle="modal" data-target="#reserveModal" className="btn btn-primary py-2 px-4 ml-3" >
                    Reserve Now</button>
                    </div>
                  



                    <div className="d-flex pt-2 mt-3">
                      <strong className="text-dark mr-2">Share on:</strong>
                      <div className="d-inline-flex">
                      
                      
                      <FacebookShareButton
                        url={"https://peing.net/ja/"}
                        quote={"Hello this is the publiyi Camera"}
                        hashtag={"#camera"}
                        description={"aiueo"}
                        className="Demo__some-network__share-button"
                      >
                        <FacebookIcon size={25} round /> 
                      </FacebookShareButton>



                      <WhatsappShareButton
                        url={"https://peing.net/ja/"}
                        quote={"Hello this is the publiyi Camera"}
                        hashtag={"#camera"}
                        description={"aiueo"}
                        className="Demo__some-network__share-button ml-2"
                      >
                        <WhatsappIcon size={25} round /> 
                      </WhatsappShareButton>



                      <TwitterShareButton
                        url={"https://peing.net/ja/"}
                        quote={"Hello this is the publiyi Camera"}
                        hashtag={"#camera"}
                        description={"aiueo"}
                        className="Demo__some-network__share-button ml-2"
                      >
                        <TwitterIcon size={25} round /> 
                      </TwitterShareButton>



                      <LinkedinShareButton
                        url={"https://peing.net/ja/"}
                        quote={"Hello this is the publiyi Camera"}
                        hashtag={"#camera"}
                        description={"aiueo"}
                        className="Demo__some-network__share-button ml-2"
                      >
                        <LinkedinIcon size={25} round /> 
                      </LinkedinShareButton>


                      <FacebookMessengerShareButton
                        url={"https://peing.net/ja/"}
                        quote={"Hello this is the publiyi Camera"}
                        hashtag={"#camera"}
                        description={"aiueo"}
                        className="Demo__some-network__share-button ml-2"
                      >
                        <FacebookMessengerIcon size={25} round /> 
                      </FacebookMessengerShareButton>



                        
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
                       
                        <h4 className="mb-3">Facilities</h4>
                       
                       <div className="row">
                          <div className="col-md-6">
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item px-0">
                                Coffee
                              </li>
                              <li className="list-group-item px-0">
                                Heater
                              </li>
                              <li className="list-group-item px-0">
                               Medical Treatement
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


     {/* Contact Now Modal */}
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
      
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        
        

      <a className="btn btn-primary py-2 px-4" href='#'>
                    <i className="fa fa-comment" /> &nbsp;Send message</a>

      
          
      <div onClick={()=>{
      navigator.clipboard.writeText('+9230534880')
      .then(res=>{
        toast.success('Copied to Clipboard',{
     
          position: toast.POSITION.BOTTOM_RIGHT, autoClose:15000})

      })
      
      } } className='btn btn-primary py-2 px-4  '>

      <i className="fa fa-phone" /> &nbsp;+9230534880

        </div>    
        



      </div>
    
    </div>
  </div>
</div>

   {/* Reserve Now Modal */}
   <div className="modal fade" id="reserveModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">


                        <div className="form-group mb-3">
                          <label htmlFor="amount_of_people">Amount of people
                          </label>
                          <input id="amount_of_people" name="amount_of_people" type="number" className="form-control validate" required />
                        </div>


                        <div className="form-group mb-3">
                          <label htmlFor="check_in">Check in
                          </label>
                          <input id="check_in" name="check_in" type="date" className="form-control validate" required />
                        </div>



                        <div className="form-group mb-3">
                          <label htmlFor="check_out">Check out
                          </label>
                          <input id="check_out" name="check_out" type="date" className="form-control validate" required />
                        </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Reserve</button>
            </div>
          </div>
        </div>
      </div>


<ToastContainer />
          </div>
        )
    }
}