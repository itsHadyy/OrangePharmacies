import { useState } from 'react';
// import pharmaciesType01 from '../../data/type1_pharmacies.json';
// import pharmaciesType02 from '../../data/type2_pharmacies.json';
import BranchesDialog from '../../components/en/BranchesDialog';
function Locations() {
    const img01 = '/media/bannersEnglish/LOCATIONS-IN.png';
    const [setBranchesDialogOpen] = useState(false);

    // const [pharmacies, setPharmacies] = useState({
    //     type01: [],
    //     type02: []
    // });
    // const [selectedType, setSelectedType] = useState('type01');
    // const [selectedPharmacy, setSelectedPharmacy] = useState(null);
    // const [expandedPharmacy, setExpandedPharmacy] = useState(null);
    // const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //     setPharmacies({
    //         type01: pharmaciesType01,
    //         type02: pharmaciesType02
    //     });
    //     setIsLoading(false);
    // }, []);

    // useEffect(() => {
    //     if (pharmacies[selectedType]?.length > 0) {
    //         setSelectedPharmacy(pharmacies[selectedType][0]);
    //     }
    // }, [pharmacies, selectedType]);

    // const toggleExpand = (pharmacyId) => {
    //     setExpandedPharmacy(expandedPharmacy === pharmacyId ? null : pharmacyId);
    // };

    // const handleTypeChange = (e) => {
    //     const newType = e.target.value;
    //     setSelectedType(newType);
    //     setExpandedPharmacy(null);
    // };

    // if (isLoading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <div className="sub">
            <div className='banner'>
                <img src={img01} alt="Banner" />
            </div>

            <div className="locations">
                <h1>Our Pharmacies</h1>

                {/* <button onClick={() => setBranchesDialogOpen(true)}>
                    Show Branches
                </button> */}

                <BranchesDialog />
            </div>
        </div>
    );
}

export default Locations;