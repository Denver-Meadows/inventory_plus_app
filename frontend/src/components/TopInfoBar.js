import { BsBox } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";

function TopInfoBar() {
  return (
    <header className="dashboard-content-info-bar">
      <div className="user-info-logo">
        <div className="user-info-logo-icon">
          <BsBox />
        </div>
        <h2 className="user-info-logo-text">Inventory+</h2>
      </div>
      <div className="user-info">
        <Link to={"/notifications"}>
          <div className="user-info-notify user-info-item">
            <IoMdNotificationsOutline />
          </div>
        </Link>
        <Link to={"/settings"}>
          <div className="user-info-settings user-info-item">
            <FiSettings />
          </div>
        </Link>
      </div>
    </header>
  );
}

export default TopInfoBar;
