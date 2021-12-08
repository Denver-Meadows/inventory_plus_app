import React, { useState, useEffect, useCallback } from "react";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import Loading from "./Loading";
import { useGlobalContext } from "../context/context";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const SingleSupplier = () => {
  const { loading, setLoading } = useGlobalContext();
  const { id } = useParams();
  const [supplier, setSupplier] = useState({});

  const getSingleItem = useCallback(
    async (id) => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/suppliers/?ID=${id}`);
        const [item] = await data.filter((item) => item._id === id);
        setSupplier(item);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    },
    [setLoading]
  );

  const handleDelete = () => {
    const result = window.confirm(
      "Are you sure you want to delete this entry?"
    );
    if (result) {
      axios
        .delete(`http://localhost:3001/suppliers/delete-supplier/${id}`)
        .then((res) => {
          if (res.status === 200) {
            window.location.href = "/suppliers";
          }
        });
    }
  };

  useEffect(() => {
    getSingleItem(id);
    return () => {
      // Cleanup
    };
  }, [id, getSingleItem]);

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
              <Link to={`/suppliers/${id}/edit`}>
                <button>Edit</button>
              </Link>
              <button onClick={handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleSupplier;
