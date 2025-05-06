import React, { useState, useEffect, useRef } from 'react';
import {
    Button,
    CircularProgress,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    IconButton
} from "@mui/material";
import { db } from "../../boot/firebase";
import { collection, getDocs } from "firebase/firestore";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import PlaceIcon from "@mui/icons-material/Place";
import ScheduleIcon from "@mui/icons-material/Schedule";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

export default function BranchesDialog() {
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

                const type01 = branchesData.filter(branch => branch.type === 'type01');
                const type02 = branchesData.filter(branch => branch.type === 'type02');

                setPharmacies({
                    type01,
                    type02
                });

                // Select the first pharmacy of the default type (type01) if available
                if (type01.length > 0) {
                    setSelectedPharmacy(type01[0]);
                } else if (type02.length > 0) {
                    // Fallback to type02 if type01 has no pharmacies
                    setSelectedType('type02');
                    setSelectedPharmacy(type02[0]);
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
        if (pharmacies[selectedType]?.length > 0 &&
            (!selectedPharmacy || !pharmacies[selectedType].some(p => p.id === selectedPharmacy.id))) {
            setSelectedPharmacy(pharmacies[selectedType][0]);
        }
    }, [pharmacies, selectedType]);

    useEffect(() => {
        if (!mapContainer.current || !selectedPharmacy) return;

        if (map.current) {
            map.current.flyTo({
                center: [selectedPharmacy.long, selectedPharmacy.lat],
                zoom: 14,
                essential: true
            });

            document.querySelectorAll('.mapboxgl-marker').forEach(marker => marker.remove());

            pharmacies[selectedType].forEach(pharmacy => {
                new mapboxgl.Marker({
                    color: pharmacy.id === selectedPharmacy.id ? '#3a86ff' : '#f97818',
                    scale: 0.8
                })
                    .setLngLat([pharmacy.long, pharmacy.lat])
                    .addTo(map.current);
            });
        } else {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v12",
                center: [selectedPharmacy.long, selectedPharmacy.lat],
                zoom: 14,
                attributionControl: false,
            });

            map.current.on('load', () => {
                pharmacies[selectedType].forEach(pharmacy => {
                    new mapboxgl.Marker({
                        color: pharmacy.id === selectedPharmacy.id ? '#3a86ff' : '#f97818',
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
        <div className="locationsContainer">
            <div className='pharmaciesList'>
                <FormControl fullWidth size="small" style={{ marginBottom: '20px', color: '#10125A' }}>
                    <InputLabel id="pharmacy-type-label" style={{ color: '#10125A'}}>Pharmacy Type</InputLabel>
                    <Select
                        labelId="pharmacy-type-label"
                        id="pharmacyType"
                        value={selectedType}
                        onChange={handleTypeChange}
                        label="Pharmacy Type"
                        style={{ color: '#10125A' }}
                    >
                        <MenuItem value="type01">صيدليات التغطية التأمينية والبيع المباشر</MenuItem>
                        <MenuItem value="type02">صيدليات البيع المباشر</MenuItem>
                    </Select>
                </FormControl>

                {pharmacies[selectedType]?.length > 0 ? (
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {pharmacies[selectedType].map(pharmacy => (
                            <li
                                key={pharmacy.id}
                                style={{
                                    marginBottom: '15px',
                                    padding: '15px',
                                    border: '1px solid #eee',
                                    borderRadius: '8px',
                                    backgroundColor: selectedPharmacy?.id === pharmacy.id ? '#f5f9ff' : 'white',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                                    ':hover': {
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.15)'
                                    }
                                }}
                                onClick={() => handlePharmacySelection(pharmacy)}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                    <div className='pharmacyInfo' style={{ flex: 1 }}>
                                        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px' }}>
                                            {pharmacy.name || pharmacy.title}
                                        </h3>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                                            <LocationOnIcon color="" fontSize="small" style={{ marginRight: '6px', fontSize: '16px' }} />
                                            <span style={{ fontSize: '14px', color: '#555' }}>{pharmacy.district}</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                                            <ScheduleIcon color="" fontSize="small" style={{ marginRight: '6px', fontSize: '16px' }} />
                                            <span style={{ fontSize: '14px', color: '#555' }}>{pharmacy.workingHours}</span>
                                        </div>

                                        {expandedPharmacy === pharmacy.id && (
                                            <div style={{ marginTop: '10px' }}>
                                                <p style={{ fontSize: '14px', margin: '6px 0', color: '#555' }}>
                                                    <strong style={{ color: '#333' }}>Address:</strong> {pharmacy.address}
                                                </p>
                                                <p style={{ fontSize: '14px', margin: '6px 0', color: '#555' }}>
                                                    <strong style={{ color: '#333' }}>Phone:</strong> {pharmacy.phone}
                                                </p>
                                                <Button
                                                    size="small"
                                                    startIcon={<PlaceIcon style={{ fontSize: '16px' }} />}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleOpenInMaps();
                                                    }}
                                                    style={{
                                                        color: '#1976d2',
                                                        padding: 0,
                                                        textTransform: 'none',
                                                        justifyContent: 'flex-start',
                                                        marginTop: '5px',
                                                        fontSize: '14px'
                                                    }}
                                                >
                                                    View on Google Maps
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                    <IconButton
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleExpand(pharmacy.id);
                                        }}
                                        size="small"
                                        style={{
                                            marginLeft: '8px',
                                            color: '#666',
                                            backgroundColor: 'transparent',
                                            '&:hover': {
                                                backgroundColor: 'rgba(0,0,0,0.05)'
                                            }
                                        }}
                                    >
                                        {expandedPharmacy === pharmacy.id ? (
                                            <ExpandLessIcon fontSize="small" />
                                        ) : (
                                            <ExpandMoreIcon fontSize="small" />
                                        )}
                                    </IconButton>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100px',
                        color: '#666',
                        fontSize: '14px'
                    }}>
                        No pharmacies available for this type.
                    </div>
                )}
            </div>

            <div className='map' style={{ flex: 1, position: 'relative' }}>
                <div ref={mapContainer} className='mapBox' style={{ height: '100%', width: '100%' }} />

                {selectedPharmacy && (
                    <div style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        backgroundColor: 'white',
                        padding: '15px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
                        maxWidth: '300px'
                    }}>
                        <h3 style={{ margin: '0 0 8px 0', fontSize: '16px', color: '#333' }}>
                            {selectedPharmacy.name || selectedPharmacy.title}
                        </h3>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '6px' }}>
                            <LocationOnIcon color="action" fontSize="small" style={{ marginRight: '6px', fontSize: '16px' }} />
                            <span style={{ fontSize: '14px', color: '#555' }}>{selectedPharmacy.district}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <ScheduleIcon color="action" fontSize="small" style={{ marginRight: '6px', fontSize: '16px' }} />
                            <span style={{ fontSize: '14px', color: '#555' }}>{selectedPharmacy.workingHours}</span>
                        </div>
                        <Button
                            variant="contained"
                            size="small"
                            startIcon={<PlaceIcon style={{ fontSize: '16px' }} />}
                            onClick={handleOpenInMaps}
                            style={{
                                backgroundColor: '#1976d2',
                                textTransform: 'none',
                                fontSize: '14px',
                                boxShadow: 'none',
                                '&:hover': {
                                    backgroundColor: '#1565c0',
                                    boxShadow: 'none'
                                }
                            }}
                        >
                            Open in Maps
                        </Button>
                    </div>
                )}
            </div>
        </div>
    );
}