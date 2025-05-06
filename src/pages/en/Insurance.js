import { useState } from "react";

function Insurance() {
    const img01 = '/media/bannersEnglish/INSURANCE-IN.png';

    const images = [
        "/media/insuranceLogos/axa.svg",
        "/media/insuranceLogos/axon.svg",
        "/media/insuranceLogos/banque Misr.svg",
        "/media/insuranceLogos/el araby.svg",
        "/media/insuranceLogos/future healthcare.svg",
        "/media/insuranceLogos/globemed.svg",
        "/media/insuranceLogos/Gymed.svg",
        "/media/insuranceLogos/limitless care.svg",
        // "/media/insuranceLogos/logo (1).png",
        "/media/insuranceLogos/logo.png",
        "/media/insuranceLogos/M.svg",
        "/media/insuranceLogos/med right.svg",
        "/media/insuranceLogos/med solution.svg",
        "/media/insuranceLogos/medmark.svg",
        "/media/insuranceLogos/mednet.svg",
        "/media/insuranceLogos/medsure.svg",
        "/media/insuranceLogos/Misr.svg",
        "/media/insuranceLogos/next care.svg",
        "/media/insuranceLogos/one care.svg",
        "/media/insuranceLogos/osman group.svg",
        "/media/insuranceLogos/reliance health.svg",
        "/media/insuranceLogos/sehaone.svg",
        "/media/insuranceLogos/wadi el neel.svg",
        "/media/insuranceLogos/we.png",
    ];

    const ITEMS_PER_PAGE = 12;

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);

    const displayedLogos = images.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
    return (
        <div className="sub">
            <div className='banner'>
                <img src={img01} alt="" />
            </div>

            <div className='incuranceContainer'>
                <h1>Insurance Companies</h1>
                <div className="insuranceLogosContainer">
                    <div className="grid">
                        {displayedLogos.map((src, index) => (
                            <div key={index} className="insuranceLogoContainer">
                                <img src={src} alt={`Insurance Logo ${index + 1}`} className="insuranceLogo" />
                            </div>
                        ))}
                    </div>
                    {/* Pagination */}
                    <div className="pagination">
                        {currentPage > 1 && (
                            <button onClick={handlePrevPage} className="arrow">
                                &lt;
                            </button>
                        )}
                        {[...Array(totalPages)].map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentPage(index + 1)}
                                className={`page-btn ${currentPage === index + 1 ? "active" : ""}`}
                            >
                                {index + 1}
                            </button>
                        ))}
                        {currentPage < totalPages && (
                            <button onClick={handleNextPage} className="arrow">
                                &gt;
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Insurance;