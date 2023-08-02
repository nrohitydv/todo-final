import ReactDOM from "react-dom/client";
import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";

export default function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <MadeGoal />;
  }
  return <MissedGoal />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Goal isGoal={true} />);
