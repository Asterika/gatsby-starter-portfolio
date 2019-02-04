import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/layout'

import pic27 from '../assets/images/pic27.png'
import pic44 from '../assets/images/pic44.png'
import pic45 from '../assets/images/pic45.png'
import pic46 from '../assets/images/pic46.png'
import pic47 from '../assets/images/pic47.png'

const SciNotes = (props) => (
    <Layout>
        <Helmet>
            <title>SciNotes</title>
            <meta name="description" content="SciNotes App" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>SciNotes</h1>
                    </header>
                    <img src={pic44} alt="" className="ThumbnailLong" />
                    <img src={pic45} alt="" className="ThumbnailLong" />
                    <img src={pic46} alt="" className="ThumbnailLong" />
                    <img src={pic47} alt="" className="ThumbnailLong" />

                    <p>SciNotes was created to help students easily collect and reference data in the field.</p>
                    <p>You can create an entry for a study or ecosystem and input environmental data, such as details about temperature, water, flora, fauna, etc. You can save, edit, and delete entries as needed.</p>
                    <p>Tech Stack: Ruby on Rails, React<br />
                    Build Type: Group</p>
                    <p>Development:
                      <ul>
                        <li>Challenges: Authorization</li>
                        <li>Triumphs: Full CRUD build within 3 days</li>
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

export default SciNotes;
