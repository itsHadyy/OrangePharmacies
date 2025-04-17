import { useState, useEffect } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import PlaceIcon from "@mui/icons-material/Place";
import { db } from "../../boot/firebase";
import { collection, getDocs } from "firebase/firestore";
import { Button, CircularProgress } from "@mui/material";

export default function BranchesDisplay() {
  const [branches, setBranches] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch branches from Firestore
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

    fetchBranches(); // Fetch branches when the component mounts
  }, []);

  return (
    <div>
      <div>
        <Button startIcon={<ArrowBackIosIcon />}>
          Back {/* The "Back" button might not make sense if it's always visible */}
        </Button>
        <span style={{ marginLeft: 10 }}>Branches</span>
      </div>

      <div>
        {loading ? (
          <CircularProgress />
        ) : (
          <div>
            {branches.map((branch) => (
              <div key={branch.id}>
                <h3>{branch.title}</h3>
                <Button
                  startIcon={<PlaceIcon />}
                  onClick={() => window.open(`https://www.google.com/maps/place/${branch.lat},${branch.long}`)}
                >
                  Open in Maps
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}