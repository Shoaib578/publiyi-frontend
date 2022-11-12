import React from 'react'

export default class SignIn extends React.Component {
    render(){
        return(
            <div className="container-fluid">

        


      <div className="row px-xl-5">
     
       
            <div className="col-lg-7 mb-5">
           
          <div className="contact-form bg-light p-30">
        

             <br />

         
            <div id="success" />
            <form name="sentMessage" id="contactForm" noValidate="novalidate">
           
              <div className="control-group">
                <input type="email" className="form-control" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" />
                <p className="help-block text-danger" />
              </div>


            

              <div className="control-group">
                <input type="password" className="form-control" id="password" placeholder="Password" required="required" data-validation-required-message="Please enter password" />
                <p className="help-block text-danger" />
              </div>


          
             
              <div>
                <button className="btn btn-primary py-2 px-4" type="submit" id="sendMessageButton">Sign in</button>
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