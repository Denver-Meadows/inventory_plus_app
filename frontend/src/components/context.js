import React, { useContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [suppliers, setSuppliers] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [page, setPage] = useState(0);
  // const [pagedData, setPagedData] = useState([]);

  const paginate = (data) => {
    const itemsPerPage = 10;
    const pages = Math.ceil(data.length / itemsPerPage);

    const paginatedData = Array.from({ length: pages }, (_, index) => {
      const start = index * itemsPerPage;
      return data.slice(start, start + itemsPerPage);
    });

    return paginatedData;
  };

  const fetchSuppliers = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/suppliers");
      setSuppliers(paginate(data));
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const fetchCustomers = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/customers");
      setCustomers(paginate(data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const fetchInventory = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/inventory");
      // setInventory(paginate(data));
      setInventory(paginate(data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventory();
    fetchCustomers();
    fetchSuppliers();
    return () => {
      //cleanup
    };
  }, []);

  return (
    <AppContext.Provider
      value={{
        suppliers,
        customers,
        inventory,
        loading,
        fetchSuppliers,
        fetchCustomers,
        fetchInventory,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
