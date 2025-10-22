import React, { useEffect, useState } from "react";
import axios from "axios";

/**
 * Composant React permettant d’afficher la mesure du niveau d’eau (en mètres)
 * relevée par le capteur du pont de Chaumont.
 *
 * Ce composant interroge l’API pour obtenir la dernière mesure de la sonde
 * installée à Chaumont, puis affiche cette valeur à l’écran.
 *
 * @component
 * @example
 * // Exemple d’utilisation :
 * <MesureChaumont />
 *
 * @returns {JSX.Element} Un élément JSX affichant la mesure actuelle du niveau d’eau.
 */

function MesureChaumont() {
  /**
   * État local contenant la dernière mesure du niveau d’eau (en mètres).
   *
   * @type {number | undefined}
   */

  const [mesures, setMesures] = useState();

  useEffect(() => {
    /**
     * Fonction asynchrone pour récupérer la dernière mesure du capteur de Chaumont.
     *
     * Effectue un appel HTTP GET vers :
     * `${import.meta.env.VITE_API_URL}/api/sondes/device/bridge-chaumont/latest`
     *
     * @async
     * @function fetchMesures
     * @returns {Promise<void>} Ne retourne rien, mais met à jour l’état `mesures`.
     */
    const fetchMesures = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/sondes/device/bridge-chaumont/latest`,
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
      <h2>Mesure Chaumont</h2>
      <div>
        <p>Le niveau de l'eau est de : {mesures} mètres à Chaumont</p>
      </div>
    </div>
  );
}

export default MesureChaumont;
