import React from 'react'
export default class Product extends React.Component{
render(){
    return(
        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" src="img/product-1.jpg" alt="" />
            <div className="product-action">
              <a className="btn btn-outline-dark btn-square" href><i className="fas fa-comment" /></a>
              <a className="btn btn-outline-dark btn-square" href><i className="far fa-heart" /></a>
              <a className="btn btn-outline-dark btn-square" href="/product_details"><i className="fa fa-eye" /></a>
       
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href="/product_details">Product Name Goes Here</a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>$123.00</h5><h6 className="text-muted ml-2"><i className='fa fa-truck'></i></h6>

            </div>
           
            
           <p> <i className='fa fa-map-marker'></i> Pakistan islamabad</p>
          
           
          </div>
        </div>
      </div> 
    )
}
}