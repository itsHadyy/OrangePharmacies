import Slideshow from '../../components/en/Slideshow';
import Slider from '../../components/en/Slider';
import { Link } from 'react-router-dom';

function Home() {
    const img01 = '/media/bannersEnglish/about-us-first-p.png';
    const img02 = '/media/GooglePlay.png';
    const img03 = '/media/AppStore.png';
    return (
        <div className="App">
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

            <div className='home03'>
                <div>

                </div>
                <div>
                    <h1>Download Our App Now!</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur. Turpis feugiat pellentesque elementum a lorem pretium. Vitae eu rhoncus vivamus ultrices placerat est dui. Ut aliquet amet tempus facilisis ullamcorper dolor sem. Blandit dolor sociis quam turpis. Eget sit at nibh sagittis amet vulputate.
                    </p>
                    <div className='appStoreContainer'>
                        <a href='https://www.apple.com/app-store/' target='_blank'>
                            <img src={img02} alt="" />
                        </a>
                        <a href='https://www.apple.com/app-store/' target='_blank'>
                            <img src={img03} alt="" />
                        </a>
                    </div>
                </div>
            </div>

            <div className='home04'>
                <h1>Insurance Companies</h1>

                <Slider direction="left" />

                <span>
                    <Link to="/insurance">
                        Learn More
                        <span className="material-symbols-outlined">
                            arrow_right_alt
                        </span>
                    </Link>
                </span>
            </div>
        </div>
    )
}

export default Home;