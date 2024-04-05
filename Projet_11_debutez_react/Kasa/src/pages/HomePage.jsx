import "../Sass/Pages/HomePage.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MainHomePage from "../components/MainHomePage.jsx";

export default function HomePage() {
  return (
    <div className="HomePage">
      <Header />
      <MainHomePage />
      <Footer />
    </div>
  );
}
