import axios from "axios";

export const nextPage = (func, data) => {
  func((oldPage) => {
    let nextPage = oldPage + 1;
    if (nextPage > data.length - 1) nextPage = 0;
    return nextPage;
  });
};

export const prevPage = (func, data) => {
  func((oldPage) => {
    let prevPage = oldPage - 1;
    if (prevPage < 0) prevPage = data.length - 1;
    return prevPage;
  });
};

export const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

export const getSingleItem = async (id, path, func, loading) => {
  loading(true);
  try {
    const { data } = await axios.get(`/${path}?ID=${id}`);
    const [item] = await data.filter((item) => item._id === id);
    func(item);
    loading(false);
  } catch (error) {
    console.log(error);
    loading(false);
  }
};
