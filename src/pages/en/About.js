import Slideshow from '../../components/en/Slideshow';
import { Link } from 'react-router-dom';

function About() {
    const img01 = '/media/bannersEnglish/about-us-first-p.png';
    return (
        <div className="sub">
            <Slideshow />
            <div className='home01'>
                <div>
                    <h1>
                        Orange Pharma
                    </h1>
                    <p>
                        Orange Pharmacies Services was founded to bridge the gap between independent pharmacies and medical insurance networks, creating greater opportunities for growth and expansion. Since its inception, the company has been committed to delivering innovative solutions that empower pharmacies in managing their financial operations, enhancing efficiency, and strengthening their partnerships with medical insurance providers. Through advanced technology, flexible financial solutions, and continuous training, Orange has established itself as a trusted strategic partner, ensuring the long-term sustainability and competitiveness of pharmacies in an evolving healthcare landscape.
                    </p>

                    <span>
                        <Link to="/about">
                            Learn More
                            <span className="material-symbols-outlined">
                                arrow_right_alt
                            </span>
                        </Link>
                    </span>
                </div>
                <div>
                    <img src={img01} alt="" />
                </div>
            </div>

            <div className='ceo'>
                <h1>
                    A Word From The Chairman
                </h1>
                <h4>Mr. Ahmed Al-Arousy</h4>
                <div className='word'>
                    <svg width="1419" height="43" viewBox="0 0 1419 43" fill="none" xmlns="http://www.w3.org/2000/svg" className='quote01'>
                        <path d="M0.736328 43V33.7273C0.736328 31.0606 1.23633 28.2879 2.23633 25.4091C3.26663 22.5 4.66057 19.7576 6.41815 17.1818C8.20603 14.5758 10.206 12.3788 12.4181 10.5909L20.0545 15.5455C18.2666 18.2424 16.7666 21.0606 15.5545 24C14.3727 26.9091 13.7969 30.1212 13.8272 33.6364V43H0.736328ZM23.7818 43V33.7273C23.7818 31.0606 24.2818 28.2879 25.2818 25.4091C26.3121 22.5 27.706 19.7576 29.4636 17.1818C31.2515 14.5758 33.2515 12.3788 35.4636 10.5909L43.1 15.5455C41.3121 18.2424 39.8121 21.0606 38.6 24C37.4181 26.9091 36.8424 30.1212 36.8727 33.6364V43H23.7818Z" fill="black" />
                        <path d="M1418.96 3.57931e-06V9.27273C1418.96 11.9394 1418.46 14.7121 1417.46 17.5909C1416.43 20.5 1415.04 23.2424 1413.28 25.8182C1411.49 28.4242 1409.49 30.6212 1407.28 32.4091L1399.65 27.4546C1401.43 24.7576 1402.93 21.9394 1404.15 19C1405.33 16.0909 1405.9 12.8788 1405.87 9.36364V2.28265e-06L1418.96 3.57931e-06ZM1395.92 1.29666e-06V9.27273C1395.92 11.9394 1395.42 14.7121 1394.42 17.5909C1393.39 20.5 1391.99 23.2424 1390.24 25.8182C1388.45 28.4242 1386.45 30.6212 1384.24 32.4091L1376.6 27.4546C1378.39 24.7576 1379.89 21.9394 1381.1 19C1382.28 16.0909 1382.86 12.8788 1382.83 9.36364V0L1395.92 1.29666e-06Z" fill="black" />
                    </svg>

                    <svg width="306" height="14" viewBox="0 0 306 14" fill="none" xmlns="http://www.w3.org/2000/svg" className='quote02'>
                        <path d="M0 13.995V10.1134C0 8.99714 0.209064 7.83644 0.627192 6.63137C1.05799 5.41361 1.64083 4.26561 2.37573 3.18739C3.12329 2.09648 3.95954 1.17681 4.88449 0.428399L8.07747 2.50239C7.3299 3.63136 6.70271 4.81107 6.19589 6.04152C5.70174 7.25928 5.461 8.6039 5.47367 10.0754V13.995H0ZM9.63594 13.995V10.1134C9.63594 8.99714 9.84501 7.83644 10.2631 6.63137C10.6939 5.41361 11.2768 4.26561 12.0117 3.18739C12.7592 2.09648 13.5955 1.17681 14.5204 0.428399L17.7134 2.50239C16.9658 3.63136 16.3387 4.81107 15.8318 6.04152C15.3377 7.25928 15.0969 8.6039 15.1096 10.0754V13.995H9.63594Z" fill="black" />
                        <path d="M306 0.42772V4.30933C306 5.42561 305.791 6.58628 305.373 7.79136C304.942 9.00912 304.359 10.1571 303.624 11.2353C302.877 12.3262 302.04 13.2459 301.115 13.9943L297.923 11.9203C298.67 10.7914 299.297 9.61165 299.804 8.38121C300.298 7.16345 300.539 5.81884 300.526 4.34738V0.42772L306 0.42772ZM296.364 0.427719V4.30933C296.364 5.4256 296.155 6.58628 295.737 7.79136C295.306 9.00911 294.723 10.1571 293.988 11.2353C293.241 12.3262 292.405 13.2459 291.48 13.9943L288.287 11.9203C289.034 10.7914 289.661 9.61165 290.168 8.38121C290.662 7.16345 290.903 5.81884 290.89 4.34738V0.427719L296.364 0.427719Z" fill="black" />
                    </svg>

                    <p>
                        We are entering a new phase where transparency and positive change are our top priorities. Our commitment is to support pharmacies with innovative financial solutions, exceptional loyalty programs, and comprehensive marketing assistance while driving digital transformation to ensure the growth and sustainability of independent pharmacies within insurance networks.<br />
                        Digital transformation and payment system enhancements are key to building trust and strengthening our reputation as a reliable brand in the healthcare sector. We also focus on training our team and providing continuous support to pharmacists to ensure long-term success and overcome past challenges.
                        We are dedicated to empowering our pharmacies to grow and thrive, working together as one team to achieve our shared goals
                    </p>
                </div>
            </div>

            <div className='about01'>
                <h1>Our Objective</h1>
                <p>
                    Empowering pharmacies to easily integrate into medical insurance networks while improving payment systems and providing flexible financial solutions.
                    <br />
                    Enhancing digital transformation by developing an infrastructure that supports online orders, loyalty programs, and seamless communication between pharmacies and the company.
                    <br />
                    Expanding market presence and strengthening customer loyalty by launching innovative loyalty programs and providing pharmacy-supporting tools such as the Orange Pharmacies App.
                    Building trust and positioning Orange Pharmacies as a reliable brand known for quality and innovation in the healthcare sector.
                </p>
            </div>

            <div className='about02'>

                <div className='card'>
                    <h1>Our Mission</h1>
                    <div className='cardContent'>
                        <h4>Empowering independent pharmacies by seamlessly integrating them into our network, offering innovative financial solutions, loyalty programs, and comprehensive support. Through digital transformation, transparency, and simplified payment processes, we ensure their growth, competitiveness, and sustainability in a dynamic market.</h4>
                    </div>
                </div>
                <div className='card'>
                    <h1>Our Vision</h1>
                    <div className='cardContent'>
                        <h4>
                            To become the leading partner in pharmacy services for independent pharmacies in Egypt, where Orange Pharmacies provides unparalleled support in insurance network integration, financial process optimization, and customer satisfaction enhancement through innovation and collaboration, all driven by digital transformation.
                        </h4>
                    </div>
                </div>

            </div>

            <div className='home02'>

                <h1>Our Values</h1>

                <div className='cardsContainer'>
                    <div className='card'>
                        <h2>Collaboration</h2>
                        <div className='cardContent'>
                            <p>
                                We believe in building strong relationships with pharmacies and stakeholders to achieve mutual growth and successful partnerships.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>Efficiency</h2>
                        <div className='cardContent'>
                            <p>
                                We are committed to simplifying processes and streamlining operations to save time and reduce complexity for our partners.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>Transparency</h2>
                        <div className='cardContent'>
                            <p>
                                We operate with clarity and integrity to enhance trust and credibility.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>Customer Focus</h2>
                        <div className='cardContent'>
                            <p>
                                We prioritize the needs of pharmacies and their customers to provide exceptional service.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;