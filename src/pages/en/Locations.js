import { useState, useEffect } from 'react';
import pharmaciesType01 from '../../data/type1_pharmacies.json';
import pharmaciesType02 from '../../data/type2_pharmacies.json';
import BranchesDialog from '../../components/en/BranchesDialog';
function Locations() {
    const img01 = '/media/bannersEnglish/LOCATIONS-IN.png';
    const [ setBranchesDialogOpen] = useState(false);

    const [pharmacies, setPharmacies] = useState({
        type01: [],
        type02: []
    });
    const [selectedType, setSelectedType] = useState('type01');
    const [selectedPharmacy, setSelectedPharmacy] = useState(null);
    const [expandedPharmacy, setExpandedPharmacy] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setPharmacies({
            type01: pharmaciesType01,
            type02: pharmaciesType02
        });
        setIsLoading(false);
    }, []);

    useEffect(() => {
        if (pharmacies[selectedType]?.length > 0) {
            setSelectedPharmacy(pharmacies[selectedType][0]);
        }
    }, [pharmacies, selectedType]);

    const toggleExpand = (pharmacyId) => {
        setExpandedPharmacy(expandedPharmacy === pharmacyId ? null : pharmacyId);
    };

    const handleTypeChange = (e) => {
        const newType = e.target.value;
        setSelectedType(newType);
        setExpandedPharmacy(null);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="sub">
            <div className='banner'>
                <img src={img01} alt="Banner" />
            </div>

            <div className="locations">
                <h1>Our Pharmacies</h1>

                <button onClick={() => setBranchesDialogOpen(true)}>
        Show Branches
      </button>
      
      <BranchesDialog setBranchesDialogOpen={setBranchesDialogOpen}/>

                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="pharmacyType" style={{ marginRight: '10px' }}>Pharmacy Type: </label>
                    <select
                        id="pharmacyType"
                        value={selectedType}
                        onChange={handleTypeChange}
                        style={{ padding: '5px', borderRadius: '4px' }}
                    >
                        <option value="type01">Type 01</option>
                        <option value="type02">Type 02</option>
                    </select>
                </div>

                <div className='locationsContainer'>
                    <div className='pharmaciesList'>
                        {pharmacies[selectedType]?.length > 0 ? (
                            <ul style={{ listStyle: 'none', padding: 0 }}>
                                {pharmacies[selectedType].map(pharmacy => (
                                    <li
                                        key={pharmacy.id}
                                        style={{
                                            marginBottom: '15px',
                                            padding: '15px',
                                            border: '1px solid #ddd',
                                            borderRadius: '5px',
                                            backgroundColor: selectedPharmacy?.id === pharmacy.id ? '#f0f8ff' : 'white',
                                            cursor: 'pointer'
                                        }}
                                        onClick={() => setSelectedPharmacy(pharmacy)}
                                    >
                                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <div>
                                                <h3 style={{ margin: '0 0 5px 0' }}>{pharmacy.name}</h3>
                                                <p style={{ margin: '0 0 5px 0' }}><strong>District:</strong> {pharmacy.district}</p>
                                                <p style={{ margin: '0 0 5px 0' }}><strong>Working Hours:</strong> {pharmacy.workingHours}</p>

                                                {expandedPharmacy === pharmacy.id && (
                                                    <div style={{ marginTop: '10px' }}>
                                                        <p><strong>Address:</strong> {pharmacy.address}</p>
                                                        <p><strong>Phone:</strong> {pharmacy.phoneNumber}</p>
                                                        {pharmacy.googleMapsUrl !== "N/A" && (
                                                            <a
                                                                href={pharmacy.googleMapsUrl}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                style={{ color: '#0066cc' }}
                                                            >
                                                                View on Google Maps
                                                            </a>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    toggleExpand(pharmacy.id);
                                                }}
                                                style={{
                                                    alignSelf: 'flex-start',
                                                    padding: '5px 10px',
                                                    backgroundColor: '#f0f0f0',
                                                    border: '1px solid #ccc',
                                                    borderRadius: '3px',
                                                    cursor: 'pointer'
                                                }}
                                            >
                                                {expandedPharmacy === pharmacy.id ? 'Hide' : 'Show'}
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No pharmacies available for this type.</p>
                        )}
                    </div>

                    <div className='map'>
                        {selectedPharmacy && selectedPharmacy.googleMapsUrl !== "N/A" && (
                            <div>
                                <iframe
                                    title="Google Map"
                                    width="100%"
                                    height="700"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    src={selectedPharmacy.googleMapsUrl}
                                    allowFullScreen
                                ></iframe>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Locations;