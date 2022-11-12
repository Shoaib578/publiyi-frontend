import React from 'react'

import Carousel from '../../components/carousel'
import FeaturedProducts from '../../components/featured_products'
import Footer from '../../components/footer'
import HomePageCategories from '../../components/home_page_categories'
import RecentProducts from '../../components/recent_products'

export default  class Home extends React.Component {
    render() {
        return <div>
            
                <Carousel />
                <HomePageCategories />
                <FeaturedProducts />

                <RecentProducts />
                <Footer />
            </div>
    }
}