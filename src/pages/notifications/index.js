import React from 'react'
import base_url from '../../base_url'
import Notification from '../../components/notification'
import './notifications.css'
export default class Notifications extends React.Component {
    render(){
        return(
            <section className="section-50">
            <div className="container">
            <h3 className="section-title position-relative text-uppercase  mb-4"><span className="bg-secondary pr-3">Notifications</span></h3>

             
              <div className="notification-ui_dd-content">
               
              
               <Notification />
               <Notification />
               <Notification />
               <Notification />

                </div>


                
              <div className="text-center"> <a href="#" className="btn btn-primary">Load more activity</a> </div>
            </div>
          </section>
        )
    }
}