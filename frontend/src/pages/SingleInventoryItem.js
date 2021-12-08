import React, { useState, useEffect, useCallback } from "react";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import Loading from "./Loading";
import { useGlobalContext } from "../context/context";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const SingleInventoryItem = () => {
  const { loading, setLoading } = useGlobalContext();
  const { id } = useParams();
  const [item, setItem] = useState({});

  const getSingleItem = useCallback(
    async (id) => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/inventory/?ID=${id}`);
        const [item] = await data.filter((item) => item._id === id);
        setItem(item);
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
        .delete(`http://localhost:3001/inventory/delete-item/${id}`)
        .then((res) => {
          if (res.status === 200) {
            window.location.href = "/inventory";
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
  if (!item) return <h1>'Sorry no items!'</h1>;
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>{item.name}</h1>
          <div className="single-result">
            <div className="single-result-info">
              <p>{`Description: ${item.description}`}</p>
              <p>{`Category: ${item.category}`}</p>
              <p>{`Quantity on Hand: ${item.qtyOnHand}`}</p>
              <p>{`Cost: $${item.cost}`}</p>
              <p>{`Sell Price: $${item.sellPrice}`}</p>
            </div>
            <div className="single-result-btn-container">
              <Link to={"/inventory"}>
                <button>Go Back</button>
              </Link>
              <Link to={`/inventory/${id}/edit`}>
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

export default SingleInventoryItem;
