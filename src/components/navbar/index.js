import React from 'react'
import all_categories from '../../all_categories'

export default class Navbar extends React.Component{
    render(){
        return(
          
      <div className="container-fluid bg-dark mb-30">
      <div className="row px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a className="btn d-flex align-items-center justify-content-between bg-primary w-100" data-toggle="collapse" href="#navbar-vertical" style={{height: '65px', padding: '0 30px'}}>
            <h6 className="text-dark m-0"><i className="fa fa-bars mr-2" />Categories</h6>
            <i className="fa fa-angle-down text-dark" />
          </a>
          <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light" id="navbar-vertical" style={{width: 'calc(100% - 30px)', zIndex: 999}}>
            <div className="navbar-nav w-100">
             {all_categories.map(data=>{
              return <div className="nav-item dropdown dropright">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">{data.category} <i className="fa fa-angle-right float-right mt-1" /></a>
                <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                <a href="/shop" className="dropdown-item">{data.category}</a>
                  {data.sub_categories.map(sub=>{
                  return <a href="/shop" className="dropdown-item">{sub}</a>

                  })}
           
                </div>
              </div>
             })}
              
             
            </div>
          </nav>
        </div>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
            <a href className="text-decoration-none d-block d-lg-none">
              <span className="h1 text-uppercase text-dark bg-light px-2">PUB</span>
              <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">LIYI</span>
            </a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
              

         
            <div className="row mt-3 py-3 py-lg-0 px-0 text-decoration-none d-block d-lg-none" >
          <div className="col-md-12">
            <div className="input-group" id="adv-search">
              <input type="text" className="form-control" placeholder="Search for product" />
              <div className="input-group-btn">
                <div className="btn-group" role="group">
                  <div className="dropdown dropdown-lg">
                    <button type="button" className="btn btn-primary dropdown-toggle" style={{height:38}} data-toggle="dropdown" aria-expanded="false"><span className="fa fa-angle-double-down" style={{color:"white"}}/></button>
                    <div className="dropdown-menu dropdown-menu-right" style={{width:"100%"}} role="menu">
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



              <div className="navbar-nav mr-auto py-0 mt-3">

                
                <a href="/" className="nav-item nav-link">Home</a>
                <a href="/shop" className="nav-item nav-link">Shop</a>
           
                <div className="nav-item dropdown text-decoration-none d-block d-lg-none">
                  <a href="#" className="nav-link dropdown-toggle " data-toggle="dropdown">Categories <i className="fa fa-angle-down mt-1" /></a>
                  <div className="dropdown-menu bg-primary rounded-0 border-0 m-0">
                    

                  {all_categories.map(data=>{
              return <div className="nav-item dropdown dropright">
                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">{data.category} <i className="fa fa-angle-right float-right mt-1" /></a>
                <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                <a href="/shop" className="dropdown-item">{data.category}</a>
                  {data.sub_categories.map(sub=>{
                  return <a href="/shop" className="dropdown-item">{sub}</a>

                  })}
           
                </div>
              </div>
             })}
                  </div>
                </div>

                <a href="/advertise_your_product" className="nav-item nav-link">Advertise Your Product</a>

                <a href="/contact" className="nav-item nav-link">Contact</a>
                <a href="contact.html" className="nav-item nav-link">About</a>

              <a class="nav-item nav-link btn btn-primary mt-3 text-decoration-none d-block d-lg-none text-white" style={{ borderRadius:3, }} href='/sell'>+SELL</a>

              </div>
              <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
              
              
              <a class="btn btn-primary py-2 px-4 mr-5" style={{ borderRadius:3,color:"white" }} href='/sell'>+SELL</a>


              <a href="/notifications" className="btn px-0 mr-3">
              <i className="fas fa-bell text-primary" style={{fontSize:24}} />

                 
                  <span  className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: '2px'}}>0</span>
                </a>



              <a href="/chat" className="btn px-0 mr-3">
              <i className="fas fa-comments text-primary" style={{fontSize:24}} />

                 
                  <span  className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: '2px'}}>0</span>
                </a>


                <a href="/favorites" className="btn px-0" >
                  <i className="fas fa-heart text-primary" style={{fontSize:24}} />
                  <span className="badge text-secondary border border-secondary rounded-circle" style={{paddingBottom: '2px'}}>0</span>
                </a>
                <a href className="btn px-0 ml-3 dropdown-toggle" data-toggle="dropdown">
                  <i className="fas fa-user-circle text-primary"  style={{fontSize:35}}/>
                </a>

                <div className="dropdown-menu dropdown-menu-right">
                <a href='/profile' className="dropdown-item" type="button">Profile</a>

                  <a href='/signin' className="dropdown-item" type="button">Sign in</a>
                  <a href="/signup"className="dropdown-item" type="button">Sign up</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
   
        )
    }
}