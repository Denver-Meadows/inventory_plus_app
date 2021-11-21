import React, { useState, useEffect } from "react";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import Loading from "./Loading";
import { useGlobalContext } from "../components/context";
import { useParams, Link } from "react-router-dom";
import { getSingleItem } from "../utils";

const SingleSupplier = () => {
  const { loading } = useGlobalContext();
  const { id } = useParams();
  const [supplier, setSupplier] = useState({});

  useEffect(() => {
    getSingleItem(id, "suppliers", setSupplier);
    return () => {
      // Cleanup
    };
  }, []);

  if (loading) return <Loading />;
  if (!supplier) return <h1>''</h1>;
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>{supplier.name}</h1>
          <div className="single-result">
            <div className="single-result-info">
              <p>{`Phone: ${supplier.phone}`}</p>
              <p>{`Email: ${supplier.email}`}</p>
              <p>{`Location: ${supplier.city}, ${supplier.state}`}</p>
            </div>
            <div className="single-result-btn-container">
              <Link to={"/suppliers"}>
                <button>Go Back</button>
              </Link>
              <button>Edit</button>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleSupplier;
