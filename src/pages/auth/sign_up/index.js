import React from 'react'



export default class Signup extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
          data: "http://localhost:3000/img/avatar.jpg",
         
        };
        
        this.handleFileChange = this.handleFileChange.bind(this);
       
      }
    
    handleFileChange(event) {
       this.setState({data:URL.createObjectURL(event.target.files[0])})
        console.log(this.state.data)
        
      }

       responseGoogle = (response) => {
        console.log(response);
      }
      
    render(){
        return(
            <div className="container-fluid">

            <input
            style={{
                width:1,
                height:1,
                opacity:0,
                position:'absolute',
                overflow:'hidden',
                zIndex:-1
            }}
            accept="image/*"
            id="profile_image"
             type="file"
          
          onChange={this.handleFileChange}
        />


      <div className="row px-xl-5">
     
       
            <div className="col-lg-7 mb-5">
           
          <div className="contact-form bg-light p-30">
          <center>
            <div style={{borderColor:"yellow",borderWidth:1,borderRadius:20,width:100,height:100,cursor:"pointer",marginRight:100}}>
             
            <label  htmlFor="profile_image">
            <img src={this.state.data} style={{width:100,height:100,position:"absolute",zIndex:1,borderRadius:100}}/>

            </label>

          
            </div>  
            </center>

             <br />

         
            <div id="success" />
            <form name="sentMessage" id="contactForm" noValidate="novalidate">
              <div className="control-group">
                <input type="text" className="form-control" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                <p className="help-block text-danger" />
              </div>

              <div className="control-group">
                <input type="text" className="form-control" id="company_name" placeholder="Your Company Name" required="required" data-validation-required-message="Please enter your company name" />
                <p className="help-block text-danger" />
              </div>

              <div className="control-group">
                <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                <p className="help-block text-danger" />
              </div>


              <div className="control-group">
                <input type="phone" className="form-control" id="phone_number" placeholder="Your Phone" required="required" data-validation-required-message="Please enter your phone" />
                <p className="help-block text-danger" />
              </div>

              <div className="control-group">
                <input type="password" className="form-control" id="password" placeholder="Password" required="required" data-validation-required-message="Please enter password" />
                <p className="help-block text-danger" />
              </div>


              <div className="control-group">
                <select className="form-control" id="category"  required="required" data-validation-required-message="select your category" >
                <option>Professional</option>
                <option>Buyer</option>

                </select>
                <p className="help-block text-danger" />
              </div>
             
             
              <div>
                <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Signup</button>
              </div>
                <br />
                <center>
              
                </center>
             
            </form>
          </div>
        </div>

        </div>
        </div>

        )
    }
}