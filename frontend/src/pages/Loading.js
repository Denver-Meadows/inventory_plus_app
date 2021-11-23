import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";

const Loading = () => {
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <div className="loading"></div>
        </div>
      </div>
    </main>
  );
};

export default Loading;
