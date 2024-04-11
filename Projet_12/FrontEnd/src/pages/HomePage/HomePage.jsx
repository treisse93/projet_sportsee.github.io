import Header from "../../components/Header/Header.jsx";
import MainHomePage from "./MainHomePage.jsx";
import "../../sass/Pages/HomePage.scss";

export default function HomePage() {
  return (
    <div className="homePageContent">
      <Header />
      <MainHomePage />
    </div>
  );
}