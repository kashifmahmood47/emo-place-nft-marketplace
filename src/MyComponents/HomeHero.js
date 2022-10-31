import React from 'react'
import './HomeHero.css'
import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className="">
                <div className="home-hero-section">
                    <div className="home-hero-section-p home-hero-section-p1">
                        <h2>Welcome To Emo PLace</h2>
                        <p>Explore Digital Collectibles That You Love To Watch. On Emo Place you can mint & buy NFTs. So, lets collect all the digital arts where you get emotionally connect.</p>

                        <Link to="/explore">
                            <button className="btn btn-outline-light btn-lg " type="button">
                                Explore NFTs
                            </button>
                        </Link>
                    </div>
                    <div className="home-hero-section-p home-hero-section-p2">
                        <img width="300px" src="https://media.newyorker.com/photos/61016c1c7a2a603b3075c7b8/16:9/w_1884,h_1060,c_limit/chayka-boredapeclub.jpg" alt="Hero Image" />
                    </div>
                </div>
            </section>





        </>


    )
}

export default Home
