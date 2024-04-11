import "../sass/Components//WelcomeContainer.scss";
import PropTypes from "prop-types";

export default function WelcomeContainer({ firstName }) {
  return (
    <div className="welcomeContainer">
      <div className="welcomeContainer__Msg">
        <p className="welcomeContainer__hello">
          Bonjour <span className="firstName">{firstName}</span>
        </p>
        <p className="welcomeContainer__congratulations">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>
      </div>
    </div>
  );
}

WelcomeContainer.propTypes = {
  firstName: PropTypes.string.isRequired,
};