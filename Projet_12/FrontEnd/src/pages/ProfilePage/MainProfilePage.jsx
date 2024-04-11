import "../../sass/Layout/MainProfilePage.scss";
import Vertical from "../../components/Vertical/Vertical";
import Dashboard from "../../components/Dashboard/Dashboard";
import PropTypes from "prop-types";

/**
 *
 * @param {*} props
 * @returns
 */

export default function MainProfile({ id }) {
  return (
    <section className="mainSection">
      <Vertical />
      <Dashboard id={id} />
    </section>
  );
}

MainProfile.propTypes = {
  id: PropTypes.string.isRequired,
};
