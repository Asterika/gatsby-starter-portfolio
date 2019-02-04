import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import pic26 from '../assets/images/pic26.png'
import pic39 from '../assets/images/pic39.png'
import pic40 from '../assets/images/pic40.png'
import pic41 from '../assets/images/pic41.png'
import pic42 from '../assets/images/pic42.png'
import pic43 from '../assets/images/pic43.png'

const CluelessCloset = (props) => (
    <Layout>
        <Helmet>
            <title>Clueless Closet</title>
            <meta name="description" content="upLIFT App" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Clueless Closet</h1>
                    </header>
                    <img src={pic26} alt="" className="Thumbnail"/>
                    <img src={pic39} alt="" className="Thumbnail"/>
                    <img src={pic40} alt="" className="Thumbnail"/>
                    <img src={pic41} alt="" className="Thumbnail"/>
                    <img src={pic42} alt="" className="Thumbnail"/>
                    <img src={pic43} alt="" className="Thumbnail"/>

                    <p>CluessCloset is an app designed to help people revisit their current fashions and assemble their dream outfits to organize and plan their daily styles.</p>
                    <p>Tech Stack: MEAN - MongoDB, Express, Angular, Node.js<br />
                    Build Type: Group</p>
                    <p>
                    Development:
                      <ul>
                        <li>Challenges: Footers, forms, partials</li>
                        <li>Triumphs: Full CRUD app build with authorization in 5 days after altering our original concept</li>
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

export default CluelessCloset;
