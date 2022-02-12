import React from 'react'
import "./Home.scss"
import Header from './Header/Header'
import SubHeader from './Header/SubHeader'
import Item from './Item/Item'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import bannermid from '../Images/banners/bannermid.jpg'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import Footer from './Footer/Footer'
import bannerdiv1 from '../Images/banners/bannerdiv1.jpeg'
import bannerdiv2 from '../Images/banners/bannerdiv2.jpg'
import bannerdiv3 from '../Images/banners/bannerdiv3.jfif'
function Home() {
    return (
        <div className="home">
            <Header id="1" />
            <SubHeader />

            {/* corousal */}

            <section className="shadow-sm dod">
                <h2><CardGiftcardIcon className="icon" /> Deals of the day</h2>
                <div className="row m-auto">
                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>


                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                </div>
            </section>


            <section className="discountsection">
            <img  src={bannermid} className="bannermid" alt="bannermid" />

            <div className="row abs justify-content-between m-auto">
                    <div className="shadow col-3">
                    <h1>70% off on electronics</h1>
                    <img src={bannerdiv1} alt="bannerdiv" />
                    </div>
                    <div className="shadow col-3">
                    <h1>High on demand</h1>
                    <img src={bannerdiv2} alt="bannerdiv" />
                    <p>
                    Samsung Galaxy M21 2021 Edition (Charcoal Black, 4GB RAM, 64GB Storage)
                    </p>
                    </div>
                    <div className="shadow col-3">
                    <h1>Most bought</h1>
                    <img src={bannerdiv3} alt="bannerdiv" />
                    <p>
                    Apple Watch Series 7 (GPS + Cellular, 41mm) - Midnight Aluminium Case with Midnight Sport Band - Regular
                    </p>
                    </div>
                </div>
              
            </section>

            <section className="shadow-sm trending">
                <h2><TrendingUpIcon className="icon" /> Trending Items</h2>
                <div className="row m-auto">
                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>


                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                </div>
            </section>

            {/* popular section carousal */}


            <section className="shadow-sm trending">
                <h2><WhatshotIcon className="icon" /> Most Bought</h2>
                <div className="row m-auto">
                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>


                <div className="col-6 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                <Item />
                </div>

                </div>
            </section>

            <Footer />
        </div>
    )
}

export default Home
