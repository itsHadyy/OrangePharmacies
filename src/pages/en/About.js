import Slideshow from '../../components/en/Slideshow';
import Slider from '../../components/en/Slider';
import { Link } from 'react-router-dom';

function About() {
    const img01 = '/media/bannersEnglish/about-us-first-p.png';
    const img02 = '/media/GooglePlay.png';
    const img03 = '/media/AppStore.png';
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
                    <svg width="1419" height="43" viewBox="0 0 1419 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.736328 43V33.7273C0.736328 31.0606 1.23633 28.2879 2.23633 25.4091C3.26663 22.5 4.66057 19.7576 6.41815 17.1818C8.20603 14.5758 10.206 12.3788 12.4181 10.5909L20.0545 15.5455C18.2666 18.2424 16.7666 21.0606 15.5545 24C14.3727 26.9091 13.7969 30.1212 13.8272 33.6364V43H0.736328ZM23.7818 43V33.7273C23.7818 31.0606 24.2818 28.2879 25.2818 25.4091C26.3121 22.5 27.706 19.7576 29.4636 17.1818C31.2515 14.5758 33.2515 12.3788 35.4636 10.5909L43.1 15.5455C41.3121 18.2424 39.8121 21.0606 38.6 24C37.4181 26.9091 36.8424 30.1212 36.8727 33.6364V43H23.7818Z" fill="black" />
                        <path d="M1418.96 3.57931e-06V9.27273C1418.96 11.9394 1418.46 14.7121 1417.46 17.5909C1416.43 20.5 1415.04 23.2424 1413.28 25.8182C1411.49 28.4242 1409.49 30.6212 1407.28 32.4091L1399.65 27.4546C1401.43 24.7576 1402.93 21.9394 1404.15 19C1405.33 16.0909 1405.9 12.8788 1405.87 9.36364V2.28265e-06L1418.96 3.57931e-06ZM1395.92 1.29666e-06V9.27273C1395.92 11.9394 1395.42 14.7121 1394.42 17.5909C1393.39 20.5 1391.99 23.2424 1390.24 25.8182C1388.45 28.4242 1386.45 30.6212 1384.24 32.4091L1376.6 27.4546C1378.39 24.7576 1379.89 21.9394 1381.1 19C1382.28 16.0909 1382.86 12.8788 1382.83 9.36364V0L1395.92 1.29666e-06Z" fill="black" />
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