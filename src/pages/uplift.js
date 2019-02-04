import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby';
import Layout from '../components/layout'

import pic25 from '../assets/images/pic25.png'
import pic37 from '../assets/images/pic37.png'
import pic38 from '../assets/images/pic38.png'

const Uplift = (props) => (
    <Layout>
        <Helmet>
            <title>upLIFT</title>
            <meta name="description" content="upLIFT App" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>upLIFT</h1>
                    </header>
                    <img src={pic25} className="Thumbnail" alt=""/>
                    <img src={pic37} className="Thumbnail" alt=""/>
                    <img src={pic38} className="Thumbnail" alt=""/>

                    <p>upLIFT is an app designed to help people capture and revisit the positive moments in their day.</p>
                    <p>You can assign a category, select an image, and write a brief description of the positive encounter. You then upload your upLIFT to your gallery and from there, you can edit or delete entries.</p>
                    <p>Development:
                      <ul>
                        <li>Created with: Modified MEEN stack - MongoDB, Express, EJS, Node.js</li>
                        <li>Challenges: Connecting images to dropdown menu categories, responsiveness, minor styling issues</li>
                        <li>Triumphs: Full CRUD app build with authorization in 7 days</li>
                      </ul>
                      <ul className="actions">
                          <li><Link to="/pastprojects" className="button">Back</Link></li>
                      </ul>
                    </p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Uplift;
