function Services() {
    const img01 = '/media/bannersEnglish/INSURANCE-SLIDER.png';
    return (
        <div className="sub">
            <div className='banner'>
                <img src={img01} alt="" />
            </div>

            <div className='incuranceContainer'>
                <h1>Services</h1>
                <div className='servicesContainer'>
                    <div className='card'>
                        <h2>1 Hotline Service <br /> (19001)</h2>
                        <div className='cardContent'>
                            <p>
                                Receiving customer calls and delivery requests and instantly forwarding them to pharmacies for efficient execution.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>2 Integration with Medical <br />
                            Insurance Networks</h2>
                        <div className='cardContent'>
                            <p>
                                Receiving customer calls and delivery requests and instantly forwarding them to pharmacies for efficient execution.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>3 Digital Transformation & <br />
                            Innovative Technologies</h2>
                        <div className='cardContent'>
                            <p>
                                Offering tools like the Orange Pharmacies App to streamline pharmacy operations and improve efficiency.
                                Developing a robust digital infrastructure to support online orders, loyalty programs, and seamless communication.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>4 Marketing Support & <br />
                            Market Expansion</h2>
                        <div className='cardContent'>
                            <p>
                                Providing marketing solutions for pharmacies to raise awareness about insurance-based prescription services and attract more customers.
                                Helping pharmacies build their brand and strengthen their market presence.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>5 Pharmacist Training & <br />
                            Development</h2>
                        <div className='cardContent'>
                            <p>
                                Conducting regular training programs on prescription handling and insurance procedures to ensure smooth service activation.
                                Offering ongoing technical support to ensure compliance with insurance regulations and best practices.
                            </p>
                        </div>
                    </div>
                    <div className='card'>
                        <h2>6 Financial Process <br />
                            Management</h2>
                        <div className='cardContent'>
                            <p>
                                Delivering flexible payment options tailored to pharmacy needs, ensuring smooth financial operations.
                                Simplifying claims review, submission, and collection processes in collaboration with insurance companies.

                            </p>
                        </div>
                    </div>
                    <div className='card lastCard'>
                        <h2>7 Quality Assurance & <br />
                            Reliability</h2>
                        <div className='cardContent'>
                            <p>
                                Providing accurate and transparent services to build trust with pharmacies and customers.
                            </p>
                        </div>
                    </div>
                </div>

                <button className="btn">
                    Join Us Now
                </button>
            </div>
        </div>
    )
}

export default Services;