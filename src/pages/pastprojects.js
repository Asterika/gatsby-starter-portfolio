import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import BannerLanding from '../components/BannerLanding';
import styled from 'styled-components';

// import pic08 from '../assets/images/pic08.jpg'
// import pic09 from '../assets/images/pic09.jpg'
// import pic10 from '../assets/images/pic10.jpg'
import pic20 from  "../assets/images/pic20.png"
import pic21 from "../assets/images/pic21.png"
import pic22 from "../assets/images/pic22.png"
import pic23 from "../assets/images/pic23.png"
import pic24 from "../assets/images/pic24.png"
import pic25 from "../assets/images/pic25.png"
import pic26 from "../assets/images/pic26.png"
import pic27 from "../assets/images/pic27.png"
import pic29 from "../assets/images/pic29.png"

const PastProjects = (props) => (
    <Layout>
        <Helmet>
            <title>Past Projects</title>
            <meta name="description" content="Past Projects Page" />
        </Helmet>

        <BannerLanding>
            <header className="major">
                <h1>Past Projects</h1>
            </header>
                <div className="content">
                    <p>Click to learn more about each one, see the live app, and view my code.</p>
                </div>
        </BannerLanding>

        <div id="main">
            {/* <section id="one">
                <div className="inner">
                    <header className="major">
                        <h2>See My Apps</h2>
                    </header>
                    <p>This is a collection of my projects. Click to learn more about each one, see the live app, and view my code. </p>
                </div>
            </section> */}
            <section id="two" className="spotlights">
                <section>
                    <Link to="/mindfuel">
                        <img src={pic29} alt="" style={{height:370, width:540}}/>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Mind Fuel</h3>
                            </header>
                            <p>A tutoring and editing business site</p>
                            <p>Tech Stack: GatsbyJS</p>
                            <ul className="actions">
                                <li><Link to="/mindfuel" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/thirdwave" className="image">
                        <img src={pic24} alt="" style={{height:370}}/>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Third Wave Coffee</h3>
                            </header>
                            <p>A coffee educator and locator app</p>
                            <p>Tech Stack: PHP + Laravel + PostgreSQL + Nginx</p>
                            <ul className="actions">
                                <li><Link to="/thirdwave" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/uplift" className="image">
                        <img src={pic25} alt="" style={{height:370}}/>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>upLIFT</h3>
                            </header>
                            <p>An app for capturing and reflecting on the positive moments from your day</p>
                            <p>Tech Stack: MEEN</p>
                            <ul className="actions">
                                <li><Link to="/uplift" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/cluelesscloset" className="image">
                    <img src={pic26} alt="" />
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Clueless Closet</h3>
                            </header>
                            <p>A closet organizer and outfit planning app</p>
                            <p>Tech Stack: MEAN</p>
                            <ul className="actions">
                                <li><Link to="/cluelesscloset" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <Link to="/scinotes" className="image">
                    <img src={pic27} alt="" style={{height:370}}/>
                    </Link>
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>SciNotes</h3>
                            </header>
                            <p>An app for easily collecting and referencing scientific data in the field</p>
                            <p>Tech Stack: Ruby on Rails + React</p>
                            <ul className="actions">
                                <li><Link to="/scinotes" className="button">Learn more</Link></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default PastProjects;

// const ImageFill = styled.image`
//   height: 50px;
//   width: 50px;
// `;
