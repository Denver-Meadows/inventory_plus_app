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

export const getSingleItem = async (id, path, func) => {
  try {
    const { data } = await axios.get(`/${path}?ID=${id}`);
    const [item] = data.filter((item) => item._id === id);
    func(item);
  } catch (error) {
    console.log(error);
  }
};
