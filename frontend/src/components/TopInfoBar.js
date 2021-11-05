import { BsBox } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";

function TopInfoBar() {
  return (
    <header className="dashboard-content-info-bar">
      <div className="logo">
        <h2>
          <BsBox /> Inventory+
        </h2>
      </div>
      <div className="user-info">
        <div className="user-info-notify user-info-item">
          <IoMdNotificationsOutline />
        </div>
        <div className="user-info-login user-info-item">
          <button>login</button>
        </div>
        <div className="user-info-settings user-info-item">
          <FiSettings />
        </div>
      </div>
    </header>
  );
}

export default TopInfoBar;
