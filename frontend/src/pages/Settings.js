import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import { Link } from "react-router-dom";

function SettingsPage() {
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>Settings Feature Coming Soon!</h1>
          <Link to={"/"}>
            <button className="dashboard-btn mar-left">
              Back to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default SettingsPage;
