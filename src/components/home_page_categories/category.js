import React from 'react'

export default class Category extends React.Component {
    render(){
        return  <div className="col-lg-3 col-md-4 col-sm-6 ">
        <a className="text-decoration-none" href="/shop">
          <div className="cat-item d-flex align-items-center mb-4">
            <div className="overflow-hidden" style={{width: '100px', height: '100px'}}>
              <img className="img-fluid" src={this.props.data.image} alt="" />
            </div>
            <div className="flex-fill pl-3">
              <h6>{this.props.data.category}</h6>
            
            </div>
          </div>
        </a>
      </div>
    }
}