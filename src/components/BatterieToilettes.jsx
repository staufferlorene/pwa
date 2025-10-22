import React, { useEffect, useState } from "react";
import axios from "axios";

/**
 * Composant React affichant le niveau de batterie des capteurs de toilettes.
 *
 * Ce composant interroge une API pour récupérer la liste des capteurs dont la batterie
 * est inférieure à un certain seuil (20%).
 * Si un ou plusieurs capteurs sont détectés avec un niveau de batterie faible,
 * leur pourcentage est affiché.
 * Sinon, un message indique qu’aucune batterie n’est inférieure à 20 %.
 *
 * @component
 * @example
 * // Exemple d’utilisation :
 * <BatterieToilettes />
 *
 * @returns {JSX.Element} Un élément JSX affichant les niveaux de batterie ou un message informatif.
 */

function BatterieToilettes() {
  /**
   * État local stockant les niveaux de batterie faibles des capteurs.
   *
   * @type {number[]}
   */
  const [batteries, setBatteries] = useState(0);

  useEffect(() => {
    /**
     * Fonction asynchrone pour récupérer les capteurs avec une batterie faible depuis l’API.
     *
     * @async
     * @function fetchBatterie
     * @returns {Promise<void>} Ne retourne rien, mais met à jour l’état `batteries`.
     */
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
