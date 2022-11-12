import React from 'react'
import base_url from '../../base_url'
export default class Notification extends React.Component {
    render(){
        return(
            <div className="notification-list notification-list">
            <div className="notification-list_content">
              <div className="notification-list_img"> <img src={base_url+"/img/avatar.jpg"} alt="user" /> </div>
              <div className="notification-list_detail">
                <p><b>Aryan</b> reacted to your post</p>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.</p>
                
              </div>
            </div>
            <div className="notification-list_feature-img"> <img src={base_url+"/img/cat-3.jpg"} alt="Feature image" /> </div>
          </div>
        )
    }
}