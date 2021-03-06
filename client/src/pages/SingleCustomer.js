import React, { useState, useEffect, useCallback } from "react";
import TopInfoBar from "../components/TopInfoBar";
import SideNav from "../components/SideNav";
import Loading from "./Loading";
import { useGlobalContext } from "../context/context";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";

const SingleCustomer = () => {
  const { loading, setLoading } = useGlobalContext();
  const { id } = useParams();
  const [customer, setCustomer] = useState({});
  const history = useHistory();

  const getSingleItem = useCallback(
    async (id) => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/customers/?ID=${id}`);
        const [item] = await data.filter((item) => item._id === id);
        setCustomer(item);
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
      axios.delete(`/customers/delete-customer/${id}`).then((res) => {
        history.push("/customers");
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
  if (!customer) return <h1>''</h1>;
  return (
    <main className="dashboard">
      <div className="single-page">
        <TopInfoBar />
        <SideNav />
        <div className="single-page-overview">
          <h1>{customer.name}</h1>
          <div className="single-result">
            <div className="single-result-info">
              <p>{`Phone: ${customer.phone}`}</p>
              <p>{`Email: ${customer.email}`}</p>
              <p>{`Location: ${customer.city}, ${customer.state}`}</p>
            </div>
            <div className="single-result-btn-container">
              <Link to={"/customers"}>
                <button>Go Back</button>
              </Link>
              <Link to={`/customers/${id}/edit`}>
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

export default SingleCustomer;
