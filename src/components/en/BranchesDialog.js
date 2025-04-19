import React, { useState, useEffect, useRef } from 'react';
import { Button, CircularProgress } from "@mui/material";
import { db } from "../../boot/firebase";
import { collection, getDocs } from "firebase/firestore";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import PlaceIcon from "@mui/icons-material/Place";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocationOnIcon from "@mui/icons-material/LocationOn";

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function BranchesDialog({ setBranchesDialogOpen }) {
    const [pharmacies, setPharmacies] = useState({
        type01: [],
        type02: []
    });
    const [selectedType, setSelectedType] = useState('type01');
    const [selectedPharmacy, setSelectedPharmacy] = useState(null);
    const [expandedPharmacy, setExpandedPharmacy] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        const fetchBranches = async () => {
            try {
                const branchesRef = collection(db, "Branches");
                const snapshot = await getDocs(branchesRef);
                const branchesData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                // Sort branches into types (assuming each branch has a 'type' field)
                const type01 = branchesData.filter(branch => branch.type === 'type01');
                const type02 = branchesData.filter(branch => branch.type === 'type02');

                setPharmacies({
                    type01,
                    type02
                });

                if (type01.length > 0) {
                    setSelectedPharmacy(type01[0]);
                }
            } catch (error) {
                console.error("Error loading branches:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchBranches();
    }, []);

    useEffect(() => {
        if (pharmacies[selectedType]?.length > 0 && !selectedPharmacy) {
            setSelectedPharmacy(pharmacies[selectedType][0]);
        }
    }, [pharmacies, selectedType, selectedPharmacy]);

    useEffect(() => {
        if (!map.current && mapContainer.current && selectedPharmacy) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v12",
                center: [selectedPharmacy.long, selectedPharmacy.lat],
                zoom: 14,
                attributionControl: false,
            });

            map.current.on('load', () => {
                // Add markers for all pharmacies of selected type
                pharmacies[selectedType].forEach(pharmacy => {
                    new mapboxgl.Marker({
                        color: pharmacy.id === selectedPharmacy.id ? '#f97818' : '#f97818',
                        scale: 0.8
                    })
                        .setLngLat([pharmacy.long, pharmacy.lat])
                        .addTo(map.current);
                });
            });
        }

        return () => {
            if (map.current) {
                map.current.remove();
                map.current = null;
            }
        };
    }, [selectedPharmacy, pharmacies, selectedType]);

    const toggleExpand = (pharmacyId) => {
        setExpandedPharmacy(expandedPharmacy === pharmacyId ? null : pharmacyId);
    };

    const handleTypeChange = (e) => {
        const newType = e.target.value;
        setSelectedType(newType);
        setExpandedPharmacy(null);
    };

    const handlePharmacySelection = (pharmacy) => {
        setSelectedPharmacy(pharmacy);
        if (map.current) {
            map.current.flyTo({
                center: [pharmacy.long, pharmacy.lat],
                zoom: 14,
                essential: true
            });

            // Clear all existing markers
            document.querySelectorAll('.mapboxgl-marker').forEach(marker => marker.remove());

            // Add new markers with selected one highlighted
            pharmacies[selectedType].forEach(p => {
                new mapboxgl.Marker({
                    color: p.id === pharmacy.id ? '#3a86ff' : '#f97818',
                    scale: 0.8
                })
                    .setLngLat([p.long, p.lat])
                    .addTo(map.current);
            });
        }
    };

    const handleOpenInMaps = () => {
        if (selectedPharmacy) {
            window.open(
                `https://www.google.com/maps/dir/?api=1&destination=${selectedPharmacy.lat},${selectedPharmacy.long}`,
                "_blank"
            );
        }
    };

    if (isLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress />
            </div>
        );
    }

    return (
        <div>
            <div>
                <h1>Our Pharmacies</h1>
            </div>

            <div className="locationsContainer" >

                <div className='pharmaciesList'>

                    <div>
                        <label htmlFor="pharmacyType">Pharmacy Type: </label>
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
                                    onClick={() => handlePharmacySelection(pharmacy)}
                                >
                                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div>
                                            <h3 style={{ margin: '0 0 5px 0' }}>{pharmacy.name || pharmacy.title}</h3>
                                            <p style={{ margin: '0 0 5px 0' }}><strong>District:</strong> {pharmacy.district}</p>
                                            <p style={{ margin: '0 0 5px 0' }}><strong>Working Hours:</strong> {pharmacy.workingHours}</p>

                                            {expandedPharmacy === pharmacy.id && (
                                                <div style={{ marginTop: '10px' }}>
                                                    <p><strong>Address:</strong> {pharmacy.address}</p>
                                                    <p><strong>Phone:</strong> {pharmacy.phoneNumber}</p>
                                                    <Button
                                                        size="small"
                                                        startIcon={<PlaceIcon />}
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleOpenInMaps();
                                                        }}
                                                        style={{
                                                            color: '#0066cc',
                                                            padding: 0,
                                                            textTransform: 'none',
                                                            justifyContent: 'flex-start',
                                                            marginTop: '5px'
                                                        }}
                                                    >
                                                        View on Google Maps
                                                    </Button>
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

                <div className='map' style={{ flex: 1, position: 'relative' }}>
                    <div
                        ref={mapContainer}
                        style={{
                            height: '700px',
                            width: '100%',
                            borderRadius: '5px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }}
                    />

                    {selectedPharmacy && (
                        <div style={{
                            position: 'absolute',
                            bottom: '20px',
                            left: '20px',
                            backgroundColor: 'white',
                            padding: '15px',
                            borderRadius: '5px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                            maxWidth: '300px'
                        }}>
                            <h3 style={{ margin: '0 0 5px 0' }}>{selectedPharmacy.name || selectedPharmacy.title}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                <LocationOnIcon color="action" fontSize="small" style={{ marginRight: '5px' }} />
                                <span>{selectedPharmacy.district}</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                <ScheduleIcon color="action" fontSize="small" style={{ marginRight: '5px' }} />
                                <span>{selectedPharmacy.workingHours}</span>
                            </div>
                            <Button
                                variant="contained"
                                size="small"
                                startIcon={<PlaceIcon />}
                                onClick={handleOpenInMaps}
                                style={{
                                    marginTop: '10px',
                                    backgroundColor: '#0066cc',
                                    textTransform: 'none'
                                }}
                            >
                                Open in Maps
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}