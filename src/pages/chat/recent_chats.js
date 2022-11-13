import React from 'react'
import RecentChat from '../../components/recent_chat'
import './recent_chat.css'
export default class RecentChats extends React.Component {
    render()
    {
        return <section className="section-50">
        <div className="container">
        <h3 className="section-title position-relative text-uppercase  mb-4"><span className="bg-secondary pr-3">Chats</span></h3>

         
          <div className="notification-ui_dd-content">
           
          
         <RecentChat />
         <RecentChat />
         <RecentChat />
         <RecentChat />


            </div>


            
          <div className="text-center"> <a href="#" className="btn btn-primary">Load more activity</a> </div>
        </div>
      </section>
    }
}