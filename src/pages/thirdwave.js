import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby';
import Layout from '../components/layout'
import '../assets/css/main.css'

import pic24 from '../assets/images/pic24.png'
import pic31 from '../assets/images/pic31.png'
import pic35 from '../assets/images/pic35.png'

const ThirdWave = (props) => (
    <Layout>
        <Helmet>
            <title>Third Wave Coffee</title>
            <meta name="description" content="Third Wave Coffee App" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Third Wave Coffee</h1>
                    </header>
                    <img src={pic24} className="Thumbnail"/>
                    <img src={pic31} className="Thumbnail"/>
                    <img src={pic35} className="Thumbnail"/>

                    <p>Third Wave Coffee is an educator and locator app about third wave coffee - roasting and distribution that puts a focus on the Bean, the sourcing, and the quality that suffuses each cup.</p>
                    <p>This app was designed to offer users a brief glimpse into the culture -- the language, the brews, and the third wave hubs in their local area.</p>
                    <p>Development:
                      <ul>
                        <li>Created with: PHP/Laravel, PostgreSQL, Nginx</li>
                        <li>Challenges: Authorization</li>
                        <li>Triumphs: Full CRUD build with authorization, responsiveness, and educational pages in 7 days</li>
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

export default ThirdWave;
