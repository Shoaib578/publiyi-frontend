import React from 'react'
import { BrowserRouter as Router, Route, Link,Routes as Switch } from "react-router-dom";
import Navbar from '../components/navbar';
import TopBar from '../components/topbar';
import AdvertiseProduct from '../pages/advertise_product';
import SignIn from '../pages/auth/sign_in';
import Signup from '../pages/auth/sign_up';
import Chat from '../pages/chat';
import RecentChats from '../pages/chat/recent_chats';
import Contact from '../pages/contact';
import Favorites from '../pages/favorites';
import Home from '../pages/home';
import Notifications from '../pages/notifications';
import ProductDetails from '../pages/product_details';
import Profile from '../pages/profile';
import Sell from '../pages/sell';
import Shop from '../pages/shop';

export default class Routes extends React.Component {
render() {
return <Router>
          <TopBar />
          <Navbar />
         {window.location.pathname != "/messages"?
    <a href="#" class="btn btn-primary back-to-top"><i class="fa fa-angle-double-up"></i></a>

          :null}

        <Switch>
            <Route exact path='/' element={<Home />}/>
            <Route exact  path='/shop' element={<Shop />}/>
            <Route exact  path='/product_details' element={<ProductDetails />}/>
            <Route exact  path='/chat' element={<RecentChats />}/>
            <Route exact  path='/messages' element={<Chat />}/>

            <Route exact  path='/notifications' element={<Notifications />}/>
            <Route exact  path='/favorites' element={<Favorites />}/>
            <Route exact  path='/sell' element={<Sell />}/>
            <Route exact  path='/advertise_your_product' element={<AdvertiseProduct />}/>

            <Route exact  path='/contact' element={<Contact />}/>
            <Route exact  path='/signup' element={<Signup />}/>
            <Route exact  path='/signin' element={<SignIn />}/>
            <Route exact  path='/profile' element={<Profile />}/>


        </Switch>

        </Router>

}
}