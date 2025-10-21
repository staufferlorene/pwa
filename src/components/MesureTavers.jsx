import React, { useEffect, useState } from "react";
import axios from "axios";

function MesureTavers() {
  const [mesures, setMesures] = useState();

  useEffect(() => {
    const fetchMesures = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/sondes/device/bridge-tavers/latest`,
        );
        setMesures(response.data.data.haut);
      } catch (error) {
        console.error("Erreur de chargement de la mesure du pont", error);
      }
    };
    void fetchMesures();
  }, []);

  return (
    <div>
      <h2>Mesure Tavers</h2>
      <div>
        <p>Le niveau de l'eau est de : {mesures} mètres à Tavers</p>
      </div>
    </div>
  );
}

export default MesureTavers;
