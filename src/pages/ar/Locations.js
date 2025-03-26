function ArLocations() {
    const img01 = '/media/bannersEnglish/LOCATIONS-IN.png';
    const img02 = '/media/logo.png';
    return (
        <div className="sub">
            <div className='banner'>
                <img src={img01} alt="" />
            </div>

            <div className="locations">
                <h1>Our Pharmacies</h1>
                <div className='home01'>
                    <div>
                        <h1>
                            Orange Pharma
                        </h1>
                        <p>
                            Orange Pharmacies Services was founded to bridge the gap between independent pharmacies and medical insurance networks, creating greater opportunities for growth and expansion. Since its inception, the company has been committed to delivering innovative solutions that empower pharmacies in managing their financial operations, enhancing efficiency, and strengthening their partnerships with medical insurance providers. Through advanced technology, flexible financial solutions, and continuous training, Orange has established itself as a trusted strategic partner, ensuring the long-term sustainability and competitiveness of pharmacies in an evolving healthcare landscape.
                        </p>

                        <span>
                                Learn More
                                <span className="material-symbols-outlined">
                                    arrow_right_alt
                                </span>
                        </span>
                    </div>
                    <div>
                        <img src={img01} alt="" />
                    </div>
                </div>
            </div>

        </div >
    )
}

export default ArLocations;