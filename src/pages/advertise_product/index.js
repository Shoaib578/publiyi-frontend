import React from 'react'

export default class AdvertiseProduct extends React.Component {
    render(){
        return(
            <div className="container tm-mt-big tm-mb-big border p-5 bg-white">
   <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
                <div className="form-group mb-3">
                          <label htmlFor="category">Select Your Product</label>
                          <p>Advertising your product will charge you $5</p>
                          <select className="custom-select tm-select-accounts" id="category">
                            <option selected>Shoes ddd</option>
                            <option value={1}>Shirts asdasd</option>
                            <option value={2}>Most Popular</option>
                            <option value={3}>Trending</option>
                          </select>
                        </div>
   </div>


            <div className="col-12 mt-5">
                    <br />

                      <button type="submit" className="btn btn-primary btn-block text-uppercase">Advertise</button>
                    </div>
            </div>
        )
    }
}