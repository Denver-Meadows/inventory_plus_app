export const nextPage = (func, data) => {
  func((oldPage) => {
    let nextPage = oldPage + 1;
    if (nextPage > data.length - 1) nextPage = 0;
    return nextPage;
  });
};

export const getNumOfCategories = (items) => {
  const cates = items.map((item) => item.category);
  return [...new Set(cates)].length;
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
