import React from 'react';
import './Wallet.css';
import OtherPagesHero from '../MyComponents/OtherPagesHero.js';
import Metamask from '../Images/metamask-icon.png';
import {Link} from 'react-router-dom';

const Wallet = () => {
    return (
        <div className="wallet-page">
            <div className="about-section">
                <OtherPagesHero title="Connect Your Wallet" para1="Here you can connect your crypto wallet to create or login your account" />

            </div>
            <div className="container mt-5">
                <div className="wallets-list">
                    <Link to="/user-dashboard">
                    <div className="wallets-list-no1">
                        <img className="wallets-list-p wallets-list-p1" src={Metamask} alt="metamask icon" />
                        <div className="wallets-list-p wallets-list-p2">
                            <h3>Connect Your MetaMask Wallet</h3>
                            <p>A safe crypto wallet for digital tokens & NFTs.</p>
                        </div>

                    </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Wallet
