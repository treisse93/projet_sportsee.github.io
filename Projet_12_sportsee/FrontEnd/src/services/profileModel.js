import carbsIcon from "../assets/carbs-icon.svg";
import caloriesIcon from "../assets/calories-icon.svg";
import proteinsIcon from "../assets/protein-icon.svg";
import fatIcon from "../assets/fat-icon.svg";

/**
 * Modèle représentant le profil utilisateur
 */
export default class ProfileModel {
  /**
   * Constructeur de la classe ProfileModel
   * @param {number} id - L'identifiant de l'utilisateur
   * @param {Array<Object>} userDatas - Les données de l'utilisateur
   */
  constructor(id, userDatas) {
    //récupération des informations perso

    this.id = id;
    this.personalsInfos = userDatas[0].userInfos;
    this.name = this.personalsInfos.lastName;
    this.firstName = this.personalsInfos.firstName;
    this.age = this.personalsInfos.age;

    //récupération du Score
    this.score = [
      {
        name: "score",
        value: userDatas[0].score
          ? userDatas[0].score * 100
          : userDatas[0].todayScore * 100,
      },
    ];
    this.score.push({ name: "score", value: 0 });

    /**
     * Méthode pour formater la valeur des calories
     * @param {number} calorieCount - Le nombre de calories à formater
     * @returns {string} - La valeur des calories formatée
     */
    const formatCalories = (calorieCount) => {
      // Convertir la valeur en nombre à virgule flottante
      const calorieValue = parseFloat(calorieCount);

      // Formater la valeur en utilisant une virgule comme séparateur de milliers
      const formattedValue = calorieValue.toLocaleString("fr-FR", {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      });

      // Remplacer les espaces insécables par des espaces normaux
      const formattedValueWithSpace = formattedValue.replace(/\u202F/g, ",");

      // Retourner la valeur formatée avec l'unité
      return formattedValueWithSpace;
    };

    //récupération des KeyData
    this.keyData = userDatas[0].keyData;
    console.log(
      "Valeur de calorieCount avant le formatage :",
      this.keyData.calorieCount
    );

    console.log("Valeur de calorieCount :", userDatas[0].keyData.calorieCount);

    this.formatedKeyData = [
      {
        type: "caloriesCount",
        value: formatCalories(this.keyData.calorieCount), // Appel de la fonction formatCalories
        icon: caloriesIcon,
        unit: "kCal",
      },
      {
        type: "proteinCount",
        value: this.keyData.proteinCount,
        icon: proteinsIcon,
        unit: "g",
      },
      {
        type: "carbohydrateCount",
        value: this.keyData.carbohydrateCount,
        icon: carbsIcon,
        unit: "g",
      },
      {
        type: "lipidCount",
        value: this.keyData.lipidCount,
        icon: fatIcon,
        unit: "g",
      },
    ];

    //récupération des Moyenne de session
    this.averageSessions = userDatas[3];
    this.sessionsAverage = [
      { day: "", sessionLength: this.averageSessions[0].sessionLength },
      { day: "L", sessionLength: this.averageSessions[0].sessionLength },
      { day: "M", sessionLength: this.averageSessions[1].sessionLength },
      { day: "M", sessionLength: this.averageSessions[2].sessionLength },
      { day: "J", sessionLength: this.averageSessions[3].sessionLength },
      { day: "V", sessionLength: this.averageSessions[4].sessionLength },
      { day: "S", sessionLength: this.averageSessions[5].sessionLength },
      { day: "D", sessionLength: this.averageSessions[6].sessionLength },
      { day: "", sessionLength: this.averageSessions[6].sessionLength },
    ];

    //récupération des info de kilo et calorie par session
    this.sessions = userDatas[2];
    this.sessionsTracking = [
      {
        day: "1",
        kilogram: this.sessions[0].kilogram,
        calories: this.sessions[0].calories,
      },
      {
        day: "2",
        kilogram: this.sessions[1].kilogram,
        calories: this.sessions[1].calories,
      },
      {
        day: "3",
        kilogram: this.sessions[2].kilogram,
        calories: this.sessions[2].calories,
      },
      {
        day: "4",
        kilogram: this.sessions[3].kilogram,
        calories: this.sessions[3].calories,
      },
      {
        day: "5",
        kilogram: this.sessions[4].kilogram,
        calories: this.sessions[4].calories,
      },
      {
        day: "6",
        kilogram: this.sessions[5].kilogram,
        calories: this.sessions[5].calories,
      },
      {
        day: "7",
        kilogram: this.sessions[6].kilogram,
        calories: this.sessions[6].calories,
      },
    ];

    //récupération des informations de Activity
    this.activities = userDatas[1];
    this.formatedActivities = [
      {
        kind: this.activities.kind[6] === "intensity" ? "Intensité" : null,
        data: this.activities.data[5].value,
      },
      {
        kind: this.activities.kind[5] === "speed" ? "Vitesse" : null,
        data: this.activities.data[4].value,
      },
      {
        kind: this.activities.kind[4] === "strength" ? "Force" : null,
        data: this.activities.data[3].value,
      },
      {
        kind: this.activities.kind[3] === "endurance" ? "Endurance" : null,
        data: this.activities.data[2].value,
      },
      {
        kind: this.activities.kind[2] === "energy" ? "Énergie" : null,
        data: this.activities.data[1].value,
      },
      {
        kind: this.activities.kind[1] === "cardio" ? "Cardio" : null,
        data: this.activities.data[0].value,
      },
    ];
  }
}
