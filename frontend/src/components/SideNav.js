import { MdOutlineDashboard } from "react-icons/md";
import { BsBox, BsPeople } from "react-icons/bs";
import { BiBuildings } from "react-icons/bi";
import { Link } from "react-router-dom";

function SideNav() {
  return (
    <aside className="dashboard-content-side-nav">
      <ul className="side-nav">
        <li className="side-nav-item">
          <Link to="/">
            {" "}
            <MdOutlineDashboard /> Dashboard
          </Link>
        </li>
        <li className="side-nav-item">
          <Link to="/inventory">
            {" "}
            <BsBox /> Inventory
          </Link>
        </li>
        <li className="side-nav-item">
          <Link to="/customers">
            {" "}
            <BsPeople /> Customers
          </Link>
        </li>
        <li className="side-nav-item">
          <Link to="/suppliers">
            {" "}
            <BiBuildings /> Suppliers
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default SideNav;
