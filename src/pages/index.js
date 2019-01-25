import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

// import pic01 from '../assets/images/pic01.jpg'
// import pic02 from '../assets/images/pic02.jpg'
// import pic03 from '../assets/images/pic03.jpg'
// import pic04 from '../assets/images/pic04.jpg'
// import pic05 from '../assets/images/pic05.jpg'
// import pic06 from '../assets/images/pic06.jpg'
import pic12 from "../assets/images/pic12.jpeg"
import pic13 from "../assets/images/pic13.png"
// import pic14 from "../assets/images/pic14.png"
import pic15 from "../assets/images/pic15.jpg"
import pic16 from "../assets/images/pic16.png"
import pic17 from "../assets/images/pic17.png"
// import pic18 from "../assets/images/pic18.png"
import pic19 from "../assets/images/pic19.png"


class HomeIndex extends React.Component {
    render() {

        return (
            <Layout>
                <Helmet
                    title="Gatsby Starter - Forty"
                    meta={[
                        { name: 'description', content: 'Sample' },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner />

                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic19})`}}>
                            <header className="major">
                                <h3>In Progress...</h3>
                                <p>A list of current work</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic17})`}}>
                            <header className="major">
                                <h3>Past Projects</h3>
                                <p>A gallery of apps</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic15})`}}>
                            <header className="major">
                                <h3>Tech Proficiencies</h3>
                                <p>Languages, Frameworks, and Stacks</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic16})`}}>
                            <header className="major">
                                <h3>Resume</h3>
                                <p>A professional career summary</p>
                            </header>
                            <Link to="/resume" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic12})`}}>
                            <header className="major">
                                <h3>About</h3>
                                <p></p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic13})`}}>
                            <header className="major">
                                <h3>Continuing Education</h3>
                                <p>Current coding interests</p>
                            </header>
                            <Link to="/landing" className="link primary"></Link>
                        </article>
                    </section>
                    <section id="two">
                        <div className="inner">
                            <header className="major">
                                <h2>Next Steps</h2>
                            </header>
                            <p>To connect or work with me, please use the form, contact points, or icons below.</p>
                            <p>I look forward to meeting you!</p>
                            <ul className="actions">
                                <li><Link to="/landing" className="button next">Connect</Link></li>
                            </ul>
                        </div>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex