function Contact() {
    const img01 = '/media/bannersEnglish/CALL-CENTER-IN.png';
    const img02 = '/media/logo.png';
    return (
        <div className="sub">
            <div className='banner'>
                <img src={img01} alt="" />
            </div>

            <form>
                <div className="contact-container">
                    <h1>Contact Us</h1>

                    <div className="contact-form">
                        <div className="input-group">
                            <input type="text" placeholder="First Name" className="input-field" />
                            <input type="text" placeholder="Last Name" className="input-field" />
                        </div>

                        <div className="input-group">
                            <input type="email" placeholder="E-mail Address" className="input-field " />
                        </div>

                        <div className="input-group">
                            {/* Phone Number Input */}
                            <div className="phone-group">
                                <select className="phone-code">
                                    <option>+20</option>
                                    <option>+1</option>
                                    <option>+44</option>
                                </select>
                                <span className="arrow">&#9662;</span>
                                <span className="divider">|</span>
                                <input type="text" placeholder="Phone Number" className="input-field phone-input" />
                            </div>

                            {/* City Dropdown */}
                            <div className="city-group">
                                <select className="input-field city-input">
                                    <option>City</option>
                                    <option>Cairo</option>
                                    <option>Alexandria</option>
                                </select>
                                <span className="arrow">&#9662;</span>
                            </div>
                        </div>

                        <div className="input-group">
                            <textarea placeholder="Write your message here..." className="input-field textarea"></textarea>
                        </div>

                        <button className="send-button btn">Send</button>
                    </div>
                </div>
            </form>
            <div>

                <div className="contact-info">
                    <img src={img02} alt="Orange Pharmacies" className="logo" />
                    <p className="address">
                        Head Office, Piece 29 P.1 Industrial Zone, Katamya, at the beginning of Ain El Sokhna's Road, Al Basatine, El Basatin, Cairo, Egypt
                    </p>
                    <p className="phone">+20 01234567897</p>
                    <p className="email">Mail@Arabella.com</p>
                </div>
            </div>

        </div >
    )
}

export default Contact;