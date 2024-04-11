import "../../sass/Components/Vertical/Vertical.scss";
import yoga from "../../assets/yoga.svg";
import musculation from "../../assets/musculation.svg";
import bicycle from "../../assets/bicycle.svg";
import swimming from "../../assets/swimming.svg";
import ActivityButton from "./ActivityButton";

export default function Vertical() {
  const activities = [
    {
      name: "yoga",
      image: yoga,
    },
    {
      name: "swimming",
      image: swimming,
    },
    {
      name: "bicycle",
      image: bicycle,
    },
    {
      name: "musculation",
      image: musculation,
    },
  ];

  return (
    <aside className="vertical">
      {activities.map((activity) => {
        const { name, image } = activity;
        return (
          <ActivityButton key={Math.random()} activity={name} icon={image} />
        );
      })}
      <p className="copyRights">Copyright, SportSee 2020</p>
    </aside>
  );
}
