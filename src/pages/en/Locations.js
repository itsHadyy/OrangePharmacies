import { useState } from 'react';

function Locations() {
    const img01 = '/media/bannersEnglish/LOCATIONS-IN.png';

    const pharmacies = [
        {
            id: 1,
            name: 'Pharmacy A',
            city: 'New York',
            workingHours: 'Open Until 9:00 PM',
            district: 'Manhattan',
            googleMapsUrl: 'https://www.google.com/maps/place/Pharmacy+A,+Manhattan,+New+York,+NY',
            phoneNumber: '+1 212-555-1234',
            address: '123 Main St, New York, NY 10001'
        },
        {
            id: 2,
            name: 'Pharmacy B',
            city: 'Los Angeles',
            workingHours: 'Open Until 9:00 PM',
            district: 'Hollywood',
            googleMapsUrl: 'https://www.google.com/maps/place/Pharmacy+B,+Hollywood,+Los+Angeles,+CA',
            phoneNumber: '+1 323-555-5678',
            address: '456 Sunset Blvd, Los Angeles, CA 90028'
        },
        {
            id: 1,
            name: 'Pharmacy A',
            city: 'New York',
            workingHours: 'Open Until 9:00 PM',
            district: 'Manhattan',
            googleMapsUrl: 'https://www.google.com/maps/place/Pharmacy+A,+Manhattan,+New+York,+NY',
            phoneNumber: '+1 212-555-1234',
            address: '123 Main St, New York, NY 10001'
        },
        {
            id: 2,
            name: 'Pharmacy B',
            city: 'Los Angeles',
            workingHours: 'Open Until 9:00 PM',
            district: 'Hollywood',
            googleMapsUrl: 'https://www.google.com/maps/place/Pharmacy+B,+Hollywood,+Los+Angeles,+CA',
            phoneNumber: '+1 323-555-5678',
            address: '456 Sunset Blvd, Los Angeles, CA 90028'
        },
        {
            id: 1,
            name: 'Pharmacy A',
            city: 'New York',
            workingHours: 'Open Until 9:00 PM',
            district: 'Manhattan',
            googleMapsUrl: 'https://www.google.com/maps/place/Pharmacy+A,+Manhattan,+New+York,+NY',
            phoneNumber: '+1 212-555-1234',
            address: '123 Main St, New York, NY 10001'
        },
        {
            id: 2,
            name: 'Pharmacy B',
            city: 'Los Angeles',
            workingHours: 'Open Until 9:00 PM',
            district: 'Hollywood',
            googleMapsUrl: 'https://www.google.com/maps/place/Pharmacy+B,+Hollywood,+Los+Angeles,+CA',
            phoneNumber: '+1 323-555-5678',
            address: '456 Sunset Blvd, Los Angeles, CA 90028'
        },
        {
            id: 1,
            name: 'Pharmacy A',
            city: 'New York',
            workingHours: 'Open Until 9:00 PM',
            district: 'Manhattan',
            googleMapsUrl: 'https://www.google.com/maps/place/Pharmacy+A,+Manhattan,+New+York,+NY',
            phoneNumber: '+1 212-555-1234',
            address: '123 Main St, New York, NY 10001'
        },
        {
            id: 2,
            name: 'Pharmacy B',
            city: 'Los Angeles',
            workingHours: 'Open Until 9:00 PM',
            district: 'Hollywood',
            googleMapsUrl: 'https://www.google.com/maps/place/Pharmacy+B,+Hollywood,+Los+Angeles,+CA',
            phoneNumber: '+1 323-555-5678',
            address: '456 Sunset Blvd, Los Angeles, CA 90028'
        },
    ];

    const [selectedPharmacy, setSelectedPharmacy] = useState(pharmacies[0]);
    const [expandedPharmacy, setExpandedPharmacy] = useState(null);

    const toggleExpand = (pharmacyId) => {
        setExpandedPharmacy(expandedPharmacy === pharmacyId ? null : pharmacyId);
    };

    return (
        <div className="sub">
            <div className='banner'>
                <img src={img01} alt="Banner" />
            </div>

            <div className="locations">
                <h1>Our Pharmacies</h1>

                <div className='locationsContainer'>
                    <div className='pharmaciesList'>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {pharmacies.map(pharmacy => (
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
                                                    <a
                                                        href={pharmacy.googleMapsUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        style={{ color: '#0066cc' }}
                                                    >
                                                        View on Google Maps
                                                    </a>
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
                    </div>

                    <div className='map'>
                        {/* Google Map - No API Key version */}
                        {selectedPharmacy && (
                            <div>
                                <iframe
                                    title="Google Map"
                                    width="100%"
                                    height="700"
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    src={`https://maps.google.com/maps?q=${encodeURIComponent(selectedPharmacy.address)}&output=embed`}
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