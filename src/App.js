import './App.css';
import Footer from './MyComponents/Footer';
import HomeHero from './MyComponents/HomeHero';
import Header from './MyComponents/Header';
import Collections from './MyComponents/Collections';
import About from './MyComponents/About';
import Products from './MyComponents/Products';
import Contact from './MyComponents/Contact';
import Explore from './MyComponents/Explore';
// import Newsfeed from './MyComponents/Newsfeed';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
document.title = "Emo Place - NFT Marketplace; Connecting Emotions"

function App() {
  
  var productsArrayApp = [
    { productTitle: 'White Bored Ape', productPrice: 100, productImage: 'https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31', productUser: 'kashif', productLikes: '10', },
    { productTitle: 'Golden Bored Ape', productPrice: 100, productImage: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/7GBCHQUCEROJDPEVYQW7XG7VAE.jpg', productUser: 'kashif', productLikes: '2', }, 
    { productTitle: 'Black Bored Ape', productPrice: 100, productImage: 'https://i.pinimg.com/736x/d8/a7/06/d8a706b3ecef2b46ce339cd1957b1d59.jpg', productUser: 'kashif', productLikes: '10', },
    { productTitle: 'VR Bored Ape', productPrice: 100, productImage: 'https://img.freepik.com/premium-vector/hand-drawn-monkey-ape-vr-box-virtual-nft-style_361671-246.jpg?w=2000', productUser: 'kashif', productLikes: '1', },
    { productTitle: 'White Bored Ape', productPrice: 100, productImage: 'https://i.guim.co.uk/img/media/ef8492feb3715ed4de705727d9f513c168a8b196/37_0_1125_675/master/1125.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=d456a2af571d980d8b2985472c262b31', productUser: 'kashif', productLikes: '8', },
    { productTitle: 'Golden Bored Ape', productPrice: 100, productImage: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/7GBCHQUCEROJDPEVYQW7XG7VAE.jpg', productUser: 'kashif', productLikes: '4', }, 
    { productTitle: 'Black Bored Ape', productPrice: 100, productImage: 'https://i.pinimg.com/736x/d8/a7/06/d8a706b3ecef2b46ce339cd1957b1d59.jpg', productUser: 'kashif', productLikes: '10', },
    { productTitle: 'VR Bored Ape', productPrice: 100, productImage: 'https://img.freepik.com/premium-vector/hand-drawn-monkey-ape-vr-box-virtual-nft-style_361671-246.jpg?w=2000', productUser: 'kashif', productLikes: '10', },
    
    
  ];

  return (

    <div className="App">
    <Router>

      
        <Header/>
        
        <Routes>
{/* 
          <Route exact path="/" render={() => {
            return (
              <div>
                <Slider />
                <AddTodo addTodo={addTodo} />
                <Todos todoEl={todoEl} onDelete={onDelete} />
              </div>
            )
          }}>
          </Route> */}
           <Route exact path="/"
          element={<div>
             <HomeHero />
      <Collections />
      <Products title="Top Trendings" productsArray={productsArrayApp} pquantityOfNfts= {8}/>
          </div>}/>
          <Route exact path="/about"
          element={<About />}/>
          <Route exact path="/collections"
          element={<Collections />}/>
          <Route exact path="/contact"
          element={<Contact />}/>
          <Route exact path="/explore"
          element={<Explore />}/>
          {/* <Route exact path="/newsfeed"
          element={<Newsfeed />}/> */}
         


        </Routes>

        <Footer />

      

    </Router></div>
    // <div className="App">
    //   <Header />
    //   <HomeHero />
    //   <FeaturedCollections />
    //   <Products title="Latest NFTs" productsArray={productsArrayApp} pquantityOfNfts= {8}/>
    //   <Footer />

    // </div>
  );
}

export default App;
