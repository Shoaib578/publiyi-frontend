import React from 'react'
import base_url from '../../base_url'
export default class RecentChat extends React.Component {
    render(){
        return(
            <a href='/messages'>

            <div  className="notification-list notification-list">
            <div className="notification-list_content">
              <div className="notification-list_img"> <img src={base_url+"/img/avatar.jpg"} alt="user" /> </div>
              <div className="notification-list_detail">
                <p><b>Shoaib</b></p>
                
                
              </div>
            </div>
           
          </div>
          </a>

        )
    }
}