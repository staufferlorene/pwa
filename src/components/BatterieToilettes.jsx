import React, { useEffect, useState } from "react";
import axios from "axios";

function BatterieToilettes() {
  const [batteries, setBatteries] = useState(0);

  useEffect(() => {
    const fetchBatterie = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/toilettes/lowbattery`,
        );
        setBatteries(response.data);
      } catch (error) {
        console.error(
          "Erreur de chargement du capteur avec batterie faible",
          error,
        );
      }
    };
    void fetchBatterie();
  }, []);

  return (
    <div>
      <h2>Niveau de batterie</h2>
      {batteries.length > 0 ? (
        batteries.map((batterie) => (
          <div>
            <p>Le niveau de batterie est à : {batterie} %</p>
          </div>
        ))
      ) : (
        <div>
          <p>Le niveau de batterie n'est pas inférieur à 20%</p>
        </div>
      )}
    </div>
  );
}

export default BatterieToilettes;
