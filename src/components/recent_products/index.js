import React from 'react'
import Product from '../product'

export default class RecentProducts extends React.Component {
render(){
    return(
        <div className="container-fluid pt-5 pb-3">
        <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Recent Products</span></h2>
        <div className="row px-xl-5">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />

        </div>
        </div>

    )
}

}