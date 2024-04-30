import ProfileModel from "./profileModel.js";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../mockDatas/data.jsx";

/**
 * Fonction pour corriger les clés 'todayScore' en 'score'
 * @param {Array<Object>} data - Les données à corriger
 * @returns {Array<Object>} - Les données corrigées
 */

// Fonction pour corriger les clés 'todayScore' en 'score'
function fixScoreKey(data) {
  return data.map((item) => {
    // Vérifier si la clé 'todayScore' existe dans l'objet
    if (item.todayScore !== undefined) {
      // Remplacer 'todayScore' par 'score'
      item.score = item.todayScore;
      delete item.todayScore; // Supprimer 'todayScore' de l'objet
    }
    return item;
  });
}

// Appliquer la correction sur USER_MAIN_DATA
const correctedData = fixScoreKey(USER_MAIN_DATA);

/**
 * Fonction pour récupérer le profil utilisateur
 * @param {number} id - L'identifiant de l'utilisateur
 * @param {string} source - La source des données ('null' pour api, 'mock' pour le mock)
 * @returns {Promise<ProfileModel>} - Une promesse contenant le modèle de profil utilisateur
 */

export default async function getProfile(id, source) {
  // appelle toutes les fonctions d'api et du mockDatas

  let Datas;

  if (source === null) {
    const userMainData = correctedData.find((user) => user.id === Number(id));
    const userActivity = USER_ACTIVITY.find(
      (activity) => activity.userId === Number(id)
    );
    const userPerformance = USER_PERFORMANCE.find(
      (performance) => performance.userId === Number(id)
    );
    const userAverageSessions = USER_AVERAGE_SESSIONS.find(
      (sessions) => sessions.userId === Number(id)
    );

    Datas = [
      userMainData,
      userPerformance,
      userActivity ? userActivity.sessions : [],
      userAverageSessions ? userAverageSessions.sessions : [],
    ];
  } else {
    const infoUrl = `http://localhost:3001/user/${id}`;
    const perfsUrl = `http://localhost:3001/user/${id}/performance`;
    const activitiesUrl = `http://localhost:3001/user/${id}/activity`;
    const averageSessionUrl = `http://localhost:3001/user/${id}/average-sessions`;

    const infos = await fetch(infoUrl).then((response) => response.json());
    const perfs = await fetch(perfsUrl).then((response) => response.json());
    const activities = await fetch(activitiesUrl).then((response) =>
      response.json()
    );
    const average = await fetch(averageSessionUrl).then((response) =>
      response.json()
    );

    Datas = [
      await infos.data,
      await perfs.data,
      await activities.data.sessions,
      await average.data.sessions,
    ];
  }

  return new ProfileModel(id, Datas);
}
