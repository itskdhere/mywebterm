import { version } from "../../../package.json";
import "./WelcomeMsg.modules.css";

const WelcomeMsg = () => {
  return (
    <header>
      <h2 className="appName">MyWebTerm</h2>
      <h4 className="description">
        My Web Term (Terminal) - An Interactive Terminal Based Portfolio Website
      </h4>
      <h5 className="appVersion">v{version}</h5>
      <h4 className="helpMsg">
        use <span className="command">help</span> for the list of all available
        commands
      </h4>
      <hr />
    </header>
  );
};

export default WelcomeMsg;
