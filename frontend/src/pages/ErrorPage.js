import DashboardLink from "../components/DashboardLink";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";

function ErrorPage() {
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>Sorry Wrong Page!</h1>
        </div>
      </div>
    </main>
  );
}

export default ErrorPage;
