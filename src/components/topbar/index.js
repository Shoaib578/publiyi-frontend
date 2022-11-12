import React from 'react'

export default class TopBar extends React.Component {
render(){
    return(
       
        <div className="container-fluid">
        <div className="row bg-secondary py-1 px-xl-5">
          <div className="col-lg-6 d-none d-lg-block">
          

          </div>
          <div className="col-lg-6 text-center text-lg-right">
            <div className="d-inline-flex align-items-center">
              
              <div id="google_translate_element" style={{top:10}}>
                </div>
             
             
             
            </div>
            <div className="d-inline-flex align-items-center d-block d-lg-none">
            <a href="/chat" className="btn px-0 ml-2">
                <i className="fas fa-comments text-dark" />
                <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: '2px'}}>0</span>
              </a>


              <a href="/favorites" className="btn px-0 ml-2">
                <i className="fas fa-heart text-dark" />
                <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: '2px'}}>0</span>
              </a>
              <a href="/notifications" className="btn px-0 ml-2">
                <i className="fas fa-bell text-dark" />
                <span className="badge text-dark border border-dark rounded-circle" style={{paddingBottom: '2px'}}>0</span>
              </a>
              <a href className="btn px-0 ml-2" data-toggle="dropdown">
                <i className="fas fa-user-circle text-dark" style={{fontSize:25}}/>
              
              </a>
              <div className="dropdown-menu dropdown-menu-right">
              <a href='/profile' className="dropdown-item" type="button">Profile</a>

                  <a href='/signin' className="dropdown-item" type="button">Sign in</a>
                  <a href='/signup' className="dropdown-item" type="button">Sign up</a>
                </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center bg-light py-3 px-xl-5 d-none d-lg-flex">
          <div className="col-lg-4">
            <a href className="text-decoration-none">
              <span className="h1 text-uppercase text-primary bg-dark px-2">PUB</span>
              <span className="h1 text-uppercase text-dark bg-primary px-2 ml-n1">LIYI</span>
            </a>
          </div>
          <div className="col-lg-4 col-6 text-left">
          <div className="row">
          <div className="col-md-12">
            <div className="input-group" id="adv-search">
              <input type="text" className="form-control" placeholder="Search for product" />
              <div className="input-group-btn">
                <div className="btn-group" role="group">
                  <div className="dropdown dropdown-lg">
                    <button type="button"  className="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span className="fa fa-angle-double-down" /></button>
                    <div className="dropdown-menu dropdown-menu-right" role="menu">
                      <form className="form-horizontal" role="form">
                        <div className="form-group">
                          <label htmlFor="filter">Filter by</label>
                          <select className="form-control">
                            <option value={0} selected>All Categories</option>
                            <option value={1}>Shoes</option>
                            <option value={2}>Cloths</option>
                            <option value={2}>women Cloths</option>

                            
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="contain">Distance</label>
                          <input className="form-control" placeholder='KM' type="text" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="contain">Contains the words</label>
                          <input className="form-control" type="text" placeholder='Keywords'/>
                        </div>
                        <button type="submit" className="btn btn-primary">Filter</button>
                      </form>
                    </div>
                  </div>
                  <button type="button" className="btn btn-primary"><span className="fa fa-search" aria-hidden="true" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
          </div>



      
        </div>
      </div>
  
    )
}
}