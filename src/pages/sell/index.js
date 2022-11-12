import React from 'react'
import TagsInput from 'react-tagsinput'

import 'react-tagsinput/react-tagsinput.css'

export default class Sell extends React.Component {
    state = {
        tags:[],
        sizes:[],
        colors:[],
        image1:null,
        image2:null,
        image3:null

    }
   
    handleChangeTag = (tags) => {
        this.setState({tags})
      }

      handleChangeColors = (colors) => {
        this.setState({colors})
      }


      handleChangeSize = (sizes) => {
        this.setState({sizes})
      }


      handleChangeImag1 = (event)=>{
        this.setState({image1:URL.createObjectURL(event.target.files[0])})
        
      }

      handleChangeImag2 = (event)=>{
        this.setState({image2:URL.createObjectURL(event.target.files[0])})
        
      }

      handleChangeImag3 = (event)=>{
        this.setState({image3:URL.createObjectURL(event.target.files[0])})
            
      }
    
    
    render(){
        return(
            <div className="container tm-mt-big tm-mb-big border p-5 bg-white">
            <div className="row">
              <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
                <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                  <div className="row">
                    <div className="col-12">
                      <h2 className="tm-block-title d-inline-block">Add Product</h2>
                    </div>
                  </div>
                  <div className="row tm-edit-product-row">
                    <div className="col-xl-6 col-lg-6 col-md-12">
                     
                        <div className="form-group mb-3">
                          <label htmlFor="name">Product Name
                          </label>
                          <input id="name" name="name" type="text" className="form-control validate" required />
                        </div>
                        <div className="form-group mb-3">
                          <label htmlFor="description">Description</label>
                          <textarea className="form-control validate" rows={3} required defaultValue={""} />
         
         
                        </div>

                        <div className="form-group mb-3">
                          <label htmlFor="description">Information</label>
                          <textarea className="form-control validate" rows={3} required defaultValue={""} />
         
         
                        </div>



                        <div className="form-group mb-3">
                          <label htmlFor="location">Location</label>
                          <input id="location" name="location" type="text" className="form-control validate" data-large-mode="true" />
                         
                        </div>


                        <div className="form-group mb-3">
                          <label htmlFor="category">Category</label>
                          <select className="custom-select tm-select-accounts" id="category">
                            <option selected>Select category</option>
                            <option value={1}>New Arrival</option>
                            <option value={2}>Most Popular</option>
                            <option value={3}>Trending</option>
                          </select>
                        </div>
                        <div className="row">
                          <div className="form-group mb-3 col-xs-12 col-sm-6">
                            <label htmlFor="expire_date">Price
                            </label>
                            <input id="price" name="price" type="number" className="form-control validate" data-large-mode="true" />
                          </div>
                          <div className="form-group mb-3 col-xs-12 col-sm-6">
                            <label htmlFor="stock">Units In Stock
                            </label>
                            <input id="stock" name="stock" type="text" className="form-control validate" required />
                          </div>
                        </div>
                        <label>Tags</label>
                        <TagsInput value={this.state.tags} onChange={this.handleChangeTag} />
                        <br />
                        <label>Sizes</label>
                        <TagsInput value={this.state.sizes} onChange={this.handleChangeSize} />
                        <br />
                        <label>Colors</label>
                        <TagsInput value={this.state.colors} onChange={this.handleChangeColors} />
                         <br />
                     
                     </div>

                      
                    <div className="col-xl-6 col-lg-6 col-md-12 mx-auto mb-4 mt-4 "  >
                     
                    <label htmlFor='image1' style={{backgroundColor:"#ffc107",height:"30%",display:"flex",justifyContent:"center",alignItems:"center"}}>

                    
                        {this.state.image1 == null?<i className="fas fa-cloud-upload-alt tm-upload-icon" style={{fontSize:80}} onclick="document.getElementById('fileInput').click();" />:<img src={this.state.image1} style={{ width:380,height:260 }}/>}
                      
                    </label>
                      <div className="custom-file " >
                        <input onChange={this.handleChangeImag1} id="image1" type="file" style={{display: 'none'}} />
                        
                      </div>

                        <label htmlFor='image2' style={{backgroundColor:"#ffc107",height:"30%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                     
                      {this.state.image2 == null?<i className="fas fa-cloud-upload-alt tm-upload-icon" style={{fontSize:80}} onclick="document.getElementById('fileInput').click();" />:<img src={this.state.image2} style={{width:'100%',height:'100%'}}/>}

                        
                      
                      </label>
                      <div className="custom-file " >
                        <input id="image2" type="file" onChange={this.handleChangeImag2} style={{display: 'none'}} />
                        
                      </div>


                        <label htmlFor='image3' style={{backgroundColor:"#ffc107",height:"30%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                     
                      {this.state.image3 == null?<i className="fas fa-cloud-upload-alt tm-upload-icon" style={{fontSize:80}} onclick="document.getElementById('fileInput').click();" />:<img src={this.state.image3}  style={{width:'100%',height:'100%'}}/>}

                       
                      
                      </label>

                      <div className="custom-file " >
                        <input id="image3" onChange={this.handleChangeImag3} type="file" style={{display: 'none'}} />
                        
                      </div>

                    
                    </div>


                    
                   

                    
                    <div className="col-12 mt-5">
                    <br />

                      <button type="submit" className="btn btn-primary btn-block text-uppercase">Add Product Now</button>
                    </div>
                    <br />
                    <br />
                    <br />

                  </div>
                </div>
              </div>
            </div>
          </div>
        )
     
    }
}