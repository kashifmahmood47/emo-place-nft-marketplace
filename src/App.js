import './App.css';
import Footer from './MyComponents/Footer';
import HomeHero from './MyComponents/HomeHero';
import Header from './MyComponents/Header';
import Collections from './MyComponents/Collections';
import About from './Frontend/About';
import Products from './MyComponents/Products';
import Contact from './Frontend/Contact';
import Explore from './Frontend/Explore';
import Wallet from './Frontend/Wallet'
import UserDashboard from './UserPanel/UserDashboard'
import MyDigitalAssets from './UserPanel/MyDigitalAssets'
import SellDigitalAsset from './UserPanel/SellDigitalAsset'
import Logout from './UserPanel/Logout';
import OrdersReceived from './UserPanel/OrdersReceived'
import Profile from './UserPanel/Profile'
import UnsoldNFTS from './UserPanel/UnsoldNFTS'
// import Newsfeed from './MyComponents/Newsfeed';

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
// imports for nft start here
// import { ethers } from 'ethers'
// import { useEffect, useState } from 'react'
// import axios from 'axios'
// import Web3Modal from 'web3modal'

// import {
//   marketplaceAddress
// } from '../config'

// import NFTMarketplace from '../artifacts/contracts/NFTMarketplace.sol/NFTMarketplace.json'
//imports for nft ends here
document.title = "Mint Blocks - Blockchain Based NFT Marketplace"

function App() {

  var productsArrayApp = [
    { productTitle: 'White Bored Ape', productPrice: 100, productImage: 'https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31', productUser: 'kashif', productLikes: '10', productDescription: "This is the description of the Mint Blocks NFTs"},
    { productTitle: 'Golden Bored Ape', productPrice: 100, productImage: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/7GBCHQUCEROJDPEVYQW7XG7VAE.jpg', productUser: 'kashif', productLikes: '2', productDescription: "This is the description of the Mint Blocks NFTs"},
    { productTitle: 'Black Bored Ape', productPrice: 100, productImage: 'https://i.pinimg.com/736x/d8/a7/06/d8a706b3ecef2b46ce339cd1957b1d59.jpg', productUser: 'kashif', productLikes: '10', productDescription: "This is the description of the Mint Blocks NFTs"},
    { productTitle: 'VR Bored Ape', productPrice: 100, productImage: 'https://img.freepik.com/premium-vector/hand-drawn-monkey-ape-vr-box-virtual-nft-style_361671-246.jpg?w=2000', productUser: 'kashif', productLikes: '1',productDescription: "This is the description of the Mint Blocks NFTs" },
    { productTitle: 'White Bored Ape', productPrice: 100, productImage: 'https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31', productUser: 'kashif', productLikes: '8',productDescription: "This is the description of the Mint Blocks NFTs" },
    { productTitle: 'Golden Bored Ape', productPrice: 100, productImage: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/7GBCHQUCEROJDPEVYQW7XG7VAE.jpg', productUser: 'kashif', productLikes: '4', productDescription: "This is the description of the Mint Blocks NFTs"},
    { productTitle: 'Black Bored Ape', productPrice: 100, productImage: 'https://i.pinimg.com/736x/d8/a7/06/d8a706b3ecef2b46ce339cd1957b1d59.jpg', productUser: 'kashif', productLikes: '10',productDescription: "This is the description of the Mint Blocks NFTs" },
    { productTitle: 'VR Bored Ape', productPrice: 100, productImage: 'https://img.freepik.com/premium-vector/hand-drawn-monkey-ape-vr-box-virtual-nft-style_361671-246.jpg?w=2000', productUser: 'kashif', productLikes: '8', productDescription: "This is the description of the Mint Blocks NFTs"},
    { productTitle: 'White Bored Ape', productPrice: 100, productImage: 'https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31', productUser: 'kashif', productLikes: '8', productDescription: "This is the description of the Mint Blocks NFTs"},
    { productTitle: 'Golden Bored Ape', productPrice: 100, productImage: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/7GBCHQUCEROJDPEVYQW7XG7VAE.jpg', productUser: 'kashif', productLikes: '4', productDescription: "This is the description of the Mint Blocks NFTs"},
    { productTitle: 'Black Bored Ape', productPrice: 100, productImage: 'https://i.pinimg.com/736x/d8/a7/06/d8a706b3ecef2b46ce339cd1957b1d59.jpg', productUser: 'kashif', productLikes: '10', productDescription: "This is the description of the Mint Blocks NFTs"},
    { productTitle: 'VR Bored Ape', productPrice: 100, productImage: 'https://img.freepik.com/premium-vector/hand-drawn-monkey-ape-vr-box-virtual-nft-style_361671-246.jpg?w=2000', productUser: 'kashif', productLikes: '8', productDescription: "This is the description of the Mint Blocks NFTs"},

  ];

  return (

    <div className="App">
      <Router>


        <Header />

        <Routes>

          <Route exact path="/"
            element={<div>
              <HomeHero />
              <Collections />
              <Products title="Top Trendings" productsArray={productsArrayApp} pquantityOfNfts={8} />
            
            
            </div>
          
          } />
          <Route exact path="/about"
            element={<About />} />
          <Route exact path="/collections"
            element={<Collections />} />
          <Route exact path="/contact"
            element={<Contact />} />
          <Route exact path="/explore"
            element={<Explore />} />
          {/* <Route exact path="/newsfeed"
          element={<Newsfeed />}/> */}
          <Route exact path="/wallet"
            element={<Wallet />} />
          <Route exact path="/user-dashboard"
            element={<UserDashboard />} />
          <Route exact path="/user-dashboard/my-digital-assets"
            element={<MyDigitalAssets />} />
<Route exact path="/user-dashboard/sell-digital-asset"
            element={<SellDigitalAsset />} />
            <Route exact path="/user-dashboard/orders-received"
            element={<OrdersReceived />} />
             <Route exact path="/profile"
            element={<Profile />} />

<Route exact path="/user-dashboard/logout"
            element={<Logout />} />
            <Route exact path="/user-dashboard/unsold-nfts"
            element={<UnsoldNFTS />} />


        </Routes>

        <Footer />



      </Router></div>
    // <div className="App">
    //   <Header />
    //   <HomeHero />
    //   <FeaturedCollections />
    //   <Products title="Latest NFTs" productsArray={productsArrayApp} pquantityOfNfts= {8}/>
    //   <Footer />

 
  );
}

export default App;
