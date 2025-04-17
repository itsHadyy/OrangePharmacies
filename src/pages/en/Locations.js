import React, { useState, useEffect, useRef } from "react";
import { Button, CircularProgress, Card, CardContent, CardActions, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PlaceIcon from "@mui/icons-material/Place";
import { db } from "../../boot/firebase";
import { collection, getDocs } from "firebase/firestore";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

mapboxgl.accessToken =
    "pk.eyJ1IjoiY2xpeHN5cyIsImEiOiJjbHAyaTMzcnYwd3ZuMnFvNWVxd2trcnQ0In0.ldbOkLAhE0zdf1vGi01m8g";

export default function BranchesMap() {
    const [branches, setBranches] = useState([]);
    const [loading, setLoading] = useState(true);
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [selectedBranch, setSelectedBranch] = useState(null);

    useEffect(() => {
        const fetchBranches = async () => {
            try {
                const branchesRef = collection(db, "Branches");
                const snapshot = await getDocs(branchesRef);
                const branchesData = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setBranches(branchesData);
            } catch (error) {
                console.error("Error loading branches:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBranches();
    }, []);

    useEffect(() => {
        if (branches.length > 0 && mapContainer.current && !map.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current,
                style: "mapbox://styles/mapbox/streets-v12",
                center: [31.031246, 30.035752], // Initial center (e.g., Cairo)
                zoom: 10,
                attributionControl: false,
            });

            map.current.on("load", () => {
                // Add a source for the branches
                map.current.addSource("branches-data", {
                    type: "geojson",
                    data: {
                        type: "FeatureCollection",
                        features: branches.map((branch) => ({
                            type: "Feature",
                            geometry: {
                                type: "Point",
                                coordinates: [branch.long, branch.lat],
                            },
                            properties: {
                                id: branch.id,
                                title: branch.title,
                            },
                        })),
                    },
                });

                // Add a layer to display the markers
                map.current.addLayer({
                    id: "branch-markers",
                    type: "circle",
                    source: "branches-data",
                    paint: {
                        "circle-radius": 8,
                        "circle-color": "#f97818",
                        "circle-stroke-width": 2,
                        "circle-stroke-color": "#FFFFFF",
                    },
                });

                // Add click event listener to the markers
                map.current.on("click", "branch-markers", (e) => {
                    if (e.features.length > 0) {
                        const clickedBranchId = e.features[0].properties.id;
                        const selected = branches.find((branch) => branch.id === clickedBranchId);
                        setSelectedBranch(selected);
                        // Fly to the selected branch's location
                        if (selected) {
                            map.current.flyTo({
                                center: [selected.long, selected.lat],
                                zoom: 14,
                                essential: true, // this animation is considered essential with respect to prefers-reduced-motion
                            });
                        }
                    }
                });

                // Change the cursor to a pointer when the mouse is over the markers layer.
                map.current.on("mouseenter", "branch-markers", () => {
                    map.current.getCanvas().style.cursor = "pointer";
                });

                // Change it back to a pointer when it leaves.
                map.current.on("mouseleave", "branch-markers", () => {
                    map.current.getCanvas().style.cursor = "";
                });
            });
        }
    }, [branches]);

    useEffect(() => {
        // Update map data when branches change
        if (map.current && map.current.getSource("branches-data") && branches.length > 0) {
            map.current.getSource("branches-data").setData({
                type: "FeatureCollection",
                features: branches.map((branch) => ({
                    type: "Feature",
                    geometry: {
                        type: "Point",
                        coordinates: [branch.long, branch.lat],
                    },
                    properties: {
                        id: branch.id,
                        title: branch.title,
                    },
                })),
            });
        }
    }, [branches]);

    const handleOpenInMaps = () => {
        if (selectedBranch) {
            window.open(
                `https://www.google.com/maps/dir/?api=1&destination=${selectedBranch.lat},${selectedBranch.long}`,
                "_blank"
            );
        }
    };

    return (
        <div style={{ height: "100vh", width: "100%" }}>
            <div style={{ position: "absolute", top: 16, left: 16, zIndex: 1000 }}>
                {/* You might want a way to go back to the full list or initial view */}
                {selectedBranch && (
                    <Button
                        onClick={() => {
                            setSelectedBranch(null);
                            map.current?.flyTo({
                                center: [31.031246, 30.035752], // Go back to initial center
                                zoom: 10,
                                essential: true,
                            });
                        }}
                        startIcon={<ArrowBackIosIcon />}
                        variant="outlined"
                    >
                        Back to Map
                    </Button>
                )}
            </div>

            <div ref={mapContainer} style={{ height: "100%", width: "100%" }} />

            {loading && (
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        zIndex: 1000,
                    }}
                >
                    <CircularProgress />
                </div>
            )}

            {selectedBranch && (
                <Card
                    style={{
                        position: "absolute",
                        bottom: 16,
                        left: 16,
                        zIndex: 1000,
                        width: "90%",
                        maxWidth: 400,
                    }}
                >
                    <CardContent>
                        <Typography variant="h6" component="div">
                            {selectedBranch.title}
                        </Typography>
                        {/* You can display more branch details here if available */}
                    </CardContent>
                    <CardActions>
                        <Button
                            size="small"
                            color="primary"
                            startIcon={<PlaceIcon />}
                            onClick={handleOpenInMaps}
                        >
                            Open in Maps
                        </Button>
                    </CardActions>
                </Card>
            )}
        </div>
    );
}