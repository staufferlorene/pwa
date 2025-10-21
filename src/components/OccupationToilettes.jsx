import React, { useEffect, useState } from "react";
import axios from "axios";

function OccupationToilettes() {
  const [occupations, setOccupations] = useState();

  useEffect(() => {
    const fetchOccupations = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/toilettes/device/occupation-1/latest`,
        );
        setOccupations(response.data.data.occupancy);
      } catch (error) {
        console.error(
          "Erreur de chargement du statut d'occupation des toilettes",
          error,
        );
      }
    };
    void fetchOccupations();
  }, []);

  return (
    <div>
      <h2>Statut des toilettes</h2>
      <div>
        <p>Les toilettes sont : {occupations}</p>
      </div>
    </div>
  );
}

export default OccupationToilettes;
