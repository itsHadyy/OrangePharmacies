function ArContact() {
    const img01 = '/media/bannersArabic/call-C-in.png';
    const img02 = '/media/logo.png';
    return (
        <div className="sub">
            <div className='banner'>
                <img src={img01} alt="" />
            </div>

            <form>
                <div className="contact-container ar">
                    <h1>أتصل بنا</h1>

                    <div className="contact-form">
                        <div className="input-group">
                            <input type="text" placeholder="الإسم الأول" className="input-field" />
                            <input type="text" placeholder="اسم العائلة" className="input-field" />
                        </div>

                        <div className="input-group">
                            <input type="email" placeholder="الإيميل" className="input-field " />
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
                                <input type="text" placeholder="رقم الهاتف" className="input-field phone-input" />
                            </div>

                            {/* City Dropdown */}
                            <div className="city-group ar-city">
                                <select className="input-field city-input">
                                    <option>المدينة</option>
                                    <option>القاهرة</option>
                                    <option>الإسكندرية</option>
                                </select>
                                <span className="arrow">&#9662;</span>
                            </div>
                        </div>

                        <div className="input-group">
                            <textarea placeholder=" رسالة..." className="input-field textarea"></textarea>
                        </div>

                        <button className="send-button btn">Send</button>
                    </div>
                </div>
            </form>
            <div className="infoContainer">
                <div className="contact-info">
                    <img src={img02} alt="Orange Pharmacies" />

                    <table>
                        <tr>
                            <td>
                                <svg width="26px" height="31px" viewBox="0 0 36 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 0C8.0595 0 0 6.77596 0 15.1334C0 18.4242 1.28325 21.444 3.41625 23.917C3.4545 23.9763 3.4605 24.0425 3.504 24.0992L15.504 39.2326C16.0605 39.9344 16.998 40.3556 18 40.3556C19.002 40.3556 19.9395 39.9344 20.496 39.2326L32.496 24.0992C32.5402 24.0425 32.5455 23.9763 32.5837 23.917C34.7168 21.444 36 18.4242 36 15.1334C36 6.77596 27.9405 0 18 0ZM18 20.1778C14.6865 20.1778 12 17.9192 12 15.1334C12 12.3476 14.6865 10.0889 18 10.0889C21.3135 10.0889 24 12.3476 24 15.1334C24 17.9192 21.3135 20.1778 18 20.1778Z" fill="#F47920" />
                                </svg>
                            </td>
                            <td>
                                Head Office, Piece 29 P.1 Industrial Zone, Katamya, at the beginning of Ain El Sokhna's Road, Al Basatine, El Basatin, Cairo, Egypt
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <svg width="26" height="31" viewBox="0 0 33 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12.4525 3.13842L13.7911 5.05396C14.9991 6.78264 14.5142 9.05036 12.6116 10.5698C12.6116 10.5698 10.304 12.413 14.488 15.7546C18.6708 19.0951 20.9802 17.2532 20.9802 17.2532C22.8828 15.7337 25.7223 15.3465 27.8868 16.3112L30.2853 17.3802C33.554 18.837 33.9399 22.4977 31.067 24.7922C29.3407 26.1709 27.2258 27.2437 24.888 27.3143C20.9525 27.4336 14.269 26.6382 7.56463 21.2839C0.860334 15.9296 -0.135688 10.592 0.0135136 7.44893C0.102139 5.58188 1.4454 3.89292 3.17174 2.51424C6.04469 0.21981 10.6284 0.528095 12.4525 3.13842Z" fill="#F47920" />
                                </svg>
                            </td>
                            <td>
                                +20 01234567897
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <svg width="26" height="31" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.93604 7.34947e-07H32.064C32.9412 -1.62515e-05 33.6982 -3.33957e-05 34.3248 0.0362666C34.9844 0.074503 35.6442 0.158586 36.2962 0.387903C37.7662 0.905105 38.9344 1.89716 39.5432 3.1458C39.8132 3.69944 39.9122 4.25984 39.9574 4.8201C40 5.35222 40 5.99512 40 6.74023V20.4381C40 21.1831 40 21.826 39.9574 22.3582C39.9122 22.9184 39.8132 23.4788 39.5432 24.0326C38.9344 25.2811 37.7662 26.2732 36.2962 26.7903C35.6442 27.0196 34.9844 27.1037 34.3248 27.1421C33.6982 27.1783 32.9412 27.1783 32.064 27.1783H7.93602C7.05872 27.1783 6.30176 27.1783 5.67524 27.1421C5.01558 27.1037 4.35576 27.0196 3.7039 26.7903C2.23374 26.2732 1.06568 25.2811 0.456721 24.0326C0.186721 23.4788 0.0877207 22.9184 0.0427007 22.3582C-3.93204e-05 21.826 -1.91347e-05 21.1831 8.65335e-07 20.4381V6.74024C-1.91347e-05 5.99514 -3.93204e-05 5.35222 0.0427007 4.8201C0.0877207 4.25984 0.186721 3.69944 0.456721 3.1458C1.06568 1.89716 2.23374 0.905105 3.7039 0.387903C4.35576 0.158586 5.01558 0.074503 5.67524 0.0362666C6.30176 -3.33957e-05 7.05874 -1.62515e-05 7.93604 7.34947e-07ZM4.6349 3.86912C5.36228 3.16311 6.6258 3.09156 7.45708 3.70932L18.683 12.0519C19.437 12.6122 20.563 12.6122 21.317 12.0519L32.543 3.70932C33.3742 3.09156 34.6378 3.16311 35.365 3.86912C36.0924 4.57514 36.0082 5.64827 35.177 6.26604L23.951 14.6087C21.6888 16.2898 18.3112 16.2898 16.049 14.6087L4.82306 6.26604C3.99178 5.64827 3.90754 4.57514 4.6349 3.86912Z" fill="#F47920" />
                                </svg>
                            </td>
                            <td>
                                Mail@Arabella.com
                            </td>
                        </tr>
                    </table>
                </div>
                <div>

                </div>
            </div>

        </div >
    )
}

export default ArContact;