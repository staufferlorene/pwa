import React, { useEffect, useState } from "react";
import axios from "axios";

/**
 * Composant React permettant d'afficher le statut d’occupation des toilettes.
 *
 * Ce composant interroge une API afin de savoir si les toilettes sont actuellement
 * **libres** ou **occupées**.
 * Les données sont récupérées au montage du composant, puis affichées directement
 * à l’utilisateur.
 *
 * @component
 * @example
 * // Exemple d’utilisation :
 * <OccupationToilettes />
 *
 * @returns {JSX.Element} Un élément JSX affichant le statut d’occupation actuel des toilettes.
 */

function OccupationToilettes() {
  /**
   * État local stockant le statut d’occupation des toilettes.
   * Peut être "Libre", "Occupé", ou `undefined` si la donnée n’est pas encore chargée.
   *
   * @type {string | undefined}
   */
  const [occupations, setOccupations] = useState();

  useEffect(() => {
    /**
     * Fonction asynchrone pour récupérer le statut d’occupation depuis l’API.
     *
     * Fait un appel HTTP GET vers l’endpoint :
     * `${import.meta.env.VITE_API_URL}/api/toilettes/device/occupation-1/latest`
     *
     * @async
     * @function fetchOccupations
     * @returns {Promise<void>} Ne retourne rien, mais met à jour l’état `occupations`.
     */
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
