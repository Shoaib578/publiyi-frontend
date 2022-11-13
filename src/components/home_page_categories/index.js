import React from 'react'
import home_page_categories from '../../home_page_categories'
import Category from './category'

export default class HomePageCategories extends React.Component {
render(){
    return(
        <div className="container-fluid pt-5">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories</span></h2>
        <div className="row px-xl-5 pb-3">
          {home_page_categories.map(data=>{
                    return <Category data={data}/>

          })}
       



          
         
         
        </div>
      </div>
    )
}

}