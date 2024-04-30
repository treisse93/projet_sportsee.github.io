import React from "react";
import Header from "../../components/Header/Header.jsx";
import "../../sass/Pages/ProfilePage.scss";
import { Navigate, useParams } from "react-router-dom";
import MainProfile from "./MainProfilePage.jsx";

/**
 * Composant représentant la page de profil utilisateur
 * @returns {JSX.Element} Composant de la page de profil utilisateur
 */

export default function ProfilePage() {
  const { id } = useParams("id");
  const AvailableIds = [12, 18];

  const isExist = AvailableIds.includes(Number(id));

  if (!isExist) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="profilePage">
      <Header />
      <MainProfile id={id} />
    </div>
  );
}

ProfilePage.propTypes = {};
